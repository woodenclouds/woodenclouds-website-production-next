export type Industry = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  focus: string[];
  projects: number;
  /** Shown in the homepage mosaic (keep this list focused). */
  featuredOnHome?: boolean;
  cta: { label: string; href: string };
};

export type IndustryStandard = {
  title: string;
  body: string;
};

export const industriesHero = {
  kicker: "Industries we serve",
  titleLine1: "Know the market.",
  titleLine2: "Ship what fits.",
  description:
    "Products and growth systems built around how each industry buys, operates, and scales — not a recycled template.",
  primaryCta: "Talk to us",
  secondaryCta: "Browse industries",
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Care systems patients and teams can trust",
    description:
      "We partner with hospitals, clinics, labs, and healthcare startups on portals, telehealth, and ops platforms that simplify care without slowing clinicians down.",
    image: "/industries/healthcare.jpg",
    imageAlt: "Healthcare digital systems",
    focus: [
      "Patient & provider portals",
      "Appointment & ops workflows",
      "Telehealth experiences",
      "Secure data handling",
      "Integrations & reporting",
      "Accessible UX",
    ],
    projects: 14,
    featuredOnHome: true,
    cta: { label: "Talk healthcare", href: "/contact" },
  },
  {
    id: "finance",
    name: "Financial Services",
    tagline: "Clarity, control, and confidence at scale",
    description:
      "Fintech products and internal banking tools — interfaces and systems that feel precise, audit-ready, and calm under pressure.",
    image: "/industries/finance.jpg",
    imageAlt: "Financial technology platform",
    focus: [
      "Fintech products",
      "Internal ops tools",
      "Dashboards & reporting",
      "Role-based access",
      "API integrations",
      "Security-first builds",
    ],
    projects: 10,
    featuredOnHome: true,
    cta: { label: "Talk finance", href: "/contact" },
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    tagline: "Storefronts and systems built to convert",
    description:
      "From online stores and loyalty apps to omnichannel ops — commerce experiences that turn browsing into orders and inventory into insight.",
    image: "/industries/retail.jpg",
    imageAlt: "Retail ecommerce experience",
    focus: [
      "Storefronts & catalogs",
      "Checkout & payments",
      "Inventory sync",
      "CRM & loyalty",
      "Performance UX",
      "Growth campaigns",
    ],
    projects: 30,
    featuredOnHome: true,
    cta: {
      label: "Explore commerce",
      href: "/services/technology/ecommerce-development",
    },
  },
  {
    id: "agriculture",
    name: "Agriculture & AgriTech",
    tagline: "Field-to-market systems that scale",
    description:
      "Farms, cooperatives, and agri brands — portals, supply visibility, marketplace platforms, and ops tools that connect produce, logistics, and buyers.",
    image: "/industries/agriculture.jpg",
    imageAlt: "Agriculture and AgriTech digital systems",
    focus: [
      "Farm & crop portals",
      "Supply chain visibility",
      "Marketplace platforms",
      "Dealer / partner apps",
      "IoT data dashboards",
      "Traceability workflows",
    ],
    projects: 6,
    featuredOnHome: true,
    cta: { label: "Talk AgriTech", href: "/contact" },
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    tagline: "Projects tracked. Sites aligned.",
    description:
      "Builders, contractors, and infrastructure teams — project portals, progress tracking, bidding tools, and field apps that keep delivery on schedule.",
    image: "/industries/construction.jpg",
    imageAlt: "Construction and infrastructure digital tools",
    focus: [
      "Project portals",
      "Progress & site reports",
      "Bidding & tender tools",
      "Field force apps",
      "Document control",
      "Client dashboards",
    ],
    projects: 5,
    featuredOnHome: true,
    cta: { label: "Talk construction", href: "/contact" },
  },
  {
    id: "education",
    name: "Education & E-Learning",
    tagline: "Learning products people actually return to",
    description:
      "Schools, institutes, and edu-tech platforms — LMS experiences, portals, and content systems that keep learners, educators, and admins in sync.",
    image: "/industries/education.jpg",
    imageAlt: "Education technology platform",
    focus: [
      "Learning platforms",
      "Student portals",
      "Content systems",
      "Assessments & progress",
      "Admin workflows",
      "Mobile-first access",
    ],
    projects: 11,
    featuredOnHome: true,
    cta: { label: "Talk education", href: "/contact" },
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    tagline: "Journeys that feel effortless end to end",
    description:
      "Travel agencies, hotels, and destination brands — booking flows, guest apps, and service ops that reduce friction from discovery to return visit.",
    image: "/industries/hospitality.jpg",
    imageAlt: "Travel and hospitality digital experience",
    focus: [
      "Booking & reservations",
      "Guest apps",
      "Service operations",
      "Loyalty journeys",
      "Multi-property tools",
      "Brand & content",
    ],
    projects: 5,
    featuredOnHome: true,
    cta: { label: "Talk hospitality", href: "/contact" },
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Property journeys with less friction",
    description:
      "Builders, developers, and consultants — project showcase sites, virtual tours, CRM, and enquiry systems that keep deals moving.",
    image: "/industries/real-estate.jpg",
    imageAlt: "Real estate digital platform",
    focus: [
      "Listing platforms",
      "Broker CRMs",
      "Client portals",
      "Lead pipelines",
      "Document workflows",
      "Marketing sites",
    ],
    projects: 4,
    featuredOnHome: true,
    cta: { label: "Talk real estate", href: "/contact" },
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    tagline: "Operations software that keeps pace",
    description:
      "Plants, freight, and supply networks — dashboards, tracking, and workflow tools that connect teams with real-time visibility.",
    image: "/industries/manufacturing.jpg",
    imageAlt: "Manufacturing and logistics operations software",
    focus: [
      "Ops dashboards",
      "Inventory & tracking",
      "Workflow automation",
      "ERP integrations",
      "Field / warehouse apps",
      "Reporting layers",
    ],
    projects: 7,
    featuredOnHome: true,
    cta: {
      label: "Explore platforms",
      href: "/services/technology/web-application-development",
    },
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    tagline: "Infrastructure digital, quietly reliable",
    description:
      "Energy providers and utility operators — monitoring dashboards, customer portals, and field workflows built for uptime and trust.",
    image: "/industries/energy.jpg",
    imageAlt: "Energy and utilities digital platform",
    focus: [
      "Ops monitoring",
      "Customer portals",
      "Field service tools",
      "Usage analytics",
      "Asset tracking",
      "Compliance reporting",
    ],
    projects: 4,
    cta: { label: "Talk energy", href: "/contact" },
  },
  {
    id: "food",
    name: "Food & Beverage",
    tagline: "Menus, markets, and ops that stay fresh",
    description:
      "Restaurants, F&B brands, and food tech — ordering journeys, kitchen/ops tools, and brand platforms that keep demand and delivery in sync.",
    image: "/industries/food.jpg",
    imageAlt: "Food and beverage digital experience",
    focus: [
      "Ordering & menus",
      "Loyalty programs",
      "Kitchen / ops tools",
      "Franchise portals",
      "Delivery integrations",
      "Brand campaigns",
    ],
    projects: 8,
    cta: { label: "Talk food & beverage", href: "/contact" },
  },
  {
    id: "media",
    name: "Media & Entertainment",
    tagline: "Content experiences that hold attention",
    description:
      "Media houses, OTT, and creators — publishing platforms, streaming companions, and brand systems audiences return to.",
    image: "/industries/media.jpg",
    imageAlt: "Media and entertainment digital product",
    focus: [
      "Content platforms",
      "Audience apps",
      "Brand systems",
      "Campaign sites",
      "CMS architecture",
      "Analytics loops",
    ],
    projects: 5,
    cta: { label: "Talk media", href: "/contact" },
  },
  {
    id: "saas",
    name: "Technology & SaaS",
    tagline: "Products that ship, then keep shipping",
    description:
      "SaaS products, IT services, and B2B platforms — conversion-driven sites, portals, and product squads built for the next release.",
    image: "/industries/saas.jpg",
    imageAlt: "Technology and SaaS product team",
    focus: [
      "MVP & product builds",
      "Design systems",
      "Growth loops",
      "Dedicated squads",
      "Infrastructure basics",
      "Founder partnership",
    ],
    projects: 13,
    cta: { label: "Hire a squad", href: "/services/dedicated-team" },
  },
  {
    id: "automobile",
    name: "Automobile",
    tagline: "Digital as fast as the customer",
    description:
      "Brands, dealers, and service networks — vehicle showcases, booking journeys, and after-sales tools that move at market speed.",
    image: "/industries/automobile.jpg",
    imageAlt: "Automobile digital experience",
    focus: [
      "Vehicle showcase sites",
      "Dealer portals",
      "Service booking",
      "Lead management",
      "Customer apps",
      "Campaign systems",
    ],
    projects: 4,
    cta: { label: "Talk automobile", href: "/contact" },
  },
  {
    id: "hr-staffing",
    name: "HR & Staffing",
    tagline: "Tools that hire and retain faster",
    description:
      "HR agencies and internal teams — career portals, ATS dashboards, candidate databases, and onboarding workflows that cut manual work.",
    image: "/industries/hr-staffing.jpg",
    imageAlt: "HR and staffing digital tools",
    focus: [
      "Career portals",
      "Application tracking",
      "Candidate databases",
      "Onboarding flows",
      "Internal HR tools",
      "Reporting dashboards",
    ],
    projects: 6,
    cta: { label: "Talk HR systems", href: "/contact" },
  },
  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    tagline: "Experiences that keep people active",
    description:
      "Gyms, academies, and fitness brands — booking systems, training apps, and membership journeys that keep users engaged.",
    image: "/industries/sports-fitness.jpg",
    imageAlt: "Sports and fitness digital product",
    focus: [
      "Class booking",
      "Membership apps",
      "Trainer tools",
      "Progress tracking",
      "Community features",
      "Brand platforms",
    ],
    projects: 3,
    cta: { label: "Talk fitness", href: "/contact" },
  },
];

export function getIndustryById(id: string) {
  return industries.find((item) => item.id === id);
}

export function getRelatedIndustries(id: string, limit = 3) {
  const index = industries.findIndex((item) => item.id === id);
  if (index < 0) return industries.slice(0, limit);
  const rest = [...industries.slice(index + 1), ...industries.slice(0, index)];
  return rest.slice(0, limit);
}

export function getHomeIndustries() {
  const featured = industries.filter((i) => i.featuredOnHome);
  return featured.length ? featured : industries.slice(0, 9);
}

/** Sum of per-industry project counts — used as the hero total. */
export function getIndustriesProjectTotal(list: Industry[] = industries): number {
  return list.reduce((sum, item) => sum + item.projects, 0);
}

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
