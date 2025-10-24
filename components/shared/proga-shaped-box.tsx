import * as React from "react";
import Box from "@mui/material/Box";
import { styled, SxProps } from "@mui/material/styles";

const Shell = styled(Box, {
  shouldForwardProp: (prop) => prop !== "light",
})<{ light?: boolean }>(({ theme, light }) => ({
  height: "100%",
  position: "relative",
  isolation: "isolate",
  "--notch": "76px",
  "--notch-sm": "56px",
  "--notch-xs": "40px",

  [theme.breakpoints.down("md")]: { "--notch": "var(--notch-sm)" },
  [theme.breakpoints.down("sm")]: { "--notch": "var(--notch-xs)" },

  /* --- BORDER RING (fake border) --- */
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-1px",
    zIndex: 0,
    background: light ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.25)",
    /* notch + 1px so the diagonal stays parallel to the inner shape */
    "--nb": "calc(var(--notch) + 1px)",
    clipPath:
      "polygon(0 0, calc(100% - var(--nb)) 0, 100% var(--nb), 100% 100%, var(--nb) 100%, 0 calc(100% - var(--nb)))",
    transition: "transform .35s ease",
    pointerEvents: "none",
  },

  /* --- INNER PANEL / HIGHLIGHT --- */
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background: light ? "#ffffff" : "#1a1a1a",
    clipPath:
      "polygon(0 0, calc(100% - var(--notch)) 0, 100% var(--notch), 100% 100%, var(--notch) 100%, 0 calc(100% - var(--notch)))",
    transition: "background .35s ease, transform .35s ease",
  },

  transition: "transform .35s ease, background .35s ease",
  paddingBottom: "var(--notch)",
  paddingRight: "var(--notch)",
}));

const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "light",
})<{ light?: boolean }>(({ theme, light }) => ({
  height: "100%",
  position: "relative",
  zIndex: 1,
  background: light ? "#ffffff" : "#1a1a1a",
  color: light ? "#2a2a2a" : "#eaeaea",
  padding: theme.spacing(5),
}));

interface ProgaShapedBoxProps {
  children: React.ReactNode;
  light?: boolean;
  sx?: SxProps;
}

export default function ProgaShapedBox({
  children,
  light = false,
  sx,
}: ProgaShapedBoxProps) {
  return (
    <Box paddingX={"1px"} height={"100%"} sx={sx}>
      <Shell light={light}>
        <Card light={light}>{children}</Card>
      </Shell>
    </Box>
  );
}
