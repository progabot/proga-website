export interface Testimonial {
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
  text: HighlightedText[];
  caseStudyId?: string;
  clutchLink?: string;
}
export interface HighlightedText {
  text: string;
  highlight?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
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
    caseStudyId: "stridist",
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
