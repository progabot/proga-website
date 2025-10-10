"use client";

import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

interface TechCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

interface TechnologyStackProps {
  categories: TechCategory[];
  mode?: "light" | "dark";
}

export default function TechnologyStack({
  categories,
  mode,
}: TechnologyStackProps) {
  const theme = useTheme();
  const effectiveMode = mode ?? theme.palette.mode;

  const isTwoColumn = categories.length === 2;
  const isThreeOrMore = categories.length >= 3;

  const titleColor = effectiveMode === "dark" ? "#FFFFFF" : "#1A1A1A";
  const textColor = effectiveMode === "dark" ? "#B3B3B3" : "#737373";
  const bgColor = effectiveMode === "dark" ? "#1A1A1A" : "transparent";
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: isTwoColumn ? 6 : 12 }}>
            <SectionTitle
              id="technology-stack"
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: titleColor,
              }}
            >
              Technology stack
            </SectionTitle>
          </Grid>

          {isTwoColumn && (
            <Grid size={{ xs: 12, md: 6 }}>
              {categories.map((cat, idx) => (
                <Box key={idx} sx={{ mb: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: titleColor,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {cat.icon}
                    {cat.title}
                  </Typography>
                  {cat.items.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      sx={{ color: textColor, mb: 1 }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Grid>
          )}

          {isThreeOrMore && (
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={6}>
                {categories.map((cat, idx) => (
                  <Grid size={{ xs: 12, md: 4 }} key={idx}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: titleColor,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {cat.icon}
                      {cat.title}
                    </Typography>
                    {cat.items.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        sx={{ color: textColor, mb: 1 }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
