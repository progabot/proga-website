"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "@/components/shared/section-title";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import { Dot } from "lucide-react";

interface TextSegment {
  text: string;
  bold?: boolean;
}

interface TechCategory {
  icon: React.ReactNode;
  title: string;
  items: (string | TextSegment[])[];
}

interface TechnologyStackProps {
  categories: TechCategory[];
  mode?: "light" | "dark";
}

const renderItem = (item: string | TextSegment[]) => {
  if (typeof item === "string") {
    return item;
  }

  return item.map((segment, index) =>
    segment.bold ? (
      <strong key={index}>{segment.text}</strong>
    ) : (
      <span key={index}>{segment.text}</span>
    )
  );
};

export default function TechnologyStack({
  categories,
  mode,
}: TechnologyStackProps) {
  const theme = useTheme();
  const effectiveMode = mode ?? theme.palette.mode;

  const titleColor =
    effectiveMode === "dark"
      ? theme.palette.background.paper
      : theme.palette.background.default;
  const textColor =
    effectiveMode === "dark"
      ? theme.palette.grey[300]
      : theme.palette.grey[600];
  const bgColor =
    effectiveMode === "dark" ? theme.palette.background.default : "transparent";

  const stickyContent = (
    <SectionTitle
      id="technology-stack"
      variant="h3"
      component="h2"
      sx={{
        fontWeight: 500,
        mb: 2,
        color: titleColor,
      }}
    >
      Technology stack
    </SectionTitle>
  );

  const mainContent = (
    <>
      {categories.map((cat, idx) => (
        <Box key={idx} sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              mb: 3,
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
              component="div"
              sx={{
                color: textColor,
                mb: 2,
                fontWeight: 400,
                display: "flex",
                alignItems: "flex-start",
                gap: 0.5,
              }}
            >
              <Dot strokeWidth={4} style={{ flexShrink: 0 }} />
              <Box key={i + "_content"} sx={{ flex: 1 }}>
                {renderItem(item)}
              </Box>
            </Typography>
          ))}
        </Box>
      ))}
    </>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      backgroundColor={bgColor}
      containerProps={{ sx: { pt: 8, pb: 0 } }}
    />
  );
}
