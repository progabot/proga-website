import { Box } from "@mui/material"
import AboutHero from "@/components/about/about-hero"
import AboutStats from "@/components/about/about-stats"
import OurStory from "@/components/about/our-story"
import InstagramSection from "@/components/about/instagram-section"
import ValuesSection from "@/components/about/values-section"

export const metadata = {
  title: "About Us | ProgaTech",
  description: "Learn about ProgaTech's story, team, and mission to grow talent and build meaningful projects",
}

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
      <ValuesSection />
    </Box>
  )
}
