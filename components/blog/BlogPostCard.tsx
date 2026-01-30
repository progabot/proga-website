"use client";

import { Box, Typography, Chip, Button, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/notion/types";
import { useState } from "react";
import { East } from "@mui/icons-material";

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      href={`/blog/${post.slug}`}
      tabIndex={0}
      style={{ textDecoration: "none", display: "block" }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          height: "auto",
          p: 0,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 0, md: 3 },
          alignItems: "stretch",
          mb: { xs: 2, md: 7 },
          overflow: "hidden",
          border: "none",
          cursor: "pointer",
          transition: "box-shadow 0.2s",
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
        }}
      >
        {post.cover && (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 490 },
              aspectRatio: "16/9",
              flexShrink: 0,
              overflow: "hidden",
              backgroundColor: "grey.50",
              borderRadius: 1,
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
              width={490}
              height={300}
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
            />
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 4 },
            py: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mt: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {post.category?.map((cat) => (
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
                    height: 33,
                  }}
                />
              ))}
              {post.readTime && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "grey.500",
                    fontWeight: 400,
                    ml: 1,
                    fontSize: 16,
                  }}
                >
                  {post.readTime} min read
                </Typography>
              )}
            </Box>
            {post.createdAt && (
              <Typography
                variant="body2"
                sx={{ color: "gray.500", fontWeight: 400, fontSize: 16 }}
              >
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {post.category?.map((cat) => (
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
                  fontSize: "0.85rem",
                  height: 33,
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            {post.readTime && (
              <Typography
                variant="body2"
                sx={{ color: "grey.500", fontWeight: 400 }}
              >
                {post.readTime} min read
              </Typography>
            )}

            {post.createdAt && (
              <Typography
                variant="body2"
                sx={{ color: "gray.500", fontWeight: 400 }}
              >
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1.3 }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray.800", lineHeight: 1.6 }}
            >
              {post.shortDescription}
            </Typography>

            {post.authorName && post.authorPosition && post.authorAvatar && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <Image
                  src={post.authorAvatar}
                  alt={post.authorName}
                  width={32}
                  height={32}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "40% center",
                    border: "1px solid #eee",
                    background: "#fff",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1,
                  }}
                >
                  {post.authorName}
                </Typography>
              </Box>
            )}
          </Box>

          <Box sx={{ mb: 4 }}>
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
              }}
              endIcon={<East sx={{ fontSize: 20 }} />}
            >
              Read article
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
