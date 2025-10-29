"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { Earth, Clock } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import Link from "next/link";
import { SectionTitle } from "@/components/shared/section-title";

const jobs = [
  {
    title: "Full Stack .Net & React Engineer",
    type: "Full-time",
    category: "Development",
  },
  {
    title: "Full Stack Node.js & Next.js Engineer",
    type: "Full-time",
    category: "Development",
  },
  {
    title: "DevOps Engineer",
    type: "On demand",
    category: "Operations",
  },
  {
    title: "QA Automation Engineer",
    type: "Full-time",
    category: "QA & Testing",
  },
];

export default function JobListings() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="join-our-team"
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            mb: 6,
            color: theme.palette.text.secondary,
          }}
        >
          Join our team
        </SectionTitle>

        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  backgroundColor: theme.palette.grey[900],
                  border: `1px solid ${theme.palette.grey[900]}`,
                  borderRadius: 1,
                  height: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.grey[800],
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0, color: "#aaa" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      ></Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          mb: 3,
                        }}
                      >
                        <Clock size={24} color={theme.palette.primary.main} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                          }}
                        >
                          {job.type}
                        </Typography>
                      </Box>
                    </Box>

                    <Chip
                      label={job.category}
                      size="small"
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#074450",
                        color: theme.palette.text.secondary,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        padding: "6px 4px",
                        height: "auto",
                        mb: 3,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      mb: 4,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {job.title}
                  </Typography>

                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.background.paper,
                      color: theme.palette.text.secondary,
                      borderRadius: 1,
                      px: 3,
                      py: 1.5,
                      width: "fit-content",
                      "&:hover": {
                        borderColor: theme.palette.text.secondary,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Apply now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
