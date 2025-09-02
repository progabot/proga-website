import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CustomerTestimonials from "@/components/cases/testimonials";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import CaseStudyHero from "@/components/cases/case-study-hero";
import ProjectShowCase from "@/components/cases/project-showcase";

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
];

export default function EruditionCaseStudy() {
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title="Erudition"
          description={
            "Learning shouldn't be complicated. We're creating a space where teachers can easily build engaging courses and students actually enjoy the learning process."
          }
          tags={["Education", "E-learning"]}
          image="/cases/erudition/hero-image.png"
          imageAlt="Erudition application interface"
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
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Helping you make sense of things
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}
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
        <CustomerTestimonials testimonials={TESTIMONIALS} />
      </Container>

      <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            Experience Erudition
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  height: "100%",
                  border: "1px solid #737373",
                }}
              >
                <CardContent
                  sx={{ p: 0, paddingBottom: "0 !important", display: "flex" }}
                >
                  <Box
                    p={2}
                    pr={0}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Box>
                      <Image
                        src="/cases/erudition/dat-logo.png"
                        alt="Erudition Dat"
                        width={180}
                        height={36}
                      />
                      <Typography
                        variant="body1"
                        sx={{ mb: 4, mt: 2, color: "#cccccc" }}
                      >
                        Get a fun training task in your inbox every week (no
                        course registration required).
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component="a"
                      href="https://eruditionprep.com/dat/pat/question-of-the-week"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "#85CF91",
                        color: "black",
                        mb: 3,
                        "&:hover": { backgroundColor: "#45a049" },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Play Erudition PAT
                    </Button>
                  </Box>
                  <Box
                    sx={{ textAlign: "center" }}
                    display="flex"
                    justifyContent="end"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Image
                      src="/cases/erudition/dat-preview.png"
                      alt="Erudition DAT mobile app"
                      width={472}
                      height={628}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  height: "100%",
                  border: "1px solid #737373",
                }}
              >
                <CardContent
                  sx={{
                    p: 0,
                    paddingBottom: "0 !important",
                    display: "flex",
                    height: "100%",
                  }}
                >
                  <Box
                    p={2}
                    pr={0}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Box>
                      <Image
                        src="/cases/erudition/vocab-logo.png"
                        alt="Erudition Vocab"
                        width={180}
                        height={36}
                      />
                      <Typography
                        variant="body1"
                        sx={{ mb: 4, mt: 2, color: "#cccccc" }}
                      >
                        Learn advanced vocabulary with clever illustrations,
                        word origins, and memorable associations.
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component="a"
                      href="https://grewordoftheday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "#85CF91",
                        color: "black",
                        mb: 3,
                        "&:hover": { backgroundColor: "#45a049" },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Boost your GRE Vocab
                    </Button>
                  </Box>
                  <Box
                    sx={{ textAlign: "center" }}
                    display="flex"
                    justifyContent="end"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Image
                      src="/cases/erudition/vocab-preview.png"
                      alt="Erudition DAT mobile app"
                      width={472}
                      height={628}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              Technology stack
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Frontend
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Next.js framework for enhanced performance and SEO
                optimization
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Storybook UI library for efficient component reuse across
                multiple projects
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • REST API integration for seamless data communication
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Backend
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Java with Spring Boot framework for robust application
                development
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Hibernate ORM for efficient database operations
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • PostgreSQL database for reliable data storage
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • REST API architecture for scalable service communication
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              DevOps
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Migration tools to manage databases
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • CDN setup and assets integration from MongoDB
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
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
      {/* <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
            Have a project idea?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#cccccc" }}>
            Let's talk about it.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Contact us
          </Button>
        </Container>
      </Box> */}

      {/* Check out other cases Section */}
      {/* <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 6 }}>
          Check out other cases
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ border: "1px solid #e0e0e0", overflow: "hidden" }}>
              <Box sx={{ backgroundColor: "#f5f5f5", p: 4, textAlign: "center" }}>
                <Image
                  src="/pigtracks-mockup.png"
                  alt="PigTracks case study"
                  width={400}
                  height={250}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  🐷 PIGTRACKS
                </Typography>
                <Button variant="text" sx={{ color: "black", p: 0 }} endIcon={<ArrowForwardIcon />}>
                  See full case study
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ border: "1px solid #e0e0e0", overflow: "hidden" }}>
              <Box sx={{ backgroundColor: "#f5f5f5", p: 4, textAlign: "center" }}>
                <Image
                  src="/stridist-mockup.png"
                  alt="Stridist case study"
                  width={400}
                  height={250}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  📱 STRIDIST
                </Typography>
                <Button variant="text" sx={{ color: "black", p: 0 }} endIcon={<ArrowForwardIcon />}>
                  See full case study
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
  );
}
