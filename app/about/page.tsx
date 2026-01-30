import { Box } from "@mui/material";
import AboutHero from "@/components/about/about-hero";
import AboutStats from "@/components/about/about-stats";
import OurStory from "@/components/about/our-story";
import InstagramSection from "@/components/about/instagram-section";
import ValuesSection from "@/components/about/values-section";
import TeamMembers from "@/components/about/team-members";
import InspiringMomentsSection from "@/components/about/inspiring-moments-section";
import WhyPink from "@/components/about/why-pink";
import CeoQuote from "@/components/about/ceo-quote";

export const metadata = {
  title: "About Us | Proga Tech",
  description:
    "Meet Proga Tech team. Experienced developers and designers creating digital solutions. Our story, values, and expertise.",
};

export default function AboutPage() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <AboutHero />
      <AboutStats />
      <OurStory />
      <InstagramSection />
      <CeoQuote />
      <WhyPink />
      <ValuesSection />
      <TeamMembers />
      <InspiringMomentsSection />
    </Box>
  );
}
