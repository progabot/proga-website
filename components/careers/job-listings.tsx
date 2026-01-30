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
  Modal,
  Paper,
  IconButton,
} from "@mui/material";
import { Earth, Clock, X, Copy, Check, Mail } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";
import { useState } from "react";

const jobs = [
  {
    title: "Full Stack .Net & React Engineer",
    type: "Full-time",
    category: "Development",
  },
  {
    title: "React Native Engineer",
    type: "Full-time / On demand",
    category: "Development",
    hot: true,
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

const VACANCIES_EMAIL = "vacancies@proga.tech";

export default function JobListings() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(VACANCIES_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
                    <Box sx={{ display: "flex", gap: 1 }}>

                    {job.hot && (
                      <Chip
                        label="🔥"
                        size="small"
                        sx={{
                          borderRadius: "8px",
                          backgroundColor: "#7A2D2D",
                          color: "#fff",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          padding: "6px 4px",
                          height: "auto",
                          mb: 3,
                        }}
                      />
                    )}

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
                    onClick={handleOpenModal}
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

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              backgroundColor: theme.palette.grey[900],
              color: theme.palette.text.secondary,
              p: 4,
              borderRadius: 2,
              maxWidth: 500,
              mx: 2,
              position: "relative",
              outline: "none",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.text.secondary,
              }}
            >
              <X size={20} />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                pr: 4,
              }}
            >
              <Mail size={24} color={theme.palette.primary.main} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                }}
              >
                Get in Touch
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                color: theme.palette.text.secondary,
              }}
            >
              Thank you for your interest in joining our team! We'd love to hear from you.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                color: theme.palette.text.secondary,
              }}
            >
              Please send your resume and cover letter to:
            </Typography>

            <Box
              onClick={handleCopyEmail}
              sx={{
                backgroundColor: theme.palette.grey[800],
                borderRadius: 1,
                p: 2,
                mb: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: theme.palette.grey[700],
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                }}
              >
                {VACANCIES_EMAIL}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  position: "relative",
                }}
              >
                <Copy
                  size={16}
                  color={theme.palette.text.secondary}
                  style={{
                    position: "absolute",
                    opacity: copied ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
                <Check
                  size={16}
                  color={theme.palette.text.secondary}
                  style={{
                    position: "absolute",
                    opacity: copied ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontStyle: "italic",
              }}
            >
              We'll get back to you as soon as possible!
            </Typography>
          </Paper>
        </Modal>
      </Container>
    </Box>
  );
}
