import { getAllPosts } from "@/lib/notion/posts";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const staticRoutes = [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/cases`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/stripe`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.6,
    },
  ];

  const posts = (await getAllPosts()).filter((post) => post?.isPublished);
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastEditedAt,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
