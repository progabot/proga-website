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
import StripeLogo from "@/assets/logos/stripe-logo.png";
import {
  ERUDITION_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
} from "@/utils/cases";
import { CodeXml, FolderCode, Server } from "lucide-react";
import ExperienceErudition from "@/components/cases/experience-erudition";
import OtherCases from "@/components/cases/other-cases";
import TechnologyStack from "@/components/cases/technology-stack";
import ClientFeedbackSection from "@/components/cases/client-feedback-section";

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

  const feedbackData = {
    title: "A word from Erudition",
    text: "Solomiia and her team have been fantastic partners in helping us bring our products to life. They consistently go above and beyond to ensure every detail  is implemented thoughtfully, balancing design, functionality, and user experience. Their commitment to quality and their collaborative, problem-solving approach have made a real difference in creating products we’re proud of. Highly recommended!",
    authorName: "Alicia (Cutillo) Bogatin",
    authorTitle: "Founder & CEO of Erudition Prep LLC",
    authorAvatarSrc: "/cases/erudition/alicia_cutillo.png",
    linkedinUrl: "https://www.linkedin.com/in/alicia-cutillo-bogatin-6762257a",
  };

const otherCases = [
  PIGTRACKS_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
];

export default function EruditionCaseStudy() {
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={ERUDITION_CASE_STUDY.title}
          description={ERUDITION_CASE_STUDY.description}
          tags={ERUDITION_CASE_STUDY.tags}
          country={ERUDITION_CASE_STUDY.country}
          isGlobal={ERUDITION_CASE_STUDY.isGlobal ?? false}
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
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.6, color: "#FFFFFF", fontWeight: 400 }}
        >
          Our clients are EdTech visionaries who come to us with a mission: to
          make learning more effective and less stressful using proven
          educational principles.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#FFFFFF", fontWeight: 400 }}
        >
          Their goal was to create a product that helps students master
          everything from GRE vocabulary to DAT visual skills, all based on
          proven learning principles. Our role is to handle the technical
          execution.
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
        imageMobile={{
          src: "/cases/erudition/showcase-mobile.png",
          width: 600,
          height: 1000,
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

      <TechnologyStack
        mode="light"
        categories={[
          {
            icon: <CodeXml color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Frontend",
            items: [
              [
                { text: "Next.js", bold: true },
                {
                  text: " framework for enhanced performance and SEO optimization",
                },
              ],
              [
                { text: "Storybook", bold: true },
                {
                  text: " UI library for efficient component reuse across multiple projects",
                },
              ],
              [
                { text: "REST API", bold: true },
                { text: " integration for seamless data communication" },
              ],
            ],
          },
          {
            icon: <FolderCode color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Backend",
            items: [
              [
                { text: "Java", bold: true },
                { text: " with " },
                { text: "Spring Boot", bold: true },
                { text: " framework for robust application development" },
              ],
              [
                { text: "Hibernate ORM", bold: true },
                { text: " for efficient database operations" },
              ],
              [
                { text: "PostgreSQL", bold: true },
                { text: " database for reliable data storage" },
              ],
              [
                { text: "REST API", bold: true },
                { text: " architecture for scalable service communication" },
              ],
            ],
          },
          {
            icon: <Server color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "DevOps",
            items: [
              "Migration tools to manage databases",
              [
                { text: "CDN", bold: true },
                { text: " setup and assets integration from " },
                { text: "MongoDB", bold: true },
              ],
              "Infrastructure scalability & monitoring improvements",
            ],
          },
        ]}
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ pt: 1, pb: 8 }}>
        <Box sx={{ backgroundColor: "#f5f5f5", p: 4, borderRadius: 2 }}>
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
                src={StripeLogo}
                alt="Stripe"
                width={200}
                height={100}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <ClientFeedbackSection data={feedbackData} />

      <Box sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, md: 6 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/cases/erudition/team.png"
                alt="Team at Lviv Invest Forum"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "block",
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 700,
                  height: {
                    xs: 400,
                    sm: 550,
                    md: 348,
                    lg: 408,
                  },
                }}
              >
                <svg
                  viewBox="0 0 709 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M36.0965 381.635L70.9 345.388L81.786 335.896C83.2429 334.625 85.1106 333.926 87.0436 333.926H638.1H701C705.418 333.926 709 330.344 709 325.926V292.185V81.4319C709 79.5658 708.348 77.7585 707.156 76.3226L646.21 2.89077C644.69 1.05952 642.434 0 640.054 0H70.9H8.00001C3.58173 0 0 3.58172 0 8V41.7407V381.635V399.205C0 406.399 8.75529 409.937 13.7537 404.763L36.0965 381.635Z"
                    fill="#1A1A1A"
                  />
                </svg>

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    px: { xs: 1, sm: 2, md: 0, lg: 3, xl: 1 },
                    pt: { xs: 4, sm: 6, md: 4, lg: 6, xl: 6 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "90%", md: "80%" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: {
                          xs: "3rem",
                          sm: "4rem",
                          md: "3.5rem",
                          lg: "3.5rem",
                          xl: "3.8rem",
                        },
                        color: "#EFBED2",
                        fontWeight: 400,
                        lineHeight: 1,
                        mt: { xs: -24, sm: -26, md: -22, lg: -24, xl: -24 },
                        ml: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 },
                      }}
                    >
                      "
                    </Typography>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          mb: { xs: 4, sm: 2, md: 2, lg: 4, xl: 4 },
                          mr: { xs: 6, md: 0 },
                          fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "1.5rem",
                            lg: "1.75rem",
                            xl: "2rem",
                          },
                          color: "#fff",
                          lineHeight: 1.2,
                        }}
                      >
                        Erudition started with a handshake and a shared belief
                        that learning can be reimagined.
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontWeight: 400,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.5rem",
                            md: "1rem",
                            lg: "1.25rem",
                            xl: "1.25rem",
                          },
                        }}
                      >
                        Emil & Andrii
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontWeight: 400,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.5rem",
                            md: "1rem",
                            lg: "1.25rem",
                            xl: "1.25rem",
                          },
                        }}
                      >
                        Software Engineers at Proga Tech
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
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
        <OtherCases otherCases={otherCases} limit={2} />
      </Container>
    </Box>
  );
}
