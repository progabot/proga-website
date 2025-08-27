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
		clutchLink: "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/375492"
	},
	{
		authorName: "Sadaf Amouzegar",
		authorImage: "/clients/sadaf-amouzegar.jpg",
		text: "Thanks to Proga Tech, the client increased platform stability, data processing efficiency, and user satisfaction. They also notably reduced load times, as well as reported bugs and issues. Proga Tech delivered all tasks on time. Their project management, creativity, and adaptability were superb.",
		clutchLink: "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/291059"
	},
	{
		authorName: "Raphael Marton",
		authorTitle: "CEO, Felloz",
		text: "Proga Tech helped the client improve the web app's usability time. They also enabled the client to achieve all their goals and exceeded their expectations. Moreover, their team impressed the client with their goal-orientedness, professional work ethic, timely delivery, and problem-solving skills.",
		clutchLink: "https://clutch.co/go-to-review/17e63527-6505-46c0-ba6c-762e857d2f75/257431"
	},
];
