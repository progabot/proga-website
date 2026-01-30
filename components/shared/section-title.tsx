import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useSectionLink } from "@/components/shared/useSectionLink";

interface SectionTitleProps extends Omit<TypographyProps, "id" | "onClick"> {
  id: string;
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  id,
  children,
  sx = {},
  variant = "h3",
  ...typographyProps
}) => {
  const scrollToTitle = useSectionLink(id);

  return (
    <Typography
      id={id}
      onClick={scrollToTitle}
      variant={variant}
      sx={{
        fontSize: "2rem",
        fontWeight: "medium",
        mb: 2,
        cursor: "pointer",
        ...sx,
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
