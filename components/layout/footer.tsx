import Link from "next/link";
import Script from "next/script";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import ClutchWidget from "@/components/shared/ClutchWidget";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialNetwork {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const footerLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Cases", href: "/cases" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

const socialNetworks: SocialNetwork[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/proga.tech/",
    icon: (
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        sx={{
          width: 24,
          height: 24,
          transition: "transform 0.3s ease, fill 0.3s ease",
        }}
      >
        <path d="M21.25 7C21.25 4.65279 19.3472 2.75 17 2.75H7C4.65279 2.75 2.75 4.65279 2.75 7V17C2.75 19.3472 4.65279 21.25 7 21.25H17C19.3472 21.25 21.25 19.3472 21.25 17V7ZM22.75 17C22.75 20.1756 20.1756 22.75 17 22.75H7C3.82436 22.75 1.25 20.1756 1.25 17V7C1.25 3.82436 3.82436 1.25 7 1.25H17C20.1756 1.25 22.75 3.82436 22.75 7V17Z" />
        <path d="M9.85576 7.74091C10.7425 7.28082 11.7514 7.11204 12.7396 7.25849C13.7476 7.40798 14.681 7.87771 15.4017 8.59833C16.1223 9.31896 16.592 10.2523 16.7415 11.2604C16.888 12.2486 16.7192 13.2575 16.2591 14.1442C15.7989 15.031 15.0714 15.7507 14.179 16.1999C13.2866 16.6491 12.2748 16.8049 11.2884 16.6462C10.3021 16.4874 9.39126 16.0215 8.68486 15.3151C7.97846 14.6087 7.51258 13.6979 7.35381 12.7116C7.19508 11.7252 7.35091 10.7134 7.8001 9.82099C8.24928 8.92857 8.96895 8.20106 9.85576 7.74091ZM12.5198 8.74189C11.8437 8.64166 11.1529 8.75715 10.5462 9.07196C9.9395 9.38681 9.44725 9.88524 9.13994 10.4958C8.83272 11.1063 8.72569 11.7985 8.83428 12.4733C8.94291 13.1482 9.26209 13.7713 9.74541 14.2546C10.2287 14.7379 10.8518 15.0571 11.5267 15.1657C12.2015 15.2743 12.8937 15.1673 13.5042 14.8601C14.1148 14.5527 14.6132 14.0605 14.928 13.4538C15.2428 12.8471 15.3583 12.1563 15.2581 11.4802C15.1558 10.7904 14.8342 10.1519 14.3411 9.65888C13.8481 9.16582 13.2096 8.84417 12.5198 8.74189Z" />
        <path d="M17.5098 5.75C17.924 5.75 18.2598 6.08579 18.2598 6.5C18.2598 6.91421 17.924 7.25 17.5098 7.25H17.5C17.0858 7.25 16.75 6.91421 16.75 6.5C16.75 6.08579 17.0858 5.75 17.5 5.75H17.5098Z" />
      </Box>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/proga-tech/posts/?feedView=all",
    icon: (
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        sx={{
          width: 24,
          height: 24,
          transition: "transform 0.3s ease, fill 0.3s ease",
        }}
      >
        <path d="M21.25 14C21.25 12.6076 20.6965 11.2727 19.7119 10.2881C18.7273 9.30352 17.3924 8.75 16 8.75C14.6076 8.75 13.2727 9.30352 12.2881 10.2881C11.3035 11.2727 10.75 12.6076 10.75 14V20.25H13.25V14C13.25 13.2707 13.5399 12.5714 14.0557 12.0557C14.5714 11.5399 15.2707 11.25 16 11.25C16.7293 11.25 17.4286 11.5399 17.9443 12.0557C18.4601 12.5714 18.75 13.2707 18.75 14V20.25H21.25V14ZM22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1182 13.3506 16.8838 13.1162C16.6494 12.8818 16.3315 12.75 16 12.75C15.6685 12.75 15.3506 12.8818 15.1162 13.1162C14.8818 13.3506 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V14C9.25 12.2098 9.96069 10.4924 11.2266 9.22656C12.4924 7.96069 14.2098 7.25 16 7.25C17.7902 7.25 19.5076 7.96069 20.7734 9.22656C22.0393 10.4924 22.75 12.2098 22.75 14V21Z" />
        <path d="M6 8.25C6.41421 8.25 6.75 8.58579 6.75 9V21C6.75 21.4142 6.41421 21.75 6 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V9C1.25 8.58579 1.58579 8.25 2 8.25H6ZM2.75 20.25H5.25V9.75H2.75V20.25Z" />
        <path d="M5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25C4.69036 5.25 5.25 4.69036 5.25 4ZM6.75 4C6.75 5.51878 5.51878 6.75 4 6.75C2.48122 6.75 1.25 5.51878 1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.51878 1.25 6.75 2.48122 6.75 4Z" />
      </Box>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61567231930216",
    icon: (
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        sx={{
          width: 24,
          height: 24,
          transition: "transform 0.3s ease, fill 0.3s ease",
        }}
      >
        <path d="M13.25 7C13.25 6.53587 13.4345 6.09088 13.7627 5.7627C14.0909 5.43451 14.5359 5.25 15 5.25H17.25V2.75H15C13.8728 2.75 12.7921 3.19809 11.9951 3.99512C11.1981 4.79215 10.75 5.87283 10.75 7V10C10.75 10.4142 10.4142 10.75 10 10.75H7.75V13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V21.25H13.25V14C13.25 13.5858 13.5858 13.25 14 13.25H16.415L17.04 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V7ZM14.75 9.25H18C18.2308 9.25 18.4487 9.35628 18.5908 9.53809C18.7329 9.72006 18.7835 9.95765 18.7275 10.1816L17.7275 14.1816C17.6441 14.5155 17.3442 14.75 17 14.75H14.75V22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25 22.4142 9.25 22V14.75H7C6.58579 14.75 6.25 14.4142 6.25 14V10C6.25 9.58579 6.58579 9.25 7 9.25H9.25V7C9.25 5.47501 9.85624 4.0129 10.9346 2.93457C12.0129 1.85624 13.475 1.25 15 1.25H18C18.4142 1.25 18.75 1.58579 18.75 2V6C18.75 6.41421 18.4142 6.75 18 6.75H15C14.9337 6.75 14.8701 6.77636 14.8232 6.82324C14.7764 6.87013 14.75 6.9337 14.75 7V9.25Z" />
      </Box>
    ),
  },
];

export default function Footer() {
  const PROGA_FOUNDATION_YEAR = 2022;
  const CURRENT_YEAR = new Date().getFullYear();

  const socialIconButtonStyles = {
    borderRadius: "12px",
    backgroundColor: "transperent",
    border: "2px solid #008095",
    color: "#008095",
    width: 44,
    height: 44,
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#008095",
      backgroundColor: "transparent",
      "& svg": {
        transform: "scale(1.2)",
      },
    },
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "#F7F7F7", py: 4 }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid size={{ xs: 6, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
              }}
            >
              {/* Navigation Links */}
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      "&:hover": { color: "#000" },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          {/* Clutch + social networks (mobile) */}
          <Grid
            size={{ xs: 6, md: 6 }}
            sx={{
              display: { xs: "flex", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "flex-end", md: "flex-end" },
              alignItems: { xs: "flex-end", md: "center" },
              gap: { xs: 10, md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                order: { xs: 1, md: 1 },
              }}
            >
              <ClutchWidget />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                gap: 1,
                justifyContent: "flex-end",
                mr: { xs: 3, md: 0 },
                order: { xs: 2, md: 2 },
              }}
            >
              {socialNetworks.map((net) => (
                <IconButton
                  key={net.name}
                  component="a"
                  href={net.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={socialIconButtonStyles}
                >
                  {net.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Social networks desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            mb: 4,
            justifyContent: "flex-start",
          }}
        >
          {socialNetworks.map((net) => (
            <IconButton
              key={net.name}
              component="a"
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${net.name} page`}
              sx={socialIconButtonStyles}
            >
              {net.icon}
            </IconButton>
          ))}
        </Box>

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              src="/progatech-logo-small.png"
              alt="ProgaTech"
              width={32}
              height={32}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              © {PROGA_FOUNDATION_YEAR} - {CURRENT_YEAR} Proga Tech. All rights
              reserved.
            </Typography>
          </Box>
          <Link href={"/privacy-policy"} style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                "&:hover": { color: "#000" },
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Privacy Policy
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
