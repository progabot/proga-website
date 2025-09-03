import { Box, Container, Typography } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CaseStudyHero from "@/components/cases/case-study-hero";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import ProjectShowCase from "@/components/cases/project-showcase";
import { PIGTRACKS_CASE_STUDY } from "@/utils/cases";

export const metadata = {
  title: "PigTracks | Case Study | Proga Tech",
  description:
    "Pipeline integrity management system case study. Seamless integration, intelligent data visualization, and automated workflows for field execution.",
};

export default function PigtracksCaseStudy() {
  const challenges = [
    { text: "Fragmented field data" },
    { text: "Raw complexity of field inputs" },
    { text: "Manual workflows & compliance risks" },
    { text: "No real‑time pig visibility" },
    { text: "Disconnected team coordination" },
    { text: "Scaling across large operations" },
  ];

  const solutions = [
    {
      description: "Seamless integration from surveys to SiteDoc 360",
    },
    {
      description: "Intelligent data transformation with ML, IoT, cloud sync",
    },
    {
      description: "Automated workflows, alerts, and regulatory reporting",
    },
    {
      description: "Live tracking dashboards with anomaly detection",
    },
    {
      description:
        "Unified cloud platform for collaboration between operatorsand providers",
    },
    {
      description:
        "Flexible execution tools that support enterprise-level deployment",
    },
  ];

  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={PIGTRACKS_CASE_STUDY.title}
          description={PIGTRACKS_CASE_STUDY.description}
          tags={PIGTRACKS_CASE_STUDY.tags}
          image={PIGTRACKS_CASE_STUDY.coverImage}
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/pigtracks/overview-cover.png",
          alt: "Pigtracks explanations interface",
          width: 500,
          height: 600,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "#cccccc" }}
        >
          PigTracks is a cloud-based field execution platform designed for the
          pipeline integrity industry, with a focus on pigging operations. Its
          core mission is to "support the world's best pipeline integrity teams"
          by making the complex job of pigging and data management radically
          simpler and more transparent. The system turns raw field inputs into
          actionable intelligence so operators can run safer, more efficient,
          fully compliant pipeline programs.
        </Typography>

        <ChallengesList challenges={challenges} />
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="Track pigs in real-time, manage field data, and keep your whole team aligned while we handle the complexity so you can focus on safe, efficient pipeline operations."
      />

      <ProjectShowCase
        image={{
          src: "/cases/pigtracks/showcase.png",
          width: 1440,
          height: 2122,
        }}
        imageAlt="PigTracks interface showcase"
      />
    </Box>
  );
}
