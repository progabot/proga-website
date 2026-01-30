"use client";

import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

const processSteps = [
  {
    number: "01",
    title: "Research & Idea Evaluation",
    description: "Deep analysis of your vision and your client’s needs",
  },
  {
    number: "02",
    title: "Product Strategy",
    description: "Strategic planning that sets you up for success",
  },
  {
    number: "03",
    title: "UX/UI Design",
    description: "Beautiful interfaces that users actually enjoy",
  },
  {
    number: "04",
    title: "Web Development",
    description: "Fast, secure, scalable, cross-platform web applications",
  },
  {
    number: "05",
    title: "Mobile Applications",
    description: "Native apps and PWAs that perform flawlessly",
  },
];

export default function DevelopmentProcess() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const theme = useTheme();
  const isMobile = theme.breakpoints.down("md");

  const PROCESS_STEP_WIDTH = isMobile ? 350 : 402;
  const PROCESS_STEPS_GAP = 3;

  const processStepWidthWithGap =
    PROCESS_STEP_WIDTH + PROCESS_STEPS_GAP * parseFloat(theme.spacing(1));
  const scrollOffset = processStepWidthWithGap;

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <SectionTitle
            id="full-cycle-development"
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 400,
              color: theme.palette.text.secondary,
            }}
          >
            We do full-cycle development
          </SectionTitle>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              sx={{
                width: 48,
                height: 48,
                border: `1px solid ${theme.palette.text.secondary}`,
                borderRadius: 2,
                color: theme.palette.text.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.grey[900],
                },
                "&:disabled": {
                  color: theme.palette.grey[600],
                  borderColor: theme.palette.grey[600],
                },
              }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={scrollRight}
              disabled={!canScrollRight}
              sx={{
                width: 48,
                height: 48,
                border: `1px solid ${theme.palette.text.secondary}`,
                borderRadius: 2,
                color: theme.palette.text.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.grey[900],
                },
                "&:disabled": {
                  color: theme.palette.grey[600],
                  borderColor: theme.palette.grey[600],
                },
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>

        <Box
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          sx={{
            display: "flex",
            gap: PROCESS_STEPS_GAP,
            overflowX: "auto",
            pr: { xs: 1.5, md: 4 },
            width: "100vw",
            marginLeft: `calc(-50vw + 50%)`,
            paddingLeft: `calc(50vw - 50%)`,
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {processSteps.map((step, index) => (
            <Box
              key={step.number}
              sx={{
                width: PROCESS_STEP_WIDTH,
                flexShrink: 0,
                backgroundColor: theme.palette.grey[900],
                borderRadius: 3,
                p: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: theme.palette.text.secondary,
                  mb: 10,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.text.secondary,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[400],
                  lineHeight: 1.5,
                  fontSize: "0.9rem",
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
