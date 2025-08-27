import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import { Container, Typography, Box } from "@mui/material"
import Image from "next/image"

export default function CareersHero() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: "left", mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4.375rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 3,
            color: "#000",
            maxWidth: "1120px",
          }}
        >
          Want to join a company that invests in you?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "#666",
            maxWidth: "900px",
            lineHeight: 1.6,
          }}
        >
          Choosing where to build your career is a big decision. At Proga Tech, we offer a unique blend of professional
          growth and personal support.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
        }}
      >
          <Image src="/team-photo-1.png" alt="Proga Tech team in modern office" width={1324} height={820} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Container>
  )
}
