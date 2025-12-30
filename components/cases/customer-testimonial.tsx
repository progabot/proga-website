import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProgaShapedBox from "../shared/proga-shaped-box";

interface CustomerTestimonialProps {
  authorName?: string;
  authorTitle?: string;
  text: string;
  light?: boolean;
}

export default function CustomerTestimonial({
  authorName,
  authorTitle,
  text,
  light = false,
}: CustomerTestimonialProps) {
  return (
    <ProgaShapedBox light={light}>
      <Stack spacing={4} height={"100%"}>
        <Box display="flex" gap={2} height={"100%"}>
          <Typography
            variant="h5"
            sx={{
              display: { xs: "none", sm: "block" },
              lineHeight: 1,
              fontSize: "70px",
              color: light ? "#E498B7" : "#EFBED2",
            }}
            fontWeight={300}
          >
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
                <Typography
                  variant="body1"
                  sx={{ color: light ? "#666666" : "#a5a5a5" }}
                >
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
