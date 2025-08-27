import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button } from "@mui/material"
import { LocationOn, Schedule, NorthEast } from "@mui/icons-material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    department: "Development",
    color: "#f8bbd9",
  },
  {
    title: "UX/UI Designer",
    location: "New York, NY",
    type: "Full-time",
    department: "Design",
    color: "#a8e6cf",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Operations",
    color: "#ffd93d",
  },
  {
    title: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "AI & ML",
    color: "#ff9aa2",
  },
]

export default function JobListings() {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 6,
            color: "#fff",
          }}
        >
          Join our team
        </Typography>

        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item size={{xs:12,md:6}} key={index}>
              <Card
                sx={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #333",
                  borderRadius: 3,
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "#333",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 16 }} />}
                      label="Remote"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                    <Chip
                      icon={<Schedule sx={{ fontSize: 16 }} />}
                      label="Full-time"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                    <Chip
                      label={job.department}
                      size="small"
                      sx={{
                        backgroundColor: job.color,
                        color: "#000",
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: "#fff",
                    }}
                  >
                    {job.title}
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#666",
                      color: "#fff",
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                    endIcon={<NorthEast />}
                  >
                    Apply now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
