const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = process.env.NOTION_VERSION || "2022-06-28";
const NOTION_TOKEN = process.env.NOTION_TOKEN!;

if (!NOTION_TOKEN) {
  throw new Error("Missing NOTION_TOKEN");
}

type FetchOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
  fetchOptions?: RequestInit;
};

type NotionQueryResponse<T> = {
  object: "list";
  results: T[];
  has_more: boolean;
  next_cursor: string | null;
};

async function request<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const defaultHeaders = {
    Authorization: `Bearer ${NOTION_TOKEN}`,
    "Notion-Version": NOTION_VERSION,
  };
  const headers =
    options.headers !== undefined
      ? { ...defaultHeaders, ...options.headers }
      : { ...defaultHeaders, "Content-Type": "application/json" };

  const body =
    options.body instanceof FormData
      ? options.body
      : options.body
      ? JSON.stringify(options.body)
      : undefined;

  const res = await fetch(`${NOTION_API}${path}`, {
    method: options.method ?? (options.body ? "POST" : "GET"),
    headers,
    body,
    next: { revalidate: 3600, tags: ["notion"] },
    ...options.fetchOptions,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API error ${res.status}: ${text}`);
  }

  return res.json();
}

export const notionApi = {
  queryDatabase<T>(databaseId: string, body?: any) {
    return request<NotionQueryResponse<T>>(
      `/data_sources/${databaseId}/query`,
      {
        method: "POST",
        body,
      }
    );
  },

  retrievePage<T>(pageId: string) {
    return request<T>(`/pages/${pageId}`);
  },

  getFileUpload<T>(fileUploadId: string) {
    return request<T>(`/file_uploads/${fileUploadId}`);
  },

  async createFileUpload(file: File) {
    return request<{ id: string }>(`/file_uploads`, {
      method: "POST",
      body: {
        mode: "single_part",
        filename: file.name,
        content_type: file.type,
      },
    });
  },

  async sendFileUpload(fileUploadId: string, file: File) {
    const form = new FormData();
    form.append("file", file);

    return request<{ status?: string }>(`/file_uploads/${fileUploadId}/send`, {
      method: "POST",
      headers: {}, // override to let fetch set the correct multipart boundary
      body: form,
    });
  },

  async createContactPage(databaseId: string, properties: any) {
    return request<any>(`/pages`, {
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties,
      },
    });
  },
};
