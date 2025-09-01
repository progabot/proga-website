"use client"

import { Box, Container, Typography, Grid, Button } from "@mui/material"
import Image from "next/image"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"
import { TEAM_MEMBERS } from "@/utils/team-members"

export default function InspiringMomentsSection() {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
                <Grid container spacing={6}>
                    
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography>Moments that inspire us</Typography>
                            <Typography>"Being able to talk with local clients, join in on in-office brainstorming sessions, and just have face-to-face conversations — that’s what I really enjoy at Proga. Sometimes people can push you in a completely different direction, helping you see yourself from a whole new perspective."</Typography>
                        </Grid>
                         <Grid size={{ xs: 12, md: 6 }}>
                            <Image
                                src="/proga-backpack.png"
                                alt="Proga Backpack In Mountain"
                                width={500}
                                height={300}
                                style={{ borderRadius: "8px" }}
                            />
                         </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
