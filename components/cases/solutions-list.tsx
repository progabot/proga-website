import { Box, Typography, Divider } from "@mui/material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";

interface SolutionItem {
  title?: string;
  description: string;
}

interface SolutionsListProps {
  title?: string;
  subtitle?: string;
  solutions: SolutionItem[];
}

export default function SolutionsList({
  title = "Solutions",
  subtitle = "",
  solutions,
}: SolutionsListProps) {
  const stickyContent = (
    <>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{ color: "#666", mb: 4, lineHeight: 1.7, fontSize: "1rem" }}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );

  const mainContent = (
    <>
      {solutions.map((solution, index) => (
        <>
          <Box key={index} display="flex" gap={4} mb={2}>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "#f8d7da", fontWeight: 600, mb: 1 }}
              >
                [{String(index + 1).padStart(2, "0")}]
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {solution.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.4,
                  mt: solution.title ? 2 : 0.5,
                }}
              >
                {solution.description}
              </Typography>
            </Box>
          </Box>
          {index !== solutions.length - 1 && solution.title && (
            <Divider sx={{ my: 2 }} />
          )}
        </>
      ))}
    </>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      backgroundColor="transparent"
      spacing={4}
    />
  );
}
