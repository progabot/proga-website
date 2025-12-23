"use client";

import { Box, Typography, CircularProgress, useTheme } from "@mui/material";

export default function ContactFormLoading() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        p: 5,
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CircularProgress
        size={64}
        sx={{ mb: 3, color: theme.palette.primary.main }}
      />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: theme.palette.text.secondary }}
      >
        Sending your message...
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: theme.palette.text.secondary,
          opacity: 0.7,
        }}
      >
        This will only take a moment
      </Typography>
    </Box>
  );
}
