"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "@/components/shared/section-title";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import Image from "next/image";

export default function BerlinSync() {
  const theme = useTheme();

  const desktopHalfWidth = "calc(50% - 24px)";

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: desktopHalfWidth },
              order: { xs: 2, md: 1 },
            }}
          >
            <Image
              src="/cases/miaplaza/berlin-general.png"
              alt="Berlin team photo"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: desktopHalfWidth },
              order: { xs: 1, md: 2 },
            }}
          >
            <SectionTitle
              id="berlin-sync"
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: theme.palette.text.secondary,
              }}
            >
              Our Berlin sync
            </SectionTitle>

            <Typography
              variant="body1"
              sx={{ mb: 3, color: theme.palette.grey[300] }}
            >
              We believe collaboration is key, especially when targeting a
              critical deadline. With the project well underway and the
              back-to-school season fast approaching, we traveled to Berlin for
              on-site workshops.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: theme.palette.grey[300] }}
            >
              This direct, hands-on collaboration allowed us to demo the
              platform&apos;s progress, gather immediate feedback on the
              implementation, and make final adjustments. All to ensure we had
              the green light to launch a successful product on time.
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <Image
                src="/cases/miaplaza/berlin-adrian.png"
                alt="Working session in Berlin"
                width={400}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <Image
                src="/cases/miaplaza/berlin-demo.png"
                alt="Demo presentation in Berlin"
                width={400}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: { xs: "grid", md: "none" },
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              order: 3,
            }}
          >
            <Image
              src="/cases/miaplaza/berlin-adrian.png"
              alt="Working session in Berlin"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <Image
              src="/cases/miaplaza/berlin-demo.png"
              alt="Demo presentation in Berlin"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
