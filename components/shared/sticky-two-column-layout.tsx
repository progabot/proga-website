"use client";

import { Box, Container, Grid, GridProps, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

interface StickyTwoColumnLayoutProps {
  stickyContent: ReactNode;
  mainContent: ReactNode;
  backgroundColor?: string;
  containerMaxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  stickyTop?: string | number;
  py?: number;
  spacing?: number;
  containerProps?: { sx: SxProps };
  leftColumnProps?: GridProps;
  rightColumnProps?: GridProps;
}

export default function StickyTwoColumnLayout({
  stickyContent,
  mainContent,
  backgroundColor = "#1a1a1a",
  containerMaxWidth = PAGE_CONTAINER_MAX_WIDTH,
  stickyTop = "120px",
  py = 8,
  spacing = 6,
  containerProps,
  leftColumnProps,
  rightColumnProps,
}: StickyTwoColumnLayoutProps) {
  return (
    <Box sx={{ backgroundColor, py, ...containerProps?.sx }}>
      <Container maxWidth={containerMaxWidth}>
        <Grid container spacing={spacing} position={"relative"}>
          <Grid size={{ xs: 12, md: 5 }} {...leftColumnProps}>
            <Box position={{ xs: "static", md: "sticky" }} top={stickyTop}>
              {stickyContent}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} {...rightColumnProps}>
            {mainContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
