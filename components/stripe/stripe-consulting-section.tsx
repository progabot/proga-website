"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { HelpCircle, Cog } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { useTheme } from "@mui/material/styles";

export default function StripeConsultingSection() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={8} alignItems="flex-start">
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: { md: "sticky" },
              top: { md: "120px" },
              alignSelf: "flex-start",
            }}
          >
            <SectionTitle
              id="stripe-technical-consulting"
              variant="h3"
              sx={{ fontWeight: 500, mb: 2, lineHeight: 1.3 }}
            >
              Stripe technical consulting
            </SectionTitle>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: "#737373",
                lineHeight: 1.6,
              }}
            >
              Your payment code is working, but is it safe? <br />
              We help development teams build Stripe integrations that are
              secure and reliable.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <HelpCircle size={32} color="#008095" />
                What we do
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0, fontSize: "1rem" }}>
                {[
                  "Security audits of your existing Stripe integration",
                  "Code reviews to identify vulnerabilities and improvement areas",
                  "Architecture consulting for new payment features",
                  "Best practices training for your development team",
                ].map((item, i) => (
                  <Typography
                    component="li"
                    key={i}
                    variant="body1"
                    sx={{
                      color: "#737373",
                      mb: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Cog size={32} color="#008095" />
                Common issues we fix
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0, fontSize: "1rem" }}>
                {[
                  "Payment webhooks that sometimes fail",
                  "API keys in the wrong places",
                  "Error handling that breaks checkout flows",
                  "Subscription bugs that mess up billing",
                ].map((item, i) => (
                  <Typography
                    component="li"
                    key={i}
                    variant="body1"
                    sx={{
                      color: "#737373",
                      mb: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
