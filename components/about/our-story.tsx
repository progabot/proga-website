import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function OurStory() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Photo collage */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={"/team.jpg"}
            alt={`PGT Instagram`}
            width={762}
            height={813}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Story content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              mb: 4,
              color: "black",
            }}
          >
            Our story
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#666666",
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
              color: "#666666",
              mb: 3,
            }}
          >
            Founded by <strong>Solomia Demkiv</strong>, founder and visionary,
            we brought together a team that believes in the power of technology
            to create light even in the darkest times.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#666666",
              mb: 3,
            }}
          >
            Our first external hiring experience was tough and disappointing.
            But it taught us what truly matters: people, culture, and shared
            values. That's why we focus on growing talent from within while
            staying open to rare gems who align with our mission.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#666666",
            }}
          >
            Since 2022, we've grown 16 team members and continue to expand with
            purpose.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
