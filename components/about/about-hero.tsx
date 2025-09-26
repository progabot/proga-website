"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpScale } from "@/utils/motion-presets";

export default function AboutHero() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ pt: 8 }}>
      <motion.div {...fadeInUpScale}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", md: "4rem" },
            fontWeight: "bold",
            mb: 4,
            color: "black",
          }}
        >
          We're
        </Typography>
      </motion.div>

      <motion.div {...fadeInUp}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "#666666",
            maxWidth: "950px",
          }}
        >
          A creative and people-first tech company. We grow talent, build
          meaningful projects, purpose-driven solutions and shape the future of
          tech. Founded in challenging times, we've built resilience,
          creativity, and care into everything we do.
        </Typography>
      </motion.div>
    </Container>
  );
}
