import { Box, Container, Typography, Chip, Grid, Button, Card, CardContent } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Divider from "@mui/material/Divider"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import EruditionTestimonials from "@/components/erudition/testimonials"

export const metadata = {
  title: "Stridist | Case Study | Proga Tech",
  description: "",
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
      {/* Hero Section */}
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#000",
              }}
            >
              Stridist
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "text.secondary",
                lineHeight: 1.6,
                color: "#000",
              }}
            >
              Built for fitness trainers who want to focus on what they love - training people. We handle the scheduling, client management, and business stuff so you can concentrate on changing lives.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
              <Chip
                label="Healthcare"
                sx={{
                  backgroundColor: "#EFBED2",
                  fontWeight: 500,
                }}
              />
              <Chip
                label="Fitness"
                sx={{
                  backgroundColor: "#EFBED2",
                  fontWeight: 500,
                }}
              />
              <Chip
                label="Coaching"
                sx={{
                  backgroundColor: "#EFBED2",
                  fontWeight: 500,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Image
            src="/stridist-hero-mockup.png"
            alt="Erudition application interface"
            width={1320}
            height={530}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>

      {/* Overview Section */}
      <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Grid container spacing={8}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 4 }}>
                Overview
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
                An online platform for fitness trainers that helps them manage their clients, create personalized programs, and grow their business from anywhere.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Challenges
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
                Fitness and nutrition coaches often face challenges in managing their clients, creating personalized programs, tracking progress, and handling administrative tasks efficiently. Many rely on a fragmented set of tools, leading to inefficiencies, increased costs for both coaches and their clients. The core challenge was to consolidate these disparate functions into a single, intuitive, and powerful platform that caters specifically to the needs of fitness professionals.
              </Typography>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  // height: { xs: "auto", lg: "100%" },
                  width: "100%",
                  overflow: { lg: "visible" },
                  display: "flex",
                  alignItems: { lg: "center" },
                  "& img": {
                    height: { xs: "auto", lg: "100%" },
                    width: { xs: "100%", md: "1000px" },
                    objectFit: { lg: "contain" }
                  }
                }}
              >
                <Image
                  src="/stridist-explanations-mockup.png"
                  alt="Stridist explanations interface"
                  width={500}
                  height={600}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 6 }}>
              Solutions
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}>
              Everything you need to run your coaching business like a pro. Build workouts your clients love, track their progress, manage communications, and grow your business while we take care of the boring admin work so you can focus on coaching.
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            {solutions.map((solution, index) => (
              <>
                <Box key={index} display="flex" gap={4}>
                  <Box>
                    <Typography variant="h4" sx={{ color: "#f8d7da", fontWeight: 600, mb: 1 }}>
                      [{String(index + 1).padStart(2, "0")}]
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {solution.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {solution.description}
                    </Typography>
                  </Box>
                </Box>
                {index !== solutions.length - 1 && <Divider sx={{ my: 2 }} />}
              </>
            ))}
          </Grid>
        </Grid>
      </Container>

      <Image
        src="/stridist-gallery.png"
        alt="Stridist interface"
        width={1440}
        height={650}
        style={{ width: "100%", height: "auto" }}
      />

      {/* <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <EruditionTestimonials />
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 8 }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 6 }}>
            Experience Erudition
          </Typography>

          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Card
                sx={{ backgroundColor: "#1a1a1a", color: "white", height: "100%", border: "1px solid #737373" }}
              >
                <CardContent sx={{ p: 0, paddingBottom: '0 !important', display: "flex" }}>
                  <Box
                    p={2}
                    pr={0}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Box>
                      <Image src="/erudition-dat-logo.png" alt="Erudition Dat" width={180} height={36} />
                      <Typography variant="body1" sx={{ mb: 4, mt: 2, color: "#cccccc" }}>
                        Get a fun training task in your inbox every week (no course registration required).
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
                  <Box sx={{ textAlign: "center" }} 
                    display="flex"
                    justifyContent="end"
                    flexDirection="column"
                    alignItems="baseline">
                    <Image
                      src="/erudition-dat.png"
                      alt="Erudition DAT mobile app"
                      width={472}
                      height={628}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Card sx={{ backgroundColor: "#1a1a1a", color: "white", height: "100%", border: "1px solid #737373" }}>
                <CardContent sx={{ p: 0, paddingBottom: '0 !important', display: "flex", height: "100%" }}>
                  <Box
                    p={2}
                    pr={0}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="baseline"
                  >
                    <Box>
                      <Image src="/erudition-vocab-logo.png" alt="Erudition Vocab" width={180} height={36} />
                      <Typography variant="body1" sx={{ mb: 4, mt: 2, color: "#cccccc" }}>
                        Learn advanced vocabulary with clever illustrations, word origins, and memorable associations.
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
                  <Box sx={{ textAlign: "center" }} 
                    display="flex"
                    justifyContent="end"
                    flexDirection="column"
                    alignItems="baseline">
                    <Image
                      src="/erudition-vocab.png"
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
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 6 }}>
              Technology stack
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Frontend
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Next.js framework for enhanced performance and SEO optimization
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                • Storybook UI library for efficient component reuse across multiple projects
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
                • Java with Spring Boot framework for robust application development
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
            As Stripe Payment Gateway integration experts, we implemented a comprehensive billing system for Erudition:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Monthly subscription billing with automatic 3-month course access
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • 100% coupon discounts for the priority student list
              </Typography>
              <Typography variant="body2">• Granular access to the courses based on the billing status</Typography>
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
      </Container> */}

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
          <Grid item size={{ xs: 12, md: 6 }}>
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

          <Grid item size={{ xs: 12, md: 6 }}>
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
  )
}
