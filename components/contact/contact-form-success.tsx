"use client";

import { Box, Typography, Button, useTheme } from "@mui/material";
import { CheckCircle2 } from "lucide-react";

interface ContactFormSuccessProps {
  onNewResponse: () => void;
}

export default function ContactFormSuccess({
  onNewResponse,
}: ContactFormSuccessProps) {
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
      }}
    >
      <CheckCircle2
        size={64}
        style={{
          color: theme.palette.success.main,
          marginBottom: "24px",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: theme.palette.text.secondary,
        }}
      >
        Message sent successfully!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          opacity: 0.8,
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Thank you for reaching out. We'll get back to you as soon as possible.
      </Typography>
      <Button
        variant="contained"
        onClick={onNewResponse}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: "black",
          fontWeight: "bold",
          py: 1.5,
          px: 4,
          "&:hover": { backgroundColor: theme.palette.grey[50] },
        }}
      >
        Submit another response
      </Button>
    </Box>
  );
}
