"use client"

import { Box, Container, Typography, Card, CardContent, Button, Avatar } from "@mui/material"
import { ArrowForward, ArrowBack } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const testimonials = [
  {
    name: "Sukh Sidhu",
    title: "CEO, Stridist Inc",
    avatar: "/professional-headshot.png",
    testimonial:
      "Proga Tech's efforts resulted in a 50% reduction in RDS costs and onboarded 100 new coaches. The team managed the project well using Notion and Slack, delivered work promptly, and communicated transparently. The team went above and beyond on several occasions to ensure success.",
  },
  {
    name: "Sajal Amouzegar",
    title: "",
    avatar: "/professional-headshot.png",
    testimonial:
      "Thanks to Proga Tech, the client increased processing efficiency and user satisfaction. They delivered the best practices and reported bugs and issues on time. Their project management, communication, and technical skills were superb.",
  },
]

export default function ClientTestimonials() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#1a1a1a" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Clients say
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                minWidth: "48px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid #333",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              <ArrowBack />
            </Button>
            <Button
              sx={{
                minWidth: "48px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid #333",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              <ArrowForward />
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 4, overflowX: "auto" }}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #333",
                borderRadius: 3,
                p: 4,
                minWidth: "500px",
                flex: "0 0 auto",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600, fontSize: "1rem" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999", fontSize: "0.875rem" }}>
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc",
                    lineHeight: 1.6,
                    mb: 4,
                    fontSize: "1rem",
                    maxWidth: "500px" 
                  }}
                >
                  "{testimonial.testimonial}"
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#333",
                      "&:hover": {
                        borderColor: "#555",
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    See full case study
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#333",
                      "&:hover": {
                        borderColor: "#555",
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    Read on Clutch
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
