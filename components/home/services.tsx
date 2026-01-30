"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import { SERVICES } from "@/utils/services";
import { SectionTitle } from "@/components/shared/section-title";
import Link from "next/link";
import { East } from "@mui/icons-material";

export default function Services() {
  const theme = useTheme();
  const stickyContent = (
    <>
      <SectionTitle
        id="services"
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2rem" },
          color: theme.palette.background.default,
          mb: 4,
        }}
      >
        Services we provide
      </SectionTitle>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.grey[600],
          mb: 4,
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        Our focus is on delivering reliable, high-value products that solve real
        user problems first. We combine user-centric design with AI-accelerated
        development, and we secure your revenue with Stripe expertise. We
        provide the full, end-to-end solution from strategy to product launch
      </Typography>
      <Button
        variant="outlined"
        sx={{
          display: { xs: "none", lg: "inline-flex" },
          borderColor: theme.palette.background.default,
          color: theme.palette.background.default,
          backgroundColor: "transparent",
          borderRadius: 2,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: theme.palette.grey[50],
            borderColor: theme.palette.background.default,
          },
          "& .MuiButton-endIcon": {
            transition: "transform 0.3s ease",
          },
          "&:hover .MuiButton-endIcon": {
            transform: "translateX(4px)",
          },
        }}
        endIcon={<East />}
        component={Link}
        href="/services"
      >
        Learn more
      </Button>
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
              backgroundColor:
                index === 0 ? theme.palette.background.default : "transparent",
              color: service.isDark
                ? theme.palette.background.paper
                : theme.palette.background.default,
              borderRadius: 3,
              p: 3,
              pb: 0,
              border: service.isDark
                ? "none"
                : `1px solid ${theme.palette.grey[200]}`,
              boxShadow: "none",
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
                  backgroundColor: service.isDark
                    ? theme.palette.grey[900]
                    : "#F7F7F7",
                }}
              >
                {
                  <service.icon
                    color={
                      service.isDark
                        ? theme.palette.background.paper
                        : theme.palette.secondary.main
                    }
                    size="2rem"
                  />
                }
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "regular",
                  color: service.isDark
                    ? theme.palette.background.paper
                    : theme.palette.background.default,
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
        backgroundColor={theme.palette.background.paper}
        containerProps={{ sx: { py: { xs: 8, md: 12 } } }}
        spacing={8}
        leftColumnProps={{ size: { xs: 12, lg: 6 } }}
        rightColumnProps={{ size: { xs: 12, lg: 6 } }}
      />
    </Box>
  );
}
