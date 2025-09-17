import Link from "next/link";
import Script from "next/script";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "#F7F7F7", py: 4 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ color: "#333", "&:hover": { color: "#000" } }}
              >
                Home
              </Typography>
            </Link>
            <Link href="/cases" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ color: "#333", "&:hover": { color: "#000" } }}
              >
                Cases
              </Typography>
            </Link>
            <Link href="/services" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ color: "#333", "&:hover": { color: "#000" } }}
              >
                Services
              </Typography>
            </Link>
            <Link href="/careers" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ color: "#333", "&:hover": { color: "#000" } }}
              >
                Careers
              </Typography>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ color: "#333", "&:hover": { color: "#000" } }}
              >
                About
              </Typography>
            </Link>
          </Box>

          {/* Clutch Badge */}
          {/* <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="45" data-nofollow="false" data-expandifr="true" data-scale="100" data-clutchcompany-id="2281469"></div> */}
        </Box>

        <Box
          sx={{ display: "flex", gap: 1, mb: 4, justifyContent: "flex-start" }}
        >
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=61567231930216"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#f8bbd9",
              color: "#333",
              width: 40,
              height: 40,
              "&:hover": { backgroundColor: "#f0a6d1" },
            }}
          >
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/proga_tech"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#f8bbd9",
              color: "#333",
              width: 40,
              height: 40,
              "&:hover": { backgroundColor: "#f0a6d1" },
            }}
          >
            <XIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/proga.tech/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#f8bbd9",
              color: "#333",
              width: 40,
              height: 40,
              "&:hover": { backgroundColor: "#f0a6d1" },
            }}
          >
            <Instagram fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/proga-tech/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#f8bbd9",
              color: "#333",
              width: 40,
              height: 40,
              "&:hover": { backgroundColor: "#f0a6d1" },
            }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Logo and Copyright */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              src="/progatech-logo-small.png"
              alt="ProgaTech"
              width={32}
              height={32}
            />
            <Typography variant="body2" sx={{ color: "#666" }}>
              © 2025 ProgaTech, Inc. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
