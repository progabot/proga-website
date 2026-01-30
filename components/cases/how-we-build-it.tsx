"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "@/components/shared/section-title";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import Image from "next/image";

interface TechItem {
  icon: string;
  title: string;
  description: string;
}

interface TechSection {
  title: string;
  items: TechItem[];
}

interface PaymentFeature {
  text: string;
}

interface HowWeBuiltItProps {
  subtitle?: string;
  techSections: TechSection[];
  paymentSection?: {
    title: string;
    description: string;
    features: PaymentFeature[];
    icon: string;
  };
}

export default function HowWeBuiltIt({
  subtitle,
  techSections,
  paymentSection,
}: HowWeBuiltItProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="how-we-built-it"
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}
        >
          How we built it
        </SectionTitle>

        {subtitle && (
          <Typography
            variant="body1"
            sx={{ mb: 6, color: theme.palette.grey[500] }}
          >
            {subtitle}
          </Typography>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            mb: 6,
          }}
        >
          {techSections.map((section, idx) => (
            <Box key={idx}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                {section.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {section.items.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 64,
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#D5EEF4",
                        borderRadius: 1,
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={32}
                        height={32}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.grey[600], lineHeight: 1.2 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {paymentSection && (
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 3, color: theme.palette.text.primary }}
            >
              {paymentSection.title}
            </Typography>

            <Box
              sx={{
                backgroundColor: theme.palette.grey[50],
                borderRadius: 2,
                p: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: theme.palette.text.primary }}
                >
                  {paymentSection.description}
                </Typography>

                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {paymentSection.features.map((feature, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {feature.text}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={paymentSection.icon}
                  alt={paymentSection.title}
                  width={160}
                  height={160}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
