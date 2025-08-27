"use client"

import { Box, Container, Typography, Grid, Button } from "@mui/material"
import Image from "next/image"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export default function InstagramSection() {
  return (
    <Box sx={{ color: "white", py: 8 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ border: "1px solid #e0e0e0", px: 6, pt: 6, borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h4" sx={{ mb: 4, color: "#666" }}>
                Follow us on Instagram
              </Typography>

              <Button
                variant="outlined"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  mb: 4,
                  color: "#333",
                  borderColor: "#333",
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#333",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
                onClick={() => window.open("https://instagram.com/proga.tech", "_blank")}
              >
                Follow us
              </Button>
            </Box>

            <Image src={"/instagram.jpg"} alt={`PGT Instagram`} width={418} height={572} style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Image
              src={"/team-2.jpg"}
              alt={`PGT Instagram`}
              width={762}
              height={813}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
