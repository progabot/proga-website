"use client";

import { Grid } from "@mui/material";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CaseStudyCard from "@/components/cases/case-study-card";

export default function OtherCases({ otherCases, limit = 2 }: any) {
  const pathname = usePathname();

  useEffect(() => {
    localStorage.setItem("previousCase", pathname);
  }, [pathname]);

  const prevCase =
    typeof window !== "undefined" ? localStorage.getItem("previousCase") : null;

  const randomizedCases = otherCases
    .filter((caseItem: any) => caseItem.href !== pathname)
    .filter((caseItem: any) => caseItem.href !== prevCase)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  return (
    <Grid container spacing={4}>
      {randomizedCases.map((caseItem: any) => (
        <Grid size={{ xs: 12, md: 6 }} key={caseItem.href}>
          <CaseStudyCard
            title={caseItem.title ?? null}
            description={caseItem.description ?? null}
            mockupImage={caseItem.mockupImage ?? ""}
            mockupAlt={caseItem.mockupAlt ?? ""}
            href={caseItem.href}
            logo={caseItem.logo ?? null}
            small={true}
          />
        </Grid>
      ))}
    </Grid>
  );
}
