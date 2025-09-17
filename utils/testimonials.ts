export interface Testimonial {
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
  text: string;
  caseStudyId?: string;
  clutchLink?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    authorName: "Sukh Sidhu",
    authorTitle: "CEO, Stridist Inc",
    authorImage: "/clients/sukh-sidhu.jpg",
    text: "Proga Tech's efforts resulted in a 50% reduction in RDS costs and onboarding over 100 new coaches. The team managed the project well using Notion and Slack, delivered work promptly, and communicated transparently. The team went above and beyond on several occasions to ensure success.",
    caseStudyId: "stridist",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/375492",
  },
  {
    authorName: "Sadaf Amouzegar",
    authorImage: "/clients/sadaf-amouzegar.jpg",
    text: "Thanks to Proga Tech, the client increased platform stability, data processing efficiency, and user satisfaction. They also notably reduced load times, as well as reported bugs and issues. Proga Tech delivered all tasks on time. Their project management, creativity, and adaptability were superb.",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/291059",
  },
  {
    authorName: "Raphael Marton",
    authorTitle: "CEO, Felloz",
    authorImage: "/clients/raphael-marton.jpg",
    text: "Proga Tech helped the client improve the web app's usability time. They also enabled the client to achieve all their goals and exceeded their expectations. Moreover, their team impressed the client with their goal-orientedness, professional work ethic, timely delivery, and problem-solving skills.",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/257431",
  },
  {
    authorName: "James Ketteringham",
    authorImage: "/clients/james-ketteringham.jpg",
    text: "Thanks to Proga Tech's efforts, the client has been able to launch their job board successfully. The team has executed a seamless workflow to ensure the project's success. They have gone above and beyond to exceed the needs and requirements of the internal team.",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/251375",
  },
  {
    authorName: "CMO",
    authorTitle: "Pet Treats Company",
    text: "Proga Tech's work helped maximize sales and attract customers through Google Shopping. The team was responsive, timely, and attentive to the client. Proga Tech's client-centric approach and willingness to go above and beyond to provide support stood out. Overfall, the project was a success.",
    clutchLink:
      "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/333190",
  },
];
