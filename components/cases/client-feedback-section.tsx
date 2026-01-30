"use client";

import {
  Box,
  Typography,
  Stack,
  useTheme,
  Container,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";
import StickyTwoColumnLayout from "@/components/shared/sticky-two-column-layout";

interface FeedbackData {
  title?: string;
  text: string;
  authorName: string;
  authorTitle: string;
  authorAvatarSrc: string;
  linkedinUrl?: string;
  clutchUrl?: string;
}

interface ClientFeedbackSectionProps {
  data: FeedbackData;
  isCompact?: boolean;
}

const SocialLinks = ({
  data,
  sx,
}: {
  data: FeedbackData;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();

  const socialIconStyle: SxProps = {
    backgroundColor: theme.palette.grey[800],
    width: 40,
    height: 40,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  };

  return (
    <Stack direction="row" spacing={1} sx={sx}>
      {data.linkedinUrl && (
        <IconButton
          component="a"
          href={data.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={socialIconStyle}
        >
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            sx={{ width: 24, height: 24 }}
            fill="none"
          >
            <path
              d="M21.25 14C21.25 12.6076 20.6965 11.2727 19.7119 10.2881C18.7273 9.30352 17.3924 8.75 16 8.75C14.6076 8.75 13.2727 9.30352 12.2881 10.2881C11.3035 11.2727 10.75 12.6076 10.75 14V20.25H13.25V14C13.25 13.2707 13.5399 12.5714 14.0557 12.0557C14.5714 11.5399 15.2707 11.25 16 11.25C16.7293 11.25 17.4286 11.5399 17.9443 12.0557C18.4601 12.5714 18.75 13.2707 18.75 14V20.25H21.25V14ZM22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1182 13.3506 16.8838 13.1162C16.6494 12.8818 16.3315 12.75 16 12.75C15.6685 12.75 15.3506 12.8818 15.1162 13.1162C14.8818 13.3506 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V14C9.25 12.2098 9.96069 10.4924 11.2266 9.22656C12.4924 7.96069 14.2098 7.25 16 7.25C17.7902 7.25 19.5076 7.96069 20.7734 9.22656C22.0393 10.4924 22.75 12.2098 22.75 14V21Z"
              fill={theme.palette.background.paper}
            />
            <path
              d="M6 8.25C6.41421 8.25 6.75 8.58579 6.75 9V21C6.75 21.4142 6.41421 21.75 6 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V9C1.25 8.58579 1.58579 8.25 2 8.25H6ZM2.75 20.25H5.25V9.75H2.75V20.25Z"
              fill={theme.palette.background.paper}
            />
            <path
              d="M5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25C4.69036 5.25 5.25 4.69036 5.25 4ZM6.75 4C6.75 5.51878 5.51878 6.75 4 6.75C2.48122 6.75 1.25 5.51878 1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.51878 1.25 6.75 2.48122 6.75 4Z"
              fill={theme.palette.background.paper}
            />
          </Box>
        </IconButton>
      )}
      {data.clutchUrl && (
        <IconButton
          component="a"
          href={data.clutchUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={socialIconStyle}
        >
          <Image
            src={"/icons/clutch.png"}
            alt={`Clutch`}
            width={24}
            height={24}
          />
        </IconButton>
      )}
    </Stack>
  );
};

const AuthorProfile = ({
  data,
  actions,
}: {
  data: FeedbackData;
  actions?: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ flexShrink: 0, width: 48, height: 48 }}>
        <Image
          src={data.authorAvatarSrc}
          alt={data.authorName}
          width={48}
          height={48}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.text.secondary}
        >
          {data.authorName}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
          {data.authorTitle}
        </Typography>
      </Box>
      {actions}
    </Stack>
  );
};

export default function ClientFeedbackSection({
  data,
  isCompact = false,
}: ClientFeedbackSectionProps) {
  const theme = useTheme();

  const quoteMarkStyle = {
    lineHeight: 1,
    fontSize: "70px",
    color: theme.palette.primary.main,
    flexShrink: 0,
  };

  const dividerStyle = {
    borderTop: `1px solid ${theme.palette.grey[800]}`,
    mb: 2,
    mt: isCompact ? 3 : 1,
  };

  if (isCompact) {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.text.secondary,
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 5 }}>
          {data.title ?? "Client's feedback"}
        </Typography>

        <Box display="flex" gap={2}>
          <Typography
            variant="h5"
            sx={{ ...quoteMarkStyle, transform: "translateY(-20px)" }}
            fontWeight={300}
          >
            &ldquo;
          </Typography>
          <Typography
            variant="h6"
            sx={{ whiteSpace: "pre-line" }}
            fontWeight={300}
          >
            {data.text}
          </Typography>
        </Box>

        <Box>
          <Box sx={dividerStyle} />
          <Box sx={{ ml: 5 }}>
            <AuthorProfile
              data={data}
              actions={
                <SocialLinks
                  data={data}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                />
              }
            />
          </Box>
          <SocialLinks
            data={data}
            sx={{ display: { xs: "flex", sm: "none" }, mt: 2, ml: 7 }}
          />
        </Box>
      </Box>
    );
  }

  const stickyContent = (
    <SectionTitle
      id="client-feedback"
      variant="h3"
      component="h2"
      sx={{ fontWeight: 500, mb: 2, color: theme.palette.text.secondary }}
    >
      {data.title ?? "Client's feedback"}
    </SectionTitle>
  );

  const mainContent = (
    <Stack spacing={4} height={"100%"}>
      <Box display="flex" gap={2} height={"100%"}>
        <Typography
          variant="h5"
          sx={{
            ...quoteMarkStyle,
            display: { xs: "none", sm: "block" },
            transform: "translateY(-10px)",
          }}
          fontWeight={300}
        >
          &ldquo;
        </Typography>

        <Stack spacing={4} mt={{ xs: 0, sm: 3 }} justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{
              lineHeight: 1.5,
              fontSize: {
                xs: theme.typography.h6.fontSize,
                sm: theme.typography.h5.fontSize,
              },
            }}
            fontWeight={300}
            color={theme.palette.text.secondary}
          >
            {data.text}
          </Typography>

          <Box>
            <Box sx={dividerStyle} />
            <AuthorProfile data={data} actions={<SocialLinks data={data} />} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );

  return (
    <Box sx={{ py: 2, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <StickyTwoColumnLayout
          stickyContent={stickyContent}
          mainContent={mainContent}
          backgroundColor="transparent"
        />
      </Container>
    </Box>
  );
}
