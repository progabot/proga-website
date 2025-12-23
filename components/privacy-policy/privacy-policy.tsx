"use client";

import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import { Container, Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpScale, scaleIn } from "@/utils/motion-presets";
import Link from "next/link";

export default function PrivacyPolicy() {
  const theme = useTheme();
  const headerStyles = {
    fontSize: {
      xs: "1.75rem",
      md: "2.25rem",
    },
    fontWeight: 600,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
  };

  const bodyStyles = {
    fontSize: "1.1rem",
    color: theme.palette.grey[800],
    lineHeight: 1.6,

    "& a": {
      color: theme.palette.secondary.main,
    },
  };

  return (
    <Box sx={{ maxWidth: "900px", wordBreak: "break-word" }}>
      <Box sx={{ textAlign: "left", mb: 6 }}>
        <Typography
          variant="h1"
          sx={{ ...headerStyles, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Privacy Policy
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        This Privacy Policy describes how personal information is collected,
        used, and shared when you visit proga.tech page (the “Website”), and
        which applies to all visitors to this Website.
      </Typography>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        By using our Website, you agree to the terms of this Privacy Policy.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Information We Collect
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        We do not directly collect personally identifiable information (such as
        your name, email, or address) unless you voluntarily provide it (e.g.,
        through a contact form or email).
      </Typography>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        However, we use Google Analytics to collect certain non-personal
        information automatically when you visit our Website. This may include:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        {[
          "IP address (which may be anonymized if configured)",
          "Browser type and version",
          "Device type and operating system",
          "Referring URLs",
          "Pages visited and time spent on each page",
          "Approximate geographic location",
          "Other diagnostic data used to improve Website performance",
        ].map((item) => (
          <Box component="li" key={item}>
            <Typography variant="body1" sx={bodyStyles}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Use of Google Analytics
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        We use Google Analytics, a web analytics service provided by Google LLC
        (“Google”), to understand how visitors interact with our Website. Google
        Analytics uses cookies and similar technologies to collect and analyze
        information about your use of the Website. Google may use the collected
        data to contextualize and personalize the ads of its own advertising
        network.
      </Typography>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        You can learn more about how Google uses your data here:&nbsp;
        <Link
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/technologies/partner-sites
        </Link>
      </Typography>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        To opt out of Google Analytics tracking, install the Google Analytics
        Opt-out Browser Add-on:&nbsp;
        <Link
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout
        </Link>
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          How We Use Collected Information
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        We use analytics data only for the following purposes:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        {[
          "Analyzing Website traffic and usage trends",
          "Improving the Website’s design, functionality, and content",
          "Maintaining Website security and performance",
        ].map((item) => (
          <Box component="li" key={item}>
            <Typography variant="body1" sx={bodyStyles}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        We do not sell, rent, or share analytics data with third parties for
        marketing purposes.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Data Retention
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        Google Analytics retains data for a limited period that we configure in
        Google Analytics’ data retention settings. We do not store analytics
        data independently.
      </Typography>
      <Typography variant="body1" sx={bodyStyles} paragraph>
        Learn more about Google’s data retention practices:&nbsp;
        <Link
          href="https://support.google.com/analytics/answer/7667196"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.google.com/analytics/answer/7667196
        </Link>
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Cookies
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        Our Website uses cookies to help analyze web traffic via Google
        Analytics. Cookies are small text files placed on your device that help
        us understand how users interact with our Website. You can disable
        cookies in your browser settings, though some features of the Website
        may not function properly.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Data Protection and Security
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        We use reasonable technical and organizational measures to protect data
        collected via Google Analytics. However, no method of transmission over
        the Internet or electronic storage is completely secure.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Your Rights
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        Depending on your location, you may have certain rights regarding your
        personal data, such as the right to access, correct, or delete your
        data, to restrict or object to processing, and to withdraw consent (if
        applicable). Since we only use anonymized analytics data, these rights
        may not directly apply. However, you can opt out of tracking as
        described above.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Third-Party Links
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        Our Website may contain links to external websites. We are not
        responsible for the privacy practices or the content of those sites.
        Please review their privacy policies before providing any information.
      </Typography>

      <Box sx={{ textAlign: "left", mb: 3, mt: 8 }}>
        <Typography variant="h1" sx={headerStyles}>
          Contact Us
        </Typography>
      </Box>

      <Typography variant="body1" sx={bodyStyles} paragraph>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </Typography>
      <Box>
        <Typography variant="body1" sx={bodyStyles}>
          <strong>Proga Tech</strong>
        </Typography>
        <Typography variant="body1" sx={bodyStyles}>
          Email:{" "}
          <Link href="mailto:contact@proga.tech">contact@proga.tech</Link>
        </Typography>
      </Box>
    </Box>
  );
}
