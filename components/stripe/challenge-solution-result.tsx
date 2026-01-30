"use client";

import { Box, Grid, Typography, Container, IconButton } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { motion } from "framer-motion";
import { fadeLeft, fadeLeftDelayed, fadeRight } from "@/utils/motion-presets";
import { SectionTitle } from "@/components/shared/section-title";
import { useTheme } from "@mui/material/styles";

interface TextPart {
  bold: string;
}

interface ChallangeSolutionResultProps {
  challengeTitle?: string;
  challengeText: string | (string | TextPart)[];
  solutionTitle?: string;
  solutionText: string | (string | TextPart)[];
  results: { number: string; text: string | (string | TextPart)[] }[];
  testimonial?: {
    text: string;
    author?: string;
    position?: string;
    links?: { url: string; icon?: React.ReactNode }[];
  };
  testimonialOffset?: {
    top?: string | number | { [key: string]: string | number };
    bottom?: string | number | { [key: string]: string | number };
  };
}

export default function ChallangeSolutionResult({
  challengeTitle = "Challenge",
  challengeText,
  solutionTitle = "Solution",
  solutionText,
  results,
  testimonial,
  testimonialOffset,
}: ChallangeSolutionResultProps) {
  const renderRichText = (parts: (string | { bold: string })[]) => {
    return parts.map((part, index) =>
      typeof part === "string" ? (
        <span key={index} style={{ whiteSpace: "pre-line" }}>
          {part}
        </span>
      ) : (
        <strong
          key={index}
          style={{ fontWeight: 700, color: "#FFFFFF", whiteSpace: "pre-line" }}
        >
          {part.bold}
        </strong>
      )
    );
  };
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#111",
        color: theme.palette.common.white,
        py: { xs: 6, md: 8 },
        pb: { xs: 28, sm: 32, md: 12 },
        position: "relative",
        overflow: "visible",
      }}
    >
      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{ position: "relative" }}
      >
        <Grid container columnSpacing={18} rowSpacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Challenge */}
            <motion.div {...fadeLeft}>
              <SectionTitle
                id="challenges"
                variant="h5"
                sx={{
                  fontWeight: 500,
                  fontSize: "2rem",
                  mb: 4,

                  color: theme.palette.common.white,
                }}
              >
                {challengeTitle}
              </SectionTitle>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: theme.palette.common.white,
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                {Array.isArray(challengeText)
                  ? renderRichText(challengeText)
                  : challengeText}
              </Typography>
            </motion.div>

            {/* Solution */}
            <motion.div {...fadeLeftDelayed}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  fontSize: "2rem",
                  mb: 4,
                  color: theme.palette.common.white,
                }}
              >
                {solutionTitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: theme.palette.common.white,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                {Array.isArray(solutionText)
                  ? renderRichText(solutionText)
                  : solutionText}
              </Typography>
            </motion.div>
          </Grid>

          {/* Result */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div {...fadeRight}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  fontSize: "2rem",
                  mb: 3,
                  color: theme.palette.common.white,
                }}
              >
                Result
              </Typography>

              {results.map((res, index) => (
                <Box key={index} sx={{ display: "flex", mb: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#EFBED2",
                      fontSize: "1.25rem",
                      mr: 2,
                      minWidth: "40px",
                    }}
                  >
                    [{res.number}]
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: theme.palette.common.white,
                      lineHeight: 1.6,
                    }}
                  >
                    {Array.isArray(res.text)
                      ? renderRichText(res.text)
                      : res.text}
                  </Typography>
                </Box>
              ))}
            </motion.div>
            {testimonial && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: testimonialOffset?.bottom ?? {
                    xs: "auto",
                    md: "-180px",
                  },
                  right: { xs: "auto", md: "2%", lg: "-4%" },
                  left: { xs: "50%", md: "auto" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  width: { xs: "96%", md: "50%" },
                  maxWidth: 580,
                  zIndex: 3,
                  display: "flex",
                  alignItems: "flex-start",
                  mb: { xs: "-100px", sm: "-140px", md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 658 321"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <path
                      d="M8 1H575.502C577.453 1 579.316 1.81465 580.641 3.24707L655.139 83.793C656.335 85.0865 657 86.7839 657 88.5459V313C657 316.866 653.866 320 650 320H87.4736C85.535 320 83.6831 319.196 82.3594 317.779L2.88574 232.743C1.6741 231.447 1.00007 229.738 1 227.964V8C1 4.13401 4.13401 1 8 1Z"
                      fill="#1A1A1A"
                      stroke="#D8D8D8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: { xs: 3, sm: 4 },
                    color: theme.palette.common.white,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: {
                          xs: "2rem",
                          sm: "3rem",
                          md: "2.5rem",
                          lg: "3.5rem",
                        },
                        color: theme.palette.primary.main,
                        fontWeight: 400,
                        lineHeight: 1,
                        mt: { xs: -1, sm: -2, md: -2, lg: -1 },
                        mr: 1,
                      }}
                    >
                      "
                    </Typography>

                    <Typography
                      sx={{
                        lineHeight: 1.6,
                        mb: 1,
                        fontWeight: 400,
                        mr: 2,
                        fontSize: { xs: "0.8rem", md: "0.875rem", lg: "1rem" },
                        color: theme.palette.common.white,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {testimonial.text}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: { xs: 1, md: 2 },
                      ml: 4,
                    }}
                  >
                    {testimonial.links && testimonial.links.length > 0 && (
                      <IconButton
                        component="a"
                        href={testimonial.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: theme.palette.grey[800],
                          width: { xs: 28, sm: 32 },
                          height: { xs: 28, sm: 32 },
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: theme.palette.grey[700],
                          },
                        }}
                      >
                        <Box
                          component="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          sx={{
                            width: { xs: 12, sm: 14, md: 20, lg: 24 },
                            height: { xs: 12, sm: 14, md: 20, lg: 24 },
                          }}
                          fill="none"
                        >
                          <path
                            d="M21.25 14C21.25 12.6076 20.6965 11.2727 19.7119 10.2881C18.7273 9.30352 17.3924 8.75 16 8.75C14.6076 8.75 13.2727 9.30352 12.2881 10.2881C11.3035 11.2727 10.75 12.6076 10.75 14V20.25H13.25V14C13.25 13.2707 13.5399 12.5714 14.0557 12.0557C14.5714 11.5399 15.2707 11.25 16 11.25C16.7293 11.25 17.4286 11.5399 17.9443 12.0557C18.4601 12.5714 18.75 13.2707 18.75 14V20.25H21.25V14ZM22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1182 13.3506 16.8838 13.1162C16.6494 12.8818 16.3315 12.75 16 12.75C15.6685 12.75 15.3506 12.8818 15.1162 13.1162C14.8818 13.3506 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V14C9.25 12.2098 9.96069 10.4924 11.2266 9.22656C12.4924 7.96069 14.2098 7.25 16 7.25C17.7902 7.25 19.5076 7.96069 20.7734 9.22656C22.0393 10.4924 22.75 12.2098 22.75 14V21Z"
                            fill={theme.palette.background.paper}
                          />
                          <path
                            d="M6 8.25C6.41421 8.25 6.75 8.58579 6.75 9V21C6.75 21.4142 6.41421 21.75 6 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V9C1.25 8.58579 1.58579 8.25 2 8.25H6ZM2.75 20.25H5.25V9.75H2.75V20.25Z"
                            fill={theme.palette.background.paper}
                          />
                          <path
                            d="M5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25C4.69036 5.25 5.25 4.69036 5.25 4ZM6.75 4C6.75 5.51878 5.51878 6.75 4 6.75C2.48122 6.75 1.25 5.51878 1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.51878 1.25 6.75 2.48122 6.75 4Z"
                            fill={theme.palette.background.paper}
                          />
                        </Box>
                      </IconButton>
                    )}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.common.white,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          lineHeight: 1.2,
                        }}
                      >
                        {testimonial.author}
                      </Typography>
                      {testimonial.position && (
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.8,
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                            color: theme.palette.common.white,
                          }}
                        >
                          {testimonial.position}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
