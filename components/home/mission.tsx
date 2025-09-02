"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { Sprout, HeartHandshake, MessageCircleHeart, CodeXml } from "lucide-react"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const missionItems = [
  {
    icon: CodeXml,
    title: "Build meaningful tech",
    description: "Creating user-friendly digital products that solve real problems and make a positive impact",
  },
  {
    icon: Sprout,
    title: "Grow talent",
    description: "We invest in people, our most valuable asset",
  },
  {
    icon: HeartHandshake,
    title: "Support Ukraine",
    description: "We contribute to victory with regular donations and purposeful projects",
  },
  {
    icon: MessageCircleHeart,
    title: "Lead with heart and resilience",
    description: "Born in hard times, we carry creativity, care, and strength into everything we do",
  },
]

export default function Mission() {
  return (
    <Box sx={{ pt: 8, backgroundColor: "#ffffff" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 6,
            color: "#000000",
          }}
        >
          Our mission
        </Typography>

        <Grid container spacing={2}>
          {missionItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, pb: 0 }}>
                    <Box sx={{ mb: 2 }}>
                      <IconComponent
                        fontSize="24px"
                        color="#E498B7"
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        mb: 2,
                        color: "#000000",
                        minHeight: "55px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666666",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
