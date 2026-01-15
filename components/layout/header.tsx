"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close, East } from "@mui/icons-material";
import Image from "next/image";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { useSpecialTheme } from "@/contexts/special-theme-context";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cases", href: "/cases" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isWinter } = useSpecialTheme();

  const logo = isWinter
    ? "/proga-logo-long-winter.svg"
    : "/proga-logo-long.svg";
  const logoHeight = isWinter ? (isMobile ? 35 : 43) : isMobile ? 24 : 32;
  const logoHeightInDrawer = isWinter ? 45 : 32;

  const isTabSelected = (tabLink: string) =>
    pathname === tabLink || pathname.startsWith(tabLink + "/");

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "none",
      }}
    >
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", py: { xs: 1, md: 3 }, px: 0 }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={logo}
              alt="ProgaTech"
              width={220}
              height={logoHeight}
              style={{ objectFit: "contain", width: "auto" }}
            />
          </Link>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 4,
              position: "absolute",
              left: "50%;",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                scroll={false}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: isTabSelected(item.href) ? 500 : 400,
                    color: theme.palette.text.primary,
                    position: "relative",
                    transition: "color 0.2s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      height: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.primary.main,
                      width: isTabSelected(item.href) ? "100%" : 0,
                      transition: "width 0.3s ease",
                      transformOrigin: "left center",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", lg: "flex" },
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                borderRadius: 2,
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: theme.palette.grey[800],
                },
                "& .MuiButton-endIcon": {
                  transition: "transform 0.3s ease",
                },
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(4px)",
                },
              }}
              endIcon={<East />}
              component={Link}
              href="/contact"
            >
              Contact us
            </Button>

            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                color: theme.palette.grey[600],
                display: { xs: "block", lg: "none" },
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 400,
          },
        }}
      >
        <Box p={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={logo}
                alt="ProgaTech"
                width={220}
                height={logoHeightInDrawer}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {navigation.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    backgroundColor: isTabSelected(item.href)
                      ? theme.palette.grey[50]
                      : "transparent",
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        color: isTabSelected(item.href)
                          ? theme.palette.text.primary
                          : theme.palette.grey[700],
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                borderRadius: 2,
                py: 1.5,
                "&:hover": {
                  backgroundColor: theme.palette.grey[800],
                },
              }}
              endIcon={<East />}
              component={Link}
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
