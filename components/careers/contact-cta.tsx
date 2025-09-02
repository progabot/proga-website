import { Container, Typography, Box, Button } from "@mui/material";
import { East, NorthEast } from "@mui/icons-material";
import Link from "next/link";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function ContactCTA() {
  return (
    <Container
      maxWidth={PAGE_CONTAINER_MAX_WIDTH}
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <Box
        sx={{
          backgroundColor: "#f8bbd9",
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: 700,
            mb: 2,
            color: "#000",
          }}
        >
          Didn't find a role that matches your skills?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "#333",
            mb: 4,
            maxWidth: "600px",
          }}
        >
          We'd still love to hear from you. Reach out to us directly and let's
          talk.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          endIcon={<East />}
          component={Link}
          href="/contact"
        >
          Contact us
        </Button>
      </Box>
    </Container>
  );
}
