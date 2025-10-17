"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { fadeLeft } from "@/utils/motion-presets";
import { SectionTitle } from "@/components/shared/section-title";
import { useTheme } from "@mui/material/styles";

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
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          overflow: "visible",
          py: { xs: 4, md: 6 },
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
                  ml: 4,
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
                  ml: 4,
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
                right: { xs: "30px", sm: "80px", md: "-80px" },
                top: { xs: "20px", sm: "30px", md: "-160px" },
                bottom: { xs: "-60px", md: "-60px" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
