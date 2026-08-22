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
  title: "Building strong capabilities to empower your brand",
  description:
    "Six practices. One standard. Branding, experience, technology, growth, business support, and dedicated teams — planned together so the work compounds.",
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
      "We help you decide what the brand stands for, then turn that into assets teams can actually ship — not a PDF that dies in a folder.",
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
      "We build the product, then leave you with something your people can host, extend, and ship again — not a black box that only we understand.",
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
      "We pick channels that fit the offer, write for how people search now, and keep spend pointed at one story — so you can see what to cut and what to scale.",
    items: [
      { title: "Search Engine Optimisation", note: "Pages and structure people — and Google — can understand." },
      { title: "Generative Engine Optimization", note: "Content shaped so assistants and overviews can cite you." },
      { title: "Social Media Management", note: "A cadence that sounds like the brand, not a content farm." },
      { title: "Performance Marketing", note: "Campaigns judged on cost per lead or sale, not vanity reach." },
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
  {
    id: "dedicated-team",
    name: "Dedicated Team",
    href: "/services/dedicated-team",
    cta: "Explore dedicated teams",
    tagline: "Capacity without hiring overhead",
    description:
      "Embed skilled marketing, engineering, and product specialists into your workflow — flexible squads accountable to outcomes, not tickets.",
    items: [
      { title: "Marketing Squads", note: "Campaign, content, and growth people who join your weekly rhythm." },
      { title: "Tech Squads", note: "Engineers who ship with your backlog, not a separate vendor queue." },
      { title: "Product Support", note: "Discovery, specs, and delivery help so the team stays pointed." },
      { title: "Technical Support", note: "A desk for incidents, releases, and the unglamorous work after launch." },
      { title: "Shared Rituals", note: "Standups, demos, and reviews you can see — not a black box." },
      { title: "Flexible Scaling", note: "Add or reduce seats as the roadmap changes, without a hiring freeze." },
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
      "Websites, apps, platforms, and commerce — engineered for clarity, performance, and the next release. We ship systems your teams can run and extend.",
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
