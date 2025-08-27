"use client"

import { Box, Container, Typography, Button } from "@mui/material"
import { NorthEast } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import Link from "next/link"

export default function ProjectCTA() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            backgroundColor: "#2a2a2a",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 600,
              mb: 2,
              color: "#ffffff",
            }}
          >
            Got a project idea?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "#ffffff",
              mb: 4,
              opacity: 0.9,
            }}
          >
            We'd love to hear from you. Reach out to us directly and let's talk.
          </Typography>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<NorthEast />}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Contact us
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
