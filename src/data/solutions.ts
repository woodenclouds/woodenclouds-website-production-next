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
  kicker: "Built for scale",
  title: "Solutions engineered to grow with you",
  description:
    "Productized platforms and delivery models that turn complex digital needs into clear, measurable outcomes.",
  cta: { label: "Explore solutions", href: "#wai" },
};

export const solutions: Solution[] = [
  {
    id: "wai",
    name: "WAI",
    tagline: "AI voice agents that take the call",
    description:
      "Woodenclouds AI for sales, support, reception, and appointments — natural voice in English and Malayalam, on Indian infrastructure, billed only for what you use.",
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
    tagline: "High-performance ecommerce ecosystems",
    description:
      "Headless-ready storefronts and commerce backends built for conversion, multi-channel selling, and long-term scale — from Shopify and Magento to custom stacks.",
    image: "/services/technology/ecommerce.png",
    imageAlt: "Ecommerce platform interface",
    features: [
      "Headless & API-first",
      "Omnichannel ready",
      "Conversion-led UX",
      "Secure payments",
      "Inventory & ERP sync",
      "Performance tuned",
    ],
    cta: { label: "Learn more", href: "/services/technology/ecommerce-development" },
  },
  {
    id: "platforms",
    name: "Custom Platforms",
    tagline: "Software shaped around your operations",
    description:
      "Web applications, CRMs, ERPs, and internal tools designed around how your teams actually work — not generic templates that force you to adapt.",
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
    tagline: "Apps people return to",
    description:
      "Native and cross-platform mobile products with calm interfaces, reliable performance, and the polish that turns first-time users into daily habits.",
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
      "Conversational assistants, automation, and AI-assisted product features that reduce support load, qualify leads, and speed up decisions — wired into your existing systems.",
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
      "Branding, content, SEO, and performance marketing orchestrated as a single growth system — so every campaign compounds instead of competing with the last.",
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
      "Cross-functional squads for engineering, design, and marketing that embed with your roadmap — flexible capacity without the overhead of building every role in-house.",
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
    cta: { label: "Hire a team", href: "/services/dedicated-team" },
  },
];

export function getSolutionById(id: string) {
  return solutions.find((item) => item.id === id);
}

export const solutionsStandards: Standard[] = [
  {
    title: "Full-stack ownership",
    body: "From infrastructure to interface, one team owns the outcome — fewer handoffs, clearer accountability.",
  },
  {
    title: "Conversion-led craft",
    body: "Design and engineering decisions are measured against performance, clarity, and business results.",
  },
  {
    title: "Security first",
    body: "Secure defaults, careful integrations, and practices aligned with how modern enterprises ship software.",
  },
  {
    title: "Agile delivery",
    body: "Short cycles, visible progress, and room to adapt as your market and product evolve.",
  },
];
