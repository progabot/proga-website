"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Code, Web, Storage, Cloud, Palette } from "@mui/icons-material";
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container";
import StickyTwoColumnLayout from "../shared/sticky-two-column-layout";

const techCategories = [
  {
    title: "Backend",
    icon: <Code sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    technologies: ".NET, C#, ASP.NET Core, Java, Node.js, Next.js",
    isDark: true,
  },
  {
    title: "Frontend",
    icon: <Web sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    technologies: "React, Next.js, Vue.js, Blazor, JavaScript, CSS, SCSS",
    isDark: false,
  },
  {
    title: "Database",
    icon: <Storage sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    technologies: "PostgreSQL, MySQL, MS SQL Server, MongoDB",
    isDark: false,
  },
  {
    title: "Infrastructure",
    icon: <Cloud sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    technologies: "AWS, Azure, Digital Ocean, Google Cloud",
    isDark: false,
  },
  {
    title: "UX/UI",
    icon: <Palette sx={{ color: "#E498B7", fontSize: "2rem" }} />,
    technologies: "Figma, Adobe, Jitter",
    isDark: false,
  },
];

export default function TechnologyStack() {
  const stickyContent = (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 600,
          mb: 4,
          color: "#000",
        }}
      >
        Our technology stack
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
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
          color: "#666",
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
          color: "#666",
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
      {techCategories.map((category, index) => (
        <Card
          key={category.title}
          sx={{
            backgroundColor: category.isDark ? "#1a1a1a" : "#fff",
            color: category.isDark ? "#fff" : "#000",
            borderRadius: 3,
            p: 4,
            border: category.isDark ? "none" : "1px solid #e0e0e0",
            boxShadow: category.isDark ? "none" : "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ mr: 2 }}>{category.icon}</Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: category.isDark ? "#fff" : "#000",
                }}
              >
                {category.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: category.isDark ? "#ccc" : "#666",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              {category.technologies}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <StickyTwoColumnLayout
      stickyContent={stickyContent}
      mainContent={mainContent}
      backgroundColor="#fff"
    />
  );
}
