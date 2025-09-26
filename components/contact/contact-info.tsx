"use client";

import { NorthEast, Close } from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}
    >
      <Box border={1} borderRadius={3} p={5} borderColor={"#DFDFDF"}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "#1A1A1A" }}
        >
          Contact us
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" color="#1A1A1A">
              Reach out to us anytime, we’ll get back to you shortly.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Mail size={20} color="#E498B7" />
            <Typography variant="body1" color="#1A1A1A">
              contact@proga.tech
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        border={1}
        borderRadius={3}
        p={5}
        borderColor={"#DFDFDF"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, color: "#1A1A1A" }}
          >
            Visit us
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "#1A1A1A" }}>
            We’d love to welcome you in person at our office.
            <br />
            Please email us to schedule an appointment.
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}
          >
            <MapPin size={20} color="#E498B7" />
            <Typography variant="body1" color="#1A1A1A">
              Shota Rustaveli St, 12, Lviv, Ukraine
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Mail size={20} color="#E498B7" />
            <Typography variant="body1" color="#1A1A1A">
              visit@proga.tech
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        border={1}
        borderRadius={3}
        p={5}
        borderColor={"#DFDFDF"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, color: "#1A1A1A" }}
          >
            Talk to us
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "#1A1A1A" }}>
            Book an online meeting with our Executive Assistant
          </Typography>
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
          Book a meeting
        </Button>
        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          maxWidth="lg"
          fullWidth
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Book a meeting
            <IconButton
              onClick={() => setIsModalOpen(false)}
              sx={{ color: "grey.500" }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 0, height: "800px" }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3b5nZTEw3yKKdQSckr-7Mz41IxINXRG2vqbGvf6Cqxwn-JpjqL99ru57Js6oVS3YDgM0P9a_tk?gv=true"
              style={{ border: 0, width: "100%", height: "750px" }}
              frameBorder="0"
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}
