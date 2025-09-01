"use client"

import { Box, Typography, Card, CardContent } from "@mui/material"
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from "framer-motion"
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout"
import { Bot, MonitorSmartphone, WalletCards, Palette } from "lucide-react"

const services = [
  {
    icon: <Bot color="#E498B7" size="2rem" />,
    title: "Full-Cycle AI-Driven Web Development",
    description: "",
    isDark: true,
  },
  {
    icon: <MonitorSmartphone color="#E498B7" size="2rem" />,
    title: "Cross-Platform Web Mobile Development",
    description: "",
    isDark: false,
  },
  {
    icon: <WalletCards color="#E498B7" size="2rem" />,
    title: "Stripe Payment Integration Expertise",
    description: "",
    isDark: false,
  },
  {
    icon: <Palette color="#E498B7" size="2rem" />,
    title: "End-to-End Product Design & UX/UI",
    description: "",
    isDark: false,
  },
]

export default function Services() {
  const stickyContent = (
    <>
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
    </>
  )

  const mainContent = (
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
              backgroundColor: service.isDark ? "#1A1A1A" : "transparent",
              color: service.isDark ? "#fff" : "#000",
              borderRadius: 3,
              p: 3,
              pb: 0,
              border: service.isDark ? "none" : "1px solid #e0e0e0",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: 56, 
                height: 56, 
                borderRadius: "50%", 
                mb: 5, 
                backgroundColor: service.isDark ? "#2C2C2C" : "#F7F7F7" 
              }}>
                {service.icon}
              </Box>
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
  )

  return (
    <Box component="section">
      <StickyTwoColumnLayout
        stickyContent={stickyContent}
        mainContent={mainContent}
        backgroundColor="#fff"
        containerProps={{ sx: { py: { xs: 8, md: 12 } } }}
        spacing={8}
        leftColumnProps={{ size: { xs: 12, lg: 6 } }}
        rightColumnProps={{ size: { xs: 12, lg: 6 } }}
      />
    </Box>
  )
}
