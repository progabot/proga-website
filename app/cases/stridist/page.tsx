import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import SolutionsList from "@/components/cases/solutions-list";
import CaseStudyHero from "@/components/cases/case-study-hero";
import ProjectShowCase from "@/components/cases/project-showcase";
import CustomerTestimonials from "@/components/cases/testimonials";
import Image from "next/image";
import {
  STRIDIST_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  ERUDITION_CASE_STUDY,
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
} from "@/utils/cases";
import ProjectCTA from "@/components/shared/project-cta";
import { CodeXml, FolderCode, ArrowUpRight } from "lucide-react";
import TechnologyStack from "@/components/cases/technology-stack";
import OtherCases from "@/components/cases/other-cases";
import ClientFeedbackSection from "@/components/cases/client-feedback-section";

export const metadata = {
  title: "Stridist | Case Study | Proga Tech",
  description:
    "Fitness coaching platform case study. Intuitive workout builder, client management, progress tracking, and automated systems for fitness trainers.",
};

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
        "Features for tracking client progress, assigning tasks and habits, automating check-ins, and client onboarding. Coaches can manage all client communication within the app.",
    },
    {
      title: "Сlient progress tracking",
      description:
        "Improved client profile pages with valuable features like step counters, nutrition targets, goals, and progress photo tracking, enabling coaches to monitor results and assess training performance effectively.",
    },
    {
      title: "Growth support",
      description:
        "Beyond just a coaching app, Stridist provides resources and support to help coaches grow their businesses, including marketing suites, high-converting website templates, custom branded recipe books, and business mentoring.",
    },
    {
      title: "Automations & systems",
      description:
        "Features to automate check-ins, client onboarding, and other routine tasks, allowing coaches to focus more on coaching and less on administration.",
    },
  ];

  const TESTIMONIALS = [
    {
      text: "I bet you’ve had loads of messages but I just wanted to say I’ve just started setting up a new client on Stridist and I’m absolutely blown away!! I can see the work that’s gone into this programme and I’m so looking forward to using it with all my clients!",
    },
    {
      text: "Just wanted to say the value you’ve provided with Stridist is ridiculous. As a coach that’s just launching into the online space, the resource and support that’s already been available makes it 1000% easier.",
    },
  ];

  const otherCases = [
    PIGTRACKS_CASE_STUDY,
    ERUDITION_CASE_STUDY,
    PRORAPP_CASE_STUDY,
    PROBIG_CASE_STUDY,
  ];
  const feedbackData = {
    text: "Proga Tech's efforts resulted in a 50% reduction in RDS costs and onboarding over 100 new coaches. The team managed the project well using Notion and Slack, delivered work promptly, and communicated transparently. The team went above and beyond on several occasions to ensure success.",
    authorName: "Sukh Sidhu",
    authorTitle: "CEO, Stridist Inc",
    authorAvatarSrc: "/cases/stridist/sukh_sidhu.png",
    linkedinUrl: "https://www.linkedin.com/in/sukh-sidhu-a2b8a863/",
    clutchUrl: "https://clutch.co/profile/proga-tech#review-375492",
  };

  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={STRIDIST_CASE_STUDY.title}
          description={STRIDIST_CASE_STUDY.description}
          tags={STRIDIST_CASE_STUDY.tags}
          country={STRIDIST_CASE_STUDY.country}
          isGlobal={STRIDIST_CASE_STUDY.isGlobal ?? false}
          image={STRIDIST_CASE_STUDY.coverImage}
        />
      </Container>
      <CaseStudyOverview
        image={{
          src: "/cases/stridist/overview-cover.png",
          alt: "Stridist explanations interface",
          width: 500,
          height: 600,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}
        >
          An online platform for fitness trainers that helps them manage their
          clients, create personalized programs, and grow their business from
          anywhere.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Challenges
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}
        >
          Fitness and nutrition coaches often face challenges in managing their
          clients, creating personalized programs, tracking progress, and
          handling administrative tasks efficiently. Many rely on a fragmented
          set of tools, leading to inefficiencies, increased costs for both
          coaches and their clients. The core challenge was to consolidate these
          disparate functions into a single, intuitive, and powerful platform
          that caters specifically to the needs of fitness professionals.
        </Typography>
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="Everything you need to run your coaching business like a pro. Build workouts your clients love, track their progress, manage communications, and grow your business while we take care of the boring admin work so you can focus on coaching."
      />

      <ProjectShowCase
        image={{
          src: "/cases/stridist/showcase-mobile-preview.png",
          width: 1440,
          height: 2122,
        }}
        imageAlt="Stridist interface showcase"
      />

      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Box
            sx={{
              backgroundColor: "#1A1A1A",
              borderRadius: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              overflow: "hidden",
              minHeight: { xs: "auto", md: 220, lg: 260 },
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                flex: { xs: 1, md: 1.5, lg: 1.2 },
                position: "relative",
                minHeight: { xs: 120, md: 220, lg: 260 },
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  mx: "auto",
                  position: "relative",
                  mb: 0,
                }}
              >
                <a
                  href="https://youtu.be/FV-hMvBNvH4?t=152"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block" }}
                >
                  <Image
                    src="/cases/stridist/video-thumbnail.png"
                    alt="Video preview"
                    width={769}
                    height={372}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "12px 12px 0 0",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                p: { xs: 2, md: 2, lg: 2 },
                pt: { xs: 4, md: 4, lg: 6 },
                pl: { xs: 4, md: 4, lg: 6 },
                pb: { xs: 6, md: 1, lg: 6 },
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.875rem", md: "0.75rem", lg: "1rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#FFFFFF",
                  mb: { xs: 3, md: 4, lg: 4 },
                  maxWidth: 450,
                }}
              >
                Hear from Stephen himself about what makes Proga special and the
                vision for its future.
              </Typography>

              <Button
                href="https://youtu.be/FV-hMvBNvH4?t=152"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                endIcon={<ArrowUpRight />}
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  px: { xs: 3, md: 3.5, lg: 4 },
                  py: 2,
                  fontSize: { xs: "0.875rem", md: "0.825rem", lg: "1rem" },
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },
                  "&:hover .MuiButton-endIcon": {
                    transform: "translate(2px, -2px)",
                  },
                }}
              >
                Watch full video
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <ProjectShowCase
        image={{
          src: "/cases/stridist/showcase2.png",
          width: 1440,
          height: 1557,
        }}
        imageMobile={{
          src: "/cases/stridist/showcase-mobile.png",
          width: 600,
          height: 1000,
        }}
        imageAlt="Stridist interface showcase"
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <CustomerTestimonials
          testimonials={TESTIMONIALS}
          title="Why coaches choose Stridist"
          footerText={{
            textBefore:
              "Stridist makes it easier to coach clients, stay organized, and scale what you do best — all in one place. ",
            linkText: "Check it out",
            linkHref: "https://stridist.com/",
            textAfter:
              " yourself and see how it’s helping real coaches build real results.",
          }}
        />
      </Container>

      <ClientFeedbackSection data={feedbackData} />

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
                  text: " framework for enhanced performance and SEOoptimization",
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
            title: "Backend/Infrastructure",
            items: [
              [
                { text: "Amazon ECS", bold: true },
                { text: " clusters for scalable architecture" },
              ],
              [
                { text: "Stripe", bold: true },
                { text: " integration for payment processing" },
              ],
            ],
          },
        ]}
      />

      <ProjectCTA
        title=" Ready to grow your coaching business?"
        subtitle="We helped bring Stridist to life and we’d love to hear what you’re
              working on. Contact us and let’s talk."
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
