"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { Computer, Smartphone, CreditCard } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const services = [
  {
    icon: <Computer sx={{ color: "#e91e63", fontSize: "2rem" }} />,
    title: "All in one WEB + Apps development",
  },
  {
    icon: <Smartphone sx={{ color: "#e91e63", fontSize: "2rem" }} />,
    title: "All in one WEB + Apps development",
  },
  {
    icon: <CreditCard sx={{ color: "#e91e63", fontSize: "2rem" }} />,
    title: "Stripe",
  },
]

export default function ServicesHero() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "#000",
            }}
          >
            Services we provide
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            We build powerful solutions using a diverse and modern tech stack.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item size={{xs:12,md:4}} key={index}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  p: 4,
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 3 }}>{service.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#000",
                      lineHeight: 1.4,
                    }}
                  >
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
