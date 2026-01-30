"use client";

import InstagramPreview from "@/components/shared/InstagramPreview";
import { SectionTitle } from "@/components/shared/section-title";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MeetOrysia() {
  const theme = useTheme();
  const CENSORED_QUOTE = "Дзуськи, не дамся!";
  const ORIGIGNAL_QUOTE = "Курва, не дамсі!";

  const [quote, setQuote] = useState(CENSORED_QUOTE);
  const [_, setTapCount] = useState(0);
  function handleTap() {
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setQuote(ORIGIGNAL_QUOTE);
      }
      return newCount;
    });
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth={"lg"} sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle
              id="meet-orysia"
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 5,
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: theme.palette.text.secondary,
              }}
            >
              Meet Orysia —
            </SectionTitle>

            <Typography variant="body1" mb={2} color={theme.palette.grey[200]}>
              our close friend, partner, and the person who taught us never to
              give up.
            </Typography>

            <Typography variant="body1" mb={2} color={theme.palette.grey[200]}>
              For us, she is a symbol of unbroken spirit and inner strength. The
              war took a lot from Orysia, but it could not break her
              determination and drive to do good. Today, using her athletic
              mindset and expertise, she is doing tremendous social work,
              focused on helping veterans.
            </Typography>

            <Typography variant="body1" mb={4} color={theme.palette.grey[200]}>
              Orysia organizes numerous programs in Lviv for the physical and
              mental rehabilitation of servicemen and women, supporting people
              in tough situations and inspiring everyone with her unwavering
              example.
            </Typography>

            <InstagramPreview
              mode="dark"
              previewImage="/cases/probig/orysia-instagram-preview.png"
              title="Check her page on Instagram"
              buttonText="Check it out"
              instagramLink="https://www.instagram.com/orysia_demianiuk/"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/cases/probig/orysia-with-mia-and-markiyan.jpg"
              alt="Orysia with Mia and Markiyan"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 2, mb: 5 }}
            />

            <Typography variant="body1" mb={2} color={theme.palette.grey[200]}>
              Her motto from professional sports,
            </Typography>
            <Box
              onClick={handleTap}
              position="relative"
              width={470}
              maxWidth={"100%"}
              height={149}
              sx={{
                display: "inline-block",
              }}
            >
              <svg
                width="470"
                height="149"
                viewBox="0 0 470 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: "100%" }}
              >
                <path
                  d="M25.5 135L52.784 117.32C53.2513 117.017 53.7963 116.856 54.3532 116.856H92.8679H422.6H466.615C468.208 116.856 469.5 115.564 469.5 113.97V102.311V48.7526C469.5 47.9891 469.197 47.2566 468.658 46.7158L423.446 1.34861C422.904 0.805354 422.169 0.5 421.402 0.5H47.4H3.38547C1.79187 0.5 0.5 1.79187 0.5 3.38547V15.0445V133.48V145.316C0.5 147.578 2.98372 148.96 4.90594 147.768L25.5 135Z"
                  fill="#1A1A1A"
                  stroke="#5C5C5C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                pt={{ xs: 6, sm: 5 }}
                pl={9}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    fontWeight: "normal",
                    position: "relative",

                    "&::before": {
                      content: '"\\201C"',
                      color: theme.palette.primary.main,
                      position: "absolute",
                      left: -32,
                      top: -8,
                      fontSize: "3.5rem",
                      lineHeight: 1,
                    },
                  }}
                >
                  {quote}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" mt={1} color={theme.palette.grey[200]}>
              (meaning, "Damn it, I won't give up"), long ago became a life
              principle that is now our small team joke and a core principle:
              fight, win, grow.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
