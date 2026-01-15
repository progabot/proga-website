import { notionApi } from "./client";
import { Post, PostWithContent } from "./types";
import { NotionAPI } from "notion-client";
import { PageBlock } from "notion-types";

const POSTS_DB = process.env.NOTION_POSTS_DB!;

const notionClient = new NotionAPI();

function extractPost(item: any): Post {
  return {
    id: item.id,
    title: item.properties.Title?.rich_text?.[0]?.plain_text,
    slug: item.properties.Slug?.rich_text?.[0]?.plain_text,
    cover: item.properties.Cover?.files?.[0]?.file?.url,
    shortDescription:
      item.properties["Short Description"]?.rich_text?.[0]?.plain_text,
    readTime: item.properties["Read Time"]?.number,
    createdAt: item.properties.Date?.date?.start,
    lastEditedAt: item.last_edited_time,
    category: item.properties.Category?.multi_select?.map((v: any) => v.name),
    isPublished: item.properties["Is Published"]?.checkbox ?? false,
    topImage: item.properties["Top Image"]?.files?.[0]?.file?.url,
    metaTitle: item.properties["Meta Title"]?.rich_text?.[0]?.plain_text,
    metaDescription:
      item.properties["Meta Description"]?.rich_text?.[0]?.plain_text,
    ogImage:
      item.properties["OG Image"]?.files?.[0]?.file?.url ||
      item.properties.Cover?.files?.[0]?.file?.url,
    authorName: item.properties["Author Name"]?.rich_text?.[0]?.plain_text,
    authorPosition:
      item.properties["Author Position"]?.rich_text?.[0]?.plain_text,
    authorAvatar: item.properties["Author Avatar"]?.files?.[0]?.file?.url,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const res = await notionApi.queryDatabase<PageBlock>(POSTS_DB, {
    sorts: [{ property: "Date", direction: "descending" }],
  });

  const posts: Post[] = [];

  for (const item of res.results ?? []) {
    if (!item.properties) continue;
    posts.push(extractPost(item));
  }

  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<PostWithContent | null> {
  const res = await notionApi.queryDatabase<PageBlock>(POSTS_DB, {
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });

  if (!res.results || res.results.length === 0) return null;
  const item = res.results[0];
  if (!("properties" in item)) return null;

  const post = extractPost(item);
  const content = await notionClient.getPage(post.id);

  return { ...post, content };
}
