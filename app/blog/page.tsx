import { Container, Typography, Box } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Rocket } from "lucide-react";
import { getAllPosts } from "@/lib/notion/posts";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import AnimatedPageTitle from "@/components/shared/animated-page-title";

export const revalidate = 3600;

export const metadata = {
  title: "Proga Blog",
  description:
    "A collection of technical deep-dives and engineering challenges. Read our latest thoughts on building AI-powered, high-performance software.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { includeDrafts?: string };
}) {
  const includeDrafts = searchParams?.includeDrafts === "true";
  let posts = await getAllPosts();

  if (!includeDrafts) {
    posts = posts.filter((post) => post?.isPublished);
  }

  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 10 }}>
      <AnimatedPageTitle
        fontSize={{ xs: "2.5rem", md: "3.5rem" }}
        fontWeight={700}
        textAlign="left"
        marginBottom={8}
        title="Our Blog"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "@keyframes fadeInUp": {
            from: {
              opacity: 0,
              transform: "translateY(30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        {posts.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: { xs: 6, md: 10 },
              px: { xs: 2, md: 6 },
              color: "text.secondary",
              borderRadius: 4,
              background: "linear-gradient(135deg, #F7F7F9 70%, #EFBED2 110%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              animation: "fadeIn 1s",
              "@keyframes fadeIn": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "none" },
              },
            }}
          >
            <HourglassEmptyIcon
              sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
            >
              No posts yet
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420 }}>
              Stay tuned — new articles will appear here soon!
            </Typography>
          </Box>
        ) : (
          <>
            {posts.map((post, index) => (
              <Box
                key={post.id}
                sx={{
                  animation: "fadeInUp 0.6s ease-out",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                <BlogPostCard post={post} />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Container>
  );
}
