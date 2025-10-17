import { Container, Typography, Box } from "@mui/material";
import CaseStudyCard from "@/components/cases/case-study-card";
import ProjectCTA from "@/components/shared/project-cta";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { CASE_STUDIES, FEATURED_CASE_STUDIES } from "@/utils/cases";
import AnimatedPageTitle from "@/components/cases/animated-page-title";

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
          title="Meet our case studies"
          fontSize={{ xs: "2.5rem", md: "3.5rem" }}
          fontWeight={700}
          color="#000"
          textAlign="left"
          marginBottom={8}
        />

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
              logoWidth={caseStudy.logoWidth}
              logoHeight={caseStudy.logoHeight}
            />
          ))}
        </Box>
      </Container>

      <ProjectCTA
        title="Got a project idea?"
        subtitle="We'd love to hear from you. Reach out to us directly and let's talk."
      />
    </Box>
  );
}
