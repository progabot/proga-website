"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { fadeInUpScale } from "@/utils/motion-presets";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isFirstIteration, setIsFirstIteration] = useState(true);
  const words = ["creativity", "expertise", "ownership"];

  const TYPING_SPEED_IN_MILLISECONDS_PER_CHARACTER = 100;
  const ERASING_SPEED_IN_MILLISECONDS_PER_CHARACTER = 25;
  const WORD_PAUSE_DURATION_IN_MILLISECONDS = 2000;
  const WORD_PAUSE_DURATION_AFTER_FIRST_ITERATION_IN_MILLISECONDS = 5000;
  const theme = useTheme();

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED_IN_MILLISECONDS_PER_CHARACTER);
      } else {
        const pauseDuration = isFirstIteration
          ? WORD_PAUSE_DURATION_IN_MILLISECONDS
          : WORD_PAUSE_DURATION_AFTER_FIRST_ITERATION_IN_MILLISECONDS;

        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, ERASING_SPEED_IN_MILLISECONDS_PER_CHARACTER);
      } else {
        const nextIndex = (currentWordIndex + 1) % words.length;
        setCurrentWordIndex(nextIndex);

        // Mark first iteration as complete when we cycle back to the first word
        if (nextIndex === 0 && isFirstIteration) {
          setIsFirstIteration(false);
        }

        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, isTyping, displayedText, words, isFirstIteration]);
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      const sectionTop =
        nextSection.getBoundingClientRect().top + window.scrollY;
      const HEADER_HEIGHT = 100;
      window.scrollTo({
        top: sectionTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.paper,
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 20 } }}
      >
        <motion.div {...fadeInUpScale}>
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
                color: theme.palette.background.default,
                mb: 5,
              }}
            >
              Empowering businesses
              <br />
              with{" "}
              <span
                style={{
                  backgroundColor: theme.palette.primary.main,
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
                color: theme.palette.grey[700],
                maxWidth: "64rem",
                lineHeight: 1.6,
                mb: { xs: 8, md: 12 },
              }}
            >
              By combining creativity, deep technical knowledge, and flexible
              development process, we build solutions that drive meaningful
              impact for both users and businesses
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                onClick={scrollToNextSection}
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.secondary,
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: theme.palette.grey[900],
                  },
                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },
                  "&:hover .MuiButton-endIcon": {
                    transform: "translateY(4px)",
                  },
                }}
                endIcon={<ArrowDown />}
              >
                Start exploring
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.background.default,
                  color: theme.palette.background.default,
                  backgroundColor: "transparent",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: theme.palette.grey[50],
                    borderColor: theme.palette.background.default,
                  },
                }}
                component={Link}
                href="/cases"
              >
                Check portfolio
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
