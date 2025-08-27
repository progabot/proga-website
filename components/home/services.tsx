"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { Computer, Smartphone, CreditCard } from "@mui/icons-material"
import { motion } from "framer-motion"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const services = [
  {
    icon: <Computer sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    title: "AI-driven WEB development",
    description: "",
    isDark: true,
  },
  {
    icon: <Smartphone sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    title: "All in one WEB + Apps development",
    description: "",
    isDark: false,
  },
  {
    icon: <CreditCard sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    title: "Stripe",
    description: "",
    isDark: false,
  },
]

export default function Services() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={8}>
          <Grid item size={{xs:12,lg:6}}>
                      <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2rem" }, mb: 4, color: "#000" }}
            >
              Services we provide
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}>
              We build powerful solutions using a modern tech stack, but more importantly, we choose the right tools for
              your specific needs.
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}>
              We are certified Stripe experts specializing in secure payment processing, subscription management, and
              e-commerce solutions. From simple checkouts to complex billing systems.
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7, fontSize: "1rem" }}>
              Our team has hands-on experience with everything from React and Node.js to AWS deployment, so you get
              solutions that really work.
            </Typography>
          </Grid>

          <Grid item size={{xs:12,lg:6}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: service.isDark ? "#2a2a2a" : "#fff",
                      color: service.isDark ? "#fff" : "#000",
                      borderRadius: 3,
                      p: 3,
                      border: service.isDark ? "none" : "1px solid #e0e0e0",
                      boxShadow: service.isDark ? "none" : "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ mb: 2 }}>{service.icon}</Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 500,
                          color: service.isDark ? "#fff" : "#000",
                        }}
                      >
                        {service.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
