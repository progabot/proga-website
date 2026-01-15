"use client";

import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import Link from "next/link";

interface ProjectCTAProps {
  title: string;
  subtitle: string;
  mode?: "dark" | "pink";
}

export default function ProjectCTA({
  title,
  subtitle,
  mode = "dark",
}: ProjectCTAProps) {
  const theme = useTheme();
  const isDark = mode === "dark";

  const styles = {
    cardBg: isDark
      ? theme.palette.background.default
      : theme.palette.primary.main,
    titleColor: isDark
      ? theme.palette.text.secondary
      : theme.palette.text.primary,
    textColor: isDark
      ? theme.palette.text.secondary
      : theme.palette.text.primary,
    buttonBg: isDark
      ? theme.palette.text.secondary
      : theme.palette.text.primary,
    buttonColor: isDark
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
    buttonHoverBg: isDark ? theme.palette.grey[50] : theme.palette.grey[800],
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            backgroundColor: styles.cardBg,
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: "left",
            display: "block",
            textDecoration: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            // "&:hover": {
            //   transform: "translateY(-4px)",
            //   boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            // },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 600,
              mb: 2,
              color: styles.titleColor,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: styles.textColor,
              mb: 4,
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>

          <Button
            component={Link}
            href="/contact"
            className="project-cta-button"
            sx={{
              backgroundColor: styles.buttonBg,
              color: styles.buttonColor,
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              justifyContent: "flex-start",
              transition:
                "color 0.2s ease, text-decoration 0.2s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: styles.buttonHoverBg,
              },
              "& .MuiButton-endIcon": {
                transition: "transform 0.3s ease",
              },
              "&:hover .MuiButton-endIcon": {
                transform: "translateX(6px)",
              },
            }}
            endIcon={<ArrowRight />}
          >
            Contact us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
