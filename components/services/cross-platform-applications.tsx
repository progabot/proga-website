"use client";

import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function CrossPlatformApplications() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        minHeight: "500px",
        overflow: "hidden",
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          wrap="nowrap"
        >
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: { xs: 6, md: 0 },
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "350px",
                  sm: "420px",
                  md: "500px",
                  lg: "580px",
                  xl: "680px",
                },
                height: {
                  xs: "250px",
                  sm: "300px",
                  md: "350px",
                  lg: "400px",
                  xl: "480px",
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                sx={{
                  position: "absolute",
                  top: { xs: "10%", md: "15%" },
                  left: "0",
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src="/services/tablet-with-screen.png"
                  alt="Tablet"
                  sx={{
                    width: {
                      xs: "280px",
                      sm: "340px",
                      md: "380px",
                      lg: "420px",
                      xl: "500px",
                    },
                    height: "auto",
                    display: "block",
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
                  }}
                />
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                sx={{
                  position: "absolute",
                  bottom: { xs: "5%", md: "8%" },
                  left: {
                    xs: "160px",
                    sm: "200px",
                    md: "240px",
                    lg: "280px",
                    xl: "340px",
                  },
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src="/services/phone-with-screen.png"
                  alt="Phone"
                  sx={{
                    width: {
                      xs: "140px",
                      sm: "170px",
                      md: "190px",
                      lg: "220px",
                      xl: "260px",
                    },
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                id="cross-platform-app"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem ",
                    lg: "1.35rem",
                    xl: "1.5rem",
                  },
                  fontWeight: 500,
                  mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 6 },
                  ml: { xs: 1, sm: 2, md: 2, lg: 4, xl: 4 },
                  maxWidth: { xs: 500, md: 600, lg: 600, xl: 600 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary[700] }}
                >
                  [02]
                </Box>{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.text.primary }}
                >
                  Cross-Platform Web Applications
                </Box>
              </SectionTitle>

              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.grey[700],
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: { xs: 1, sm: 2, md: 2, lg: 3, xl: 3 },
                  ml: { xs: 6, sm: 8, md: 8, lg: 11, xl: 11 },
                }}
              >
                We build modern, responsive websites that look and feel great on
                any device. With one codebase, your site can become a mobile
                app: complete with push notifications, sharing features, and
                smooth performance.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[700],
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: { xs: 1, sm: 2, md: 2, lg: 3, xl: 3 },
                  ml: { xs: 6, sm: 8, md: 8, lg: 11, xl: 11 },
                }}
              >
                This approach cuts costs, speeds up delivery, and gives you
                flexibility: one product that works everywhere. Later, if you
                need advanced native features, we can extend your app without
                starting from scratch.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[700],
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  fontWeight: 400,
                  lineHeight: 1.6,

                  ml: { xs: 6, sm: 8, md: 8, lg: 11, xl: 11 },
                }}
              >
                Our team has deep expertise in tools like Capacitor and
                cross-platform frameworks, so you get a high-quality website and
                a mobile app powered by the same code.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
