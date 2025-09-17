import { Container, Typography, Box } from "@mui/material";
import CaseStudyCard from "@/components/cases/case-study-card";
import ProjectCTA from "@/components/shared/project-cta";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { CASE_STUDIES, FEATURED_CASE_STUDIES } from "@/utils/cases";

export const metadata = {
  title: "Case studies | Proga Tech",
  description:
    "Proga's portfolio: Erudition, Miaplaza, Stridist, PigTracks, ProRapp, Probig. Real client projects across education, healthcare, fitness, and real estate.",
};

export default function CasesPage() {
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 700,
            color: "#000",
            mb: 8,
            textAlign: "left",
          }}
        >
          Meet our case studies
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.title}
              logo={caseStudy.logo}
              title={caseStudy.title}
              description={caseStudy.description}
              tags={caseStudy.tags}
              mockupImage={caseStudy.coverImage}
              mockupAlt={caseStudy.coverImageShort}
              href={caseStudy.href}
            />
          ))}
        </Box>
      </Container>

      <ProjectCTA />
    </Box>
  );
}
