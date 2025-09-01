import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Testimonial } from "@/utils/testimonials"
import Link from "next/link"
import Image from "next/image"
import { East } from "@mui/icons-material";

const Shell = styled(Box)<{ light?: boolean }>(({ theme, light }) => ({
  position: "relative",
  isolation: "isolate",
  "--notch": "76px",
  "--notch-sm": "56px",
  "--notch-xs": "40px",

  [theme.breakpoints.down("md")]: { "--notch": "var(--notch-sm)" },
  [theme.breakpoints.down("sm")]: { "--notch": "var(--notch-xs)" },

  /* --- BORDER RING (fake border) --- */
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-1px",
    zIndex: 0,
    background: light ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.25)",
    /* notch + 1px so the diagonal stays parallel to the inner shape */
    "--nb": "calc(var(--notch) + 1px)",
    clipPath:
      "polygon(0 0, calc(100% - var(--nb)) 0, 100% var(--nb), 100% 100%, var(--nb) 100%, 0 calc(100% - var(--nb)))",
    transition: "transform .35s ease",
    pointerEvents: "none",
  },

  /* --- INNER PANEL / HIGHLIGHT --- */
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background: light ? "#ffffff" : "#1a1a1a",
    clipPath:
      "polygon(0 0, calc(100% - var(--notch)) 0, 100% var(--notch), 100% 100%, var(--notch) 100%, 0 calc(100% - var(--notch)))",
    transition: "background .35s ease, transform .35s ease",
  },

  "&:hover::after": {
    background: "#f6bcd0",
  },
  paddingBottom: "var(--notch)",
  paddingRight: "var(--notch)",
}));


const Card = styled(Box)<{ light?: boolean }>(({ theme, light }) => ({
  position: "relative",
  zIndex: 1,
  background: light ? "#ffffff" : "#1a1a1a",
  color: light ? "#2a2a2a" : "#eaeaea",
  padding: theme.spacing(5),
}));

export default function TestimonialCard({ testimonial, light = false }: { testimonial: Testimonial, light?: boolean }) {
  return (
    <Shell light={light}>
      <Card light={light}>
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
              <Typography variant="body1" sx={{ color: light ? "#666666" : "#a5a5a5" }}>
                {testimonial.authorTitle}
              </Typography>
            </Box>
          </Stack>

          <Box display="flex" gap={2}>
            <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" }, lineHeight: 1, fontSize: "70px", color: light ? "#D6336C" : "#EFBED2" }} fontWeight={300}>
              "
            </Typography>
            <Stack spacing={4} mt={3}>
              <Typography variant="h5" sx={{ lineHeight: 1.5 }} fontWeight={300}>
                {testimonial.text}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                {testimonial.caseStudyId && (
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: light ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.35)",
                      color: light ? "#2a2a2a" : "#eaeaea",
                      px: 3,
                      "&:hover": {
                        backgroundColor: light ? "#f5f5f5" : "#333",
                        borderColor: light ? "#999" : "#666",
                      },
                    }}
                    endIcon={<East />}
                    component={Link}
                    href={`/cases/${testimonial.caseStudyId}`}
                  >
                    See full case study
                  </Button>)}
                {testimonial.clutchLink && (
                  <Button
                    component="a"
                    href={testimonial.clutchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      borderColor: light ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.35)",
                      color: light ? "#2a2a2a" : "#eaeaea",
                      px: 3,
                      "&:hover": {
                        backgroundColor: light ? "#f5f5f5" : "#333",
                        borderColor: light ? "#999" : "#666",
                      },
                    }}
                    endIcon={<span style={{ fontSize: 18 }}>↗</span>}
                  >
                    <Image src={"/icons/clutch.png"} alt={`Clutch`} width={24} height={24} style={{ marginRight: "10px" }} />
                    Read on Clutch
                    {/* todo: update icon */}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Shell>
  );
}
