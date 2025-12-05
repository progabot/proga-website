"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpScale, scaleIn } from "@/utils/motion-presets";

export default function StripeHero() {
  return (
    <Container
      maxWidth={PAGE_CONTAINER_MAX_WIDTH}
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <motion.div {...fadeInUpScale}>
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              maxWidth: "1120px",
            }}
          >
            Our experience with Stripe
          </Typography>
        </Box>
      </motion.div>

      <motion.div {...fadeInUp}>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "900px",
            color: "#5C5C5C",
            fontSize: "1.25rem",
          }}
        >
          We specialize in creating custom web solutions, and our partnership
          with Stripe has been key to developing powerful payment systems. We
          help clients build and manage flexible subscription models that drive
          business growth.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "900px",
            color: "#5C5C5C",
            fontSize: "1.25rem",
          }}
        >
          Ready to see how we do it? Let's dive into some of our most exciting
          projects.
        </Typography>
      </motion.div>
    </Container>
  );
}
