"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProgramCardData {
  logo: string;
  logoAlt: string;
  description: string;
  previewImage: string;
  previewImageMobile?: string;
  previewAlt: string;
  buttonText: string;
  url: string;
  backgroundColor?: string;
}

export function ProgramCard({ program }: { program: ProgramCardData }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const previewSrc =
    isMobile && program.previewImageMobile
      ? program.previewImageMobile
      : program.previewImage;

  return (
    <Card
      sx={{
        backgroundColor:
          program.backgroundColor || theme.palette.background.default,
        color: theme.palette.text.secondary,
        height: "100%",
        border: `1px solid ${theme.palette.grey[600]}`,
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          p: 0,
          paddingBottom: "0 !important",
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignItems: "stretch",
        }}
      >
        <Box
          width={{ xs: "50%", md: "auto" }}
          p={2}
          pr={0}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="baseline"
        >
          <Box>
            <Image
              src={program.logo}
              alt={program.logoAlt}
              width={120}
              height={40}
              style={{ marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 6 },
                color: theme.palette.text.secondary,
                mr: { xs: 0, md: 2 },
              }}
            >
              {program.description}
            </Typography>
          </Box>
          <Button
            variant="contained"
            component="a"
            href={program.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#14857A",
              color: "white",
              mb: 0,
              display: { xs: "none", md: "inline-flex" },
              "&:hover": { backgroundColor: "#126d64ff" },
              "& .MuiButton-endIcon": {
                transition: "transform 0.3s ease",
              },
              "&:hover .MuiButton-endIcon": {
                transform: "translate(2px, -2px)",
              },
            }}
            endIcon={<ArrowUpRight />}
          >
            {program.buttonText}
          </Button>
        </Box>

        <Box
          width={{ xs: "50%", md: "auto" }}
          sx={{
            textAlign: "center",
            transform: {
              xs: "none",
              md: "translateX(40px)",
            },
            minWidth: { xs: "50%", md: "unset" },
            pt: { xs: 2, md: 0 },
            pb: 0,
            display: "flex",
            justifyContent: { xs: "flex-end", md: "end" },
            flexDirection: "column",
            alignItems: { xs: "flex-end", md: "flex-end" },
            maxHeight: { xs: 180, md: "unset" },
            maxWidth: { xs: "100%", md: 240 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Image
            src={previewSrc}
            alt={program.previewAlt}
            width={520}
            height={340}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            px: { xs: 2, md: 0 },
            pb: { xs: 2, md: 0 },
            display: { xs: "block", md: "none" },
          }}
        >
          <Button
            variant="contained"
            component="a"
            href={program.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#14857A",
              color: "white",
              width: "100%",
              mt: { xs: 6, md: 2 },
              borderRadius: 1,
              "&:hover": { backgroundColor: "#126d64ff" },
              "& .MuiButton-endIcon": {
                transition: "transform 0.3s ease",
              },
              "&:hover .MuiButton-endIcon": {
                transform: "translate(2px, -2px)",
              },
            }}
            endIcon={<ArrowUpRight />}
          >
            {program.buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
