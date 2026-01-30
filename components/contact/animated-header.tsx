"use client";

import { Box, Typography, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUpScale } from "@/utils/motion-presets";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function AnimatedHeader() {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 2 }}>
      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        disableGutters
        sx={{ px: 0 }}
      >
        <motion.div {...fadeInUpScale}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: "bold",
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            Let's talk!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: theme.palette.grey[800],
              maxWidth: "1000px",
            }}
          >
            Whether you have a groundbreaking project in mind, a question about
            our services, interest in joining our team, or just want to say
            hello, we're eager to hear from you.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
