"use client";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  Favorite,
  Lightbulb,
  People,
  Visibility,
  School,
} from "@mui/icons-material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";

export default function ValuesSection() {
  const values = [
    {
      icon: <Favorite sx={{ fontSize: 40, color: "#666" }} />,
      title: "Support",
      description: "We stand by our clients and team members",
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: "#666" }} />,
      title: "Think big",
      description: "Every project has potential for greatness",
    },
    {
      icon: <People sx={{ fontSize: 40, color: "#666" }} />,
      title: "Customer first",
      description: "Your success is our priority",
    },
    {
      icon: <Visibility sx={{ fontSize: 40, color: "#666" }} />,
      title: "Openness and transparency",
      description: "Clear communication, honest processes",
    },
    {
      icon: <School sx={{ fontSize: 40, color: "#666" }} />,
      title: "Curiosity and lifelong learning",
      description: "We never stop improving",
    },
  ];

  const stickyContent = (
    <>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Values
      </Typography>
      <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.6 }}>
        Our values guide every decision we make and every line of code we write.
        We believe great products come from great relationships built on trust,
        transparency, and shared ambition.
      </Typography>
    </>
  );

  const mainContent = (
    <Grid container spacing={3}>
      {values.map((value, index) => (
        <Grid size={12} key={index}>
          <Card
            sx={{
              backgroundColor: "#333",
              color: "white",
              border: "none",
              boxShadow: "none",
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", p: 3 }}
            >
              <Box sx={{ mr: 3, mb: 4 }}>{value.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {value.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      containerProps={{ sx: { color: "white" } }}
    />
  );
}
