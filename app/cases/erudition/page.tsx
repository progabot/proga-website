import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CustomerTestimonials from "@/components/cases/testimonials";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import CaseStudyHero from "@/components/cases/case-study-hero";
import ProjectShowCase from "@/components/cases/project-showcase";
import ProjectCTA from "@/components/shared/project-cta";
import CaseStudyCard from "@/components/cases/case-study-card";
import {
  ERUDITION_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  STRIDIST_CASE_STUDY,
} from "@/utils/cases";
import { CodeXml, FolderCode, Server } from "lucide-react";
import ExperienceErudition from "@/components/cases/experience-erudition";

export const metadata = {
  title: "Erudition | Case Study | Proga Tech",
  description:
    "Learning platform case study. Educational solution with course management, student tracking, and interactive learning tools for modern education.",
};

const CHALLENGES = [
  { text: "Rote memorization that doesn't stick" },
  { text: "Boring study materials that put you to sleep" },
  { text: "No real understanding of how concepts connect" },
  { text: "One-dimensional learning that doesn't engage your brain fully" },
];

const SOLUTIONS = [
  {
    title: "DAT perceptual ability",
    description:
      "Develop visual-spatial skills with 3D objects and challenging scenarios that mirror the actual PAT exam.",
  },
  {
    title: "GRE vocabulary",
    description:
      'Master challenging words through clever illustrations, word roots, and catchy mnemonics. Each word comes with origins, connections, and a "connotation meter" to help you truly understand meaning.',
  },
  {
    title: "Deep concept connections",
    description:
      "Connect new difficult words and concepts to things you already know, so they actually stick in your memory instead of being forgotten after the test.",
  },
  {
    title: "Visual + verbal learning",
    description:
      "We pair illustrations with explanations because your brain learns better with both.",
  },
  {
    title: "Smart repetition",
    description:
      "See the same concepts again at the right times so you don't forget them.",
  },
  {
    title: "Active engagement",
    description:
      "Learn through interactive quizzes and challenges rather than passive reading.",
  },
];

const TESTIMONIALS = [
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
  {
    authorName: "Hong-An",
    authorTitle: "LSU",
    text: "I love Erudition because of the different levels that they have to offer with the PAT.I would 100% recommend it to others.",
  },
  {
    authorName: "Joshua",
    authorTitle: "McMaster University",
    text: "Erudition has hands down the best practice problems for the cDAT - they're challenging, realistic, and the problems have detailed solutions that shape your attack approach on the PAT. Highly recommend! The videos are amazing as well.",
  },
  {
    authorName: "Hannah",
    authorTitle: "SUNY Oneonta",
    text: "I like the diagrams at the end of the problems. They are extremely helpful (most especially with TFE).I also love how there are 3 different levels of questions to choose from, so you are able to gain confidence in the beginning.",
  },
];

const otherCases = [PIGTRACKS_CASE_STUDY, STRIDIST_CASE_STUDY];

export default function EruditionCaseStudy() {
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={ERUDITION_CASE_STUDY.title}
          description={ERUDITION_CASE_STUDY.description}
          tags={ERUDITION_CASE_STUDY.tags}
          image={ERUDITION_CASE_STUDY.coverImage}
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/erudition/overview-cover.png",
          alt: "Erudition explanations interface",
          width: 500,
          height: 600,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#FFFFFF", fontWeight: 600, mb: 3 }}
        >
          Helping you make sense of things
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#FFFFFF", fontWeight: 400 }}
        >
          We use proven learning principles to make exam prep less stressful and
          more effective. Whether you're mastering GRE vocabulary or developing
          visual skills for the DAT, we're here to help you see how everything
          connects.
        </Typography>

        <ChallengesList
          challenges={CHALLENGES}
          title="Challenges"
          introText="Traditional learning was limiting:"
        />
      </CaseStudyOverview>

      <SolutionsList
        solutions={SOLUTIONS}
        subtitle="Master new skills the smart way. Personalized learning plans, progress tracking, and study tools that actually help you remember what you learn."
      />

      <ProjectShowCase
        image={{
          src: "/cases/erudition/showcase.jpg",
          width: 1440,
          height: 1980,
        }}
        imageAlt="Erudition interface showcase"
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <CustomerTestimonials
          testimonials={TESTIMONIALS}
          title="Why learners choose Erudition"
          footerText={{
            textBefore:
              "Join students who are building real understanding with Erudition or ",
            linkText: " explore it on YouTube",
            linkHref: "https://www.youtube.com/@eruditionpat",
            textAfter:
              " to see how we make learning visual, fun, and effective.",
          }}
        />
      </Container>

      <ExperienceErudition />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", mb: 6, color: "#1A1A1A" }}
            >
              Technology stack
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CodeXml color="#E498B7" size={30} />
              Frontend
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Next.js framework for enhanced performance and SEO
                optimization
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Storybook UI library for efficient component reuse across
                multiple projects
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • REST API integration for seamless data communication
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FolderCode color="#E498B7" size={30} />
              Backend
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Java with Spring Boot framework for robust application
                development
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Hibernate ORM for efficient database operations
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • PostgreSQL database for reliable data storage
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • REST API architecture for scalable service communication
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Server color="#E498B7" />
              DevOps
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Migration tools to manage databases
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • CDN setup and assets integration from MongoDB
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, color: "#737373" }}
              >
                • Infrastructure scalability & monitoring improvements
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ backgroundColor: "#f5f5f5", p: 4, mt: 6, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            As Stripe Payment Gateway integration experts, we implemented a
            comprehensive billing system for Erudition:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Monthly subscription billing with automatic 3-month course
                access
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • 100% coupon discounts for the priority student list
              </Typography>
              <Typography variant="body2">
                • Granular access to the courses based on the billing status
              </Typography>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <Image
                src="/stripe-logo.png"
                alt="Stripe"
                width={200}
                height={100}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      {/* Have a project idea? Section */}
      <ProjectCTA
        title=" Have a project idea?"
        subtitle=" Let's talk about it."
      />

      {/* Check out other cases Section */}
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1A1A", mb: 6 }}
        >
          Check out other cases
        </Typography>

        <Grid container spacing={4}>
          {otherCases.map((caseItem) => (
            <Grid size={{ xs: 12, md: 6 }} key={caseItem.href}>
              <CaseStudyCard
                title={caseItem.title ?? null}
                description={caseItem.description ?? null}
                mockupImage={caseItem.mockupImage ?? ""}
                mockupAlt={caseItem.mockupAlt ?? ""}
                href={caseItem.href}
                logo={caseItem.logo ?? null}
                small={true}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
