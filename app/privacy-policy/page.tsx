import { Box, Container, Typography } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";

export const metadata = {
  title: "Privacy Policy | Proga Tech",
  description:
    "Privacy Policy of Proga Tech. Learn how we collect, use, and protect your personal information when you visit our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container
      maxWidth={PAGE_CONTAINER_MAX_WIDTH}
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <PrivacyPolicy />
    </Container>
  );
}
