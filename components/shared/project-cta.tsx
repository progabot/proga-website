"use client";

import { Box, Container, Typography, Button } from "@mui/material";
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
  const isDark = mode === "dark";

  const styles = {
    cardBg: isDark ? "#1A1A1A" : "#f8bbd9",
    titleColor: isDark ? "#ffffff" : "#000000",
    textColor: isDark ? "#ffffff" : "#333333",
    buttonBg: isDark ? "#ffffff" : "#000000",
    buttonColor: isDark ? "#000000" : "#ffffff",
    buttonHoverBg: isDark ? "#f5f5f5" : "#333333",
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          component={Link}
          href="/contact"
          sx={{
            backgroundColor: styles.cardBg,
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: "left",
            display: "block",
            textDecoration: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            },
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
