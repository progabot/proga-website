import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { logError } from "@/utils/logError";
import { notionApi } from "@/lib/notion/client";

async function isFileUploaded(fileUploadId: string): Promise<boolean> {
  try {
    const json = await notionApi.getFileUpload<{ status?: string }>(
      fileUploadId
    );
    return json.status === "uploaded";
  } catch (err) {
    logError(`[contact] Notion GET file_upload threw`, { fileUploadId, err });
    return false;
  }
}

async function uploadFile(file: File): Promise<{ name: string; id: string }> {
  // Step 1: Create upload
  const upload = await notionApi.createFileUpload(file);
  const fileUploadId = upload.id;

  // Step 2: Send file
  const sendJson = await notionApi.sendFileUpload(fileUploadId, file);

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

    try {
      await notionApi.createContactPage(databaseId, {
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
      });
    } catch (err: any) {
      logError(`[contact] Notion page create failed`, err);
      return NextResponse.json(
        {
          error: "Notion page create failed",
          details: String(err?.message ?? err),
        },
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
