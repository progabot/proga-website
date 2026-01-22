import { Container, Box, Typography, Divider } from "@mui/material";
import { getPostBySlug } from "@/lib/notion/posts";
import NotionPageRenderer from "@/components/blog/NotionPageRenderer";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 1200;

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

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
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <Container sx={{ py: 10 }}>
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
  );
}
