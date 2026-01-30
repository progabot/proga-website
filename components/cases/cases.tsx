"use client";

import CaseStudyCard from "@/components/cases/case-study-card";
import { CASE_STUDIES } from "@/utils/cases";
import { useLocale } from "@/contexts/locale-context";

export default function Cases() {
  const { isUserInUkraine } = useLocale();

  const caseStudies = isUserInUkraine
    ? [...CASE_STUDIES]
        .map((item, index) => ({ ...item, originalIndex: index }))
        .sort((a, b) => {
          if (a.country === "UA" && b.country !== "UA") return -1;
          if (a.country !== "UA" && b.country === "UA") return 1;

          return a.originalIndex - b.originalIndex;
        })
    : CASE_STUDIES;

  return (
    <>
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard
          key={caseStudy.title}
          logo={caseStudy.logo}
          title={caseStudy.title}
          description={caseStudy.description}
          tags={caseStudy.tags}
          isGlobal={caseStudy.isGlobal}
          country={caseStudy.country}
          mockupImage={caseStudy.coverImage}
          mockupAlt={caseStudy.coverImageShort}
          href={caseStudy.href}
          logoWidth={caseStudy.logoWidth}
          logoHeight={caseStudy.logoHeight}
        />
      ))}
    </>
  );
}
