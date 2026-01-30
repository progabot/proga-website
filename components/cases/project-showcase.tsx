"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";

interface ProjectShowCaseProps {
  image: {
    src: string;
    width: number;
    height: number;
  };
  imageMobile?: {
    src: string;
    width: number;
    height: number;
  };
  imageAlt: string;
}

export default function ProjectShowCase({
  image,
  imageMobile,
  imageAlt,
}: ProjectShowCaseProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const selectedImage = isMobile && imageMobile ? imageMobile : image;

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Image
        src={selectedImage.src}
        alt={imageAlt}
        width={selectedImage.width}
        height={selectedImage.height}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
}
