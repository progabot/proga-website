import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Testimonial } from "@/utils/testimonials"
import Link from "next/link"
import Image from "next/image"
import { East } from "@mui/icons-material";
import ProgaShapedBox from "../shared/proga-shaped-box";

interface CustomerTestimonialProps {
  authorName: string,
  authorTitle: string,
  text: string;
  light?: boolean;
}

export default function CustomerTestimonial({ authorName, authorTitle, text, light = false }: CustomerTestimonialProps) {
  return (
    <ProgaShapedBox light={light}>
      <Stack spacing={4} height={"100%"}>
        <Box display="flex" gap={2} height={"100%"}>
          <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" }, lineHeight: 1, fontSize: "70px", color: light ? "#D6336C" : "#EFBED2" }} fontWeight={300}>
            "
          </Typography>
          <Stack spacing={4} mt={3} justifyContent="space-between">
            <Typography variant="h5" sx={{ lineHeight: 1.5 }} fontWeight={300}>
              {text}
            </Typography>


            <Stack direction="row" spacing={2} alignItems="center">
              <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom={false}>
                  {authorName}
                </Typography>
                <Typography variant="body1" sx={{ color: light ? "#666666" : "#a5a5a5" }}>
                  {authorTitle}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </ProgaShapedBox>
  );
}
