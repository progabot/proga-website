"use client"

import { NorthEast, Close } from "@mui/icons-material"
import { Box, Typography, Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
      <Box border={1} borderRadius={4} p={5} borderColor={"#DFDFDF"}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#1A1A1A" }}>
          Contact us
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Mail size={20} color="#E498B7" />
            <Typography variant="body1">contact@proga.tech</Typography>
          </Box>
        </Box>
      </Box>

      <Box border={1} borderRadius={4} p={5} borderColor={"#DFDFDF"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"flex-start"}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#1A1A1A" }}>
            Visit us
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            We’d love to welcome you!<br />You can book a meeting either in person at our office or online.  
          </Typography>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 4 }}>
            <MapPin size={20} color="#E498B7" />
            <Typography variant="body1">Address: Shota Rustaveli St, 12, Lviv, Lviv Oblast, 79000</Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          onClick={() => setIsModalOpen(true)}
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
          Schedule an appointment
          <NorthEast sx={{ fontSize: 16, color: "#000", ml: 1 }} />
        </Button>

        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          maxWidth="lg"
          fullWidth
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Schedule an Appointment
            <IconButton
              onClick={() => setIsModalOpen(false)}
              sx={{ color: 'grey.500' }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 0, height: '800px' }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3b5nZTEw3yKKdQSckr-7Mz41IxINXRG2vqbGvf6Cqxwn-JpjqL99ru57Js6oVS3YDgM0P9a_tk?gv=true"
              style={{ border: 0, width: '100%', height: '750px' }}
              frameBorder="0"
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}
