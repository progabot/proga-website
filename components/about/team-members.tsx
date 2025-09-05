"use client";

import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { TEAM_MEMBERS } from "@/utils/team-members";

export default function TeamMembers() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Typography
          variant="h3"
          sx={{ fontSize: "2rem", fontWeight: "medium", mb: 2 }}
        >
          Working with you every step
        </Typography>
        <Typography maxWidth={"850px"} sx={{ fontSize: "1.25rem" }}>
          When you partner with ProgaTech, you're not just getting a service,
          you have people who care about your success
        </Typography>
        <Grid container spacing={2} mt={6}>
          {TEAM_MEMBERS.map((member) => (
            <Grid
              key={member.name}
              size={{ xs: 12, md: 4 }}
              borderRadius={2}
              display={"flex"}
              alignItems={"end"}
              sx={{
                height: "355px",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .member-image": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              {/* <Box
                className="background-image"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url('/team-members/bg.png')`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  transition: "transform 0.3s ease-in-out",
                  zIndex: 1,
                }}
              /> */}
              <Image
                src={"/team-members/bg.png"}
                alt={member.name}
                width={427}
                height={315}
                // layout="fill"
                // objectFit="cover"
                style={{ zIndex: 1 }}
              />
              <Image
                src={member.image}
                alt={member.name}
                width={306}
                height={335}
                // layout="fill"
                // objectFit="cover"
                className="member-image"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  zIndex: 3,
                  width: "auto",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <Box
                sx={{
                  py: 2,
                  pl: 2,
                  // width: "100%",
                  color: "black",
                  // backgroundColor: "rgba(26, 26, 26, 0.5)",
                  borderBottomRightRadius: 16,
                  borderBottomLeftRadius: 16,
                  position: "absolute",
                  top: "51px",
                  left: "20px",
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.25rem",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "black", maxWidth: "140px" }}
                >
                  {member.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
