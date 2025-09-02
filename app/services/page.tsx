import { Box } from "@mui/material"
import ServicesHero from "@/components/services/services-hero"
import ClientTestimonials from "@/components/services/client-testimonials"
import TechnologyStack from "@/components/services/technology-stack"
import ProjectCTA from "@/components/shared/project-cta"

export const metadata = {
  title: "Services | Proga Tech",
  description: "Full-cycle development: Research, Product Design, UX/UI Design, Cross-Platform Development. Complete technology stack from concept to deployment.",
}

export default function ServicesPage() {
  return (
    <Box>
      <ServicesHero />
      <ClientTestimonials />
      <TechnologyStack />
      <ProjectCTA />
    </Box>
  )
}
