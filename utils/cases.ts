export enum Country {
  US = "US",
  UK = "UK",
  UA = "UA",
}

interface CaseStudy {
  title: string;
  href: string;
  description: string;
  tags: string[];
  logo?: string;
  coverImage: string;
  coverImageShort: string;
  mockupImage?: string;
  mockupAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  country: Country;
  isGlobal?: boolean;
}

export const STRIDIST_CASE_STUDY: CaseStudy = {
  title: "Stridist",
  href: "/cases/stridist",
  description:
    "Built for fitness trainers who want to focus on what they love - training people. We handle the scheduling, client management, and business stuff so you can concentrate on changing lives.",
  tags: ["Healthcare", "Fitness", "Coaching"],
  logo: "/cases/stridist/logo-v2.png",
  coverImage: "/cases/stridist/cover-image.jpg",
  coverImageShort: "/cases/stridist/cover-image-short.jpg",
  mockupImage: "/cases/stridist/stridist-mockup.png",
  mockupAlt: "Stridist case study",
  country: Country.UK,
  isGlobal: true,
};

export const PIGTRACKS_CASE_STUDY: CaseStudy = {
  title: "PigTracks",
  href: "/cases/pigtracks",
  description:
    "Real-time pipeline monitoring made simple. Track your equipment, get instant alerts when something's wrong, and keep everything running smoothly with live maps and smart automation.",
  tags: ["Cloud Platform", "Pipeline Integrity", "Data Management"],
  logo: "/cases/pigtracks/logo-v2.png",
  coverImage: "/cases/pigtracks/cover-image.jpg",
  coverImageShort: "/cases/pigtracks/cover-image-short.jpg",
  mockupImage: "/cases/pigtracks/pigtracks-mockup.png",
  mockupAlt: "PigTracks case study",
  country: Country.US,
};

export const ERUDITION_CASE_STUDY: CaseStudy = {
  title: "Erudition",
  href: "/cases/erudition",
  description:
    "Learning shouldn't be complicated. We're creating a space where teachers can easily build engaging courses and students actually enjoy the learning process.",
  tags: ["Education", "E-learning"],
  logo: "/cases/erudition/logo-v2.png",
  coverImage: "/cases/erudition/cover-image.jpg",
  coverImageShort: "/cases/erudition/cover-image-short.jpg",
  mockupImage: "/cases/erudition/erudition-mockup.png",
  mockupAlt: "Erudition case study",
  country: Country.US,
};

export const PRORAPP_CASE_STUDY: CaseStudy = {
  title: "ProRapp Estate",
  href: "/cases/prorapp",
  description:
    "Fall in love with your future home before you buy it. We're changing how people buy apartments by letting you explore, feel, and experience your space through immersive virtual tours, plus get free design plans and everything you need for renovation.",
  tags: ["Real Estate", "3D Visualization"],
  logo: "/cases/prorapp/logo.png",
  coverImage: "/cases/prorapp/cover-image.jpg",
  coverImageShort: "/cases/prorapp/cover-image-small.jpg",
  mockupImage: "/cases/prorapp/prorapp-mockup.png",
  mockupAlt: "Prorapp case study",
  country: Country.UA,
};

export const PROBIG_CASE_STUDY: CaseStudy = {
  title: "Probig",
  href: "/cases/probig",
  description:
    "Your personal fitness journey, simplified. Join online marathons, build healthy habits, get daily motivation from experts, and track your progress all in one place.",
  tags: ["Running", "PWA", "STRAVA API"],
  logo: "/cases//probig/logo.png",
  coverImage: "/cases/probig/cover-image.jpg",
  coverImageShort: "/cases/probig/cover-image-small.jpg",
  mockupImage: "/cases/probig/probig-mockup.png",
  mockupAlt: "Probig case study",
  logoWidth: 60,
  logoHeight: 22,
  country: Country.UA,
};

export const MIAPLAZA_CASE_STUDY: CaseStudy = {
  title: "Miaplaza",
  href: "/cases/miaplaza",
  description:
    "Enrolling in online school is now simple for modern families. Navigate admissions easily, track application status in real-time, and secure your spot from the first click to the final contract.",
  tags: ["EdTech", "Student Enrollment", "Automation"],
  logo: "/cases/miaplaza/logo.png",
  coverImage: "/cases/miaplaza/cover-image.png",
  coverImageShort: "/cases/miaplaza/cover-image-short.png",
  mockupImage: "/cases/miaplaza/miaplaza-mockup.png",
  mockupAlt: "Miaplaza case study",
  country: Country.US,
};

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  PIGTRACKS_CASE_STUDY,
  STRIDIST_CASE_STUDY,
  ERUDITION_CASE_STUDY,
];

export const FEATURED_CASE_STUDIES_UA: CaseStudy[] = [
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
];

export const CASE_STUDIES: CaseStudy[] = [
  STRIDIST_CASE_STUDY,
  ERUDITION_CASE_STUDY,
  PIGTRACKS_CASE_STUDY,
  MIAPLAZA_CASE_STUDY,
  PRORAPP_CASE_STUDY,
  PROBIG_CASE_STUDY,
];
