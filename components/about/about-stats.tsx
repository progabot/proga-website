"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import {
  motion,
  Variants,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 3, suffix: "", label: "Years doing our best" },
  { value: 20, suffix: "+", label: "Employees" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function AboutStats() {
  const theme = useTheme();
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 5 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: "auto" }} key={index}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    pl: index !== 0 ? { xs: 0, md: 2 } : 0,
                    pr: { xs: 2, md: 10 },
                    borderRight: {
                      xs:
                        index % 2 === 0 && index !== stats.length - 1
                          ? "2px solid #F0F0F0"
                          : "none",
                      md:
                        index !== stats.length - 1
                          ? "2px solid #F0F0F0"
                          : "none",
                    },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      fontWeight: "bold",
                      color: theme.palette.primary[700],
                      mb: 1,
                      minWidth: { xs: "4rem", md: "6rem" },
                      display: "inline-block",
                    }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.grey[700], fontSize: "1rem" }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
