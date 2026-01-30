import { Box, Container, Grid, Typography } from "@mui/material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import CaseStudyHero from "@/components/cases/case-study-hero";
import CaseStudyOverview from "@/components/cases/case-study-overview";
import ChallengesList from "@/components/cases/challenges-list";
import SolutionsList from "@/components/cases/solutions-list";
import ProjectShowCase from "@/components/cases/project-showcase";
import CustomerTestimonials from "@/components/cases/testimonials";
import ProjectCTA from "@/components/shared/project-cta";
import {
  ERUDITION_CASE_STUDY,
  MIAPLAZA_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
} from "@/utils/cases";
import OtherCases from "@/components/cases/other-cases";
import ResultsGrid from "@/components/cases/results-grid";
import ClientFeedbackSection from "@/components/cases/client-feedback-section";
import ExperienceMiaplaza from "@/components/cases/miaplaza/experience-miaplaza";
import HowWeBuiltIt from "@/components/cases/how-we-build-it";
import BerlinSync from "@/components/cases/miaplaza/berlin-sync";
import vueIcon from "@/assets/tech/vuejs.svg";
import tsIcon from "@/assets/tech/typescript.svg";
import dotnetIcon from "@/assets/tech/dotnet.svg";
import restIcon from "@/assets/tech/rest-api.svg";
import airtableIcon from "@/assets/tech/airtable.svg";
import stripeIcon from "@/assets/tech/stripe.svg";

export const metadata = {
  title: "Miaplaza | Case Study | Proga Tech",
  description:
    "Miaplaza case study on building a scalable admissions portal for online learning. Features include automated registration with Stripe & Airtable.",
};

