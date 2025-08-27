import { Box } from "@mui/material"
import ServicesHero from "@/components/services/services-hero"
import ClientTestimonials from "@/components/services/client-testimonials"
import TechnologyStack from "@/components/services/technology-stack"
import ProjectCTA from "@/components/shared/project-cta"

export const metadata = {
  title: "Services | Proga Tech",
  description: "",
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
