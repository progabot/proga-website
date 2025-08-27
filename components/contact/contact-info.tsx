"use client"

import { Box, Typography, Button } from "@mui/material"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Contact us
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Phone size={20} color="#e91e63" />
            <Typography variant="body1">+3800000000</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Mail size={20} color="#e91e63" />
            <Typography variant="body1">team@proga.tech</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Clock size={20} color="#e91e63" />
            <Typography variant="body1">Monday-Friday 9 am - 6 pm</Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Visit our office
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          We'd love to welcome you to our headquarters. Please schedule an appointment in advance.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 4 }}>
          <MapPin size={20} color="#e91e63" />
          <Typography variant="body1">Address: Shota Rustaveli St, 12, Lviv, Lviv Oblast, 79000</Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#333",
            color: "#333",
            fontWeight: "bold",
            px: 3,
            py: 1.5,
            "&:hover": {
              borderColor: "#555",
              backgroundColor: "rgba(0,0,0,0.04)",
            },
          }}
        >
          Schedule an appointment →
        </Button>
      </Box>
    </Box>
  )
}
