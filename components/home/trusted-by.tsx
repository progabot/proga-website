"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  ButtonProps,
  SxProps,
} from "@mui/material";
import { East, NorthEast } from "@mui/icons-material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

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
  const LearnMoreButton = ({ sx }: { sx: SxProps }) => (
    <Button
      component={Link}
      href="/cases"
      variant="outlined"
      sx={{
        borderColor: "#000",
        color: "#000",
        borderRadius: 2,
        px: 3,
        py: 1,
        textTransform: "none",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "#f9f9f9",
          borderColor: "#000",
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
      component="section"
      sx={{ pb: { xs: 8, md: 12 }, backgroundColor: "#fff" }}
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
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 600,
              color: "#000",
            }}
          >
            We are trusted by
          </Typography>
          <LearnMoreButton sx={{ display: { xs: "none", md: "block" } }} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {caseStudies.map((study) => (
            <Box key={study.id}>
              <Link
                href={study.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    boxShadow: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      "& .case-study-image": {
                        transform: "scale(1.03)",
                      },
                      "& .case-study-link .MuiSvgIcon-root": {
                        transform: "translate(2px, 0)",
                      },
                      "& .case-study-link .case-study-text": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  <Box sx={{ pb: 2, flex: 1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        borderRadius: 2,
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                    >
                      <Image
                        src={study.image}
                        alt={`${study.name} interface`}
                        width={500}
                        height={500}
                        className="case-study-image"
                        style={{
                          width: "100%",
                          height: "auto",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ px: 0, py: 3, pt: 0 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 2,
                        color: "#000",
                      }}
                    >
                      {study.name}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={0.25}
                      sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}
                    >
                      {study.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: "#EFBED2",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            border: "none",
                          }}
                        />
                      ))}
                    </Stack>

                    <Box
                      className="case-study-link"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Typography
                        variant="body2"
                        className="case-study-text"
                        sx={{
                          color: "#000",
                          fontWeight: 500,
                          transition: "text-decoration 0.2s ease",
                        }}
                      >
                        See full case study
                      </Typography>
                      <East
                        sx={{
                          fontSize: 16,
                          color: "#000",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          ))}

          <LearnMoreButton sx={{ display: { xs: "block", md: "none" } }} />
        </Box>
      </Container>
    </Box>
  );
}
