"use client";

import { Box, Typography, Chip, Button, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/notion/types";
import { East } from "@mui/icons-material";
import { useState } from "react";
import { theme } from "@/theme/mui-theme";

interface BlogPostMiniCardProps {
  post: Post;
}

export default function BlogPostMiniCard({ post }: BlogPostMiniCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      href={`/blog/${post.slug}`}
      tabIndex={0}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 2,
          overflow: "hidden",
          border: `1px solid ${theme.palette.grey[200]}`,
          cursor: "pointer",
          "&:hover .blog-cover-img, &:focus-visible .blog-cover-img": {
            transform: "scale(1.05)",
          },
          "&:hover .read-article-link, &:focus-visible .read-article-link": {
            textDecoration: "underline",
          },
          "&:hover .read-article-link .MuiButton-endIcon, &:focus-visible .read-article-link .MuiButton-endIcon":
            {
              transform: "translate(2px, 0)",
            },
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: 1,
          height: "100%",
        }}
      >
        {post.cover && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              minHeight: 200,
              maxHeight: "100%",
              overflow: "hidden",
              backgroundColor: "grey.50",
              borderRadius: 0,
              flexShrink: 0,
            }}
          >
            {!imgLoaded && (
              <Skeleton
                variant="rectangular"
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  zIndex: 1,
                }}
              />
            )}
            <Image
              className="blog-cover-img"
              src={post.cover}
              alt={post.title}
              fill
              placeholder="empty"
              quality={100}
              unoptimized={true}
              onLoad={() => setImgLoaded(true)}
              style={{
                objectFit: "cover",
                display: "block",
                width: "100%",
                height: "100%",
                opacity: imgLoaded ? 1 : 0,
                transition: "opacity 0.3s ease, transform 0.5s ease",
              }}
              sizes="(max-width: 600px) 100vw, 360px"
            />
          </Box>
        )}

        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1.5,
            flex: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            {post.category?.slice(0, 2).map((cat) => (
              <Chip
                key={cat}
                label={cat}
                size="small"
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "primary.main",
                  backgroundColor: "transparent",
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: 14,
                  height: 28,
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 1,
            }}
          >
            {post.readTime && (
              <Typography
                variant="body2"
                sx={{ color: "grey.500", fontWeight: 400, fontSize: 14 }}
              >
                {post.readTime} min read
              </Typography>
            )}
            {post.createdAt && (
              <Typography
                variant="body2"
                sx={{ color: "gray.500", fontWeight: 400, fontSize: 14 }}
              >
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            )}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              lineHeight: 1.3,
              mb: 0.5,
            }}
          >
            {post.title}
          </Typography>
          <Button
            className="read-article-link"
            disableRipple
            tabIndex={-1}
            sx={{
              backgroundColor: "transparent",
              color: "text.primary",
              px: 0,
              py: 0,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              justifyContent: "flex-start",
              mb: 0,
              boxShadow: "none",
              transition:
                "color 0.2s ease, text-decoration 0.2s ease, transform 0.3s ease",
              textDecoration: "none",
              pointerEvents: "none",
              "& .MuiButton-endIcon": {
                transition: "transform 0.2s ease",
              },
              mt: "auto",
            }}
            endIcon={<East sx={{ fontSize: 20 }} />}
          >
            Read article
          </Button>
        </Box>
      </Box>
    </Link>
  );
}
