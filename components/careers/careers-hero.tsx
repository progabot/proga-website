"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Container, Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpScale, scaleIn } from "@/utils/motion-presets";

export default function CareersHero() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={PAGE_CONTAINER_MAX_WIDTH}
      sx={{ pt: { xs: 6, md: 10 } }}
    >
      <motion.div {...fadeInUpScale}>
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4.625rem" },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 3,
              color: theme.palette.text.primary,
              maxWidth: "1120px",
            }}
          >
            Want to join a company that invests in you?
          </Typography>
        </Box>
      </motion.div>

      <motion.div {...fadeInUp}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            color: theme.palette.grey[800],
            maxWidth: "900px",
            lineHeight: 1.6,
          }}
        >
          Choosing where to build your career is a big decision. At Proga Tech,
          we offer a unique blend of professional growth and personal support.
        </Typography>
      </motion.div>

      <motion.div {...scaleIn}>
        <Box sx={{ position: "relative" }}>
          <Image
            src="/careers/team-photo.png"
            alt="Proga Tech team in modern office"
            width={1324}
            height={820}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </motion.div>
    </Container>
  );
}
