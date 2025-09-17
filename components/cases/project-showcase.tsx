import { Box, Typography, Divider } from "@mui/material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";
import Image from "next/image";

interface ProjectShowCaseProps {
  image: {
    src: string;
    width: number;
    height: number;
  };
  imageAlt: string;
}

export default function ProjectShowCase({
  image,
  imageAlt,
}: ProjectShowCaseProps) {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      sx={{ backgroundColor: "#1a1a1a" }}
    >
      <Image
        src={image.src}
        alt={imageAlt}
        width={image.width}
        height={image.height}
        style={{ width: "100%", maxWidth: "1600px", height: "auto" }}
      />
    </Box>
  );
}
