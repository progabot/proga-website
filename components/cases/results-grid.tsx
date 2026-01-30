import { Box, Grid, Typography } from "@mui/material";

interface ResultItem {
  value: string;
  label: string;
}

interface ResultsGridProps {
  results: ResultItem[];
  footer?: string;
}

export default function ResultsGrid({ results, footer }: ResultsGridProps) {
  const firstColumn = results.filter((_, index) => index % 2 === 0);
  const secondColumn = results.filter((_, index) => index % 2 === 1);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: { xs: "1 1 100%", md: "0 0 auto" },
          }}
        >
          {firstColumn.map((result, index) => (
            <Box
              key={index}
              sx={{
                p: 2.5,
                border: "1px solid",
                borderRadius: 3,
                borderColor: "grey.300",
                width: { xs: "100%", md: 240 },
                height: 160,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.5,
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {result.label}
              </Typography>
              <Typography
                variant="h3"
                component="p"
                sx={{
                  fontWeight: 700,
                  color: "primary.700",
                  lineHeight: 1.2,
                }}
              >
                {result.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: { xs: 0, md: 3 },
            flex: { xs: "1 1 100%", md: "0 0 auto" },
          }}
        >
          {secondColumn.map((result, index) => (
            <Box
              key={index}
              sx={{
                p: 2.5,
                border: "1px solid",
                borderRadius: 3,
                borderColor: "grey.300",
                width: { xs: "100%", md: 240 },
                height: 160,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.5,
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {result.label}
              </Typography>
              <Typography
                variant="h3"
                component="p"
                sx={{
                  fontWeight: 700,
                  color: "primary.700",
                  lineHeight: 1.2,
                }}
              >
                {result.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {footer && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "left",
          }}
        >
          {footer}
        </Typography>
      )}
    </Box>
  );
}
