import { Box, Typography, Chip, Button, Container } from "@mui/material"
import { NorthEast } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

interface CaseStudyCardProps {
  logo: string
  title: string
  description: string
  tags: string[]
  mockupImage: string
  mockupAlt: string
  href: string
  reverse?: boolean
}

export default function CaseStudyCard({
  logo,
  title,
  description,
  tags,
  mockupImage,
  mockupAlt,
  href,
  reverse = false,
}: CaseStudyCardProps) {
  return (
    <Link href={href} scroll={false} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          minHeight: 500,
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            "& .case-study-image": {
              transform: "scale(1.02)",
            },
            "& .case-study-button .MuiSvgIcon-root": {
              transform: "translate(4px, -4px)",
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
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
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
            flexDirection: { xs: "column", lg: reverse ? "row-reverse" : "row" },
            alignItems: "center",
            gap: { xs: 4, lg: 8 },
            py: 2,
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

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 700,
                color: "#000",
                mb: 2,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "#666",
                mb: 3,
                maxWidth: "90%",
              }}
            >
              {description}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    backgroundColor: "#EFBED2",
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    height: 32,
                    "& .MuiChip-label": {
                      px: 2,
                    },
                  }}
                />
              ))}
            </Box>

            <Button
              className="case-study-button"
              sx={{
                color: "#000",
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
              endIcon={
                <NorthEast />
              }
            >
              See full case study
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
