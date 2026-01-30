"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

export default function ExperienceErudition() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        py: 8,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="experience-erudition"
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Experience Erudition
        </SectionTitle>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                height: "100%",
                border: `1px solid ${theme.palette.grey[500]}`,
                position: { xs: "relative", md: "static" },
                overflow: { xs: "hidden", md: "visible" },
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  paddingBottom: "0 !important",
                  display: "flex",
                  flexDirection: { xs: "row", md: "row" },
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  alignItems: "stretch",
                }}
              >
                <Box
                  width={{ xs: "60%", md: "auto" }}
                  p={2}
                  pr={0}
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  alignItems="baseline"
                  sx={{
                    mb: { xs: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Image
                      src="/cases/erudition/dat-logo.png"
                      alt="Erudition Dat"
                      width={180}
                      height={36}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 2, md: 4 },
                        mt: 2,
                        mr: { xs: 0, md: 2 },
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Get a fun training task in your inbox every week (no
                      course registration required).
                    </Typography>
                  </Box>

                  {/* Desktop button */}
                  <Button
                    variant="contained"
                    component="a"
                    href="https://eruditionprep.com/dat/pat/question-of-the-week"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#85CF91",
                      color: theme.palette.text.primary,
                      mb: 3,
                      display: { xs: "none", md: "inline-flex" },
                      "&:hover": { backgroundColor: "#45a049" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Play Erudition PAT
                  </Button>
                </Box>
                <Box
                  width={{ xs: "40%", md: "auto" }}
                  sx={{
                    pt: { xs: 0, md: 0 },
                    pb: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "flex-start", md: "end" },
                    alignItems: { xs: "flex-end", md: "baseline" },
                    maxHeight: { xs: 140, md: "unset" },
                  }}
                >
                  <Image
                    src={
                      isMobile
                        ? "/cases/erudition/dat-preview-mobile.png"
                        : "/cases/erudition/dat-preview.png"
                    }
                    alt="Erudition DAT mobile app"
                    width={472}
                    height={628}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    px: { xs: 2, md: 0 },
                    pb: { xs: 2, md: 0 },
                    pt: { xs: 0, md: 0 },
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Button
                    variant="contained"
                    component="a"
                    href="https://eruditionprep.com/dat/pat/question-of-the-week"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#85CF91",
                      color: theme.palette.text.primary,
                      width: "100%",
                      mt: { xs: 2, md: 0 },
                      borderRadius: 1,
                      "&:hover": { backgroundColor: "#45a049" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Play Erudition PAT
                  </Button>
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
                position: { xs: "relative", md: "static" },
                overflow: { xs: "hidden", md: "visible" },
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  paddingBottom: "0 !important",
                  display: "flex",
                  flexDirection: { xs: "row", md: "row" },
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  alignItems: "stretch",
                }}
              >
                <Box
                  width={{ xs: "60%", md: "auto" }}
                  p={2}
                  pr={0}
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  alignItems="baseline"
                  sx={{
                    mb: { xs: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Image
                      src="/cases/erudition/vocab-logo.png"
                      alt="Erudition Vocab"
                      width={180}
                      height={36}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 2, md: 8 },
                        mt: 2,
                        mr: { xs: 0, md: 2 },
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Learn advanced vocabulary with clever illustrations, word
                      origins, and memorable associations.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    component="a"
                    href="https://grewordoftheday.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#85CF91",
                      color: theme.palette.text.primary,
                      mb: 3,
                      display: { xs: "none", md: "inline-flex" },
                      "&:hover": { backgroundColor: "#45a049" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Boost your GRE Vocab
                  </Button>
                </Box>
                <Box
                  width={{ xs: "40%", md: "auto" }}
                  sx={{
                    pt: { xs: 0, md: 0 },
                    pb: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "flex-start", md: "end" },
                    alignItems: { xs: "flex-end", md: "baseline" },
                    maxHeight: { xs: 140, md: "unset" },
                  }}
                >
                  <Image
                    src={
                      isMobile
                        ? "/cases/erudition/vocab-preview-mobile.png"
                        : "/cases/erudition/vocab-preview.png"
                    }
                    alt="Erudition Vocab app"
                    width={472}
                    height={628}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    px: { xs: 2, md: 0 },
                    pb: { xs: 2, md: 0 },
                    pt: { xs: 0, md: 0 },
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Button
                    variant="contained"
                    component="a"
                    href="https://eruditionprep.com/dat/pat/question-of-the-week"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#85CF91",
                      color: theme.palette.text.primary,
                      width: "100%",
                      mt: { xs: 2, md: 0 },
                      borderRadius: 1,
                      "&:hover": { backgroundColor: "#45a049" },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translate(2px, -2px)",
                      },
                    }}
                    endIcon={<ArrowUpRight />}
                  >
                    Play Erudition PAT
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
