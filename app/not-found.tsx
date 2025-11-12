import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function NotFound() {
  return (
    <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={4}
        my={8}
      >
        <Image
          src="/404-brovko-pet.png"
          alt="Brovko Pet"
          width={530}
          height={330}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="h3" sx={{ color: "black" }}>
          This page took an unexpected coffee break
        </Typography>
        <Typography variant="body1">
          We’ll get it back to you shortly. While you wait, grab something tasty
          for your pet{" "}
        </Typography>
        <Box display={"flex"} gap={2}>
          <Button
            component={"a"}
            href="https://brovko.pet/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{ px: 5 }}
          >
            Shop
          </Button>
          <Button
            component={Link}
            href="/"
            variant="contained"
            sx={{ px: 5, backgroundColor: "#1A1A1A" }}
          >
            Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
