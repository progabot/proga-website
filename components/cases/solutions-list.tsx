"use client";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import { SectionTitle } from "@/components/shared/section-title";

interface SolutionItem {
  title?: string;
  description: string;
}

interface SolutionsListProps {
  title?: string;
  subtitle?: string;
  solutions: SolutionItem[];
}

export default function SolutionsList({
  title = "Solutions",
  subtitle = "",
  solutions,
}: SolutionsListProps) {
  const theme = useTheme();
  const stickyContent = (
    <>
      <SectionTitle
        id="solutions"
        variant="h3"
        component="h2"
        sx={{ color: theme.palette.text.primary, fontWeight: "bold", mb: 6 }}
      >
        {title}
      </SectionTitle>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.grey[500],
            fontWeight: 400,
            mb: 4,
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );

  const mainContent = (
    <>
      {solutions.map((solution, index) => (
        <Box key={index} mb={2}>
          <Box display="flex" gap={4}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                [{String(index + 1).padStart(2, "0")}]
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.background.default,
                  fontWeight: 500,
                }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[500],
                  fontWeight: 400,
                  lineHeight: 1.4,
                  mt: solution.title ? 2 : 0.5,
                }}
              >
                {solution.description}
              </Typography>
            </Box>
          </Box>
          {index !== solutions.length - 1 && solution.title && (
            <Divider sx={{ my: 2 }} />
          )}
        </Box>
      ))}
    </>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      backgroundColor="transparent"
      spacing={4}
    />
  );
}
