import { Suspense } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import AnimatedHeader from "@/components/contact/animated-header";

export const metadata = {
  title: "Contact Us | Proga Tech",
  description:
    "Get in touch with Proga Tech. Contact form for project inquiries and collaboration. Let's discuss your development needs and bring ideas to life.",
};

function LoadingSpinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
      <CircularProgress />
    </Box>
  );
}

export default function ContactPage() {
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Box component="section" sx={{ py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <AnimatedHeader />
        </Container>
      </Box>

      <Box component="section" sx={{ pb: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Suspense fallback={<LoadingSpinner />}>
                <ContactForm />
              </Suspense>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Suspense fallback={<LoadingSpinner />}>
                <ContactInfo />
              </Suspense>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
