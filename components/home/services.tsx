"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import { SERVICES } from "@/utils/services";
import { SectionTitle } from "@/components/shared/section-title";

export default function Services() {
  const stickyContent = (
    <>
      <SectionTitle
        id="services"
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2rem" },
          color: "#000",
          mb: 4,
        }}
      >
        Services we provide
      </SectionTitle>
      <Typography
        variant="body1"
        sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}
      >
        We build powerful solutions using a modern tech stack, but more
        importantly, we choose the right tools for your specific needs.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}
      >
        We are certified Stripe experts specializing in secure payment
        processing, subscription management, and e-commerce solutions. From
        simple checkouts to complex billing systems.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#666", lineHeight: 1.7, fontSize: "1rem" }}
      >
        Our team has hands-on experience with everything from React and Node.js
        to AWS deployment, so you get solutions that really work.
      </Typography>
    </>
  );

  const mainContent = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {SERVICES.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            sx={{
              backgroundColor: index === 0 ? "#1A1A1A" : "transparent",
              color: service.isDark ? "#fff" : "#000",
              borderRadius: 3,
              p: 3,
              pb: 0,
              border: service.isDark ? "none" : "1px solid #e0e0e0",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  mb: 5,
                  backgroundColor: service.isDark ? "#2C2C2C" : "#F7F7F7",
                }}
              >
                {<service.icon color="#E498B7" size="2rem" />}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "regular",
                  color: service.isDark ? "#fff" : "#000",
                  boxShadow: "none",
                }}
              >
                {service.title}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );

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
  );
}
