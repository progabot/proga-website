"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Button,
} from "@mui/material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { TEAM_MEMBERS, TeamMember } from "@/utils/team-members";
import { East } from "@mui/icons-material";
import Link from "next/link";

export default function TeamMembers() {
  const theme = useTheme();
  const [showSecret, setShowSecret] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [shuffledMembers, setShuffledMembers] =
    useState<TeamMember[]>(TEAM_MEMBERS);

  useEffect(() => {
    const shuffled = [...TEAM_MEMBERS].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  }, []);

  function handleTap() {
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 7) {
        setShowSecret(true);
        return 0;
      }
      return newCount;
    });
  }

  const visibleMembers = showSecret
    ? shuffledMembers
    : shuffledMembers.filter((m) => !m.hidden);

  return (
    <Box sx={{ pt: 8, pb: 2 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Typography
          variant="h3"
          sx={{ fontSize: "2rem", fontWeight: "medium", mb: 2 }}
        >
          Working with you every step
        </Typography>
        <Typography
          maxWidth={"850px"}
          sx={{
            color: theme.palette.grey[600],
            fontSize: "1.25rem",
            fontWeight: 400,
          }}
        >
          When you partner with ProgaTech, you're not just getting a service,
          you{" "}
          <span
            style={{
              color: theme.palette.grey[600],
              fontSize: "1.25rem",
              fontWeight: 400,
            }}
            onClick={handleTap}
          >
            have people who care about your success
          </span>
        </Typography>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, md: 2 }}
          mt={6}
          sx={{
            justifyContent: "flex-start",
          }}
        >
          {visibleMembers.map((member) => (
            <Grid
              key={`${member.name}-${member.image}`}
              size={{ xs: 6, sm: 6, md: 2.4 }}
              display="flex"
              alignItems="end"
              sx={{
                position: "relative",
                overflow: "visible",
                minHeight: { xs: 140, md: 160 },
                "&:hover": {
                  "& .member-image": {
                    transform: "scale(1.06)",
                  },
                },
              }}
            >
              <Image
                src={"/about/team-members/bg.png"}
                alt={member.name}
                width={315}
                height={200}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "12px", md: "14px" },
                  left: { xs: "14px", md: "16px" },
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.primary,
                    maxWidth: { xs: "100px", md: "100px" },
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                  }}
                >
                  {member.title.includes(", ")
                    ? member.title.split(", ").map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index < array.length - 1 && ","}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))
                    : member.title.split(" ").map((word, index, array) => (
                        <span key={index}>
                          {word}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  unoptimized
                  width={216}
                  height={220}
                  className="member-image"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 3,
                    maxHeight: "110%",
                    width: "auto",
                    height: "auto",
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "bottom right",
                  }}
                />
              </Box>
            </Grid>
          ))}

          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}
            sx={{
              position: "relative",
              overflow: "hidden",
              minHeight: { xs: 220, md: 150 },
              maxHeight: { xs: 240, md: 160 },
              color: theme.palette.common.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              p: 2,
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 315 213"
              preserveAspectRatio="none"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            >
              <path
                d="M0 1.9572V175.729C0 176.216 0.181489 176.685 0.509027 177.046L32.6143 212.359C32.9853 212.767 33.5111 213 34.0625 213H313.043C314.124 213 315 212.124 315 211.043V30.2339C315 29.7096 314.79 29.2071 314.416 28.8392L285.694 0.562492C285.328 0.202033 284.835 0 284.321 0H1.9572C0.876269 0 0 0.876269 0 1.9572Z"
                fill={theme.palette.background.default}
              />
            </Box>

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "1.25rem", md: "1rem" },
                  fontWeight: 600,
                  mb: 1,
                  mt: { xs: 2, md: 0 },
                  pl: { xs: 1, md: 0 },
                  pr: { xs: 4, md: 0 },
                }}
              >
                Would you like to see your photo here?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[200],
                  fontWeight: 400,
                  mt: 2,
                  pl: { xs: 1, md: 0 },
                }}
              >
                Join our team!
              </Typography>
              <Button
                component={Link}
                href="/careers"
                sx={{
                  color: theme.palette.text.secondary,
                  p: 0,
                  pl: { xs: 1, md: 0 },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    transform: "translate(2px, 0)",
                  },
                  "& .MuiSvgIcon-root": {
                    transition: "transform 0.2s ease",
                  },
                }}
                disableRipple
                endIcon={<East />}
              >
                Explore open roles
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
