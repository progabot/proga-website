"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { TESTIMONIALS } from "@/utils/testimonials";
import TestimonialCard from "../shared/testimonial-card";
import { useSectionLink } from "@/components/shared/useSectionLink";

export default function ClientTestimonials() {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleScrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: isMobile ? -380 : -740,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: isMobile ? 380 : 740,
      behavior: "smooth",
    });
  };
  const scrollToTitle = useSectionLink("testimonials");
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
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
          <Typography
            id="testimonials"
            onClick={scrollToTitle}
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: theme.palette.text.secondary,
              cursor: "pointer",
            }}
          >
            Clients say
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              sx={{
                width: 48,
                height: 48,
                border: `1px solid ${theme.palette.background.paper}`,
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
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              sx={{
                width: 48,
                height: 48,
                border: `1px solid ${theme.palette.background.paper}`,
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
            flexDirection: "row",
            gap: { xs: 2, md: 4 },
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            py: 1,
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "transparent",
                minWidth: { xs: "300px", md: "500px" },
                flex: "0 0 auto",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    width: { xs: "370px", md: "800px" },
                    p: { xs: 0, md: 1 },
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
