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
  title: "Everything you need to grow your brand",
  titleLine1: "Everything you need",
  titleLine2: "to grow your brand.",
  description:
    "Branding, design, technology, marketing, and business support — planned together so each piece helps the next.",
};

export type ServiceOffer = {
  title: string;
  note: string;
};

export type ServiceCatalogGroup = {
  id: string;
  name: string;
  href: string;
  cta: string;
  tagline: string;
  description: string;
  items: ServiceOffer[];
};

export const serviceCatalog: ServiceCatalogGroup[] = [
  {
    id: "branding",
    name: "Branding",
    href: "/services/digital-marketing",
    cta: "Explore branding",
    tagline: "A mark people remember",
    description:
      "We help you decide what the brand stands for, then turn that into files and designs your team can actually use — not a PDF that sits unused.",
    items: [
      { title: "Brand Consulting", note: "What you say, who it’s for, and what you refuse to be." },
      { title: "Logo Design", note: "A mark, type, and colour that hold on a site, a pack, or a pitch." },
      { title: "Industrial / Product Design", note: "How a physical or digital object should feel in the hand and on a shelf." },
      { title: "Graphic Design", note: "Decks, social, print, and templates your team can keep using." },
      { title: "2D / 3D Visualisation", note: "Visuals that explain the product before anyone clicks." },
    ],
  },
  {
    id: "experience-design",
    name: "Experience Design",
    href: "/services/technology",
    cta: "Explore experience design",
    tagline: "Interfaces people finish",
    description:
      "We map the path from first glance to done — then design screens that stay out of the way on web, mobile, checkout, and the tools operators use.",
    items: [
      { title: "UI/UX Design", note: "Flows that cut steps, not add decoration." },
      { title: "Website Design", note: "A site that explains the offer and makes the next action obvious." },
      { title: "Mobile Experience", note: "Apps and responsive paths that work with one thumb and bad signal." },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    href: "/services/technology",
    cta: "Explore technology",
    tagline: "Software your team can run",
    description:
      "We build the product, then leave you with something your people can host, change, and launch again — not a system only we know how to change.",
    items: [
      { title: "AI & Machine Learning", note: "Features that save time or money — not a chatbot bolted on for the deck." },
      { title: "DevOps Consulting", note: "Pipelines, environments, and releases that don’t break Friday night." },
      { title: "Data & Analytics", note: "Reports and models that change a decision this week." },
      { title: "Web Development", note: "Sites and apps that stay fast as the catalogue and traffic grow." },
      { title: "Mobile App Development", note: "iOS and Android that share a brain, not two separate companies." },
      { title: "E-commerce", note: "Catalogues, checkout, and inventory that match how you actually sell." },
      { title: "Quality Assurance & Testing", note: "Tests and reviews so customers aren’t your first QA team." },
      { title: "Cloud Services", note: "Infrastructure sized for today, ready for the spike." },
      { title: "Cyber Security", note: "Access, backups, and hardening as part of the build — not a later panic." },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    cta: "Explore digital marketing",
    tagline: "Attention that becomes a customer",
    description:
      "We pick channels that fit the offer, write for how people search now, and keep spend on one clear story — so you can see what to stop and what to grow.",
    items: [
      { title: "Search Engine Optimisation", note: "Pages and structure people — and Google — can understand." },
      { title: "Generative Engine Optimization", note: "Content shaped so assistants and overviews can cite you." },
      { title: "Social Media Management", note: "A regular rhythm that sounds like you, not a content farm." },
      { title: "Performance Marketing", note: "Campaigns judged on cost per lead or sale, not empty reach." },
      { title: "Content Marketing", note: "Pieces that answer a real question and point to a next step." },
      { title: "Marketing Automation", note: "Nurture and follow-up that doesn’t feel like a drip of spam." },
      { title: "Analytics", note: "Dashboards that tell you what to stop, not just what happened." },
    ],
  },
  {
    id: "business-support",
    name: "Startup & Business Support",
    href: "/services/business-support",
    cta: "Explore business support",
    tagline: "Clarity beyond the product",
    description:
      "When the next move is fuzzy, we sit with founders and operators — research, numbers, and a plan the team can run while delivery keeps moving.",
    items: [
      { title: "Business Consulting", note: "Advice when the choice is expensive and the room is split." },
      { title: "Market Research", note: "Interviews and scans so you don’t build for a guess." },
      { title: "Strategic Planning", note: "Priorities, owners, and a sequence — not an 80-page strategy." },
      { title: "Financial Analysis", note: "Unit economics and forecasts that change the next hire or spend." },
      { title: "Operational Support", note: "Rituals and tools so delivery doesn’t stall on process." },
      { title: "Ongoing Partnership", note: "A partner for the messy months when the product meets reality." },
    ],
  },
];

export const servicePractices: ServicePractice[] = [
  {
    id: "technology",
    name: "Technology",
    title: "Technology Services",
    tagline: "Products people rely on",
    description:
      "Websites, apps, platforms, and shops — built to be clear, fast, and easy to update. We leave you with systems your team can run.",
    image: "/services/technology.jpg",
    imageAlt: "Technology services — product and engineering",
    focus: [
      "Web Development",
      "Mobile App Development",
      "AI & Machine Learning",
      "E-commerce",
      "Cloud Services",
      "DevOps, QA & Cyber Security",
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
      "Advice, research, strategy, and operations for founders and teams under pressure — so you know what matters while the work keeps moving.",
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
      "Identity, campaigns, content, and growth work that earns attention — and keeps every channel telling the same story.",
    image: "/services/marketing.jpg",
    imageAlt: "Branding and digital marketing",
    focus: [
      "Brand Consulting & Logo Design",
      "Search Engine Optimisation",
      "Generative Engine Optimization",
      "Social Media Management",
      "Performance Marketing",
      "Content & Marketing Automation",
    ],
    href: "/services/digital-marketing",
    cta: "Explore brand & growth",
  },
];

export const servicesApproach = [
  {
    title: "Value-driven research",
    body: "We study your market, competitors, and limits so every decision earns its place — and every build helps the business.",
  },
  {
    title: "Specialized planning",
    body: "Before we write code or launch a campaign, we map a plan that fits your vision, timeline, and budget.",
  },
  {
    title: "Precise delivery",
    body: "We work with focus — high-quality work on schedule, then we stay close through launch and beyond.",
  },
  {
    title: "A partnership that grows",
    body: "After launch we keep improving — measuring, refining, and planning the next release so momentum does not stall.",
  },
];
