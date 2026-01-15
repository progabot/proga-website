"use client";

import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function FullCycleWebDevelopment() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        minHeight: "500px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/services/glare.png"
        alt="Glow effect"
        sx={{
          position: "absolute",
          top: "-25%",
          right: "-10%",
          width: "500px",
          height: "auto",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0.6,
        }}
      />
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          wrap="nowrap"
        >
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SectionTitle
                id="full-cycle-web-dev"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.35rem",
                    xl: "1.5rem",
                  },
                  fontWeight: 500,
                  mb: { xs: 3, sm: 4, md: 3, lg: 4, xl: 4 },
                  maxWidth: { xs: 500, sm: 600, md: 600, lg: 600 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  [01]
                </Box>
                {"  "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Full-Cycle AI-Powered Web Development
                </Box>
              </SectionTitle>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[200],
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: { xs: 2, md: 3, lg: 3, xl: 3 },
                  justifyContent: "flex-end",
                  maxWidth: {
                    xs: "280px",
                    sm: "460px",
                    md: "600px",
                    lg: "600px",
                    xl: "650px",
                  },
                  ml: { xs: 5, sm: 5, md: 5, lg: 6, xl: 6 },
                  mr: { xs: 2, sm: 6, md: 0, lg: 2, xl: 2 },
                }}
              >
                We design, build, and launch digital products from start to
                finish: strategy, design, user flows, development, testing,
                optimization, and deployment.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[200],
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  fontWeight: 400,
                  lineHeight: 1.7,
                  justifyContent: "flex-end",
                  maxWidth: {
                    xs: "280px",
                    sm: "420px",
                    md: "600px",
                    lg: "600px",
                    xl: "650px",
                  },
                  ml: { xs: 5, sm: 5, md: 5, lg: 6, xl: 6 },
                  mr: { xs: 2, sm: 6, md: 0, lg: 2, xl: 2 },
                }}
              >
                Every line of code is owned by our team. AI works alongside us
                as a powerful accelerator; it catches mistakes early, automates
                the boring tasks, and keeps everything running faster and
                smoother. You're hiring a team of developers who know how to use
                AI natively and that means your software solution gets built
                faster, works better, and delivers more value to your business.
              </Typography>
            </motion.div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              overflow: "visible",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: {
                    xs: "80%",
                    sm: "80%",
                    md: "160%",
                    lg: "120%",
                    xl: "120%",
                  },
                  maxWidth: {
                    xs: "400px",
                    sm: "500px",
                    md: "500px",
                    lg: "800px",
                    xl: "800px",
                  },

                  transform: {
                    xs: "translateY(125px) translateX(20px)",
                    sm: "translateY(120px) translateX(-10px) ",
                    md: "translateY(260px) translateX(-150px) ",
                    lg: "translateY(280px) translateX(-140px) ",
                    xl: "translateY(230px) translateX(-100px) ",
                  },

                  mt: { xs: -20, sm: -20, md: -60, lg: -60, xl: -50 },
                  mb: { xs: 6, sm: 6 },
                }}
              >
                <Box
                  component="img"
                  src="/services/laptop.png"
                  alt="Laptop"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
