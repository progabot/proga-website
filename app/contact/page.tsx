import { Suspense } from "react"
import { Box, Container, Grid, Typography, CircularProgress } from "@mui/material"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export const metadata = {
  title: "Contact Us | Proga Tech",
  description: "",
}

function LoadingSpinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
      <CircularProgress />
    </Box>
  )
}

export default function ContactPage() {
  return (
    <Box component="main" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="section" sx={{ py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: "bold",
              mb: 3,
              color: "text.primary",
            }}
          >
            Let's talk!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.secondary",
              maxWidth: "1000px",
              mb: 6,
            }}
          >
            Whether you have a groundbreaking project in mind, a question about our services, or just want to say hello,
            we're eager to hear from you.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ pb: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Grid container spacing={2}>
            <Grid size={{xs:12,lg:6}}>
              <Suspense fallback={<LoadingSpinner />}>
                <ContactForm />
              </Suspense>
            </Grid>

            <Grid size={{xs:12,lg:6}}>
              <Suspense fallback={<LoadingSpinner />}>
                <ContactInfo />
              </Suspense>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
