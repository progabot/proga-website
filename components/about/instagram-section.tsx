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
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import InstagramPreview from "../shared/InstagramPreview";

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
          <Grid size={{ xs: 12, md: 5 }}>
            <InstagramPreview
              previewImage="/about/instagram.jpg"
              title="Follow us on Instagram"
              buttonText="Follow us"
              instagramLink="https://instagram.com/proga.tech"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Image
              src={"/about/team-activities.jpg"}
              alt={`Proga Team Activities`}
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
