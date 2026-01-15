"use client";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import { SectionTitle } from "@/components/shared/section-title";
import Image, { StaticImageData } from "next/image";
import { DynamicIcon } from "@/components/shared/dynamic-icon";

interface DescriptionItem {
  text: string;
  icon?: string | StaticImageData;
}

interface SolutionItem {
  title?: string;
  description?: string;
  descriptions?: DescriptionItem[];
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
        sx={{ color: theme.palette.text.primary, fontWeight: 500, mb: 6 }}
      >
        {title}
      </SectionTitle>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.grey[600],
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
                  fontWeight: 500,
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

              {solution.description && (
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.grey[600],
                    fontWeight: 400,
                    lineHeight: 1.4,
                    mt: solution.title ? 2 : 0.5,
                  }}
                >
                  {solution.description}
                </Typography>
              )}

              {solution.descriptions && (
                <Box sx={{ mt: solution.title ? 2 : 0.5 }}>
                  {solution.descriptions.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        mb: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      {item.icon && (
                        <Box
                          sx={{
                            flexShrink: 0,
                            width: 20,
                            height: 20,
                            mt: 0.25,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {typeof item.icon === "string" &&
                          item.icon.startsWith("lucide:") ? (
                            <DynamicIcon
                              iconName={item.icon}
                              size={20}
                              color={theme.palette.grey[600]}
                              strokeWidth={2}
                            />
                          ) : (
                            <Image
                              src={item.icon}
                              alt=""
                              width={20}
                              height={20}
                            />
                          )}
                        </Box>
                      )}
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.grey[600],
                          fontWeight: 400,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
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
