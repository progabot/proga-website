"use client";
import * as React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Button,
  useTheme,
  SvgIcon,
} from "@mui/material";
import { Testimonial } from "@/utils/testimonials";
import Link from "next/link";
import Image from "next/image";
import { East } from "@mui/icons-material";
import ProgaShapedBox from "./proga-shaped-box";
import QuotesIcon from "@/assets/icons/quotes.svg";

export default function TestimonialCard({
  testimonial,
  light = false,
}: {
  testimonial: Testimonial;
  light?: boolean;
}) {
  const theme = useTheme();
  return (
    <ProgaShapedBox
      light={light}
      sx={{
        "&:hover .highlighted": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
        },
      }}
    >
      <Stack spacing={4}>
        {/* Header: avatar + name + role */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={testimonial.authorImage}
            alt={testimonial.authorName}
            sx={{ width: 52, height: 52 }}
          />
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom={false}>
              {testimonial.authorName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: light
                  ? theme.palette.text.primary
                  : theme.palette.grey[400],
              }}
            >
              {testimonial.authorTitle}
            </Typography>
          </Box>
        </Stack>

        <Box display="flex" gap={2}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Image src={QuotesIcon} alt="quotes" width={24} height={24} />
          </Box>
          <Stack spacing={4}>
            <Typography variant="h5" sx={{ lineHeight: 1.6 }} fontWeight={300}>
              <Box
                sx={{
                  display: "inline",
                }}
              >
                {testimonial.text.map((part, idx) => (
                  <Box
                    key={idx}
                    component="span"
                    className={part.highlight ? "highlighted" : ""}
                    sx={{
                      ...(part.highlight
                        ? {
                            backgroundColor: "#B55C804D",
                            color: theme.palette.text.secondary,
                            fontWeight: 600,
                            padding: "4px 8px",
                            borderRadius: "4px",
                            transition: "all 0.3s ease",
                          }
                        : {}),
                    }}
                  >
                    {part.text}
                  </Box>
                ))}
              </Box>
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              {testimonial.caseHref && (
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: light
                      ? "rgba(0,0,0,0.25)"
                      : "rgba(255,255,255,0.35)",
                    color: light
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                    px: 3,
                    "&:hover": {
                      backgroundColor: light
                        ? theme.palette.grey[50]
                        : theme.palette.grey[900],
                      borderColor: light
                        ? theme.palette.background.default
                        : theme.palette.background.paper,
                    },
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease",
                    },
                    "&:hover .MuiButton-endIcon": {
                      transform: "translateX(6px)",
                    },
                  }}
                  endIcon={<East />}
                  component={Link}
                  href={testimonial.caseHref}
                >
                  {testimonial.caseLinkText || "See full case study"}
                </Button>
              )}
              {testimonial.clutchLink && (
                <Button
                  component="a"
                  href={testimonial.clutchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    borderColor: light
                      ? "rgba(0,0,0,0.25)"
                      : "rgba(255,255,255,0.35)",
                    color: light
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                    px: 3,
                    "&:hover": {
                      backgroundColor: light
                        ? theme.palette.grey[50]
                        : theme.palette.grey[900],
                      borderColor: light
                        ? theme.palette.background.default
                        : theme.palette.background.paper,
                    },
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease",
                    },
                    "&:hover .MuiButton-endIcon": {
                      transform: "translate(2px, -2px)",
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
                  Read on Clutch
                  {/* todo: update icon */}
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </ProgaShapedBox>
  );
}
