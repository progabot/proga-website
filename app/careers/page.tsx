import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import CareersHero from "@/components/careers/careers-hero";
import WhyChooseProga from "@/components/careers/why-choose-proga";
import JobListings from "@/components/careers/job-listings";
import ProjectCTA from "@/components/shared/project-cta";

function LoadingSpinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
      <CircularProgress />
    </Box>
  );
}

export const metadata = {
  title: "Careers | Proga Tech",
  description:
    "Join Proga Tech! Career opportunities in web development and design. People-first approach, flexible work environment.",
};

export default function CareersPage() {
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <CareersHero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <WhyChooseProga />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <JobListings />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ProjectCTA
          title="Didn't find a role that matches your skills?"
          subtitle="We'd still love to hear from you! Send your CV and a short message to vacancies@proga.tech, or use the button below to connect."
          mode="pink"
        />
      </Suspense>
    </Box>
  );
}
