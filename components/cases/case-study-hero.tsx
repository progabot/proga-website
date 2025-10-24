"use client";

import { Box, Typography, Chip, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { motion } from "framer-motion";
import { fadeInUpScale, fadeInUp, scaleIn } from "@/utils/motion-presets";

interface CaseStudyHeroProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function CaseStudyHero({
  title,
  description,
  tags,
  image,
}: CaseStudyHeroProps) {
  const theme = useTheme();
  return (
    <Box sx={{ pt: 7, pb: 3 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeInUpScale}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              {title}
            </Typography>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 3, md: 2 }}>
          <motion.div {...fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                color: theme.palette.text.primary,
              }}
            >
              {description}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
              {tags.map((tag, index) => {
                if (tag === "UA") {
                  return (
                    <Chip
                      key={index}
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Image
                            src="/ua-icon.png"
                            alt="UA Flag"
                            width={21}
                            height={14}
                            style={{ borderRadius: "3px" }}
                          />
                          <span>UA</span>
                        </Box>
                      }
                      sx={{
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        border: `2px solid ${theme.palette.secondary.main}`,
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                      }}
                    />
                  );
                }

                return (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "8px",
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>
        </Grid>

        <Grid size={12} order={{ xs: 2, md: 3 }}>
          <motion.div {...scaleIn}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: 180,
                  sm: 280,
                  md: 530,
                },
                borderRadius: {
                  xs: "8px",
                  md: "24px",
                },
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={`${title} cover image`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
