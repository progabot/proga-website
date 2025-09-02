import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Testimonial } from "@/utils/testimonials";
import Link from "next/link";
import Image from "next/image";
import { East } from "@mui/icons-material";
import ProgaShapedBox from "./proga-shaped-box";

export default function TestimonialCard({
  testimonial,
  light = false,
}: {
  testimonial: Testimonial;
  light?: boolean;
}) {
  return (
    <ProgaShapedBox light={light}>
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
              sx={{ color: light ? "#666666" : "#a5a5a5" }}
            >
              {testimonial.authorTitle}
            </Typography>
          </Box>
        </Stack>

        <Box display="flex" gap={2}>
          <Typography
            variant="h5"
            sx={{
              display: { xs: "none", sm: "block" },
              lineHeight: 1,
              fontSize: "70px",
              color: light ? "#D6336C" : "#EFBED2",
            }}
            fontWeight={300}
          >
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
                    borderColor: light
                      ? "rgba(0,0,0,0.25)"
                      : "rgba(255,255,255,0.35)",
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
                    color: light ? "#2a2a2a" : "#eaeaea",
                    px: 3,
                    "&:hover": {
                      backgroundColor: light ? "#f5f5f5" : "#333",
                      borderColor: light ? "#999" : "#666",
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
