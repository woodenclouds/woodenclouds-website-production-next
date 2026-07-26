export type ServicePractice = {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  focus: string[];
  href: string;
  cta: string;
};

export const servicesHero = {
  kicker: "Services",
  titleLine1: "Built to ship.",
  titleLine2: "Ready to scale.",
  description:
    "Technology, growth support, and brand systems — shaped around outcomes, not feature lists.",
};

export const servicePractices: ServicePractice[] = [
  {
    id: "technology",
    name: "Technology",
    title: "Technology Services",
    tagline: "Products people rely on",
    description:
      "Websites, apps, platforms, and commerce — engineered for clarity, performance, and the next release. We ship systems your teams can run and extend.",
    image: "/services/technology.jpg",
    imageAlt: "Technology services — product and engineering",
    focus: [
      "Website & web apps",
      "Mobile apps",
      "Custom software",
      "E-commerce platforms",
      "Browser extensions",
      "Cloud & integrations",
    ],
    href: "/services/technology",
    cta: "Explore technology",
  },
  {
    id: "business-support",
    name: "Business support",
    title: "Startup & Business Support",
    tagline: "Clarity beyond the product",
    description:
      "Consulting, research, strategy, and operations for founders and teams under pressure — so priorities stay sharp while the work keeps moving.",
    image: "/services/startup-business-support.jpg",
    imageAlt: "Business support — strategy and operations",
    focus: [
      "Business consulting",
      "Market research",
      "Strategic planning",
      "Financial analysis",
      "Operational support",
      "Ongoing partnership",
    ],
    href: "/services/business-support",
    cta: "Explore business support",
  },
  {
    id: "digital-marketing",
    name: "Brand & growth",
    title: "Branding & Digital Marketing",
    tagline: "Attention that turns into customers",
    description:
      "Identity, campaigns, content, and growth systems that earn attention — and pull every channel in the same direction.",
    image: "/services/marketing.jpg",
    imageAlt: "Branding and digital marketing",
    focus: [
      "Brand identity",
      "Campaigns",
      "Social media",
      "Content creation",
      "SEO",
      "Paid growth",
    ],
    href: "/services/digital-marketing",
    cta: "Explore brand & growth",
  },
  {
    id: "dedicated-team",
    name: "Dedicated team",
    title: "Hire Dedicated Team",
    tagline: "Capacity without hiring overhead",
    description:
      "Embed skilled marketing, engineering, and product specialists into your workflow — flexible squads accountable to outcomes, not tickets.",
    image: "/team/team-01.jpg",
    imageAlt: "Dedicated team collaboration",
    focus: [
      "Marketing squads",
      "Tech squads",
      "Product support",
      "Technical support",
      "Shared rituals",
      "Flexible scaling",
    ],
    href: "/services/dedicated-team",
    cta: "Explore dedicated teams",
  },
];

export const servicesApproach = [
  {
    title: "Value-driven research",
    body: "We study your market, competitors, and constraints so every decision earns its place — and every build creates real business value.",
  },
  {
    title: "Specialized planning",
    body: "Before a line of code or a campaign goes live, we map a strategy aligned with your vision, timeline, and budget.",
  },
  {
    title: "Precise delivery",
    body: "We implement with focus — shipping high-quality work on schedule, then staying close through launch and beyond.",
  },
  {
    title: "Compounding partnership",
    body: "After launch we keep iterating — measurement, refinements, and the next release so momentum does not stall.",
  },
];
