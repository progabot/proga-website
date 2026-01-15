"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  SvgIcon,
} from "@mui/material";
import {
  Sprout,
  HeartHandshake,
  MessageCircleHeart,
  CodeXml,
} from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

const missionItems = [
  {
    icon: ({ color, size }: { color: string; size: string }) => (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        sx={{ fontSize: size, color: color, "& path": { fill: "none" } }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-code"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
        <path d="M7 20h4" />
        <path d="M9 16v4" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
      </SvgIcon>
    ),
    title: "Build meaningful tech",
    description:
      "Creating user-friendly digital products that solve real problems and make a positive impact",
  },
  {
    icon: Sprout,
    title: "Grow talent",
    description: "We invest in people, our most valuable asset",
  },
  {
    icon: HeartHandshake,
    title: "Support Ukraine",
    description:
      "We contribute to victory with regular donations and purposeful projects",
  },
  {
    icon: MessageCircleHeart,
    title: "Lead with heart and resilience",
    description:
      "Born in hard times, we carry creativity, care, and strength into everything we do",
  },
];

export default function Mission() {
  const theme = useTheme();
  return (
    <Box sx={{ pt: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <SectionTitle
          id="mission"
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 6,
            color: theme.palette.background.default,
          }}
        >
          Our mission
        </SectionTitle>

        <Grid container spacing={2}>
          {missionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  sx={{
                    height: "100%",
                    border: `1px solid ${theme.palette.grey[200]}`,
                    borderRadius: 2,
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ p: 3, pb: 0 }}>
                    <Box sx={{ mb: 0 }}>
                      <IconComponent
                        size={40}
                        color={theme.palette.primary.main}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        mt: { xs: 2, md: 4 },
                        mb: 2,
                        color: theme.palette.background.default,
                        minHeight: { xs: "none", md: "67px" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.grey[600],
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
