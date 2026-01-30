"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function InspiringMomentsSection() {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 8, width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 500, sm: 750, md: 800 },
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
            src="/about/inspiring-moments-mobile.png"
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
            src="/about/inspiring-moments.jpg"
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
            display: { xs: "none", md: "block" },
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%)",
            zIndex: 0,
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            inset: 0,
            px: { xs: 0, md: "inherit" },
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              color: theme.palette.text.primary,
              p: { xs: 2, sm: 2, md: 3 },
              my: { xs: 0, sm: 0, md: 2 },
              mx: { xs: 0, sm: 0, md: 2 },
              maxWidth: { xs: "100%", sm: "100%", md: "60%" },
              borderRadius: { xs: 0, md: "12px" },
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
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  lineHeight: 0.8,
                  fontWeight: "bold",
                  mr: 2,
                  mt: 1,
                }}
              >
                &ldquo;
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.25rem" },
                  fontWeight: 400,
                  mt: 1,
                  mr: 2,
                }}
              >
                Being able to talk with clients, join in on in-office
                brainstorming sessions, and just have face-to-face conversations
                — that's what I really enjoy at Proga. Sometimes people can push
                you in a completely different direction, helping you see
                yourself from a whole new perspective.
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mt: 2,
                ml: { xs: 4, md: 5 },
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.125rem" },
                fontWeight: 600,
              }}
            >
              Yura,
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mt: 0,
                ml: { xs: 4, md: 5 },
                mb: { sm: 2, md: 2 },
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.125rem" },
                fontWeight: 400,
              }}
            >
              Software Engineer at Proga Tech
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
