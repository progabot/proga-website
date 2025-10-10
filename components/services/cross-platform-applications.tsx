"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";

export default function CrossPlatformApplications() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8f9fa",
        color: "#333",
        minHeight: "500px",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
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
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              sx={{
                position: "relative",
                width: {
                  xs: "280px",
                  sm: "320px",
                  md: "420px",
                  lg: "480px",
                  xl: "560px",
                },
                height: {
                  xs: "200px",
                  sm: "240px",
                  md: "320px",
                  lg: "360px",
                  xl: "420px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                  top: { xs: "0%", md: "10%", lg: "12%", xl: "4%" },
                  left: {
                    xs: "0%",
                    sm: "-5%",
                    md: "8%",
                    lg: "20%",
                    xl: "20%",
                  },
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src="/services/tablet-with-screen.png"
                  alt="Tablet"
                  sx={{
                    width: {
                      xs: "300px",
                      sm: "380px",
                      md: "400px",
                      lg: "450px",
                      xl: "560px",
                    },
                    height: "auto",
                    display: "block",
                    transformOrigin: "center center",
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
                  }}
                />
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                sx={{
                  position: "absolute",
                  top: {
                    xs: "18%",
                    sm: "18%",
                    md: "24%",
                    lg: "24%",
                    xl: "16%",
                  },
                  left: {
                    xs: "-8%",
                    sm: "-16%",
                    md: "0%",
                    lg: "12%",
                    xl: "12%",
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
                      xs: "130px",
                      sm: "170px",
                      md: "180px",
                      lg: "210px",
                      xl: "260px",
                    },
                    height: "auto",
                    display: "block",
                    transform: "rotate(10deg)",
                    transformOrigin: "center center",
                    filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.3))",
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
                <Box component="span" sx={{ color: "#E498B7" }}>
                  [02]
                </Box>{" "}
                <Box component="span" sx={{ color: "#333" }}>
                  Cross-Platform Web Applications
                </Box>
              </SectionTitle>

              <Typography
                variant="h6"
                sx={{
                  color: "#666",
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
                  mr: { xs: 4, sm: 6, md: 2, lg: 6, xl: 8 },
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
                  color: "#666",
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
                  mr: { xs: 4, sm: 6, md: 2, lg: 6, xl: 8 },
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
                  color: "#666",
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
                  mr: { xs: 4, sm: 6, md: 2, lg: 6, xl: 8 },
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
