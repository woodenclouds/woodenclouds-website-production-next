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
  titleLine1: "We know your market.",
  titleLine2: "We build what fits.",
  description:
    "Websites and tools made for how your industry really works — not a one-size-fits-all template.",
  primaryCta: "Talk to us",
  secondaryCta: "Browse industries",
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Care systems patients and teams can trust",
    description:
      "We work with hospitals, clinics, and health startups on websites and tools that make care easier — without slowing doctors down.",
    image: "/industries/healthcare.jpg",
    imageAlt: "Microscope and lab samples on a clinical workbench",
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
    tagline: "Clarity, control, and confidence as you grow",
    description:
      "We build fintech products and banking tools that feel precise, stay audit-ready, and stay calm under pressure.",
    image: "/industries/finance.jpg",
    imageAlt: "Hands reviewing financial documents and a data dashboard",
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
    tagline: "Stores and tools built to sell",
    description:
      "We build online stores, loyalty apps, and shop tools that turn browsing into orders and inventory into clear numbers.",
    image: "/industries/retail-cover.jpg",
    imageAlt: "Shopper walking through a glowing doorway into a boutique inside a giant smartphone",
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
    tagline: "Field-to-market tools that grow with you",
    description:
      "We work with farms, cooperatives, and agri brands on portals and supply tools that connect produce, logistics, and buyers.",
    image: "/industries/agriculture-cover.jpg",
    imageAlt: "Agronomist in a crop field reviewing farm data on a tablet, with a tractor behind her",
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
      "We work with builders and contractors on project portals, progress tracking, and field apps that keep delivery on schedule.",
    image: "/industries/construction-cover.jpg",
    imageAlt: "Urban construction site with a tower crane rising against a city skyline",
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
    tagline: "Learning products people actually come back to",
    description:
      "We work with schools and edu-tech teams on learning platforms and portals that keep learners, teachers, and admins in sync.",
    image: "/industries/education-cover.jpg",
    imageAlt: "Student at a desk following an online lesson on a laptop",
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
      "We work with travel agencies and hotels on booking flows, guest apps, and service tools that make the trip easier from first look to return visit.",
    image: "/industries/hospitality-cover.jpg",
    imageAlt: "Hotel reception staff using tablets at a marble concierge desk",
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
      "We work with builders and developers on project sites, virtual tours, CRM, and enquiry tools that keep deals moving.",
    image: "/industries/real-estate-cover.jpg",
    imageAlt: "Modern residential towers along a landscaped street under a clear sky",
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
    tagline: "Operations software that keeps up",
    description:
      "We work with plants and logistics teams on dashboards, tracking, and workflow tools that give everyone a live view of the work.",
    image: "/industries/manufacturing-cover.jpg",
    imageAlt: "Warehouse operator checking inventory on a tablet in front of pallet racks",
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
      "We work with energy providers on monitoring dashboards, customer portals, and field tools built for uptime and trust.",
    image: "/industries/energy-cover.jpg",
    imageAlt: "Wind turbines on a forested mountain ridge at dusk",
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
      "We work with restaurants and food brands on ordering, kitchen tools, and brand sites that keep demand and delivery in sync.",
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
      "We work with media houses and creators on publishing platforms, streaming companions, and brand systems audiences come back to.",
    image: "/industries/media-cover.jpg",
    imageAlt: "Film crew and cameras on a hazy studio set with cinematic lighting",
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
    tagline: "Products that launch, then keep improving",
    description:
      "We work with SaaS and IT teams on conversion-driven sites, portals, and product teams built for the next release.",
    image: "/industries/saas-cover-v2.jpg",
    imageAlt: "Holographic Premium Concierge System dashboard in a luxury office",
    focus: [
      "MVP & product builds",
      "Design systems",
      "Growth loops",
      "Dedicated squads",
      "Infrastructure basics",
      "Founder partnership",
    ],
    projects: 13,
    cta: { label: "Hire a squad", href: "/contact" },
  },
  {
    id: "automobile",
    name: "Automobile",
    tagline: "Digital as fast as the customer",
    description:
      "We work with brands and dealers on vehicle sites, booking journeys, and after-sales tools that move at market speed.",
    image: "/industries/automobile-cover.jpg",
    imageAlt: "Hatchback driving a forest road at golden hour with headlights on",
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
      "We work with HR agencies and internal teams on career portals, tracking dashboards, and onboarding flows that cut manual work.",
    image: "/industries/hr-staffing-cover.jpg",
    imageAlt: "HR team collaborating around a laptop with workforce analytics on a whiteboard",
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
      "We work with gyms and fitness brands on booking systems, training apps, and membership journeys that keep people engaged.",
    image: "/industries/sports-fitness-cover.jpg",
    imageAlt: "Aerial view of a runner on a terracotta track in mid-stride",
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
    title: "Your market first",
    body: "We learn the rules of your market — buyers, season, and regulation — before we suggest a product or a campaign.",
  },
  {
    title: "Results over feature lists",
    body: "Every build ties back to a real result: faster work, clearer journeys, more sales, or less support load.",
  },
  {
    title: "Secure by default",
    body: "Access, connections, and data handling designed for industries where trust really matters.",
  },
  {
    title: "Teams that stay",
    body: "From first chat through launch and after — one partner across product, brand, and growth when you need them together.",
  },
];
