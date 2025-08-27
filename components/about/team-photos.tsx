"use client"

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import { Box, Container, Grid } from "@mui/material"
import Image from "next/image"

export default function TeamPhotos() {
  const teamPhotos = [
    {
      src: "/team-photo-1.png",
      alt: "Team photo in office",
      gridProps: { xs: 12, md: 6 },
    },
    {
      src: "/team-rafting-adventure.png",
      alt: "Team rafting adventure",
      gridProps: { xs: 12, md: 6 },
    },
    {
      src: "/team-outdoor-event-with-banner.png",
      alt: "Team outdoor event",
      gridProps: { xs: 12, md: 4 },
    },
    {
      src: "/team-sports-activity.png",
      alt: "Team sports activity",
      gridProps: { xs: 12, md: 4 },
    },
    {
      src: "/team-group-photo-outdoors.png",
      alt: "Team group photo",
      gridProps: { xs: 12, md: 4 },
    },
  ]

  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {teamPhotos.map((photo, index) => (
          <Grid item {...photo.gridProps} key={index}>
            <Box
              sx={{
                position: "relative",
                height: 300,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill style={{ objectFit: "cover" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
