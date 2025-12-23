import { Box, Chip, useTheme } from "@mui/material";

export default function SecondaryChip({
  children,
  small = false,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  const theme = useTheme();

  return (
    <Chip
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {children}
        </Box>
      }
      size={small ? "small" : "medium"}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: "8px",
        border: `2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.text.primary,
        fontWeight: 600,
        fontSize: small ? "0.75rem" : "0.875rem",
        height: 32,
        "& .MuiChip-label": {
          px: small ? 1 : 2,
        },
      }}
    />
  );
}
