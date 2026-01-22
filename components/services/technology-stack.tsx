"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  FolderCode,
  CodeXml,
  Database,
  Blocks,
  LayoutGrid,
} from "lucide-react";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import StickyTwoColumnLayout from "../shared/sticky-two-column-layout";
import { SectionTitle } from "@/components/shared/section-title";

const techCategories = [
  {
    title: "Backend",
    icon: FolderCode,
    technologies: ".NET, C#, ASP.NET Core, Java, Node.js, Next.js",
    isDark: true,
  },
  {
    title: "Frontend",
    icon: CodeXml,
    technologies: "React, Next.js, Vue.js, Blazor, JavaScript, CSS, SCSS",
    isDark: false,
  },
  {
    title: "Database",
    icon: Database,
    technologies: "PostgreSQL, MySQL, MS SQL Server, MongoDB",
    isDark: false,
  },
  {
    title: "Infrastructure",
    icon: Blocks,
    technologies: "AWS, Azure, Digital Ocean, Google Cloud",
    isDark: false,
  },
  {
    title: "UX/UI",
    icon: LayoutGrid,
    technologies: "Figma, Adobe, Jitter",
    isDark: false,
  },
];

export default function TechnologyStack() {
  const theme = useTheme();
  const stickyContent = (
    <>
      <SectionTitle
        id="technology-stack"
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 600,
          mb: 4,
          color: theme.palette.background.default,
        }}
      >
        Our technology stack
      </SectionTitle>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.grey[600],
          mb: 4,
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        We build powerful solutions using a diverse and modern tech stack.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.grey[600],
          mb: 4,
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        We work with proven technologies like .NET and Node.js for backend
        development, combined with React and Next.js to build fast, intuitive
        user interfaces. Whether your project needs a SQL database or something
        more flexible like MongoDB, we choose the right solution for your
        specific needs.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.grey[600],
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        With our experience in AWS and Azure, we make sure your applications run
        smoothly, stay secure, and scale as your business grows.
      </Typography>
    </>
  );

  const mainContent = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {techCategories.map((category, index) => {
        const IconComponent = category.icon;

        const iconColor = category.isDark
          ? theme.palette.text.secondary
          : theme.palette.secondary.main;
        const iconBackgroundColor = category.isDark
          ? theme.palette.grey[900]
          : "#F7F7F7";
        const isLastItem = index === techCategories.length - 1;
        const iconContainerStyles = {
          mr: 2,
          backgroundColor: iconBackgroundColor,
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          transform: isLastItem ? "rotate(45deg)" : "none",
          transition: "transform 0.3s ease-in-out",

          "& svg": {
            color: iconColor,
            width: 24,
            height: 24,
          },
        };

        return (
          <Card
            key={category.title}
            sx={{
              backgroundColor: category.isDark
                ? theme.palette.background.default
                : theme.palette.background.paper,
              color: category.isDark
                ? theme.palette.background.paper
                : theme.palette.background.default,
              borderRadius: 3,
              p: 4,
              border: category.isDark ? "none" : "1px solid #e0e0e0",
              boxShadow: category.isDark
                ? "none"
                : "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box sx={iconContainerStyles}>
                  <IconComponent size="2rem" color={iconColor} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: category.isDark
                      ? theme.palette.background.paper
                      : theme.palette.background.default,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: category.isDark ? "#ccc" : theme.palette.grey[600],
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {category.technologies}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      backgroundColor={theme.palette.background.paper}
    />
  );
}
