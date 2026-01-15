"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Theme,
} from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

interface CaseStudyOverviewProps {
  children: React.ReactNode;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  disableBottomPadding?: boolean;
  isFixedImage?: boolean;
  imageOffsetX?:
    | string
    | number
    | { [key in keyof Theme["breakpoints"]["values"]]?: string | number };
}

export default function CaseStudyOverview({
  children,
  image,
  disableBottomPadding = false,
  isFixedImage = false,
  imageOffsetX = 0,
}: CaseStudyOverviewProps) {
  const theme = useTheme();
  const imageStyles = isFixedImage
    ? {
        height: { xs: "auto", lg: "auto" },
        width: { xs: "100%", md: "100%" },
        objectFit: { lg: "contain" },
      }
    : {
        height: { xs: "auto", lg: "100%" },
        width: { xs: "100%", md: "1000px" },
        objectFit: { lg: "contain" },
      };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        pt: { xs: 4, md: 8 },
        pb: disableBottomPadding ? 0 : { xs: 4, md: 8 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={{ xs: 2, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle
              id="overview"
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Overview
            </SectionTitle>
            {children}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                overflow: { lg: "visible" },
                display: "flex",
                alignItems: { lg: "center" },
                "& img": imageStyles,
                marginLeft: imageOffsetX,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 500}
                height={image.height || 600}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
