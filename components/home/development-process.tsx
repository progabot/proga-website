"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

const processSteps = [
  {
    number: "01",
    title: "Research & Idea Evaluation",
    description: "We dig deep to understand your vision",
  },
  {
    number: "02",
    title: "Product Design",
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
    description: "Fast and scalable solutions built with modern tech",
  },
];

export default function DevelopmentProcess() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#2a2a2a", color: "#fff" }}
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
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 400,
              color: "#fff",
            }}
          >
            We do full-cycle development
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              sx={{
                width: 48,
                height: 48,
                border: "1px solid #555",
                borderRadius: 2,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#444",
                },
                "&:disabled": {
                  color: "#666",
                  borderColor: "#333",
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
                border: "1px solid #555",
                borderRadius: 2,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#444",
                },
                "&:disabled": {
                  color: "#666",
                  borderColor: "#333",
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
            gap: 3,
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  whiteSpace: "nowrap",
                  backgroundColor: "#3a3a3a",
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#888",
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
                    color: "#fff",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#ccc", lineHeight: 1.5, fontSize: "0.9rem" }}
                >
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
