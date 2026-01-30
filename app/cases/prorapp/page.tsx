import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import CaseStudyHero from "@/components/cases/case-study-hero";
import ProjectShowCase from "@/components/cases/project-showcase";
import ProjectCTA from "@/components/shared/project-cta";
import { CodeXml, FolderCode, FileSliders } from "lucide-react";
import {
  PRORAPP_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  ERUDITION_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  PROBIG_CASE_STUDY,
} from "@/utils/cases";
import TechnologyStack from "@/components/cases/technology-stack";
import OtherCases from "@/components/cases/other-cases";

export const metadata = {
  title: "Prorapp | Case Study | Proga Tech",
  description:
    "Fall in love with your future home before you buy it. We're changing how people buy apartments by letting you explore, feel, and experience your space through immersive virtual tours, plus get free design plans and everything you need for renovation.",
};

export default function ProrappCaseStudy() {
  const challenges = [
    {
      title: "Blind purchases",
      text: "Making life-changing decisions based on floor plans and photos",
    },
    {
      title: "Endless viewings",
      text: "Wasting weekends visiting properties that don't match expectations",
    },
    {
      title: "Design overwhelm",
      text: "Getting keys to an empty space with no idea how to make it home",
    },
    {
      title: "Renovation chaos",
      text: "Hunting for materials and contractors across dozens of different suppliers",
    },
  ];

  const solutions = [
    {
      title: "Virtual reality tours",
      description:
        "Walk through and experience every room of your future home before making the purchase decision",
    },
    {
      title: "Instant emotional connection",
      description:
        "Fall in love with your space during the decision process when it matters most",
    },
    {
      title: "Included professional design",
      description:
        "Get complete interior design projects included with your property purchase from forward-thinking developers",
    },
    {
      title: "ProRapp store",
      description:
        "Access perfectly matched materials, furniture, and decor tailored to your space, style, and budget",
    },
    {
      title: "End-to-end support",
      description:
        "Receive guidance from virtual tour to move-in day, transforming stressful house-hunting into an exciting experience",
    },
    {
      title: "Confident decision making",
      description:
        "Make informed choices based on real virtual experience rather than imagination or static photos",
    },
  ];
  const otherCases = [
    STRIDIST_CASE_STUDY,
    ERUDITION_CASE_STUDY,
    PIGTRACKS_CASE_STUDY,
    PROBIG_CASE_STUDY,
  ];
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={PRORAPP_CASE_STUDY.title}
          description={PRORAPP_CASE_STUDY.description}
          tags={PRORAPP_CASE_STUDY.tags}
          country={PRORAPP_CASE_STUDY.country}
          isGlobal={PRORAPP_CASE_STUDY.isGlobal ?? false}
          image={PRORAPP_CASE_STUDY.coverImage}
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/prorapp/overview-cover.png",
          alt: "Prorapp explanations interface",
          width: 500,
          height: 600,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, fontWeight: 600, color: "#FFFFFF" }}
        >
          Your dream home before you buy it
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, fontWeight: 400, color: "#FFFFFF" }}
        >
          Unlike conventional property platforms, ProRapp Estate was
          thoughtfully designed to walk you through your future apartment, feel
          its atmosphere, and fall in love with it before you make the purchase.
          In other words, to to bridge the gap between imagination and reality.
        </Typography>

        <ChallengesList challenges={challenges} />
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="Experience your future home before you buy, get professional design included, and shop for everything from one platform - because buying a home should be exciting, not exhausting."
      />

      <ProjectShowCase
        image={{
          src: "/cases/prorapp/showcase.jpg",
          width: 1440,
          height: 2150,
        }}
        imageMobile={{
          src: "/cases/prorapp/showcase-mobile.png",
          width: 600,
          height: 1000,
        }}
        imageAlt="Prorapp interface showcase"
      />

      <TechnologyStack
        mode="dark"
        categories={[
          {
            icon: <CodeXml color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Frontend (UI)",
            items: [
              [
                { text: "Next.js", bold: true },
                { text: " framework for fast, SEO-optimized user experiences" },
              ],
              [
                { text: "MUI", bold: true },
                {
                  text: " component library for a consistent and accessible design",
                },
              ],
            ],
          },
          {
            icon: <CodeXml color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Frontend (Admin)",
            items: [
              [
                { text: "React", bold: true },
                {
                  text: " library for building modular and interactive admin panels",
                },
              ],
              [
                { text: "Vite", bold: true },
                { text: " for ultra-fast development and optimized builds" },
              ],
              [
                { text: "MUI", bold: true },
                { text: " for a cohesive and responsive admin interface" },
              ],
            ],
          },
          {
            icon: <FolderCode color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Backend",
            items: [
              [
                { text: "Nest.js", bold: true },
                {
                  text: " framework for structured and maintainable server-side logic",
                },
              ],
              [
                { text: "Drizzle ORM", bold: true },
                { text: " for type-safe and efficient database interactions" },
              ],
              [
                { text: "PostgreSQL", bold: true },
                { text: " for reliable and scalable data storage" },
              ],
            ],
          },
        ]}
      />

      <Box sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/cases/prorapp/team.png"
                alt="Team at Lviv Invest Forum"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "block",
                  maxHeight: {
                    xs: 340,
                    sm: "none",
                  },
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  mb: 3,
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.375rem",
                    lg: "2rem",
                  },
                  color: "#000",
                }}
              >
                Beyond project delivery
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#333",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "0.875rem",
                    lg: "1.25rem",
                  },
                  lineHeight: 1.6,
                }}
              >
                Our client-centric approach is best demonstrated by the trust
                our clients place in us. When they invite us to prestigious,
                large-scale events like the Lviv Invest Forum, it’s the ultimate
                confirmation of our partnership and the quality of our work. It
                shows that our relationship goes beyond simple project delivery,
                it’s a true collaboration built on mutual trust and shared
                success.
              </Typography>

              <Box sx={{ position: "relative", width: 650, maxWidth: "100%" }}>
                <svg
                  width="100%"
                  viewBox="0 0 649 246"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.9093 230.028L65.6718 208.227L75.8178 202.397C77.0305 201.7 78.4049 201.333 79.8036 201.333H583.312H640.017C644.435 201.333 648.017 197.752 648.017 193.333V176.229V51.6022C648.017 49.1616 646.903 46.8546 644.991 45.337L590.708 2.23483C589.294 1.11145 587.54 0.5 585.734 0.5H65.6718H8.9668C4.54852 0.5 0.966797 4.08172 0.966797 8.5V25.6042V230.028V237.358C0.966797 243.787 8.16478 247.59 13.4751 243.967L33.9093 230.028Z"
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
                          xs: "2.5rem",
                          sm: "3rem",
                          md: "2.5rem",
                          lg: "3.5rem",
                          xl: "3.8rem",
                        },
                        color: "#EFBED2",
                        fontWeight: 400,
                        lineHeight: 1,
                        mt: { xs: -6, sm: -7, md: -6, lg: -6, xl: -8 },
                        ml: { xs: 1, sm: 2, md: 1, lg: 0, xl: 2 },
                      }}
                    >
                      "
                    </Typography>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          mb: { xs: 2, sm: 2, md: 2, lg: 2, xl: 4 },
                          fontSize: {
                            xs: "1.25rem",
                            sm: "1.5rem",
                            md: "1.25rem",
                            lg: "1.6rem",
                            xl: "2rem",
                          },
                          color: "#fff",
                          lineHeight: 1.2,
                        }}
                      >
                        Happy clients make us happy
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ccc",
                          fontSize: {
                            xs: "1rem",
                            sm: "1.25rem",
                            md: "0.875rem",
                            lg: "1.25rem",
                            xl: "1.25rem",
                          },
                        }}
                      >
                        Proga team says
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ProjectCTA
        title="Want to build something like this?"
        subtitle=" Contact us to see how we help turn ideas like ProRapp Estate into
              real products."
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
