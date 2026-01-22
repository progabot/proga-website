"use client";

import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import Image from "next/image";
import { useSectionLink } from "@/components/shared/useSectionLink";
import { useMemo } from "react";

export default function CeoQuote() {
  const theme = useTheme();
  const scrollToTitle = useSectionLink("ceo-quote");
  
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 0, md: 3 },
          pl: { md: 0 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              sx={{ 
                position: "relative",
              }}
            >
              <Image
                src="/about/solomiia-and-markiyan-on-conference.jpg"
                alt="CEO of Proga Tech"
                width={725}
                height={725}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              
              <Box
                sx={{
                  position: "absolute",
                  pointerEvents: "auto",
                  top: "34%",
                  left: "34.5%",
                  width: "34%",
                  height: "4%",
                  backgroundColor: alpha("#fff", 0.3),
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                  backgroundColor: alpha("#fff", 0.5),
                    opacity: 1,
                    transform: "scale(1.05)",
                    "& .easter-egg-popup": {
                      opacity: 1,
                      transform: {xs: "scale(1) translate(-50%, 50%)", md: "scale(1) translate(-50%, 30%)", lg: "scale(1) translate(-50%, 40%)"},
                      pointerEvents: "auto",
                    },
                  },
                }}
              >
                <Box
                  className="easter-egg-popup"
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "scale(0.9) translate(-50%, 10px)",
                    width: { xs: "175px", sm: "300px", md: "250px", lg: "300px" },
                    height: { xs: "175px", sm: "300px", md: "250px", lg: "300px" },
                    p: 0,
                    border: `3px solid ${theme.palette.primary.main}`,
                    borderRadius: "16px",
                    background: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    opacity: 0,
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    zIndex: 10,
                    pointerEvents: "none",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/about/solomiia-on-conference-2019.jpg"
                    alt="Behind the scenes with CEO"
                    width={300}
                    height={300}
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      opacity: 1
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      px: 1,
                      py: 0.5,
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    about 10 years ago
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ px: { xs: 2, md: 0 } }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                aspectRatio: "690 / 561",
                width: "100%",
                maxWidth: { xs: "none", sm: 600, md: 640, lg: 700, xl: 800 },
                top: { xs: 0, sm: 20, md: 40, lg: 50 },
                color: "#fff",
                mb: { xs: 6, md: 10 },
                mr: { xs: -3, md: 0 },
                [theme.breakpoints.between("md", "lg")]: {
                  top: 40,
                },
              })}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 660,
                  height: {
                    xs: 522,
                    sm: 550,
                    md: 420,
                    lg: 500,
                    xl: 585,
                  },
                  zIndex: 1,
                }}
              >
                <svg
                  viewBox="0 0 690 561"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M40.8748 533.486L113.321 471.078L128.268 456.703C129.758 455.27 131.746 454.469 133.813 454.469H593.2H651C655.418 454.469 659 450.887 659 446.469V397.786V92.5954C659 90.3402 658.048 88.1898 656.379 86.6736L564.346 3.07821C562.874 1.74091 560.956 1 558.967 1H66.8H9C4.58172 1 1 4.58172 1 9V57.6837V519.259V551.827C1 558.786 9.27054 562.427 14.4027 557.727L40.8748 533.486Z"
                    stroke="#D8D8D8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  color: theme.palette.text.secondary,
                  pt: { xs: 6, sm: 6, md: 4, lg: 4, xl: 8 },
                  pr: { xs: 8, sm: 10, md: 6, lg: 12, xl: 24 },
                  pb: { xs: 2, sm: 1, md: 0, lg: 2, xl: 2 },
                  pl: { xs: 6, sm: 6, md: 4, lg: 6, xl: 10 },
                  gap: { xs: 2, sm: 3 },
                }}
              >
                <Typography
                  id="ceo-quote"
                  onClick={scrollToTitle}
                  variant="body1"
                  sx={(theme) => ({
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1rem",
                      lg: "1.25rem",
                    },
                    lineHeight: 1.6,
                    position: "relative",
                    color: theme.palette.text.secondary,
                    textAlign: "left",
                    cursor: "pointer",

                    "&::before": {
                      content: '"\\201C"',
                      color: theme.palette.primary.main,
                      position: "absolute",
                      left: { xs: -26, sm: -24, md: -24, lg: -32 },
                      top: -8,
                      fontSize: {
                        xs: "3rem",
                        md: "3rem",
                        lg: "3.5rem",
                      },
                      lineHeight: 1,
                    },
                  })}
                >
                  For me personally, staying in Ukraine wasn't just a business
                  decision. It was about proving that innovation doesn't pause
                  for adversity. What drives me most is watching our team
                  flourish and knowing that each project we complete contributes
                  to something bigger than just business.
                </Typography>
                <Stack spacing={0}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.secondary,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1rem",
                        lg: "1.25rem",
                      },
                    }}
                  >
                    Solomiia
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1rem",
                        lg: "1.25rem",
                      },
                      color: theme.palette.text.secondary,
                    }}
                  >
                    CEO & Founder
                  </Typography>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/sdemkiv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 1,
                      backgroundColor: theme.palette.grey[800],
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      p: 0,
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
                        width: 24,
                        height: 24,
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
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
