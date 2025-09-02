import { Box, Container, Typography, Chip, Grid, Button, Card, CardContent } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Divider from "@mui/material/Divider"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import CustomerTestimonials from "@/components/cases/testimonials"
import CaseStudyOverview from "@/components/cases/case-study-overview"
import ChallengesList from "@/components/cases/challenges-list"
import SolutionsList from "@/components/cases/solutions-list"
import CaseStudyHero from "@/components/cases/case-study-hero"

export const metadata = {
  title: "Stridist | Case Study | Proga Tech",
  description: "Fitness coaching platform case study. Intuitive workout builder, client management, progress tracking, and automated systems for fitness trainers.",
}

export default function StridistCaseStudy() {
  const solutions = [
    {
      title: "Intuitive workout builder",
      description:
        "A user-friendly interface allows coaches to rapidly build training and nutrition programs, including exercise demo videos and full follow-along workout videos.",
    },
    {
      title: "Client management",
      description:
        'Features for tracking client progress, assigning tasks and habits, automating check-ins, and client onboarding. Coaches can manage all client communication within the app.',
    },
    {
      title: "Сlient progress tracking",
      description:
        "Improved client profile pages with valuable features like step counters, nutrition targets, goals, and progress photo tracking, enabling coaches to monitor results and assess training performance effectively.",
    },
    {
      title: "Growth support",
      description: "Beyond just a coaching app, Stridist provides resources and support to help coaches grow their businesses, including marketing suites, high-converting website templates, custom branded recipe books, and business mentoring.",
    },
    {
      title: "Automations & systems",
      description: "Features to automate check-ins, client onboarding, and other routine tasks, allowing coaches to focus more on coaching and less on administration.",
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
          title="Stridist"
          description="Built for fitness trainers who want to focus on what they love - training people. We handle the scheduling, client management, and business stuff so you can concentrate on changing lives."
          tags={["Healthcare", "Fitness", "Coaching"]}
          image="/cases/stridist/hero-image.png"
          imageAlt="Stridist application interface"
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/stridist/overview-cover.png",
          alt: "Stridist explanations interface",
          width: 500,
          height: 600
        }}
      >
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
          An online platform for fitness trainers that helps them manage their clients, create personalized programs, and grow their business from anywhere.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Challenges
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
          Fitness and nutrition coaches often face challenges in managing their clients, creating personalized programs, tracking progress, and handling administrative tasks efficiently. Many rely on a fragmented set of tools, leading to inefficiencies, increased costs for both coaches and their clients. The core challenge was to consolidate these disparate functions into a single, intuitive, and powerful platform that caters specifically to the needs of fitness professionals.
        </Typography>
      </CaseStudyOverview>

      <SolutionsList 
        solutions={solutions}
        subtitle="Everything you need to run your coaching business like a pro. Build workouts your clients love, track their progress, manage communications, and grow your business while we take care of the boring admin work so you can focus on coaching."
      />

      <Image
        src="/cases/stridist/showcase.png"
        alt="Stridist interface"
        width={1440}
        height={650}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  )
}
