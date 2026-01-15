import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trusted-by";
import DevelopmentProcess from "@/components/home/development-process";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Mission from "@/components/home/mission";
import ProjectCTA from "@/components/shared/project-cta";
import SnowAnimation from "@/components/home/SnowAnimation";

function LoadingSpinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
      <CircularProgress />
    </Box>
  );
}

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <SnowAnimation />

      <Box className="snow-container">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <TrustedBy />
        </Suspense>
      </Box>

      <Suspense fallback={<LoadingSpinner />}>
        <DevelopmentProcess />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Mission />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ProjectCTA
          title="Got a project idea?"
          subtitle="We'd love to hear from you. Reach out to us directly and let's talk."
        />
      </Suspense>
    </Box>
  );
}
