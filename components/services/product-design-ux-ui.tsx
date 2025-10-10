"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";

export default function ProductDesignUXUI() {
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
            >
              <Box
                component="img"
                src="/services/tablet-wireframes.png"
                alt="Tablet with wireframes"
                sx={{
                  width: {
                    xs: "300px",
                    sm: "380px",
                    md: "440px",
                    lg: "560px",
                    xl: "600px",
                  },
                  height: "auto",
                  display: "block",
                  filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.2))",
                }}
              />
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
                id="product-design-ux-ui"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.35rem",
                    xl: "1.5rem",
                  },
                  fontWeight: 500,
                  mb: { xs: 2, md: 3, lg: 4, xl: 4 },
                }}
              >
                <Box component="span" sx={{ color: "#E498B7" }}>
                  [04]
                </Box>{" "}
                <Box component="span" sx={{ color: "#333" }}>
                  End-to-End Product Design & UX/UI
                </Box>
              </SectionTitle>

              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: {
                    xs: "0.825rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  lineHeight: 1.6,
                  mb: 2,
                  maxWidth: "600px",
                  ml: { xs: 5, sm: 6, md: 6, lg: 7, xl: 7 },
                  mr: { xs: 4, sm: 6, md: 0, lg: 4, xl: 6 },
                }}
              >
                We create products that people love to use. From research and
                strategy to wireframes, visual design, and interactive
                prototypes, every step focuses on your users and your business
                goals.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: {
                    xs: "0.825rem",
                    sm: "0.825rem",
                    md: "0.9rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                  },
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  ml: { xs: 5, sm: 6, md: 6, lg: 7, xl: 7 },
                  mr: { xs: 4, sm: 6, md: 0, lg: 4, xl: 6 },
                }}
              >
                The result is digital products that feel intuitive and engaging,
                guiding users to achieve their goals while delivering real value
                for your business.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
