import { Container, Box } from "@mui/material";
import ProjectCTA from "@/components/shared/project-cta";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import AnimatedPageTitle from "@/components/shared/animated-page-title";
import Cases from "@/components/cases/cases";

export const metadata = {
  title: "Case studies | Proga Tech",
  description:
    "Proga's portfolio: Erudition, Miaplaza, Stridist, PigTracks, ProRapp, Probig. Real client projects across education, healthcare, fitness, and real estate.",
};

export default function CasesPage() {
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <AnimatedPageTitle
          fontSize={{ xs: "2.5rem", md: "3.5rem" }}
          fontWeight={700}
          color="#000"
          textAlign="left"
          marginBottom={8}
          title="Our Case Studies"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, lg: 10 },
          }}
        >
          <Cases />
        </Box>
      </Container>

      <ProjectCTA
        title="Got a project idea?"
        subtitle="We'd love to hear from you. Reach out to us directly and let's talk."
      />
    </Box>
  );
}