export default function MiaplazaCaseStudy() {
  const challenges = [
    {
      text: "The school's admissions team was facing a high volume of new student applications, but their existing process was creating friction for everyone involved.",
    },
    {
      text: "For the staff, the process was manual and rigid, making it difficult to track applications, manage data, and scale with growth.",
    },
    {
      text: "For parents, this resulted in a poor experience. They found the multi-phase enrollment process and outdated interface confusing and difficult to use.",
    },
    {
      text: "The school needed a single, modern solution to automate and simplify admissions, helping both staff work more efficiently and families enjoy a user-friendly registration.",
    },
  ];

  const solutions = [
    {
      title: "Parent enrollment flow",
      description:
        "Instead of rigid forms, we developed an engine that currently powers distinct enrollment flows for MOHS and MiaPrep+. This flexible structure allows our devs to implement any changes in a straigtforward manner while Miaplaza admins retain full control over automated emails and data structuring. ",
    },
    {
      title: "Admin portal for staff",
      description:
        "We created a dedicated admin portal for the enrollment team. This portal gives them full control over the admissions process, allowing them to:",
      descriptions: [
        {
          icon: "lucide:MonitorCog",
          text: "Review, validate, and manage individual applications",
        },
        {
          icon: "lucide:TrendingUp",
          text: "Monitor the real-time progress of all applicants",
        },
        {
          icon: "lucide:ChartSpline",
          text: "Access dashboards and statistics on enrollment trends",
        },
      ],
    },
    {
      title: "Integrations",
      description:
        "To create a single, unified system, we connected the platform to essential external services:",
      descriptions: [
        {
          icon: stripeIcon,
          text: "Stripe for secure payment processing",
        },
        {
          icon: airtableIcon,
          text: "Airtable to automatically synchronize data",
        },
        {
          icon: "lucide:GraduationCap",
          text: "Existing educational platforms to link parent accounts directly to their children’s new applications",
        },
      ],
    },
  ];

  const results = [
    {
      value: "2,000+",
      label: "Active applications processed through the new system",
    },
    { value: "700", label: "Fully completed registrations" },
    { value: "~300", label: "New students enrolled since July 2025" },
    {
      value: "< 1 week",
      label:
        "Average application completion time has dropped to under one week",
    },
  ];

  const PARENT_TESTIMONIALS = [
    {
      text: "Just signed up and I have never seen my child show so much enthusiasm for learning. Even after we were done with today's classes, she did not want to log off. So grateful to have found your program!",
      authorName: "Leilah B.",
    },
    {
      text: "This is our 4th program since starting homeschool. My son has really struggled with other programs, but this one is like a switch went on in his brain.",
      authorName: "Heather C.",
    },
    {
      text: "Today is the first time I saw my daughter loves to learn, even the core materials. So much stress was lifted just in one day. I don't know how much to say LIFETIME MEMBERSHIP SOOOOO WORTH IT!",
      authorName: "Thomas A.",
    },
  ];

  const feedbackData = {
    title: "Cooperation feedback",
    text: "Proga Tech delivered quickly and was highly responsive to requests for changes.\n\nThe developers took a lot of ownership of the projects, making their own suggestions for improvements and thinking deeply about the product.",
    authorName: "Becca Ziegler",
    authorTitle: "Head of New Market Development, Miaplaza LLC",
    authorAvatarSrc: "/cases/miaplaza/becca-profile.png",
    linkedinUrl: "https://www.linkedin.com/in/rebecca-ziegler-b937aa192/",
    clutchUrl:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/417041",
  };

  const techStack = {
    subtitle:
      "We selected proven, scalable technologies that ensure high performance, maintainability, and faster development cycles that align with the existing tech stack of our client.",
    techSections: [
      {
        title: "Frontend",
        items: [
          {
            icon: vueIcon,
            title: "VueJS",
            description:
              "Enables dynamic, reactive interfaces with reusable components.",
          },
          {
            icon: tsIcon,
            title: "TypeScript",
            description:
              "Provides strong typing to reduce bugs and improve scalability.",
          },
        ],
      },
      {
        title: "Backend",
        items: [
          {
            icon: dotnetIcon,
            title: "C# / .NET",
            description:
              "Enterprise-grade, secure and well-structured framework.",
          },
          {
            icon: restIcon,
            title: "REST API",
            description:
              "Decoupled communication layer for flexible integrations and future expansion.",
          },
        ],
      },
    ],
    paymentSection: {
      title: "Payments",
      description:
        "We built an extensible Stripe billing system that supports multiple payment models and fully automates prices management. Key capabilities:",
      features: [
        {
          text: "Stripe Checkout and Setup sessions for secure and frictionless payment flows",
        },
        { text: "Subscriptions with delayed start dates" },
        { text: "Flexible prices management through admin panel" },
        { text: "Real-time billing state tracking through Stripe Webhooks" },
      ],
      icon: stripeIcon,
    },
  };

  const otherCases = [PIGTRACKS_CASE_STUDY, ERUDITION_CASE_STUDY];

  return (
    <Box>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <CaseStudyHero
          title={MIAPLAZA_CASE_STUDY.title}
          description={MIAPLAZA_CASE_STUDY.description}
          tags={MIAPLAZA_CASE_STUDY.tags}
          country={MIAPLAZA_CASE_STUDY.country}
          isGlobal={MIAPLAZA_CASE_STUDY.isGlobal ?? false}
          image={MIAPLAZA_CASE_STUDY.coverImage}
        />
      </Container>

      <CaseStudyOverview
        image={{
          src: "/cases/miaplaza/overview-cover.png",
          alt: "Miaplaza student information form",
          width: 500,
          height: 600,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 6, lineHeight: 1.6, color: "text.secondary" }}
        >
          Our clients at Miaplaza came to us with a specific operational
          challenge: they needed to simplify and automate how parents register
          their children for an online school. Our core focus was to develop a
          modern, flexible, and efficient platform to manage the entire student
          enrollment lifecycle, from the first click to the final, signed
          contract.
        </Typography>

        <ChallengesList challenges={challenges} />
      </CaseStudyOverview>

      <SolutionsList
        solutions={solutions}
        subtitle="A scalable enrollment platform constructor with different configurations to be deployed to serve unique programs."
      />

      <Container
        maxWidth={PAGE_CONTAINER_MAX_WIDTH}
        sx={{ pt: { xs: 0, md: 8 }, pb: 8 }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >
          <Box sx={{ flex: "0 0 auto", mb: { xs: 4, md: 0 } }}>
            <ResultsGrid
              results={results}
              footer="* metered 3 months after launch"
            />
          </Box>
          <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
            <ClientFeedbackSection data={feedbackData} isCompact />
          </Box>
        </Box>
      </Container>

      <ProjectShowCase
        image={{
          src: "/cases/miaplaza/showcase.png",
          width: 1440,
          height: 2122,
        }}
        imageMobile={{
          src: "/cases/miaplaza/showcase-mobile.png",
          width: 600,
          height: 1000,
        }}
        imageAlt="Miaplaza interface showcase"
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <CustomerTestimonials
          testimonials={PARENT_TESTIMONIALS}
          title="Parents say"
          showFooter={false}
        />
      </Container>

      <ExperienceMiaplaza />

      <HowWeBuiltIt
        subtitle={techStack.subtitle}
        techSections={techStack.techSections}
        paymentSection={techStack.paymentSection}
      />

      <BerlinSync />

      <ProjectCTA
        title="Ready to streamline your operations?"
        subtitle="We helped Miaplaza build a modern enrollment system. Let's discuss how we can help you with your next project."
      />

      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH} sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: "text.primary", mb: 6 }}
        >
          Check out other cases
        </Typography>

        <OtherCases otherCases={otherCases} />
      </Container>
    </Box>
  );
}
