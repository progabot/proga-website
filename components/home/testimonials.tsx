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
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "../shared/testimonial-card";
import { TESTIMONIALS } from "@/utils/testimonials";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const filteredTestimonials = TESTIMONIALS.slice(0, -1);
  const initialTestimonials = filteredTestimonials.slice(0, 2);
  const additionalTestimonials = filteredTestimonials.slice(2, 4);

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1a1a1a", color: "#fff" }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2.5rem", fontWeight: 600, mb: 6, color: "#fff" }}
        >
          Clients say
        </Typography>

        <Stack spacing={4} sx={{ maxWidth: "800px", mx: "auto" }}>
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

          <Collapse in={showAll} timeout={1500}>
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

        <Box sx={{ textAlign: "center", mt: 8 }}>
          {showAll ? (
            <Button
              component="a"
              href="https://clutch.co/profile/proga-tech#reviews"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.35)",
                backgroundColor: "transparent",
                textTransform: "none",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                  borderColor: "#666",
                },
              }}
              endIcon={<span style={{ fontSize: 18 }}>↗</span>}
            >
              <Image
                src={"/icons/clutch.png"}
                alt={`Clutch`}
                width={24}
                height={24}
                style={{ marginRight: "10px" }}
              />
              Show reviews on Clutch
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => setShowAll(!showAll)}
              sx={{
                color: "#fff",
                borderColor: "#555",
                backgroundColor: "transparent",
                textTransform: "none",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                  borderColor: "#666",
                },
              }}
            >
              See more reviews
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
