"use client";

import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Collapse,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "../shared/testimonial-card";
import { TESTIMONIALS } from "@/utils/testimonials";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";
import { NorthEast } from "@mui/icons-material";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const filteredTestimonials = TESTIMONIALS.slice(0, -1);
  const initialTestimonials = filteredTestimonials.slice(0, 2);
  const additionalTestimonials = filteredTestimonials.slice(2, 4);
  const theme = useTheme();
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
        <SectionTitle
          id="testimonials"
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: 600,
            mb: 6,
            color: theme.palette.text.secondary,
          }}
        >
          Clients say
        </SectionTitle>

        <Stack spacing={4} sx={{ maxWidth: "800px", mx: "auto", py: 1 }}>
          {initialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}

          <Collapse in={showAll} timeout={1500} sx={{ mt: "0!important" }}>
            <Stack spacing={4} sx={{ pt: showAll ? 4 : 0 }}>
              {additionalTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: showAll ? index * 0.1 : 0,
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </Stack>
          </Collapse>
        </Stack>

        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            sx={{
              color: theme.palette.text.secondary,
              borderColor: theme.palette.background.paper,
              backgroundColor: "transparent",
              textTransform: "none",
              px: 3,
              py: 1.5,
              "&:hover": {
                backgroundColor: theme.palette.grey[900],
                borderColor: theme.palette.background.paper,
              },
            }}
          >
            {!showAll ? "See more reviews" : "See less reviews"}
          </Button>
          {showAll && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  color: "text.secondary",
                  height: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{ flex: 1, height: 2, bgcolor: theme.palette.grey[800] }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    px: 2,
                    textTransform: "lowercase",
                    color: theme.palette.grey[400],
                  }}
                >
                  or
                </Typography>
                <Box
                  sx={{ flex: 1, height: 2, bgcolor: theme.palette.grey[800] }}
                />
              </Box>
              <Button
                component="a"
                href="https://clutch.co/profile/proga-tech#reviews"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  color: theme.palette.text.secondary,
                  backgroundColor: "transparent",
                  textTransform: "none",
                  px: 3,
                  py: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  },

                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },
                  "&:hover .MuiButton-endIcon": {
                    transform: "translate(4px, -4px)",
                  },
                }}
                endIcon={<NorthEast />}
              >
                <Image
                  src={"/icons/clutch.png"}
                  alt={`Clutch`}
                  width={24}
                  height={24}
                  style={{ marginRight: "10px" }}
                />
                See all reviews on Clutch
              </Button>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
