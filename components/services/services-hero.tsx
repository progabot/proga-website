"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { Computer, Smartphone, CreditCard } from "@mui/icons-material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { motion } from "framer-motion";
import { fadeInUpScale, fadeInUp } from "@/utils/motion-presets";

export default function ServicesHero() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <motion.div {...fadeInUpScale}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                mb: 4,
                color: theme.palette.background.default,
              }}
            >
              Services we provide
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.grey[600],
                fontSize: "1.25rem",
                lineHeight: 1.6,
                maxWidth: "800px",
              }}
            >
              We build websites and apps that bring you real customers and grow
              your business.
              <br /> When you win, we win.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
