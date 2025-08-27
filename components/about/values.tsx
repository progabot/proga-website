"use client"

import type React from "react"

import { Box, Container, Typography, Grid, Paper } from "@mui/material"
import { SupportAgent, TrendingUp, PersonPin, Visibility, Psychology } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Values() {
  const values: Value[] = [
    {
      icon: <SupportAgent sx={{ fontSize: 40, color: "#E498B7" }} />,
      title: "Support",
      description: "We stand by our clients and team members",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#E498B7" }} />,
      title: "Think big",
      description: "Every project has potential for greatness",
    },
    {
      icon: <PersonPin sx={{ fontSize: 40, color: "#E498B7" }} />,
      title: "Customer first",
      description: "Your success is our priority",
    },
    {
      icon: <Visibility sx={{ fontSize: 40, color: "#E498B7" }} />,
      title: "Openness and transparency",
      description: "Clear communication, honest processes",
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: "#E498B7" }} />,
      title: "Curiosity and lifelong learning",
      description: "We never stop improving",
    },
  ]

  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          mb: 6,
          fontWeight: "bold",
        }}
      >
        Values
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#888",
          mb: 6,
          maxWidth: 600,
        }}
      >
        Our values guide every decision we make and every line of code we write. We believe great products come from
        great relationships built on trust, transparency, and shared ambition.
      </Typography>

      <Grid container spacing={4}>
        {values.map((value, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              sx={{
                backgroundColor: "#1a1a1a",
                color: "white",
                p: 4,
                borderRadius: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: 3 }}>{value.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "white",
                }}
              >
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#ccc",
                  lineHeight: 1.6,
                }}
              >
                {value.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
