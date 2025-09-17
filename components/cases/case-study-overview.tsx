import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

interface CaseStudyOverviewProps {
  children: React.ReactNode;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export default function CaseStudyOverview({
  children,
  image,
}: CaseStudyOverviewProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 8,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Overview
            </Typography>
            {children}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                overflow: { lg: "visible" },
                display: "flex",
                alignItems: { lg: "center" },
                "& img": {
                  height: { xs: "auto", lg: "100%" },
                  width: { xs: "100%", md: "1000px" },
                  objectFit: { lg: "contain" },
                },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 500}
                height={image.height || 600}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
