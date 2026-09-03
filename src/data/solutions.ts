export type Solution = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  cta: { label: string; href: string };
};

export type Standard = {
  title: string;
  body: string;
};

export const solutionsHero = {
  brand: "Woodenclouds",
  kicker: "Built to grow with you",
  title: "Ready-made products that grow with you",
  titleLine1: "Ready-made products",
  titleLine2: "that grow with you.",
  description:
    "Clear products for AI, shops, and custom software — so you know what you’re getting.",
  cta: { label: "Explore solutions", href: "#wai" },
};

export const solutions: Solution[] = [
  {
    id: "wai",
    name: "WAI",
    tagline: "AI voice agents that take the call",
    description:
      "An AI that answers calls in English and Malayalam, like a helpful teammate — for sales, support, reception, and appointments, billed only for what you use.",
    image: "/solutions/wai-agent-hq.png",
    imageAlt: "Woodenclouds AI WAI voice agent",
    features: [
      "Inbound & outbound calls",
      "Live transcripts",
      "English & Malayalam",
      "Human handoff",
      "Analytics dashboard",
      "Pay as you go",
    ],
    cta: { label: "Explore WAI", href: "/solutions/wai" },
  },
  {
    id: "commerce",
    name: "Commerce Cloud",
    tagline: "Online shops built to sell",
    description:
      "Online shops built to sell more, stay fast, and connect to your other tools — from Shopify and Magento to a custom setup.",
    image: "/services/technology/ecommerce.png",
    imageAlt: "Ecommerce platform interface",
    features: [
      "API-first when you need it",
      "Sell across channels",
      "Clear checkout",
      "Secure payments",
      "Inventory & ERP sync",
      "Fast by design",
    ],
    cta: { label: "Learn more", href: "/services/technology/ecommerce-development" },
  },
  {
    id: "platforms",
    name: "Custom Platforms",
    tagline: "Software built around how you work",
    description:
      "Web apps, CRMs, ERPs, and internal tools designed around how your teams already work — not generic templates that force you to change.",
    image: "/services/technology/web-application.png",
    imageAlt: "Custom web platform",
    features: [
      "Bespoke architecture",
      "Role-based access",
      "API integrations",
      "Cloud-ready infra",
      "Audit-friendly",
      "Built to iterate",
    ],
    cta: { label: "Learn more", href: "/services/technology/web-application-development" },
  },
  {
    id: "mobile",
    name: "Mobile Experiences",
    tagline: "Apps people come back to",
    description:
      "iOS and Android apps with calm screens, reliable speed, and the polish that turns a first visit into a daily habit.",
    image: "/services/technology/mobile-app.png",
    imageAlt: "Mobile application experience",
    features: [
      "iOS & Android",
      "Shared design system",
      "Offline-friendly",
      "Push & analytics",
      "App Store ready",
      "Ongoing releases",
    ],
    cta: { label: "Learn more", href: "/services/technology/mobile-app-development" },
  },
  {
    id: "ai",
    name: "AI Solutions",
    tagline: "Intelligent layers for real workflows",
    description:
      "Chat assistants, automation, and AI features that cut support load, qualify leads, and speed up decisions — wired into the tools you already use.",
    image: "/services/technology.jpg",
    imageAlt: "AI-powered digital solution",
    features: [
      "Conversational AI",
      "Lead qualification",
      "Workflow automation",
      "CRM & helpdesk sync",
      "Multichannel support",
      "Secure by design",
    ],
    cta: { label: "Book a demo", href: "/contact" },
  },
  {
    id: "growth",
    name: "Growth Systems",
    tagline: "Brand and demand, working as one",
    description:
      "Branding, content, SEO, and ads working as one plan — so every campaign helps the next instead of competing with it.",
    image: "/services/marketing.jpg",
    imageAlt: "Brand and digital growth",
    features: [
      "Brand systems",
      "SEO foundations",
      "Paid acquisition",
      "Social & content",
      "Funnel analytics",
      "Creative production",
    ],
    cta: { label: "Learn more", href: "/services/digital-marketing" },
  },
  {
    id: "squads",
    name: "Dedicated Squads",
    tagline: "Teams that plug into your product",
    description:
      "Design, engineering, and marketing teams that join your roadmap — extra hands without hiring every role in-house.",
    image: "/team/team-work.jpg",
    imageAlt: "Dedicated product team",
    features: [
      "Tech & product squads",
      "Marketing pods",
      "Flexible scaling",
      "Shared rituals",
      "Transparent delivery",
      "Cost-effective",
    ],
    cta: { label: "Hire a team", href: "/contact" },
  },
];

export function getSolutionById(id: string) {
  return solutions.find((item) => item.id === id);
}

export const solutionsStandards: Standard[] = [
  {
    title: "One team, one result",
    body: "From servers to screens, one team owns the result — so you always know who to talk to.",
  },
  {
    title: "Built to convert",
    body: "Design and engineering choices are judged on speed, clarity, and business results.",
  },
  {
    title: "Security first",
    body: "Safe defaults, careful connections, and habits that keep your product trustworthy.",
  },
  {
    title: "Agile delivery",
    body: "Short cycles, visible progress, and room to adapt as your market and product change.",
  },
];
