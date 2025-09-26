"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid } from "@mui/material";
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
  { value: 17, suffix: "", label: "Employees" },
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

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest) => Math.floor(latest) + (suffix ?? "")
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function AboutStats() {
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
                      color: "#E498B7",
                      mb: 1,
                    }}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666666", fontSize: "1rem" }}
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
