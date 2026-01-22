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
  useTheme,
  styled,
  Tooltip,
} from "@mui/material";
import { Phone, Mail, Clock, MapPin, Check, CopyIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CONTACT_EMAIL = "contact@proga.tech";
const VISIT_EMAIL = "visit@proga.tech";

const TooltipText = styled("span")({
  position: "absolute",
  bottom: "110%",
  backgroundColor: "#8B8B8B",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 4,
  fontSize: 12,
  opacity: 0,
  transition: "opacity 0.3s",
  whiteSpace: "nowrap",
  left: "50%",
  transform: "translateX(-50%)",
});

function CopyableEmail({ email }: { email: string }) {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          position: "relative",
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Mail
          size={24}
          color={theme.palette.primary[700]}
          style={{
            position: "absolute",
            opacity: !copied && !isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
        <CopyIcon
          size={24}
          color={theme.palette.primary[700]}
          style={{
            position: "absolute",
            opacity: !copied && isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
        <Check
          size={24}
          color={theme.palette.success.main}
          style={{
            position: "absolute",
            opacity: copied ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          position: "relative",
          "&:hover .tooltip-text": {
            opacity: 1,
          },
        }}
        onClick={handleCopyEmail}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography variant="body1" color={theme.palette.text.primary}>
          {email}
        </Typography>
        <TooltipText className="tooltip-text">
          {copied ? "Copied!" : "Copy"}
        </TooltipText>
      </Box>
    </Box>
  );
}

export default function ContactInfo() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressHovered, setIsAddressHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
      }}
    >
      <Box
        border={1}
        borderRadius={3}
        p={5}
        borderColor={theme.palette.grey[100]}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: theme.palette.text.primary }}
        >
          Contact us
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Reach out to us anytime, we’ll get back to you shortly.
            </Typography>
          </Box>
          <CopyableEmail email={CONTACT_EMAIL} />
        </Box>
      </Box>

      <Box
        border={1}
        borderRadius={3}
        p={5}
        borderColor={theme.palette.grey[100]}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            Visit us
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: theme.palette.text.primary }}
          >
            We’d love to welcome you in person at our office.
            <br />
            Please email us to schedule an appointment.
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}
          >
            <Box
              sx={{
                position: "relative",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MapPin
                size={24}
                color={theme.palette.primary[700]}
                style={{
                  position: "absolute",
                  opacity: isAddressHovered ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
              <NorthEast
                className="link-icon"
                sx={{
                  fontSize: 24,
                  color: theme.palette.primary[700],
                  position: "absolute",
                  opacity: isAddressHovered ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                gap: 1,
                textDecoration: "none",
                "&:hover .link-icon": {
                  transform: "translate(2px, -2px)",
                  transition: "transform 0.2s ease-in-out",
                },
                "&:hover .tooltip-text": {
                  opacity: 1,
                },
              }}
              onMouseEnter={() => setIsAddressHovered(true)}
              onMouseLeave={() => setIsAddressHovered(false)}
              component={Link}
              href={"https://maps.app.goo.gl/J9i2W6QipQUMFePH6"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body1" color={theme.palette.text.primary}>
                Shota Rustaveli St, 12, Lviv, Ukraine
              </Typography>
              <TooltipText className="tooltip-text">
                Explore on Google Maps
              </TooltipText>
            </Box>
          </Box>
          <CopyableEmail email={VISIT_EMAIL} />
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
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            Talk to us
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: theme.palette.text.primary }}
          >
            Book an online meeting with our Executive Assistant.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={() => setIsModalOpen(true)}
          sx={{
            borderColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontWeight: "bold",
            px: 3,
            py: 1.5,
            "&:hover": {
              borderColor: theme.palette.background.default,
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
              sx={{ color: theme.palette.grey[600] }}
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
