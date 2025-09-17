"use client";

import Link from "next/link";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { East } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const words = ["creativity", "expertise", "ownership"];

  const TYPING_SPEED_IN_MILLISECONDS_PER_CHARACTER = 100;
  const ERASING_SPEED_IN_MILLISECONDS_PER_CHARACTER = 25;
  const WORD_PAUSE_DURATION_IN_MILLISECONDS = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED_IN_MILLISECONDS_PER_CHARACTER);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, WORD_PAUSE_DURATION_IN_MILLISECONDS);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, ERASING_SPEED_IN_MILLISECONDS_PER_CHARACTER);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, isTyping, displayedText, words]);

  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#ffffff", overflow: "hidden" }}
    >
      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 20 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ maxWidth: "80rem", textAlign: "left" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.75rem",
                  md: "4.5rem",
                  lg: "4.625rem",
                },
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#000",
                mb: 5,
              }}
            >
              Transforming businesses
              <br />
              with{" "}
              <span
                style={{
                  backgroundColor: "#f8bbd9",
                  color: "#000",
                  padding: "8px 16px",
                  borderRadius: "16px",
                  display: "inline-block",
                  lineHeight: 1.1,
                  minWidth: "50px",
                  textAlign: "left",
                }}
              >
                {displayedText.split("").map((letter, index) => (
                  <motion.span
                    key={`${currentWordIndex}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.05 }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <span style={{ fontSize: "1px", visibility: "hidden" }}>|</span>
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                color: "#666",
                maxWidth: "64rem",
                lineHeight: 1.6,
                mb: { xs: 8, md: 12 },
              }}
            >
              By combining creativity, deep domain knowledge, and a
              user-centered development process, we build solutions that drive
              meaningful impact for both users and businesses
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
  );
}
