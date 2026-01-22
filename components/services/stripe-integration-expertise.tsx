"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  useTheme,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { ArrowRight } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function StripeIntegrationExpertise() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        minHeight: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/services/glare.png"
        alt="Glow effect"
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "500px",
          opacity: 0.5,
          pointerEvents: "none",
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
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SectionTitle
                id="stripe-integration"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.35rem",
                    xl: "1.5rem",
                  },
                  fontWeight: 500,
                  mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 4 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  [03]
                </Box>{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Stripe Payment Integration Expertise
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
                  lineHeight: 1.6,
                  mb: 2,
                  maxWidth: "600px",
                  ml: { xs: 5, sm: 5, md: 5, lg: 7, xl: 7 },
                  mr: { xs: 4, sm: 6, md: 0, lg: 2, xl: 2 },
                }}
              >
                We specialize in integrating Stripe payments into websites and
                apps. Whether you need a simple checkout, subscriptions, or
                complex payment flows, our team can handle it.
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
                  lineHeight: 1.6,
                  mb: 2,
                  maxWidth: "600px",
                  ml: { xs: 5, sm: 5, md: 5, lg: 7, xl: 7 },
                  mr: { xs: 4, sm: 6, md: 2, lg: 2, xl: 2 },
                }}
              >
                We guide you on best practices, implement solutions for any
                level of complexity, and provide ongoing support if needed. With
                our expertise, your payment system will be reliable and secure.
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
                  lineHeight: 1.6,
                  ml: { xs: 5, sm: 5, md: 5, lg: 7, xl: 7 },
                  mr: { xs: 6, sm: 6, md: 0, lg: 2, xl: 2 },
                }}
              >
                Our expertise is backed by client feedback.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  ml: { xs: 5, sm: 5, md: 5, lg: 7, xl: 7 },
                  mt: 4,
                }}
              >
                <Button
                  variant="outlined"
                  href="/services/stripe"
                  endIcon={<ArrowRight />}
                  sx={{
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.text.secondary,
                    textTransform: "none",
                    fontSize: {
                      xs: "0.75rem",
                      md: "1rem",
                    },
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: theme.palette.grey[800],
                      borderColor: theme.palette.text.secondary,
                    },
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease",
                    },
                    "&:hover .MuiButton-endIcon": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Check it
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
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
                component="img"
                src="/services/stripe-network.png"
                alt="Stripe Integration"
                sx={{
                  width: {
                    xs: "280px",
                    sm: "360px",
                    md: "420px",
                    lg: "520px",
                    xl: "600px",
                  },
                  height: "auto",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
