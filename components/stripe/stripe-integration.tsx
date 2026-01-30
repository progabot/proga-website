"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { fadeLeft } from "@/utils/motion-presets";
import { SectionTitle } from "@/components/shared/section-title";
import { useTheme } from "@mui/material/styles";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function StripeIntegration() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#1A1A1A",
        color: theme.palette.common.white,
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "420px", sm: "480px", md: "260px" },
        mt: { xs: 4, md: 6 },
      }}
    >
      <Box
        component="img"
        src="/services/glare.png"
        alt="Glow effect"
        sx={{
          position: "absolute",
          bottom: "-25%",
          right: "-15%",
          width: "600px",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{
          position: "relative",
          zIndex: 2,
          overflow: "visible",
          py: { xs: 4, md: 6 },
          px: 0,
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={0}
          sx={{
            position: "relative",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ pr: { md: 4 } }}>
            <motion.div {...fadeLeft}>
              <SectionTitle
                id="stripe-payment"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.common.white,
                }}
              >
                We specialize in integrating Stripe payments into websites and
                apps.
              </SectionTitle>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.common.white,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  maxWidth: "500px",
                }}
              >
                Ready to see how we do it? Let’s dive into some of our most
                exciting projects.
              </Typography>
            </motion.div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              overflow: "visible",
            }}
          >
            <Box
              component="img"
              src="/services/stripe-network.png"
              alt="Stripe Integration"
              sx={{
                width: { xs: "300px", sm: "400px", md: "400px", lg: "500px" },
                height: "auto",
                position: "absolute",
                top: { xs: "20px", sm: "30px", md: "-160px" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
