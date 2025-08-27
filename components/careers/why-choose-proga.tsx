import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material"
import { People, Favorite, Public, Schedule } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const values = [
  {
    title: "People First",
    description: "We invest in people — our most valuable asset.",
    icon: People,
  },
  {
    title: "User-Centric",
    description: "Every product is designed to be intuitive and impactful.",
    icon: Favorite,
  },
  {
    title: "Social Impact",
    description: "We actively support Ukraine through projects and donations.",
    icon: Public,
  },
  {
    title: "Flexible & Reliable",
    description: "Remote or hybrid work, career growth, and a supportive environment.",
    icon: Schedule,
  },
]

export default function WhyChooseProga() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 700,
          mb: 6,
          color: "#000",
        }}
      >
        Why choose Proga?
      </Typography>

      <Grid container spacing={4}>
        {values.map((value, index) => {
          const IconComponent = value.icon
          return (
            <Grid item size={{xs:12,sm:6,md:3}} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid #f0f0f0",
                  borderRadius: 3,
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 32, color: "#f8bbd9" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "#000",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
