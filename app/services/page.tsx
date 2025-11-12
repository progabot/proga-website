import { Box } from "@mui/material";
import ServicesHero from "@/components/services/services-hero";
import ClientTestimonials from "@/components/services/client-testimonials";
import TechnologyStack from "@/components/services/technology-stack";
import ProjectCTA from "@/components/shared/project-cta";
import FullCycleWebDevelopment from "@/components/services/full-cycle-web-development";
import CrossPlatformApplications from "@/components/services/cross-platform-applications";
import StripeIntegrationExpertise from "@/components/services/stripe-integration-expertise";
import ProductDesignUXUI from "@/components/services/product-design-ux-ui";

export const metadata = {
  title: "Services | Proga Tech",
  description:
    "Full-cycle AI-driven development: Research, Product Design, UX/UI Design, Cross-Platform Development. Complete technology stack from concept to deployment.",
};

export default function ServicesPage() {
  return (
    <Box>
      <ServicesHero />
      <FullCycleWebDevelopment />
      <CrossPlatformApplications />
      <StripeIntegrationExpertise />
      <ProductDesignUXUI />
      <ClientTestimonials />
      <TechnologyStack />
      <ProjectCTA
        title="Got a project idea?"
        subtitle="We'd love to hear from you. Reach out to us directly and let's talk."
      />
    </Box>
  );
}
