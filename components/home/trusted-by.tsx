"use client"

import Image from "next/image"
import Link from "next/link"
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Stack } from "@mui/material"
import { NorthEast } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const caseStudies = [
  {
    id: "pigtracks",
    name: "PigTracks",
    logo: "/pigtracks-logo.svg", // Added logo for each case study
    image: "/pigtracks-dashboard-mockup.png", // Updated to use new mockup images
    tags: ["Cloud Platform", "Pipeline Integrity", "Data Management"], // Updated tags to match screenshot
    link: "/cases/pigtracks",
  },
  {
    id: "stridist",
    name: "Stridist",
    logo: "/stridist-logo.svg",
    image: "/stridist-app-mockup.png",
    tags: ["Healthcare", "Fitness", "Coaching"],
    link: "/cases/stridist",
  },
  {
    id: "erudition",
    name: "Erudition",
    logo: "/erudition-logo.svg",
    image: "/erudition-platform-mockup.png",
    tags: ["Education", "E-learning"], // Updated tags to match screenshot
    link: "/cases/erudition",
  },
]

export default function TrustedBy() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      {/* Changed background to white */}
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2rem" }, fontWeight: 600, color: "#000" }}>
            We are trusted by
          </Typography>
          <Button
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
            }}
          >
            Learn more
          </Button>
        </Box>

        <Grid container spacing={3}>
          {/* Reduced spacing to match layout */}
          {caseStudies.map((study) => (
            <Grid item size={{xs:12,md:4}} key={study.id}>
              <Card
                sx={{
                  boxShadow: "none", // Removed shadow for cleaner look
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease",
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
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.name} interface`}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "auto" }} // Updated objectFit to cover for 100% width coverage
                    />
                  </Box>
                </Box>

                <CardContent sx={{ px: 0, py: 3, pt: 0 }}>
                  <Typography variant="h5" sx={{ fontSize: "1.25rem", fontWeight: 600, mb: 2, color: "#000" }}>
                    {study.name}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {study.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: "#f8d7da", // Pink background for chips
                          color: "#721c24",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          border: "none",
                        }}
                      />
                    ))}
                  </Stack>

                  <Link href={study.link} style={{ textDecoration: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#000",
                          fontWeight: 500,
                          "&:hover": {
                            color: "#666",
                          },
                        }}
                      >
                        See full case study
                      </Typography>
                      <NorthEast sx={{ fontSize: 16, color: "#000" }} />
                    </Box>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
