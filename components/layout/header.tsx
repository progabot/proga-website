"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
} from "@mui/material"
import { Menu, Close, NorthEast } from "@mui/icons-material"
import Image from "next/image"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cases", href: "/cases" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const theme = useTheme()

  useEffect(() => {
    setMounted(true)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.lg)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [theme.breakpoints.values.lg])

  const showMobileMenu = mounted && isMobile
  const showDesktopMenu = mounted && !isMobile

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
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} px={0}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 3, px: 0 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/proga-longlogo.png"
              alt="ProgaTech"
              width={220}
              height={32}
              style={{ objectFit: "contain" }}
            />
          </Link>

          {(showDesktopMenu || !mounted) && (
            <Box sx={{ display: "flex", gap: 4, position: "absolute", left: '50%;', top: '50%', transform: "translate(-50%, -50%)" }}>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: pathname === item.href ? "#000" : "#666",
                      position: "relative",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#000",
                      },
                      "&::after":
                        pathname === item.href
                          ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                            left: 0,
                            right: 0,
                            height: 2,
                            backgroundColor: "#f8bbd9",
                          }
                          : {},
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {(showDesktopMenu || !mounted) && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                endIcon={<NorthEast />}
                component={Link}
                href="/contact"
              >
                Contact us
              </Button>
            )}

            {showMobileMenu && (
              <IconButton onClick={() => setMobileMenuOpen(true)} sx={{ color: "#666" }}>
                <Menu />
              </IconButton>
            )}
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
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image
                src="/progatech-logo.png"
                alt="ProgaTech"
                width={140}
                height={32}
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
                    backgroundColor: pathname === item.href ? "#f5f5f5" : "transparent",
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        color: pathname === item.href ? "#000" : "#666",
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
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 2,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              endIcon={<NorthEast />}
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
  )
}
