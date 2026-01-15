"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";

interface AnimatedPageTitleProps {
  fontSize?: {
    xs?: string;
    md?: string;
  };
  fontWeight?: number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  marginBottom?: number;
  title: string;
}

export default function AnimatedPageTitle({
  fontSize = { xs: "2.5rem", md: "3.5rem" },
  fontWeight = 700,
  color = "#000",
  textAlign = "left",
  marginBottom = 8,
  title,
}: AnimatedPageTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize,
          fontWeight,
          color,
          mb: marginBottom,
          textAlign,
        }}
      >
        {title}
      </Typography>
    </motion.div>
  );
}
