"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function InstagramSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.text.primary,
        pt: 4,
        pb: 8,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              border: `1px solid ${theme.palette.grey[300]}`,
              px: { xs: 3, md: 6 },
              pt: { xs: 3, md: 6 },
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: theme.palette.text.primary,
                }}
              >
                Follow us on Instagram
              </Typography>

              <Button
                variant="outlined"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  mb: 4,
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  fontSize: theme.typography.body1.fontSize,
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: theme.palette.text.secondary,
                    backgroundColor: theme.palette.grey[100],
                  },
                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },
                  "&:hover .MuiButton-endIcon": {
                    transform: "translate(2px, -2px)",
                  },
                }}
                onClick={() =>
                  window.open("https://instagram.com/proga.tech", "_blank")
                }
              >
                Follow us
              </Button>
            </Box>

            <Image
              src={"/instagram.jpg"}
              alt={`PGT Instagram`}
              width={418}
              height={572}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Image
              src={"/team-2.jpg"}
              alt={`PGT Instagram`}
              width={762}
              height={813}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
