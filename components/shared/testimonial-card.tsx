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

const Shell = styled(Box)(({ theme }) => ({
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
    background: "rgba(255, 255, 255, 0.25)",
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
    background: "#1a1a1a",
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


const Card = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  background: "#1a1a1a",
  color: "#eaeaea",
  padding: theme.spacing(5),
}));

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial} ) {
  return (
    <Shell>
      <Card>
        <Stack spacing={4}>
          {/* Header: avatar + name + role */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={testimonial.authorImage || "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&auto=format&fit=crop"}
              alt={testimonial.authorName}
              sx={{ width: 52, height: 52 }}
            />
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom={false}>
                {testimonial.authorName}
              </Typography>
              <Typography variant="body1" sx={{ color: "#a5a5a5" }}>
                {testimonial.authorTitle}
              </Typography>
            </Box>
          </Stack>

          <Box display="flex" gap={2}>
            <Typography variant="h5" sx={{ lineHeight:1, fontSize: "70px", color: "#EFBED2" }} fontWeight={300}>
              “
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
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#eaeaea",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#333",
                    borderColor: "#666",
                  },
                }}
                endIcon={<span style={{ fontSize: 18 }}>↗</span>}
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
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#eaeaea",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#333",
                    borderColor: "#666",
                  },
                }}
                endIcon={<span style={{ fontSize: 18 }}>↗</span>}
              >
              <Image src={"/icons/clutch.png"} alt={`Clutch`} width={24} height={24} style={{ marginRight: "10px" }} />
                Read on Clutch
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
