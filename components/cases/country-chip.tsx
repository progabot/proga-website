import { Box, Chip, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import UaFlag from "@/assets/country-flags/ua.png";
import UkFlag from "@/assets/country-flags/uk.png";
import UsFlag from "@/assets/country-flags/us.png";
import { Country } from "@/utils/cases";
import SecondaryChip from "./secondary-chip";

export default function CountryChip({
  country,
  isGlobal,
  small = false,
}: {
  country: Country;
  isGlobal: boolean;
  small?: boolean;
}) {
  const flagMap: Record<Country, StaticImageData> = {
    [Country.UA]: UaFlag,
    [Country.US]: UsFlag,
    [Country.UK]: UkFlag,
  };
  const countryFlag = flagMap[country];

  return (
    <SecondaryChip small={small}>
      <Image
        src={countryFlag}
        alt={`${country} Flag`}
        width={21}
        height={14}
        style={{ borderRadius: "3px" }}
      />
      <span>
        {country}
        {isGlobal && "-based"}
      </span>
    </SecondaryChip>
  );
}
