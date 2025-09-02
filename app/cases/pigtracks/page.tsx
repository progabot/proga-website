import { Box, Container, Typography, Chip, Grid, Button, Card, CardContent } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Divider from "@mui/material/Divider"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import CustomerTestimonials from "@/components/cases/testimonials"
import CaseStudyHero from "@/components/cases/case-study-hero"
import CaseStudyOverview from "@/components/cases/case-study-overview"
import ChallengesList from "@/components/cases/challenges-list"
import SolutionsList from "@/components/cases/solutions-list"

export const metadata = {
  title: "PigTracks | Case Study | Proga Tech",
  description: "",
}

export default function PigtracksCaseStudy() {
  const challenges = [
    { text: "Fragmented field data" },
    { text: "Raw complexity of field inputs" },
    { text: "Manual workflows & compliance risks" },
    { text: "No real‑time pig visibility" },
    { text: "Disconnected team coordination" },
    { text: "Scaling across large operations" },
  ]

  const solutions = [
    {
      description:
        "Seamless integration from surveys to SiteDoc 360",
    },
    {
      description:
        'Intelligent data transformation with ML, IoT, cloud sync',
    },
    {
      description:
        "Automated workflows, alerts, and regulatory reporting",
    },
    {
      description: "Live tracking dashboards with anomaly detection",
    },
    {
      description: "Unified cloud platform for collaboration between operatorsand providers",
    },
    {
      description: "Flexible execution tools that support enterprise-level deployment",
    },
  ]

  const testimonials = [
    {
      authorName: "Ronald",
      authorTitle: "Brigham Young University",
      text: "Highly recommended. The problems went from easy to hard and towards the end It became a game for me to see if I could beat the score and achieve higher. I ended up with a 22 on PAT thanks to the great practice and techniques from Erudition PAT Prep.",

    },
    {
      authorName: "John",
      authorTitle: "McMaster University",
      text: "Your PAT videos were the absolute best by far. I was dying on the Keyhole problems and [other]’s videos were not helping. You actually did difficult examples in your videos and it helped me tremendously!",

    },
  ]

  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title="PigTracks"
          description="Real-time pipeline monitoring made simple. Track your equipment, get instant alerts when something's wrong, and keep everything running smoothly with live maps and smart automation."
          tags={["Cloud Platform", "Pipeline Integrity", "Data Management"]}
          image="/cases/pigtracks/hero-image.png"
          imageAlt="PigTracks application interface"
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/pigtracks/overview-cover.png",
          alt: "Pigtracks explanations interface",
          width: 500,
          height: 600
        }}
      >
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
          PigTracks is a cloud-based field execution platform designed for the pipeline integrity industry, with a focus on pigging operations.

          Its core mission is to "support the world's best pipeline integrity teams" by making the complex job of pigging and data management radically simpler and more transparent. The system turns raw field inputs into actionable intelligence so operators can run safer, more efficient, fully compliant pipeline programs.
        </Typography>

        <ChallengesList challenges={challenges} />
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="Track pigs in real-time, manage field data, and keep your whole team aligned while we handle the complexity so you can focus on safe, efficient pipeline operations."
      />

      <Image
        src="/cases/pigtracks/showcase.png"
        alt="PigTracks interface showcase"
        width={1440}
        height={2122}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  )
}
