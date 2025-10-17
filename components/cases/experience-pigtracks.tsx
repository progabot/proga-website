"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

export default function ExperiencePigTracks() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        py: 8,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="experience-pigtracks"
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Experience PigTracks
        </SectionTitle>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: "#1a1a1a",
                color: theme.palette.text.secondary,
                height: "100%",
                border: `1px solid ${theme.palette.grey[500]}`,
              }}
            >
              <CardContent
                sx={{ p: 0, paddingBottom: "0 !important", display: "flex" }}
              >
                <Box
                  p={2}
                  pr={0}
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  alignItems="baseline"
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 6,
                        color: theme.palette.text.secondary,
                        mr: 2,
                      }}
                    >
                      Want to see how PigTracks can work for you? Book a time
                      for a personalized demo.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    component="a"
                    href="https://meetings-na2.hubspot.com/pigtracks/schedule-time-with-me?uuid=900abc10-c626-4d01-90de-cf52a5a6e293"
                    sx={{
                      backgroundColor: "#FC6604",
                      color: "black",
                      mb: 0,
                      "&:hover": { backgroundColor: "#ff7a12" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Book a call
                  </Button>
                </Box>

                <Box
                  sx={{ textAlign: "center" }}
                  display="flex"
                  justifyContent="end"
                  flexDirection="column"
                  alignItems="baseline"
                >
                  <Image
                    src="/cases/pigtracks/demo-preview.png"
                    alt="PigTracks interface"
                    width={520}
                    height={340}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                height: "100%",
                border: `1px solid ${theme.palette.grey[500]}`,
              }}
            >
              <CardContent
                sx={{ p: 0, paddingBottom: "0 !important", display: "flex" }}
              >
                <Box
                  p={2}
                  pr={0}
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  alignItems="baseline"
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ mb: 6, color: theme.palette.text.secondary }}
                    >
                      Learn more about PigTracks and how it's shaping the
                      pipeline integrity industry.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    component="a"
                    href="https://www.pigtracks.com/"
                    sx={{
                      backgroundColor: "#FC6604",
                      color: "black",
                      mb: 0,
                      "&:hover": { backgroundColor: "#ff7a12" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Visit website
                  </Button>
                </Box>

                <Box
                  sx={{ textAlign: "center" }}
                  display="flex"
                  justifyContent="end"
                  flexDirection="column"
                  alignItems="baseline"
                >
                  <Image
                    src="/cases/pigtracks/map-preview.png"
                    alt="PigTracks map"
                    width={480}
                    height={300}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
