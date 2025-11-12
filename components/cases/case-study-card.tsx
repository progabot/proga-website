"use client";

import {
  Box,
  Typography,
  Chip,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import { East } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUpWhileInView } from "@/utils/motion-presets";
import CountryChip from "./country-chip";
import { Country } from "@/utils/cases";
import GlobalChip from "./global-chip";

interface CaseStudyCardProps {
  logo?: string | null;
  title?: string | null;
  description?: string | null;
  tags?: string[];
  country?: Country | null;
  isGlobal?: boolean;
  mockupImage: string;
  mockupAlt: string;
  href: string;
  small?: boolean;
  logoWidth?: number;
  logoHeight?: number;
}

export default function CaseStudyCard({
  logo,
  title,
  description,
  tags = [],
  country,
  isGlobal = false,
  mockupImage,
  mockupAlt,
  href,
  small = false,
  logoWidth,
  logoHeight,
}: CaseStudyCardProps) {
  const theme = useTheme();
  const shouldRenderTitle = !!title && title.trim().length > 0;
  const shouldRenderTags = tags.length > 0;
  const defaultLogoWidth = logoWidth ?? 100;
  const defaultLogoHeight = logoHeight ?? (small ? 24 : 36);
  return (
    <Link
      href={href}
      scroll={false}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{ width: "100%" }}>
        <motion.div {...fadeInUpWhileInView}>
          <Box
            sx={{
              minHeight: { xs: 360, md: 500 },
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                "& .case-study-image": {
                  transform: "scale(1.04)",
                },
                "& .case-study-button .MuiSvgIcon-root": {
                  transform: "translate(2px, 0)",
                },
                "& .case-study-button": {
                  textDecoration: "underline",
                },
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",

                "& img.case-study-logo": {
                  display: small ? "block" : { xs: "block", md: "block" },
                },
              }}
            >
              {logo && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    zIndex: 1,
                    width: { xs: 60, md: defaultLogoWidth },
                    height: { xs: "auto", md: defaultLogoHeight },
                    "& img": { objectFit: "contain" },
                  }}
                >
                  <Image
                    src={logo}
                    className="case-study-logo"
                    alt={`${title} logo`}
                    width={defaultLogoWidth}
                    height={defaultLogoHeight}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              )}
              <Image
                src={mockupImage}
                alt={mockupAlt}
                width={1320}
                height={470}
                className="case-study-image"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
                gap: { xs: 4, lg: 8 },
                pt: 2,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {shouldRenderTitle && (
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: small ? "1.25rem" : "1.75rem",
                        md: small ? "1.25rem" : "2.25rem",
                      },
                      fontWeight: small ? 600 : 700,
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                )}

                {!small && (
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      color: theme.palette.text.primary,
                      mb: 1,
                      maxWidth: "90%",
                    }}
                  >
                    {description}
                  </Typography>
                )}
                {shouldRenderTags && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: { xs: 1, md: 3 },
                    }}
                  >
                    {tags.map((tag) => {
                      return (
                        <Chip
                          key={tag}
                          label={tag}
                          size={small ? "small" : "medium"}
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "8px",
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            fontSize: small ? "0.75rem" : "0.875rem",
                            height: 32,
                            "& .MuiChip-label": {
                              px: small ? 1 : 2,
                            },
                          }}
                        />
                      );
                    })}
                    {isGlobal && <GlobalChip small={small} />}
                    {country && (
                      <CountryChip
                        country={country}
                        isGlobal={isGlobal}
                        small={small}
                      />
                    )}
                  </Box>
                )}

                <Button
                  className="case-study-button"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    p: 0,
                    justifyContent: "flex-start",
                    pointerEvents: "none",
                    transition: "text-decoration 0.2s ease",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "& .MuiSvgIcon-root": {
                      transition: "transform 0.2s ease",
                    },
                  }}
                  endIcon={<East />}
                >
                  See full case study
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </div>
    </Link>
  );
}
