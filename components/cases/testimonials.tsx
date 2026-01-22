"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Link,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CustomerTestimonial from "./customer-testimonial";
import { Pointer } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";

interface Testimonial {
  authorName?: string;
  authorTitle?: string;
  text: string;
}

export default function CustomerTestimonials({
  testimonials,
  footerText,
  title,
  showFooter = true,
}: {
  testimonials: Testimonial[];
  footerText?: {
    textBefore: string;
    linkText: string;
    linkHref: string;
    textAfter?: string;
  };
  title: string;
  showFooter?: boolean;
}) {
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
  const theme = useTheme();
  return (
    <Box px={"1px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 2, md: 6 },
        }}
      >
        <SectionTitle
          id="testimonials"
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        >
          {title}
        </SectionTitle>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            width: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          <IconButton
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            sx={{
              width: 48,
              height: 48,
              border: "1px solid #ddd",
              borderRadius: 2,
              color: theme.palette.background.default,
              backgroundColor: theme.palette.background.paper,
              "&:hover": {
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.background.default,
              },
              "&:disabled": {
                color: theme.palette.grey[200],
                borderColor: theme.palette.grey[200],
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
              border: "1px solid #ddd",
              borderRadius: 2,
              color: theme.palette.background.default,
              backgroundColor: theme.palette.background.paper,
              "&:hover": {
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.background.default,
              },
              "&:disabled": {
                color: theme.palette.grey[200],
                borderColor: theme.palette.grey[200],
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
          gap: 1,
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "transparent",
              minWidth: { xs: "300px", md: "500px" },
              flex: "0 0 auto",
            }}
            elevation={0}
          >
            <CardContent sx={{ p: 0, height: "100%" }}>
              <Box
                height={"100%"}
                minWidth={{ xs: "unset", md: "500px" }}
                maxWidth={{ xs: "350px", md: "unset" }}
                width="800px"
                key={index}
                p={1}
              >
                <CustomerTestimonial
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  text={testimonial.text}
                  light
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {showFooter && footerText && (
        <Box
          sx={{
            backgroundColor: theme.palette.grey[50],
            p: 3,
            mt: 4,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              p: 1,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              flexShrink: 0,
            }}
          >
            <Pointer color={theme.palette.secondary.main} />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            {footerText.textBefore}
            <Link
              href={footerText.linkHref || "#"}
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                color: theme.palette.text.primary,
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              {footerText.linkText}
            </Link>
            {footerText.textAfter}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
