"use client";

import { Box, Container, Grid } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";
import { ProgramCard, ProgramCardData } from "./program-сard";

const PROGRAMS: ProgramCardData[] = [
  {
    logo: "/cases/miaplaza/mohs-logo.png",
    logoAlt: "MOHS Logo",
    description:
      "See the dedicated registration path we built for the MOHS program.",
    previewImage: "/cases/miaplaza/mohs-preview.png",
    previewImageMobile: "/cases/miaplaza/mohs-preview-mobile.png",
    previewAlt: "MOHS interface",
    buttonText: "Apply to MOHS",
    url: "https://mohs-enrollment.miaprep.com",
  },
  {
    logo: "/cases/miaplaza/mia-prep-plus-logo.png",
    logoAlt: "MiaPrep+ Logo",
    description:
      "Explore the unique enrollment journey configured for MiaPrep+ families.",
    previewImage: "/cases/miaplaza/mia-prep-plus-preview.png",
    previewImageMobile: "/cases/miaplaza/mia-prep-plus-preview-mobile.png",
    previewAlt: "MiaPrep+ interface",
    buttonText: "Apply to MiaPrep+",
    url: "https://miaprep-plus-enrollment.miaprep.com",
  },
];

export default function ExperienceMiaplaza() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.secondary,
        py: 8,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="experience-miaplaza"
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Experience Miaplaza
        </SectionTitle>

        <Grid container spacing={4}>
          {PROGRAMS.map((program, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <ProgramCard program={program} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
