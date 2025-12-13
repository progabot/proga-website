"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";

export default function OurStory() {
  const theme = useTheme();
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 4 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Photo collage */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={"/about/team-collage.jpg"}
            alt={`Proga Team`}
            width={762}
            height={813}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Story content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionTitle
            id="our-story"
            variant="h3"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              mb: 4,
              color: theme.palette.background.default,
            }}
          >
            Our story
          </SectionTitle>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: theme.palette.grey[800],
              mb: 3,
            }}
          >
            Proga Tech is a Ukraine-based company born during the war, a time of
            chaos and uncertainty. While the world was standing still, we chose
            to begin.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: theme.palette.grey[800],
              mb: 3,
            }}
          >
            Founded by <strong>Solomiia Demkiv</strong>, we brought together a
            team that believes in the power of technology to create light even
            in the darkest times.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: theme.palette.grey[800],
              mb: 3,
            }}
          >
            Our initial external hiring experience was a learning moment that
            showed us what truly matters: people, culture, and shared values.
            That’s why we focus on growing talent from within while staying open
            to rare gems who align with our mission.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: theme.palette.grey[800],
            }}
          >
            Since 2022, we’ve grown 20+ team members and continue to expand with
            purpose.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
