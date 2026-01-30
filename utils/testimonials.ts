export interface Testimonial {
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
  text: HighlightedText[];
  caseHref?: string;
  caseLinkText?: string;
  clutchLink?: string;
}
export interface HighlightedText {
  text: string;
  highlight?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    authorName: "Mitchell Sims",
    authorTitle: "President & Founder, PigTracks",
    authorImage: "/clients/mitchell-sims.png",
    text: [
      {
        text: "Proga Tech has helped the client",
      },
      {
        text: "reduce bug backlog by 100% and increase the velocity of their feature backlog by 30%.",
        highlight: true,
      },
      {
        text: "They've also successfully implemented speed improvements and completed refactoring projects. Moreover, the team has managed the project well and delivered outputs as scheduled.",
      },
    ],
    caseHref: "/cases/pigtracks",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/412959",
  },
  {
    authorName: "Chris Annase",
    authorTitle: "CEO, OrgHunter, LLC",
    authorImage: "/clients/chris-annase.png",
    text: [
      {
        text: "Proga Tech's work was",
      },
      {
        text: "excellent and a tremendous success, according to all stakeholders.",
        highlight: true,
      },
      {
        text: "The team had outstanding attention to detail and went above and beyond expectations. They prioritized the client's success and took pride in every deliverable",
      },
    ],
    caseHref: "/services/stripe#make-my-donation",
    caseLinkText: "See full case study",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/422276",
  },
  {
    authorName: "Uliana Holovatiuk",
    authorTitle: "Co-Founder, ProRapp Estate",
    authorImage: "/clients/uliana-holovatiuk.jpg",
    text: [
      {
        text: "Proga Tech has launched the platform, which has",
      },
      {
        text: "gained over 15,000 users, 56,000 views, and over 25 sales in less than six months.",
        highlight: true,
      },
      {
        text: "The platform is SEO-optimized and fully responsive. Proga Tech delivers on time and communicates through in-person and virtual meetings, emails, and a messaging app.",
      },
    ],
    caseHref: "/cases/prorapp",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/420718",
  },
  {
    authorName: "James Ketteringham",
    authorTitle: "CEO, EA Search",
    authorImage: "/clients/james-ketteringham.jpg",
    text: [
      {
        text: "Thanks to Proga Tech's efforts, the client has been able to launch their job board successfully.",
      },
      {
        text: "The team has executed a seamless workflow to ensure the project's success.",
        highlight: true,
      },
      {
        text: "They have gone above and beyond to exceed the needs and requirements of the internal team.",
      },
    ],
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/251375",
  },
  {
    authorName: "Raphael Marton",
    authorTitle: "CEO, Felloz",
    authorImage: "/clients/raphael-marton.jpg",
    text: [
      {
        text: "Extremely professional team, communication and development skills. The team was patient,",
      },
      {
        text: "showed exceptional leadership and always went the extra mille",
        highlight: true,
      },
      { text: "More than happy! Would recommend it to anybody!" },
    ],
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/257431",
  },
  {
    authorName: "Sukh Sidhu",
    authorTitle: "CEO, Stridist Inc",
    authorImage: "/clients/sukh-sidhu.jpg",
    text: [
      {
        text: "Proga Tech's efforts resulted in a 50% reduction in RDS costs and onboarding over 100 new coaches.",
      },
      {
        text: "The team managed the project well using Notion and Slack, delivered work promptly, and communicated transparently.",
      },
      {
        text: "The team went above and beyond on several occasions to ensure success.",
        highlight: true,
      },
    ],
    caseHref: "/cases/stridist",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/375492",
  },
  {
    authorName: "Sadaf Amouzegar",
    authorImage: "/clients/sadaf-amouzegar.jpg",
    text: [
      {
        text: "The entire team demonstrated a high level of professionalism,dedication, and creativity throughout the project.",
        highlight: true,
      },
      {
        text: "If you a looking for a full-stack development agency that combines skill, professionalism, and a great working relationship, look no further. ",
      },
      { text: "Highly recommended!" },
    ],
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/291059",
  },
  {
    authorName: "CMO",
    authorTitle: "Pet Treats Company",
    text: [
      {
        text: "Proga Tech's work helped maximize sales and attract customers through Google Shopping.  ",
      },
      {
        text: "The team was responsive, timely, and attentive to the client. ",
      },
      {
        text: "Proga Tech's client-centric approach and willingness to go above and beyond to provide support stood out. Overfall, the project was a success.",
        highlight: true,
      },
    ],
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/333190",
  },
];
