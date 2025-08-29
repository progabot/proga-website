"use client"

import Link from "next/link"
import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { motion } from "framer-motion"
import { East, NorthEast } from "@mui/icons-material"
import { useState, useEffect } from "react"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["creativity", "expertise", "code"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Box component="section" sx={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 20 } }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Box sx={{ maxWidth: "80rem", textAlign: "left" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.75rem", md: "4.5rem", lg: "4.625rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#000",
                mb: 5,
              }}
            >
              Transforming businesses
              <br />
              with{" "}
              <Box
                component="span"
                sx={{
                  backgroundColor: "#f8bbd9",
                  color: "#000",
                  px: 2,
                  py: 1,
                  borderRadius: 4,
                  display: "inline-block",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {words[currentWordIndex]}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                color: "#666",
                maxWidth: "64rem",
                lineHeight: 1.6,
                mb: {xs: 8, md: 12},
              }}
            >
              By combining creativity, deep domain knowledge, and a user-centered development process, we build
              solutions that drive meaningful impact for both users and businesses
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                endIcon={<East />}
                component={Link}
                href="/contact"
              >
                Get started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ccc",
                  color: "#000",
                  backgroundColor: "transparent",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    borderColor: "#ccc",
                  },
                }}
                component={Link}
                href="/cases"
              >
                Our works
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
