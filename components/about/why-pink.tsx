"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";

export default function WhyPink() {
  const theme = useTheme();
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionTitle
            id="why-pink"
            variant="h3"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              mb: 4,
              color: theme.palette.background.default,
            }}
          >
            Why pink?
          </SectionTitle>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: theme.palette.grey[800],
              mb: 3,
            }}
          >
            Our logo has a story that perfectly captures our beginning. During
            one of the many blackouts, when the lights went out and nothing
            worked, Solomiia&apos;s friend{" "}
            <Box
              component="span"
              sx={{
                position: "relative",
                backgroundColor: theme.palette.primary[300],
                padding: "4px 6px",
                borderRadius: "4px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
                "&:hover .easter-egg": {
                  backgroundColor: theme.palette.primary.main,
                  opacity: 1,
                  transform: "scale(1)",
                  pointerEvents: "auto",
                },
              }}
            >
              was sketching our logo by candlelight in a notebook
              <Box
                className="easter-egg"
                component="span"
                sx={{
                  position: "absolute",
                  top: "120%",
                  left: "50%",
                  p: 0,
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  opacity: 0,
                  transform: "scale(0.9)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  zIndex: 10,
                  display: "inline-block",
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/about/easter-egg.png"
                  alt="Original sketch of ProgaTech logo"
                  width={200}
                  height={200}
                  style={{ borderRadius: "12px", display: "block" }}
                />
              </Box>
            </Box>
            . She had just one pink marker with her, and that&apos;s what she
            used to draw the frame around our design.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: theme.palette.grey[800],
              mb: 3,
            }}
          >
            When we saw it, we knew immediately: this was it. The color felt so
            right that we never considered changing it.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: theme.palette.grey[800],
            }}
          >
            But when digitizing the logo, we didn&apos;t settle for just any
            pink. We matched it to a sunrise photo from our mountain trip. That
            hopeful glow breaking through darkness felt like the perfect
            metaphor for building something beautiful during challenging times.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 550,
              height: 0,
              paddingTop: "94.9%",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/about/why-pink.png"
              alt="Proga Tech Logo on rock"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
