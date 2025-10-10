"use client";

import { Box, Typography, Chip, Grid } from "@mui/material";
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
  return (
    <Box sx={{ py: 7 }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeInUpScale}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#000",
              }}
            >
              {title}
            </Typography>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                color: "#1A1A1A",
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
                        border: " 2px solid #008095",
                        color: "#000000",
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
                      backgroundColor: "#EFBED2",
                      borderRadius: "8px",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div {...scaleIn}>
        <Box>
          <Image
            src={image}
            alt={`${title} cover image`}
            width={1320}
            height={530}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
