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
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        minHeight: 500,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
      
            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <Image
                src={mockupImage || "/placeholder.svg"}
                alt={mockupAlt}
                width={1320}
                height={470}
                style={{
                  width: "100%",
                  height: "auto",
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
                    backgroundColor: "#f8bbd9",
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
              component={Link}
              href={href}
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                p: 0,
                justifyContent: "flex-start",
                "&:hover": {
                  backgroundColor: "transparent",
                  "& .MuiSvgIcon-root": {
                    transform: "translate(4px, -4px)",
                  },
                },
              }}
              endIcon={
                <NorthEast
                  sx={{
                    transition: "transform 0.2s ease",
                  }}
                />
              }
            >
              See full case study
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
