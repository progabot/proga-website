"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { TESTIMONIALS } from "@/utils/testimonials";
import TestimonialCard from "../shared/testimonial-card";

export default function ClientTestimonials() {
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
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1a1a1a" }}
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
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Clients say
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
            gap: 4,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <>
              <Card
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  minWidth: { xs: "300px", md: "500px" },
                  flex: "0 0 auto",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box minWidth={"500px"} width="800px" key={index} p={1}>
                    <TestimonialCard testimonial={testimonial} />
                  </Box>
                </CardContent>
              </Card>
            </>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
