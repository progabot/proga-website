import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CustomerTestimonials from "@/components/cases/testimonials";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import CaseStudyHero from "@/components/cases/case-study-hero";
import ProjectShowCase from "@/components/cases/project-showcase";
import ProjectCTA from "@/components/shared/project-cta";
import {
  PROBIG_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  ERUDITION_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  PRORAPP_CASE_STUDY,
} from "@/utils/cases";
import { CodeXml, FolderCode, Server } from "lucide-react";
import TechnologyStack from "@/components/cases/technology-stack";
import OtherCases from "@/components/cases/other-cases";
import MeetOrysia from "@/components/cases/probig/MeetOrysia";

export const metadata = {
  title: "Probig | Case Study | Proga Tech",
  description:
    "Your personal fitness journey is now one click away. Join online marathons, build healthy habits, get daily motivation from experts, and track your progress all in one place.",
};

export default function ProbigCaseStudy() {
  const challenges = [
    {
      text: "Training data lost in endless Excel sheets and email chains",
    },
    {
      text: "Coaches struggling to reach athletes, progress updates getting lost",
    },
    {
      text: "Hours wasted on administrative tasks instead of actual coaching",
    },
    {
      text: "Legacy tools that don't work on mobile or support modern features",
    },
  ];

  const solutions = [
    {
      title: "Centralized dashboard",
      description: "All user data, training plans, and progress in one place",
    },
    {
      title: "Seamless communication",
      description:
        "Direct messaging between coaches and athletes with progress sharing",
    },
    {
      title: "Smart calendar",
      description: "Never miss another training session or club event",
    },
    {
      title: "Real-time progress tracking",
      description:
        "Watch your entire club's improvement unfold in beautiful, easy-to-read formats",
    },
    {
      title: "Mobile-first design",
      description: "Full functionality on any device, anywhere, anytime",
    },
  ];

  const TESTIMONIALS = [
    {
      authorName: "Natalia",
      text: "I remember my torments choosing a running club. I remember that inner relief when I called PROBIG. This is a superb project, destined only for success, I'm convinced.",
    },
    {
      authorName: "Marichka",
      text: "ProBig is not just a club, it's about love, about support, about victory over your laziness and not only!",
    },
    {
      authorName: "Markiyan",
      text: "Objectively and subjectively, this turned out to be the best sports club I've ever seen, and I've seen many during my amateur career.",
    },
  ];

  const otherCases = [
    STRIDIST_CASE_STUDY,
    ERUDITION_CASE_STUDY,
    PIGTRACKS_CASE_STUDY,
    PRORAPP_CASE_STUDY,
  ];
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={PROBIG_CASE_STUDY.title}
          description={PROBIG_CASE_STUDY.description}
          tags={PROBIG_CASE_STUDY.tags}
          country={PROBIG_CASE_STUDY.country}
          isGlobal={PROBIG_CASE_STUDY.isGlobal ?? false}
          image={PROBIG_CASE_STUDY.coverImage}
        />
      </Container>

      <CaseStudyOverview
        disableBottomPadding={true}
        isFixedImage
        imageOffsetX={{ xs: "80px", md: 0 }}
        image={{
          src: "/cases/probig/overview-cover.png",
          alt: "Propbig explanations interface",
          width: 650,
          height: 700,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, fontWeight: 400, color: "#FFFFFF" }}
        >
          Probig is a mobile application for a local running club Probig that
          gives athletes instant access to their schedules and performance data
          while the web-based coach platform serves for simplified communication
          and performance tracking.
        </Typography>

        <ChallengesList challenges={challenges} />
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="Probig combines a smart calendar, training plans, and progress tracking into one centralized dashboard that combines training plans and real-time progress tracking. "
      />

      <ProjectShowCase
        image={{
          src: "/cases/probig/showcase.png",
          width: 1440,
          height: 2122,
        }}
        imageMobile={{
          src: "/cases/probig/showcase-mobile.png",
          width: 600,
          height: 1000,
        }}
        imageAlt="Probig interface showcase"
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <CustomerTestimonials
          testimonials={TESTIMONIALS}
          title="Why clients love Probig"
          footerText={{
            textBefore:
              "Whether you're coaching five runners or managing a whole club, Probig helps you stay organized, connected, and focused on what matters. ",
            linkText: "Follow Probig on Instagram",
            linkHref: "https://www.instagram.com/probig.club/",
            textAfter: " to see the community in action.",
          }}
        />
      </Container>

      <TechnologyStack
        mode="dark"
        categories={[
          {
            icon: <CodeXml color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Frontend",
            items: [
              [
                { text: "React", bold: true },
                { text: " library for fast and modular UI development" },
              ],
              [
                { text: "MUI", bold: true },
                {
                  text: " design system for consistent and accessible interfaces",
                },
              ],
            ],
          },
          {
            icon: <FolderCode color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Backend",
            items: [
              [
                { text: "Probig API", bold: true },
                {
                  text: " as the core service layer for data and business logic",
                },
              ],
              [
                { text: ".NET", bold: true },
                {
                  text: " with Clean Architecture, CQRS + MediatR, unit tests, and OpenAPI for maintainable and well-documented development",
                },
              ],
              [
                { text: "SQL Database", bold: true },
                { text: " for structured and reliable data storage" },
              ],
              [
                { text: "SendGrid", bold: true },
                { text: " for transactional and automated email delivery" },
              ],
              [
                { text: "DigitalOcean", bold: true },
                {
                  text: " for scalable and cost-efficient cloud infrastructure",
                },
              ],
            ],
          },
        ]}
      />

      <Box sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src="/cases/probig/demo-probig.png"
                      alt="Running photo 1"
                      sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 7 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src="/cases/probig/run2.png"
                      alt="Running photo 2"
                      sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Box
                    component="img"
                    src="/cases/probig/run3.jpg"
                    alt="Running photo 3"
                    sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "#000",
                }}
              >
                Built by runners, for runners
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "#333",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                  mr: 2,
                }}
              >
                What makes our work on Probig stand out is that we don’t just
                code it — we live it. Our team uses the platform for every run,
                every gym session, and every corporate challenge.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                  mr: 2,
                }}
              >
                We’re not just creating a product — we’re using it in our own
                lives. This gives us insights that go beyond traditional
                development, helping us build a platform that truly works.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MeetOrysia />

      <ProjectCTA
        title="Inspired by Probig?"
        subtitle="Let’s build something great for your team together. "
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1A1A", mb: 6 }}
        >
          Check out other cases
        </Typography>

        <OtherCases otherCases={otherCases} limit={2} />
      </Container>
    </Box>
  );
}
