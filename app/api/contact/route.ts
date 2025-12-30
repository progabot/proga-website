import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { logError } from "@/utils/logError";

const NOTION_VERSION = process.env.NOTION_VERSION || "2025-09-03";

function getNotionHeaders(extra?: Record<string, string>) {
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error("Missing NOTION_TOKEN");
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    ...extra,
  };
}

async function isFileUploaded(fileUploadId: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.notion.com/v1/file_uploads/${fileUploadId}`,
      {
        method: "GET",
        headers: getNotionHeaders(),
      }
    );

    if (!res.ok) {
      logError(`[contact] Notion GET file_upload failed`, {
        status: res.status,
        statusText: res.statusText,
        fileUploadId,
      });
      return false;
    }

    const json = (await res.json()) as { status?: string };
    return json.status === "uploaded";
  } catch (err) {
    logError(`[contact] Notion GET file_upload threw`, { fileUploadId, err });
    return false;
  }
}

async function uploadFile(file: File): Promise<{ name: string; id: string }> {
  // Step 1: Create upload
  const createRes = await fetch("https://api.notion.com/v1/file_uploads", {
    method: "POST",
    headers: getNotionHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({
      mode: "single_part",
      filename: file.name,
      content_type: file.type,
    }),
  });

  if (!createRes.ok) {
    const body = await createRes.text().catch(() => "");
    logError(`[contact] Notion create upload failed`, {
      status: createRes.status,
      statusText: createRes.statusText,
      filename: file.name,
      contentType: file.type,
      body,
    });
    throw new Error("Notion create upload failed");
  }

  const upload = (await createRes.json()) as { id: string };
  const fileUploadId = upload.id;

  // Step 2: Send file
  const sendForm = new FormData();
  sendForm.append("file", file);

  const sendRes = await fetch(
    `https://api.notion.com/v1/file_uploads/${fileUploadId}/send`,
    {
      method: "POST",
      headers: getNotionHeaders(),
      body: sendForm,
    }
  );

  if (!sendRes.ok) {
    const body = await sendRes.text().catch(() => "");
    logError(`[contact] Notion send upload failed`, {
      status: sendRes.status,
      statusText: sendRes.statusText,
      fileUploadId,
      filename: file.name,
      contentType: file.type,
      size: file.size,
      body,
    });
    throw new Error("Notion send upload failed");
  }

  const sendJson = (await sendRes.json()) as {
    status?: string;
  };

  // Step 3: Wait for upload to be ready
  if (sendJson?.status !== "uploading") {
    const ready = await isFileUploaded(fileUploadId);
    if (!ready) {
      logError(`[contact] Upload not ready (pending)`, {
        fileUploadId,
        filename: file.name,
      });
      throw new Error("Upload not ready");
    }
  }

  return { name: file.name, id: fileUploadId };
}

export async function POST(req: Request) {
  try {
    const databaseId = process.env.NOTION_CONTACTS_DB_ID;
    if (!databaseId) throw new Error("Missing NOTION_CONTACTS_DB_ID");

    const form = await req.formData();

    const name = String(form.get("name")).trim();
    const email = String(form.get("email")).trim();
    const subject = String(form.get("subject")).trim();
    const message = String(form.get("message")).trim();

    const single = form.get("file");
    const multiple = form.getAll("files");

    const files: File[] = [];
    if (single instanceof File) files.push(single);
    for (const f of multiple) if (f instanceof File) files.push(f);

    const parse = contactFormSchema.safeParse({
      name,
      email,
      subject,
      message,
      files,
    });
    if (!parse.success) {
      logError(`[contact] Validation error`, parse.error.flatten());
      return NextResponse.json(
        { error: "Validation error", details: parse.error.flatten() },
        { status: 400 }
      );
    }

    let fileUploadRefs: Array<{ name: string; id: string }> = [];
    try {
      fileUploadRefs = await Promise.all(files.map((file) => uploadFile(file)));
    } catch (err) {
      logError(`[contact] One or more file uploads failed`, err);
      throw err;
    }

    const pageRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: getNotionHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Name: { title: [{ text: { content: name } }] },
          Email: { email },
          Subject: { rich_text: [{ text: { content: subject } }] },
          Message: { rich_text: [{ text: { content: message } }] },
          Attachment: {
            files: fileUploadRefs.map(({ name, id }) => ({
              name,
              type: "file_upload",
              file_upload: { id },
            })),
          },
        },
      }),
    });

    if (!pageRes.ok) {
      const txt = await pageRes.text();
      logError(`[contact] Notion page create failed`, {
        status: pageRes.status,
        statusText: pageRes.statusText,
        body: txt,
      });
      return NextResponse.json(
        { error: "Notion page create failed", details: txt },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    logError(`[contact] Unhandled error`, err);
    return NextResponse.json(
      { error: "Unhandled error", details: String(err?.message ?? err) },
      { status: 500 }
    );
  }
}
