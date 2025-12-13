"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { SectionTitle } from "@/components/shared/section-title";

const values = [
  {
    title: "People First",
    description: "We invest in people — our most valuable asset",
    path: "/icons/people-first.svg",
  },
  {
    title: "User-Centric",
    description: "Every product is designed with a user-first strategy",
    path: "/icons/user-centric.svg",
  },
  {
    title: "Social Impact",
    description: "We actively support Ukraine through projects and donations",
    path: "/icons/social-impact.svg",
  },
  {
    title: "Flexible & Reliable",
    description:
      "Remote or hybrid work, career growth, and a supportive environment",
    path: "/icons/flexible-reliable.svg",
  },
];

export default function WhyChooseProga() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={PAGE_CONTAINER_MAX_WIDTH}
      sx={{ py: { xs: 6, md: 7 } }}
    >
      <SectionTitle
        id="why-choose-proga"
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 500,
          mb: 6,
          color: theme.palette.text.primary,
        }}
      >
        Why choose Proga?
      </SectionTitle>

      <Grid container spacing={2}>
        {values.map((value, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border: `1px solid ${theme.palette.grey[200]}`,
                  borderRadius: 1,
                  boxShadow: "none",
                  transition: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ p: 2, pb: 0, mr: 1, flexGrow: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.grey[600],
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    p: 2,
                    pt: 0,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={value.path}
                    alt={value.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
