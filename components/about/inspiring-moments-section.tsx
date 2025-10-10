"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function InspiringMomentsSection() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 500, sm: 700, md: 700 },
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src="/inspiring-moments-mobile.png"
              alt="Proga Tech Inspiring Moment (mobile)"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src="/inspiring-moments.jpg"
              alt="Proga Tech Inspiring Moment"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              color: theme.palette.text.primary,
              p: { xs: 2, sm: 1, md: 3 },
              m: { xs: 1, sm: 2, md: 1 },
              maxWidth: { xs: "100%", sm: "100%", md: "60%" },
              borderRadius: "12px",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(24px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <Typography
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  lineHeight: 0.8,
                  fontWeight: "bold",
                  mr: 1,
                  mt: -0.5,
                }}
              >
                &ldquo;
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.common.white,
                  fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.25rem" },
                  fontWeight: 400,
                }}
              >
                Being able to talk with local clients, join in on in-office
                brainstorming sessions, and just have face-to-face conversations
                — that's what I really enjoy at Proga. Sometimes people can push
                you in a completely different direction, helping you see
                yourself from a whole new perspective.
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.common.white,
                mt: 2,
                ml: { xs: 3, md: 4 },
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.125rem" },
                fontWeight: 600,
              }}
            >
              Yura,
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.common.white,
                mt: 0,
                ml: { xs: 3, md: 4 },
                mb: { sm: 2, md: 0 },
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.125rem" },
                fontWeight: 400,
              }}
            >
              Software Engineer at Proga Tech
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
