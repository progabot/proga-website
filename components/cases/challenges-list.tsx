import { Box, Typography } from "@mui/material"

interface ChallengeItem {
  text: string
}

interface ChallengesListProps {
  title?: string
  introText?: string
  challenges: ChallengeItem[]
}

export default function ChallengesList({ 
  title = "Challenges", 
  introText, 
  challenges
}: ChallengesListProps) {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        {title}
      </Typography>
      {introText && (
        <Typography variant="body2" sx={{ mb: 3, color: "#cccccc" }}>
          {introText}
        </Typography>
      )}
      {challenges.map((challenge, index) => (
        <Box 
          key={index} 
          sx={{ 
            mb: index === challenges.length - 1 ? 4 : 2, 
            display: "flex", 
            alignItems: "center" 
          }}
        >
          <Typography variant="body2" sx={{ color: "#666", fontSize: 24 }} display="inline">
            {String(index + 1).padStart(2, "0")}/
          </Typography>
          <Typography variant="body1" sx={{ color: "#cccccc" }} display="inline" ml={1}>
            {challenge.text}
          </Typography>
        </Box>
      ))}
    </>
  )
}
