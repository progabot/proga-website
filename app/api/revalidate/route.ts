import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidateTag("notion");

  return Response.json({
    revalidated: true,
    tag: "notion",
    at: new Date().toISOString(),
  });
}
