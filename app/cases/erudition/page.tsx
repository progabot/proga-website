import { Box, Container, Typography, Chip, Grid, Button, Card, CardContent } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Divider from "@mui/material/Divider"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export default function EruditionCaseStudy() {
  const solutions = [
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
      description: "We pair illustrations with explanations because your brain learns better with both.",
    },
    {
      title: "Smart repetition",
      description: "See the same concepts again at the right times so you don't forget them.",
    },
    {
      title: "Active engagement",
      description: "Learn through interactive quizzes and challenges rather than passive reading.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Highly recommended. The problems went from easy to hard and towards the end it became a game for me to see if I could beat the score and achieve higher. I ended up with a 22 on PAT thanks to the great practice and techniques from Erudition PAT Prep.",
      author: "Ronald",
      institution: "Brigham Young University",
    },
    {
      quote:
        "Your PAT videos were the absolute best by far. I loved how you broke down problems and [other]'s videos were not helpful. I loved the examples in your videos and it helped me tremendously.",
      author: "John",
      institution: "McMaster University",
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
              Erudition
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
              Learning shouldn't be complicated. We're creating a space where teachers can easily build engaging courses
              and students actually enjoy the learning process.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
              <Chip
                label="Education"
                sx={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  fontWeight: 500,
                }}
              />
              <Chip
                label="E-learning"
                sx={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  fontWeight: 500,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Image
            src="/erudition-hero-mockup.png"
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

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Helping you make sense of things
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}>
                We use proven learning principles to make exam prep less stressful and more effective. Whether you're
                mastering GRE vocabulary or developing visual skills for the DAT, we're here to help you see how
                everything connects.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Challenges
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "#cccccc" }}>
                Traditional learning was limiting:
              </Typography>

              <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ color: "#666", fontSize: 24 }} display="inline">
                  01/
                </Typography>
                <Typography variant="body1" sx={{ color: "#cccccc" }} display="inline" ml={1}>
                  Rote memorization that doesn't stick
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#666", fontSize: 24 }} display="inline">
                  02/
                </Typography>
                <Typography variant="body1" sx={{ color: "#cccccc" }} display="inline" ml={1}>
                  Boring study materials that put you to sleep
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#666", fontSize: 24 }} display="inline">
                  03/
                </Typography>
                <Typography variant="body1" sx={{ color: "#cccccc" }} display="inline" ml={1}>
                  No real understanding of how concepts connect
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: "#666", fontSize: 24 }} display="inline">
                  04/
                </Typography>
                <Typography variant="body1" sx={{ color: "#cccccc" }} display="inline" ml={1}>
                  One-dimensional learning that doesn't engage your brain fully
                </Typography>
              </Box>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src="/erudition-explanations-mockup.png"
                alt="Erudition explanations interface"
                width={500}
                height={600}
                style={{ maxWidth: "100%", height: "auto" }}
              />
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
        src="/erudition-gallery.jpg"
        alt="Erudition interface"
        width={1440}
        height={1980}
        style={{ width: "100%", height: "auto" }}
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
            Why learners choose Erudition
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" sx={{ minWidth: 40, height: 40, borderRadius: "50%" }}>
              ←
            </Button>
            <Button variant="outlined" sx={{ minWidth: 40, height: 40, borderRadius: "50%" }}>
              →
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <Card sx={{ p: 3, height: "100%", border: "1px solid #e0e0e0" }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" sx={{ color: "#f8d7da", mb: 2, fontSize: "2rem" }}>
                    "
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {testimonial.quote}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {testimonial.institution}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ backgroundColor: "#f5f5f5", p: 3, mt: 4, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            💡 Join students who are building real understanding with Erudition or explore it on YouTube to see how we
            make learning visual, fun, and effective.
          </Typography>
        </Box>
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
                pb={0}
              >
                <CardContent sx={{ p: 0, display: "flex" }}>
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
                      sx={{
                        backgroundColor: "#85CF91",
                        color: "black",
                        mb: 3,
                        "&:hover": { backgroundColor: "#45a049" },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Play Erudition PAT https://eruditionprep.com/dat/pat/question-of-the-week
                    </Button>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
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
                <CardContent sx={{ p: 0, display: "flex" }}>
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
                      sx={{
                        backgroundColor: "#85CF91",
                        color: "black",
                        mb: 3,
                        "&:hover": { backgroundColor: "#45a049" },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Boost your GRE Vocab https://grewordoftheday.com/
                    </Button>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#f8d7da" }}>
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#e1bee7" }}>
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#ffcdd2" }}>
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
                width={80}
                height={40}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Have a project idea? Section */}
      <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 8 }}>
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
      </Box>

      {/* Check out other cases Section */}
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
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
      </Container>
    </Box>
  )
}
