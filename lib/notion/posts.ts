import { notionApi } from "./client";
import { Post, PostWithContent } from "./types";
import { NotionAPI } from "notion-client";
import { PageBlock } from "notion-types";
import { defaultMapImageUrl } from "notion-utils";

const POSTS_DB = process.env.NOTION_POSTS_DB!;

const notionClient = new NotionAPI();

function extractPost(item: any): Post {
  // Manually add parent_table: block because notionApi does not provide it
  // but all pages are blocks, so we can safely add it here
  const getFileUrl = (fileObj: any) => {
    const blockContext = {
      ...item,
      parent_table: "block",
    };

    const file = fileObj?.files?.[0];
    if (!file) return undefined;
    // Notion returns either 'file' (S3) or 'external' (direct link)
    const rawUrl = file.type === "file" ? file.file?.url : file.external?.url;
    return defaultMapImageUrl(rawUrl, blockContext);
  };

  return {
    id: item.id,
    title: item.properties.Title?.rich_text?.[0]?.plain_text,
    slug: item.properties.Slug?.rich_text?.[0]?.plain_text,
    cover: getFileUrl(item.properties.Cover),
    shortDescription:
      item.properties["Short Description"]?.rich_text?.[0]?.plain_text,
    readTime: item.properties["Read Time"]?.number,
    createdAt: item.properties.Date?.date?.start,
    lastEditedAt: item.last_edited_time,
    category: item.properties.Category?.multi_select?.map((v: any) => v.name),
    isPublished: item.properties["Is Published"]?.checkbox ?? false,
    topImage: getFileUrl(item.properties["Top Image"]),
    metaTitle: item.properties["Meta Title"]?.rich_text?.[0]?.plain_text,
    metaDescription:
      item.properties["Meta Description"]?.rich_text?.[0]?.plain_text,
    ogImage:
      getFileUrl(item.properties["OG Image"]) ||
      getFileUrl(item.properties.Cover),
    authorName: item.properties["Author Name"]?.rich_text?.[0]?.plain_text,
    authorPosition:
      item.properties["Author Position"]?.rich_text?.[0]?.plain_text,
    authorAvatar: getFileUrl(item.properties["Author Avatar"]),
    bannerTitle: item.properties["Banner Title"]?.rich_text?.[0]?.plain_text,
    bannerSubtitle:
      item.properties["Banner Subtitle"]?.rich_text?.[0]?.plain_text,
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
  slug: string,
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

export async function getPostsByQuery(
  options: {
    filter?: any;
    sorts?: any[];
    page_size?: number;
  } = {},
): Promise<Post[]> {
  const res = await notionApi.queryDatabase<PageBlock>(POSTS_DB, {
    ...options,
  });
  const posts: Post[] = [];

  for (const item of res.results ?? []) {
    if (!item.properties) continue;
    posts.push(extractPost(item));
  }

  return posts;
}
