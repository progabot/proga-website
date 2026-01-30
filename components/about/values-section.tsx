"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";

export default function ValuesSection() {
  const values = [
    {
      icon: (
        <img
          src="/icons/support.png"
          alt="Support"
          width={44}
          height={44}
          style={{ color: "white" }}
        />
      ),
      title: "Support",
      description: "We stand by our clients and team members",
    },
    {
      icon: (
        <img
          src="/icons/think-big.png"
          alt="Think big"
          width={44}
          height={44}
        />
      ),
      title: "Think big",
      description: "Every project has potential for greatness",
    },
    {
      icon: (
        <img
          src="/icons/customer-first.png"
          alt="Customer first"
          width={44}
          height={44}
        />
      ),
      title: "Customer first",
      description: "Your success is our priority",
    },
    {
      icon: (
        <img
          src="/icons/visibility.png"
          alt="Openness and transparency"
          width={44}
          height={44}
        />
      ),
      title: "Openness and transparency",
      description: "Clear communication, honest processes",
    },
    {
      icon: (
        <img
          src="/icons/learning.png"
          alt="Curiosity and lifelong learning"
          width={44}
          height={44}
        />
      ),
      title: "Curiosity and lifelong learning",
      description: "We never stop improving",
    },
  ];
  const theme = useTheme();
  const stickyContent = (
    <>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Values
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.grey[400], lineHeight: 1.6 }}
      >
        Our values guide every decision we make and every line of code we write.
        We believe great products come from great relationships built on trust,
        transparency, and shared ambition.
      </Typography>
    </>
  );

  const mainContent = (
    <Grid container spacing={3}>
      {values.map((value, index) => (
        <Grid size={12} key={index}>
          <Card
            sx={{
              backgroundColor: theme.palette.grey[900],
              color: theme.palette.text.secondary,
              border: "none",
              boxShadow: "none",
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", p: 3 }}
            >
              <Box sx={{ mr: 3, mb: 4 }}>{value.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.grey[400] }}
                >
                  {value.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      containerProps={{ sx: { color: theme.palette.text.secondary } }}
    />
  );
}
