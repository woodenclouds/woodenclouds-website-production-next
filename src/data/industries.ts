export type Industry = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  focus: string[];
  cta: { label: string; href: string };
};

export type IndustryStandard = {
  title: string;
  body: string;
};

export const industriesHero = {
  kicker: "Where we work",
  title: "Industries we know how to move",
  description:
    "Sector-aware product, platform, and growth work — shaped around the realities of each market, not a one-size playbook.",
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Care systems patients and teams can trust",
    description:
      "Patient portals, clinic operations, telehealth, and compliance-minded platforms that keep care coordinated without slowing clinicians down.",
    image: "/about/img5.jpg",
    imageAlt: "Healthcare digital systems",
    focus: [
      "Patient & provider portals",
      "Appointment & ops workflows",
      "Telehealth experiences",
      "Secure data handling",
      "Integrations & reporting",
      "Accessible UX",
    ],
    cta: { label: "Talk healthcare", href: "/contact" },
  },
  {
    id: "finance",
    name: "Financial Services",
    tagline: "Clarity, control, and confidence at scale",
    description:
      "From fintech products to internal banking tools — interfaces and systems that feel precise, audit-ready, and calm under pressure.",
    image: "/services/technology/software.png",
    imageAlt: "Financial technology platform",
    focus: [
      "Fintech products",
      "Internal ops tools",
      "Dashboards & reporting",
      "Role-based access",
      "API integrations",
      "Security-first builds",
    ],
    cta: { label: "Talk finance", href: "/contact" },
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    tagline: "Storefronts and systems built to convert",
    description:
      "Headless commerce, omnichannel journeys, and ops tooling that turn browsing into orders — and inventory into insight.",
    image: "/services/technology/ecommerce.png",
    imageAlt: "Retail ecommerce experience",
    focus: [
      "Storefronts & catalogs",
      "Checkout & payments",
      "Inventory sync",
      "CRM & loyalty",
      "Performance UX",
      "Growth campaigns",
    ],
    cta: {
      label: "Explore commerce",
      href: "/services/technology/ecommerce-development",
    },
  },
  {
    id: "education",
    name: "Education",
    tagline: "Learning products people actually return to",
    description:
      "LMS experiences, campus tools, and content platforms designed for clarity — so learners, educators, and admins stay in sync.",
    image: "/about/about-img2.jpg",
    imageAlt: "Education technology platform",
    focus: [
      "Learning platforms",
      "Student portals",
      "Content systems",
      "Assessments & progress",
      "Admin workflows",
      "Mobile-first access",
    ],
    cta: { label: "Talk education", href: "/contact" },
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    tagline: "Journeys that feel effortless end to end",
    description:
      "Booking flows, guest apps, and service operations that reduce friction — from discovery to stay to return visit.",
    image: "/about/img1.jpg",
    imageAlt: "Hospitality digital experience",
    focus: [
      "Booking & reservations",
      "Guest apps",
      "Service operations",
      "Loyalty journeys",
      "Multi-property tools",
      "Brand & content",
    ],
    cta: { label: "Talk hospitality", href: "/contact" },
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Property journeys with less friction",
    description:
      "Listings, CRM, broker tools, and client portals that keep deals moving — with the polish buyers expect and teams rely on.",
    image: "/about/about-img3.jpg",
    imageAlt: "Real estate digital platform",
    focus: [
      "Listing platforms",
      "Broker CRMs",
      "Client portals",
      "Lead pipelines",
      "Document workflows",
      "Marketing sites",
    ],
    cta: { label: "Talk real estate", href: "/contact" },
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    tagline: "Operations software that keeps pace",
    description:
      "Internal platforms, tracking, and workflow tools that connect plants, warehouses, and teams — less spreadsheet chaos, more visibility.",
    image: "/services/technology/web-application.png",
    imageAlt: "Manufacturing operations software",
    focus: [
      "Ops dashboards",
      "Inventory & tracking",
      "Workflow automation",
      "ERP integrations",
      "Field / warehouse apps",
      "Reporting layers",
    ],
    cta: {
      label: "Explore platforms",
      href: "/services/technology/web-application-development",
    },
  },
  {
    id: "media",
    name: "Media & Entertainment",
    tagline: "Content experiences that hold attention",
    description:
      "Publishing platforms, streaming companions, and brand systems that help audiences find, watch, and come back.",
    image: "/services/marketing.jpg",
    imageAlt: "Media and entertainment digital product",
    focus: [
      "Content platforms",
      "Audience apps",
      "Brand systems",
      "Campaign sites",
      "CMS architecture",
      "Analytics loops",
    ],
    cta: { label: "Talk media", href: "/contact" },
  },
  {
    id: "saas",
    name: "Startups & SaaS",
    tagline: "Products that ship, then keep shipping",
    description:
      "MVPs, product redesigns, and dedicated squads for founders building software companies — speed without throwing away the foundation.",
    image: "/services/startup-business-support.jpg",
    imageAlt: "Startup and SaaS product team",
    focus: [
      "MVP & product builds",
      "Design systems",
      "Growth loops",
      "Dedicated squads",
      "Infrastructure basics",
      "Founder partnership",
    ],
    cta: { label: "Hire a squad", href: "/services/dedicated-team" },
  },
];

export const industriesApproach: IndustryStandard[] = [
  {
    title: "Sector context first",
    body: "We learn the constraints of your market — regulation, buyers, seasonality — before we propose a stack or a campaign.",
  },
  {
    title: "Outcomes over features",
    body: "Every build ties back to a measurable result: faster ops, clearer journeys, higher conversion, or lower support load.",
  },
  {
    title: "Secure by default",
    body: "Access, integrations, and data handling designed for how regulated and high-trust industries actually operate.",
  },
  {
    title: "Teams that stay",
    body: "From discovery through iteration — one accountable partner across product, brand, and growth when you need them together.",
  },
];
