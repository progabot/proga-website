import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

interface InstagramPreviewProps {
  previewImage: string;
  title: string;
  buttonText: string;
  instagramLink: string;
  mode?: "light" | "dark";
}

export default function InstagramPreview({
  previewImage,
  title,
  buttonText,
  instagramLink,
  mode = "light",
}: InstagramPreviewProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        px: { xs: 3, md: 6 },
        pt: { xs: 3, md: 6 },
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "block" }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            color:
              mode === "dark"
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
            textAlign: "left",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>

        <Button
          variant="outlined"
          endIcon={<ArrowOutwardIcon />}
          sx={{
            mb: 4,
            ...(mode === "dark" && {
              borderColor: theme.palette.background.paper,
              color: theme.palette.text.secondary,
            }),
            width: { xs: "100%", md: "auto" },
            display: { xs: "flex", md: "inline-flex" },
            justifyContent: { xs: "center", md: "flex-start" },
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            fontSize: theme.typography.body1.fontSize,
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              ...(mode === "dark" && {
                borderColor: theme.palette.background.paper,
              }),
              backgroundColor: "rgba(0,0,0,0.04)",
            },
            "& .MuiButton-endIcon": {
              transition: "transform 0.3s ease",
            },
            "&:hover .MuiButton-endIcon": {
              transform: "translate(2px, -2px)",
            },
          }}
          onClick={() => window.open(instagramLink, "_blank")}
        >
          {buttonText}
        </Button>
      </Box>

      <Image
        src={previewImage}
        alt={`PGT Instagram`}
        width={418}
        height={572}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
}
