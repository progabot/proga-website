import { Box } from "@mui/material";
import StripeHero from "@/components/stripe/stripe-hero";
import StripeIntegration from "@/components/stripe/stripe-integration";
import ChallangeSolutionResult from "@/components/stripe/challenge-solution-result";
import StripeConsultingSection from "@/components/stripe/stripe-consulting-section";
import ProjectPreviewSection from "@/components/stripe/project-preview-section";
import ProjectCTA from "@/components/shared/project-cta";

export const metadata = {
  title: "Stripe | Proga Tech",
  description:
    "We specialize in integrating Stripe payments into websites and apps.",
};

export default function StripePage() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <StripeHero />
      <StripeIntegration />
      <ProjectPreviewSection
        id="city-crop"
        number="01"
        title="CityCrop"
        image="/stripe/citycrop.png"
      />
      <ChallangeSolutionResult
        challengeText="CityCrop, a European smart indoor garden startup, needed a flexible subscription system for their modular products. Their customers wanted to customize combinations of three different machines with various plant selections, but their existing payment flow couldn't handle this complexity."
        solutionText={[
          "We built a dynamic “subscription constructor” using Stripe. Customers select their options, the system bundles everything into a single subscription, and Stripe’s",
          { bold: " hosted checkout page" },
          " handles promo codes, product details, and secure payments.",
        ]}
        results={[
          {
            number: "01",
            text: "Simplified checkout process with 40% faster completion times",
          },
          {
            number: "02",
            text: "Automated subscription management reduces manual billing tasks",
          },
          {
            number: "03",
            text: "Customers enjoy intuitive customization with secure payment processing",
          },
        ]}
        testimonial={{
          text: "Solomiia delivered the work exactly to specification in a timely manner. Her communication skills were elite and she was active 24/7 to respond to any requests or questions that I had... I would recommend working with her to anyone and I look forward to working with her again in the future!!!",
          author: "Christos Raftogiannis",
          position: "Founder & CEO at CityCrop",
          links: [
            {
              url: "https://www.linkedin.com/in/chrisraftogiannis",
            },
          ],
        }}
        testimonialOffset={{ bottom: { xs: "-160px", md: "-200px" } }}
      />
      <ProjectPreviewSection
        id="stridist"
        number="02"
        title="Stridist"
        image="/stripe/stridist.jpg"
      />
      <ChallangeSolutionResult
        challengeText="Stridist is a UK-based platform for fitness coaches who are constantly growing their client lists. As their coaches helped more people every month, their old subscription model couldn’t keep up, plans didn’t scale automatically, leaving coaches either overpaying or chasing support to upgrade. Stridist wanted a payment system that grew with their coaches’ success, adjusting itself automatically without extra admin work."
        solutionText={[
          "Our smart, metered Stripe subscription system simplifies client billing. Coaches can archive clients to automatically downgrade their plan, and unarchive them for an instant upgrade. All payment changes are handled securely and transparently through Stripe's hosted pages.",
        ]}
        results={[
          {
            number: "01",
            text: "Coaches only pay for the clients they're actively training",
          },
          {
            number: "02",
            text: "Automated scaling reduces support tickets by 65%",
          },
          {
            number: "03",
            text: "Transparent billing builds trust with fitness professionals",
          },
        ]}
        testimonial={{
          text: "Amazing team! Happy with all the work they've done, their comms, their support and passion for the project.\n\n Will continue to work with them in the future!",
          author: "Sukh Sidhu",
          position: "Co-founder of Stridist",
          links: [
            {
              url: "https://www.linkedin.com/in/sukh-sidhu-a2b8a863/",
            },
          ],
        }}
        testimonialOffset={{ bottom: { xs: "-140px", md: "-140px" } }}
      />
      <ProjectPreviewSection
        id="rivet-ai"
        number="03"
        title="Rivet AI"
        image="/stripe/rivet-ai.png"
      />
      <ChallangeSolutionResult
        challengeText={[
          { bold: "Core subscription plus separate add-ons\n\n" },
          "Rivet AI, a California film industry startup, needed core platform subscriptions plus separate billing for add-ons like extra team seats and additional project slots. The business model required these to run as independent purchases outside the main subscription.",
        ]}
        solutionText={[
          "We built a   ",
          { bold: "multi-stream billing model" },
          "using Stripe. The core subscription covers platform access, while add-ons like extra seats or projects are purchased separately but remain fully manageable by the customer. Everything runs through ",
          { bold: "Stripe-hosted pages" },
          "for clarity, security and self-service.",
        ]}
        results={[
          {
            number: "01",
            text: "Business gets the exact billing model they needed without complex custom code",
          },
          {
            number: "02",
            text: "Customers can easily scale their teams and projects independently",
          },
          {
            number: "03",
            text: "Transparent billing keeps the unusual setup predictable for users",
          },
        ]}
        testimonial={{
          text: "Working with Mia and her team has been an absolute pleasure. Mia is an exceptional leader and developer, bringing a perfect blend of technical expertise and leadership skills to the table. The quality of work delivered exceeded my expectations, and their attention to detail and commitment to meeting deadlines was unparalleled. Highly recommended!",
          author: "Sadaf Amouzegar",
          position: "CEO of RivetAI",
          links: [
            {
              url: "https://www.linkedin.com/in/samouzegar/",
            },
          ],
        }}
        testimonialOffset={{ bottom: { xs: "-180px", md: "-140px" } }}
      />
      <ProjectPreviewSection
        id="make-my-donation"
        number="04"
        title="Make My Donation"
        image="/stripe/make-my-donation.png"
      />

      <ChallangeSolutionResult
        challengeText="Make My Donation wanted to help nonprofits accept donations directly on their own websites - no redirects to third-party pages. They needed a solution that felt native to each organization's site while offering flexible giving options like one-time gifts, monthly donations, and memorial contributions."
        solutionText="We built a fully configurable donation widget powered by Stripe. Nonprofits can drop it onto any website, link their domain, and instantly start taking secure payments. With one click they can enable recurring donations, capture billing details if they want to send thank-you gifts, and even let donors leave a tip for the team. Everything runs in test mode first so organizations can be sure it works before going live."
        results={[
          {
            number: "01",
            text: "Donors never leave the nonprofit's website during the giving process",
          },
          {
            number: "02",
            text: "Organizations see higher conversion rates with familiar, trusted checkout experience",
          },
          {
            number: "03",
            text: "Easy setup means nonprofits can start accepting donations in minutes",
          },
        ]}
        testimonial={{
          text: "A big thank you to all of you.\n The campaign is going really well!\n You are Rock Stars!",
          author: "Chris Annase",
          position: "CEO of OrgHunter (charity API for Make My Donation)",
          links: [
            {
              url: "https://www.linkedin.com/in/chrisannase/",
            },
          ],
        }}
        testimonialOffset={{ bottom: { xs: "-140px", md: "-140px" } }}
      />
      <StripeConsultingSection />
      <ProjectCTA
        title="Want us to check your Stripe setup?"
        subtitle="We'll review your code and make sure everything works like it should."
      />
    </Box>
  );
}
