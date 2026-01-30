import { Container, Box, Typography, Divider } from "@mui/material";
import { getPostBySlug, getPostsByQuery } from "@/lib/notion/posts";
import NotionPageRenderer from "@/components/blog/NotionPageRenderer";
import { Metadata } from "next";
import Image from "next/image";
import ProjectCTA from "@/components/shared/project-cta";
import { notFound } from "next/navigation";
import BlogPostMiniCard from "@/components/blog/BlogPostMiniCard";
import { Grid } from "@mui/material";
import { Post } from "@/lib/notion/types";

export const revalidate = 1200;

interface BlogPostPageProps {
  // In Next.js 15+, dynamic route parameters are asynchronous.
  // We must await 'params' before accessing properties like 'slug'.
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const title = post.metaTitle;
  const description = post.metaDescription;

  const images = post.ogImage ? [post.ogImage] : [];

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: post.createdAt,
      images: images.map((url) => ({
        url: url,
        width: 1200,
        height: 630,
        alt: title,
      })),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const showBanner = post.bannerTitle && post.bannerSubtitle;

  const currentPostDate = post.createdAt;
  // This query find neighbor posts based on the current post's date
  // Run two parallel queries: one for older posts, one for newer posts
  const [prevPosts, nextPosts] = await Promise.all([
    getPostsByQuery({
      filter: {
        and: [
          { property: "Is Published", checkbox: { equals: true } },
          { property: "Date", date: { before: currentPostDate } },
          {
            property: "Slug",
            rich_text: { does_not_equal: resolvedParams.slug },
          },
        ],
      },
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 2, // Fetch 2 in case we need a fallback
    }),

    // Fetch newer posts
    getPostsByQuery({
      filter: {
        and: [
          { property: "Date", date: { on_or_after: currentPostDate } }, // Not strictly after current
          { property: "Is Published", checkbox: { equals: true } },
          {
            property: "Slug",
            rich_text: { does_not_equal: resolvedParams.slug },
          },
        ],
      },
      sorts: [{ property: "Date", direction: "ascending" }],
      page_size: 2, // Fetch 2 in case we need a fallback
    }),
  ]);

  // Fallback logic to select the best 2 posts
  let otherPosts: Post[] = [];

  if (prevPosts.length > 0 && nextPosts.length > 0) {
    // Primary scenario: 1 previous + 1 next
    otherPosts = [prevPosts[0], nextPosts[0]];
  } else if (nextPosts.length === 0) {
    // No newer posts (we are at the latest post) -> show 2 previous posts
    otherPosts = prevPosts.slice(0, 2);
  } else if (prevPosts.length === 0) {
    // No older posts (we are at the first post) -> show 2 next posts
    otherPosts = nextPosts.slice(0, 2);
  }

  return (
    <>
      <Container sx={{ pt: 10, pb: showBanner ? 4 : 10 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            color: "text.primary",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.8rem" },
            textAlign: "left",
          }}
        >
          {post.title}
        </Typography>
        {post.shortDescription && (
          <Typography
            variant="body2"
            sx={{
              color: "grey.700",
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: "left",
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            {post.shortDescription}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            gap: 1,
          }}
        >
          {post.readTime && (
            <Typography
              variant="body2"
              sx={{
                color: "grey.700",
              }}
            >
              {`${post.readTime} min read`}
            </Typography>
          )}
          {post.readTime && post.createdAt && (
            <Typography
              variant="body2"
              sx={{
                color: "grey.700",
                mx: 0.5,
              }}
            >
              &middot;
            </Typography>
          )}
          {post.createdAt && (
            <Typography
              variant="body2"
              sx={{
                color: "grey.700",
              }}
            >
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          )}
        </Box>
        {post.topImage && (
          <Box
            sx={{
              width: "100%",
              position: "relative",
              aspectRatio: "16/9",
              mb: 5,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src={post.topImage}
              alt={post.title}
              fill
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </Box>
        )}
        <NotionPageRenderer
          recordMap={post.content}
          afterContent={
            post.authorName && post.authorPosition && post.authorAvatar ? (
              <>
                <Divider sx={{ my: { xs: 0, md: 6 }, mb: { xs: 3, md: 6 } }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={post.authorAvatar}
                      alt={post.authorName}
                      fill
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 600px) 40px, 50px"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.95rem", md: "1.1rem" },
                      }}
                    >
                      Written by {post.authorName},
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "grey.700",
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                      }}
                    >
                      {post.authorPosition} at Proga Tech
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : null
          }
        />
      </Container>
      {showBanner && (
        <ProjectCTA title={post.bannerTitle!} subtitle={post.bannerSubtitle!} />
      )}

      {otherPosts.length === 2 && (
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", color: "text.primary", mb: 6 }}
          >
            Check out other posts
          </Typography>
          <Grid container spacing={4}>
            {otherPosts.map((other) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={other.slug}
                sx={{ height: "auto" }}
              >
                <BlogPostMiniCard post={other} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
