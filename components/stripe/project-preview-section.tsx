"use client";

import { Box, Container } from "@mui/material";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";
import { useTheme } from "@mui/material/styles";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

interface ProjectPreviewSectionProps {
  id: string;
  number: string;
  title: string;
  image: string;
}

export default function ProjectPreviewSection({
  id,
  number,
  title,
  image,
}: ProjectPreviewSectionProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        py: { xs: 6, sm: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: theme.palette.common.white,
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <SectionTitle
          id={id}
          variant="h5"
          sx={{
            mb: { xs: 3, sm: 4 },
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "2.25rem",
          }}
        >
          <Box component="span" sx={{ color: "#008095" }}>
            [{number}]
          </Box>
          <Box component="span" sx={{ color: "#1A1A1A" }}>
            {title}
          </Box>
        </SectionTitle>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 220, sm: 360, md: 550 },
            overflow: "hidden",
            borderRadius: { xs: 1, md: 4 },
          }}
        >
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
