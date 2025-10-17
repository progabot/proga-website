"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  SxProps,
  useTheme,
} from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { FEATURED_CASE_STUDIES } from "@/utils/cases";
import CaseStudyCard from "../cases/case-study-card";
import { SectionTitle } from "@/components/shared/section-title";

const caseStudies = [
  {
    id: "pigtracks",
    name: "PigTracks",
    logo: "/pigtracks-logo.svg",
    image: "/cases/pigtracks/cover-image-short.png",
    tags: ["Cloud Platform", "Pipeline Integrity", "Data Management"],
    link: "/cases/pigtracks",
  },
  {
    id: "stridist",
    name: "Stridist",
    logo: "/stridist-logo.svg",
    image: "/cases/stridist/cover-image-short.png",
    tags: ["Healthcare", "Fitness", "Coaching"],
    link: "/cases/stridist",
  },
  {
    id: "erudition",
    name: "Erudition",
    logo: "/erudition-logo.svg",
    image: "/cases/erudition/cover-image-short.png",
    tags: ["Education", "E-learning"],
    link: "/cases/erudition",
  },
];

export default function TrustedBy() {
  const theme = useTheme();
  const LearnMoreButton = ({ sx }: { sx: SxProps }) => (
    <Button
      component={Link}
      href="/cases"
      variant="outlined"
      sx={{
        borderColor: theme.palette.background.default,
        color: theme.palette.background.default,
        borderRadius: 2,
        px: 3,
        py: 1,
        textTransform: "none",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: theme.palette.grey[50],
          borderColor: theme.palette.background.default,
        },
        textAlign: "center",
        ...sx,
      }}
    >
      View more cases
    </Button>
  );

  return (
    <Box
      id="next-section"
      component="section"
      sx={{
        pb: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <SectionTitle
            id="trusted-by"
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 600,
              color: theme.palette.background.default,
            }}
          >
            We are trusted by
          </SectionTitle>
          <LearnMoreButton sx={{ display: { xs: "none", md: "block" } }} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {FEATURED_CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.title}
              logo={caseStudy.logo}
              title={caseStudy.title}
              description={caseStudy.description}
              tags={caseStudy.tags}
              mockupImage={caseStudy.coverImageShort}
              mockupAlt={caseStudy.coverImageShort}
              href={caseStudy.href}
              small
            />
          ))}

          <LearnMoreButton sx={{ display: { xs: "block", md: "none" } }} />
        </Box>
      </Container>
    </Box>
  );
}
