"use client";
import { Box, Typography } from "@mui/material";
import { SectionTitle } from "@/components/shared/section-title";

interface ChallengeItem {
  title?: string;
  text: string;
}

interface ChallengesListProps {
  title?: string;
  introText?: string;
  challenges: ChallengeItem[];
}

export default function ChallengesList({
  title = "Challenges",
  introText,
  challenges,
}: ChallengesListProps) {
  return (
    <>
      <SectionTitle
        id="challenges"
        variant="h5"
        sx={{ fontWeight: 600, mb: 3, color: "#FFFFFF" }}
      >
        {title}
      </SectionTitle>
      {introText && (
        <Typography variant="body2" sx={{ mb: 3, color: "#FFFFFF" }}>
          {introText}
        </Typography>
      )}
      {challenges.map((challenge, index) => (
        <Box
          key={index}
          sx={{
            mb: index === challenges.length - 1 ? 4 : 2,
          }}
        >
          {challenge.title ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontSize: 24 }}
                  display="inline"
                >
                  {String(index + 1).padStart(2, "0")}/
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#FFFFFF", fontWeight: 400 }}
                  display="inline"
                  ml={1}
                >
                  {challenge.title}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", opacity: 0.9 }}
              >
                {challenge.text}
              </Typography>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: 24 }}
                display="inline"
              >
                {String(index + 1).padStart(2, "0")}/
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FFFFFF" }}
                display="inline"
                ml={1}
              >
                {challenge.text}
              </Typography>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}
