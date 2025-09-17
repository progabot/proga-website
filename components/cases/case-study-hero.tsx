import { Box, Typography, Chip, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

interface CaseStudyHeroProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function CaseStudyHero({
  title,
  description,
  tags,
  image,
}: CaseStudyHeroProps) {
  return (
    <Box sx={{ py: 7 }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#000",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              color: "#1A1A1A",
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  backgroundColor: "#EFBED2",
                  color: "#721c24",
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Image
          src={image}
          alt={`${title} cover image`}
          width={1320}
          height={530}
          style={{ width: "100%", height: "auto", borderRadius: "24px" }}
        />
      </Box>
    </Box>
  );
}
