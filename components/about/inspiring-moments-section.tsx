"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import Image from "next/image"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

export default function InspiringMomentsSection() {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
                <Grid container spacing={6} display={"flex"}>
                    <Grid size={{ xs: 12, md: 6 }} height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                        <Typography variant="h3" sx={{ fontSize: "2rem", fontWeight: "medium", mb: 2 }}>Moments that inspire us</Typography>
                        <Typography>"Being able to talk with local clients, join in on in-office brainstorming sessions, and just have face-to-face conversations — that’s what I really enjoy at Proga. Sometimes people can push you in a completely different direction, helping you see yourself from a whole new perspective."</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/proga-backpack.png"
                            alt="Proga Backpack In Mountain"
                            width={651}
                            height={798}
                            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
