import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import { Box, Typography, Container, Grid } from "@mui/material"

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3", label: "Years doing our best" },
  { value: "17", label: "Employees" },
  { value: "5", label: "Average rating" },
]

export default function AboutStats() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  fontWeight: "bold",
                  color: "#E91E63",
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666666",
                  fontSize: "1rem",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
