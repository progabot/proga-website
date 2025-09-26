export default function sitemap() {
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
  ];

  return [...staticRoutes];
}
