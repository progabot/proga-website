import { Box, Chip, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Global from "@/assets/country-flags/global.png";
import { Country } from "@/utils/cases";
import SecondaryChip from "./secondary-chip";

export default function GlobalChip({ small = false }: { small?: boolean }) {
  return (
    <SecondaryChip small={small}>
      <Image
        src={Global}
        alt={`Global`}
        width={21}
        height={14}
        style={{ borderRadius: "3px", width: "auto" }}
      />
      <span>Global</span>
    </SecondaryChip>
  );
}
