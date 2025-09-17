import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function WhyPink() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
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
            Why pink?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#434343",
              mb: 3,
            }}
          >
            Our logo has a story that perfectly captures our beginning. During
            one of the many blackouts, when the lights went out and nothing
            worked, Solomiia&apos;s friend was sketching our logo by
            candlelightin a simple notebook. She had just one pink marker with
            her, and that&apos;s what she used to draw the frame around our
            design.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#434343",
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
              color: "#434343",
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
              src="/why-pink.png"
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
