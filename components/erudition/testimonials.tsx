"use client"

import { Box, Container, Typography, Chip, Grid, Button, Card, CardContent, IconButton } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Divider from "@mui/material/Divider"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import TestimonialCard from "@/components/shared/testimonial-card"
import { useEffect, useRef, useState } from "react"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

export default function EruditionTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollPosition()
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      })
    }
  }

  const testimonials = [
    {
      authorName: "Ronald",
		authorTitle: "Brigham Young University",
		text: "Highly recommended. The problems went from easy to hard and towards the end It became a game for me to see if I could beat the score and achieve higher. I ended up with a 22 on PAT thanks to the great practice and techniques from Erudition PAT Prep.",

    },
    {
      authorName: "John",
		authorTitle: "McMaster University",
		text: "Your PAT videos were the absolute best by far. I was dying on the Keyhole problems and [other]’s videos were not helping. You actually did difficult examples in your videos and it helped me tremendously!",

    },
  ]

  return (
    <>
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
            Why learners choose Erudition
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              sx={{
                width: 48,
                height: 48,
                border: "1px solid #ddd",
                borderRadius: 2,
                color: "#333",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "#bbb",
                },
                "&:disabled": {
                  color: "#ccc",
                  borderColor: "#eee",
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
                color: "#333",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "#bbb",
                },
                "&:disabled": {
                  color: "#ccc",
                  borderColor: "#eee",
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
            display: "flex", gap: 4, overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <>
              <Card
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  minWidth: { xs: "300px", md: "500px"},
                  flex: "0 0 auto",
                }}
                elevation={0}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box minWidth={"500px"} width="800px" key={index} p={1}>
                    <TestimonialCard
                      testimonial={testimonial}
                      light
                    />
                  </Box>
                </CardContent>
              </Card>
            </>
          ))}
        </Box>

        <Box sx={{ backgroundColor: "#f5f5f5", p: 3, mt: 4, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            💡 Join students who are building real understanding with Erudition or explore it on YouTube to see how we
            make learning visual, fun, and effective.
          </Typography>
        </Box>
      </Container></>
  )
}
