import { Box, Container, Typography } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CaseStudyHero from "@/components/cases/case-study-hero";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import ProjectShowCase from "@/components/cases/project-showcase";
import CustomerTestimonials from "@/components/cases/testimonials";
import ProjectCTA from "@/components/shared/project-cta";
import {
  PIGTRACKS_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  ERUDITION_CASE_STUDY,
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
} from "@/utils/cases";
import { CodeXml, FolderCode } from "lucide-react";
import TechnologyStack from "@/components/cases/technology-stack";
import ExperiencePigTracks from "@/components/cases/experience-pigtracks";
import OtherCases from "@/components/cases/other-cases";

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
  const TESTIMONIALS = [
    {
      text: "The PigTracks tracking crews did a great job communicating during the long hours on these runs. I and the field folks are VERY grateful for the diligent communication efforts which helped our field crews to make the right decisions to maintain speed control. PHENOMINAL",
    },
    {
      text: "The PigTracks platform is the chief communicator for our projects. The tech and team keep our projects running smoothly.",
    },
  ];
  const otherCases = [
    STRIDIST_CASE_STUDY,
    ERUDITION_CASE_STUDY,
    PRORAPP_CASE_STUDY,
    PROBIG_CASE_STUDY,
  ];
  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={PIGTRACKS_CASE_STUDY.title}
          description={PIGTRACKS_CASE_STUDY.description}
          tags={PIGTRACKS_CASE_STUDY.tags}
          country={PIGTRACKS_CASE_STUDY.country}
          isGlobal={PIGTRACKS_CASE_STUDY.isGlobal ?? false}
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
        imageMobile={{
          src: "/cases/pigtracks/showcase-mobile.png",
          width: 600,
          height: 1000,
        }}
        imageAlt="PigTracks interface showcase"
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <CustomerTestimonials
          testimonials={TESTIMONIALS}
          title="Customer experiences with PigTracks"
          showFooter={false}
        />
      </Container>
      <ExperiencePigTracks />

      <TechnologyStack
        mode="light"
        categories={[
          {
            icon: <CodeXml color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Frontend",
            items: [
              [
                { text: "React", bold: true },
                { text: " library for fast and modular UI development" },
              ],
              [
                { text: "MUI", bold: true },
                {
                  text: " design system for consistent and accessible interfaces",
                },
              ],
            ],
          },
          {
            icon: <FolderCode color="#E498B7" size={32} strokeWidth={1.5} />,
            title: "Backend",
            items: [
              [
                { text: ".NET 9", bold: true },
                { text: " framework for high-performance backend services" },
              ],
              [
                { text: "GraphQL", bold: true },
                { text: " for efficient and flexible data fetching" },
              ],
              [
                { text: "Auth0", bold: true },
                { text: " for secure authentication and authorization" },
              ],
              [
                { text: "MSSQL", bold: true },
                { text: " database for reliable and scalable data storage" },
              ],
              [
                { text: "Hangfire", bold: true },
                { text: " for background job processing and task scheduling" },
              ],
              [
                { text: "OpenTelemetry", bold: true },
                { text: " for centralized logging and performance monitoring" },
              ],
            ],
          },
          {
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 28 28"
                style={{ display: "inline-flex", alignSelf: "center" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.5055C1.00015 8.71686 3.18842 6.4649 5.9464 6.18239C6.56574 4.35262 8.10891 2.92251 10.0694 2.3252C12.2252 1.66928 14.6147 2.09742 16.3428 3.48236C17.8221 4.66541 18.6288 6.40228 18.5452 8.19493H18.6881C21.0738 8.19501 22.9998 10.1388 23 12.5288C23 14.9199 21.0739 16.8645 18.6871 16.8646H6.53298C6.5012 16.8646 6.46981 16.8614 6.43904 16.8576C3.45341 16.8093 1 14.4594 1 11.5055ZM2.53488 11.5055C2.53488 13.588 4.29719 15.3257 6.53298 15.3257C6.55929 15.3258 6.58528 15.3271 6.61092 15.3297H18.6871C20.2173 15.3297 21.4651 14.0812 21.4651 12.5288C21.465 10.9776 20.2172 9.72989 18.6881 9.72982H17.6749C17.4421 9.72978 17.2219 9.62362 17.0763 9.44202C16.9307 9.26047 16.875 9.02266 16.9254 8.79549C17.2586 7.29781 16.6943 5.72896 15.3845 4.68149L15.3835 4.68049C14.0667 3.62492 12.208 3.27882 10.5171 3.79313C8.8279 4.3077 7.61707 5.58191 7.28143 7.08674C7.20313 7.43743 6.8923 7.68719 6.53298 7.6873C4.29718 7.6873 2.53505 9.42434 2.53488 11.5055Z"
                  fill="#E498B7"
                />
                <path
                  d="M11.2326 21.2093V16.0931C11.2326 15.6692 11.5762 15.3256 12 15.3256C12.4238 15.3256 12.7674 15.6692 12.7674 16.0931V21.2093C12.7674 21.6332 12.4238 21.9768 12 21.9768C11.5762 21.9768 11.2326 21.6332 11.2326 21.2093Z"
                  fill="#E498B7"
                />
                <path
                  d="M15.3256 20.1861V16.0931C15.3256 15.6692 15.6692 15.3256 16.093 15.3256C16.5169 15.3256 16.8605 15.6692 16.8605 16.0931V20.1861C16.8605 20.2539 16.8874 20.319 16.9354 20.367C16.9834 20.4149 17.0484 20.4419 17.1163 20.4419H21.2093C21.6331 20.4419 21.9767 20.7855 21.9767 21.2093C21.9767 21.6332 21.6331 21.9768 21.2093 21.9768H17.1163C16.6414 21.9768 16.186 21.788 15.8502 21.4522C15.5144 21.1163 15.3256 20.661 15.3256 20.1861Z"
                  fill="#E498B7"
                />
                <path
                  d="M7.13953 20.1861V16.0931C7.13953 15.6692 7.48313 15.3256 7.90698 15.3256C8.33082 15.3256 8.67442 15.6692 8.67442 16.0931V20.1861C8.67442 20.661 8.48562 21.1164 8.1498 21.4522C7.81398 21.788 7.35864 21.9768 6.88372 21.9768H2.7907C2.36685 21.9768 2.02326 21.6332 2.02326 21.2093C2.02326 20.7855 2.36685 20.4419 2.7907 20.4419H6.88372C6.95157 20.4419 7.01662 20.4149 7.06459 20.367C7.11256 20.319 7.13953 20.2539 7.13953 20.1861Z"
                  fill="#E498B7"
                />
              </svg>
            ),
            title: "Cloud Infrastructure",
            items: [
              [
                { text: "Azure Web Apps", bold: true },
                { text: " for scalable and managed application hosting" },
              ],
              [
                { text: "Azure Monitor", bold: true },
                { text: " for real-time performance and health tracking" },
              ],
              [
                { text: "Azure App Insights", bold: true },
                { text: " for deep telemetry and diagnostic insights" },
              ],
            ],
          },
        ]}
      />

      <ProjectCTA
        title="Interested in building custom solutions?"
        subtitle="We helped develop PigTracks and would love to help you with your
              next project. Contact us to learn more."
      />
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1A1A", mb: 6 }}
        >
          Check out other cases
        </Typography>

        <OtherCases otherCases={otherCases} limit={2} />
      </Container>
    </Box>
  );
}
