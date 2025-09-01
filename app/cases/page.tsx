import { Container, Typography, Box } from "@mui/material"
import CaseStudyCard from "@/components/cases/case-study-card"
import ProjectCTA from "@/components/shared/project-cta"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export const metadata = {
  title: "Case studies | Proga Tech",
  description: "",
}

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
          <CaseStudyCard
            logo="/stridist-logo.png"
            title="Stridist"
            description="Built for fitness trainers who want to focus on what they love - training people. We handle the scheduling, client management, and business stuff so you can concentrate on changing lives."
            tags={["Healthcare", "Fitness", "Coaching"]}
            mockupImage="/cases/stridist/cover-image.png"
            mockupAlt="Stridist mobile app mockups showing trainer scheduling and client management"
            href="/cases/stridist"
          />

          <CaseStudyCard
            logo="/erudition-logo.png"
            title="Erudition"
            description="Learning shouldn't be complicated. We're creating a space where teachers can easily build engaging courses and students actually enjoy the learning process."
            tags={["Education", "E-learning"]}
            mockupImage="/cases/erudition/cover-image.png"
            mockupAlt="Erudition desktop platform showing course creation interface"
            href="/cases/erudition"
            reverse
          />

          <CaseStudyCard
            logo="/pigtracks-logo.png"
            title="PigTracks"
            description="Real-time pipeline monitoring made simple. Track your equipment, get instant alerts when something's wrong, and keep everything running smoothly with live maps and smart automation."
            tags={["Cloud Platform", "Pipeline Integrity", "Data Management"]}
            mockupImage="/cases/pigtracks/cover-image.png"
            mockupAlt="PigTracks dashboard showing pipeline monitoring on multiple devices"
            href="/cases/pigtracks"
          />
        </Box>
      </Container>

      <ProjectCTA />
    </Box>
  )
}
