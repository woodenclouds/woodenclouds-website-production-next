export type WorkLayout = "gallery" | "case-study";

export type Work = {
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  technology?: string;
  thumbnail: string;
  cover?: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  title1: string;
  description1: string;
  description2: string;
  description3: string;
  result?: string;
  featured?: boolean;
  layout?: WorkLayout;
};

export const works: Work[] = [
  {
    slug: "hispan",
    title: "HISPAN",
    category: "Web Application",
    client: "Lazza",
    location: "Kerala, India",
    technology: "React, Django REST, PostgreSQL, OpenAI",
    thumbnail: "/works/hispan/custom-hero.png",
    cover: "/works/hispan/custom-hero.png",
    image1: "/works/hispan/custom-hero.png",
    title1: "Enterprise platform to streamline factory operations",
    description1:
      "A unified multi-factory operations platform for Lazza — production, inventory, utilities, machine complaints, wastage, and reporting in one intelligent dashboard.",
    description2:
      "We brought greater structure and visibility to everyday factory operations, helping teams work more consistently across facilities and respond to issues faster.",
    description3:
      "HISPAN now gives plant directors real-time operational status, AI-powered insights, and a single place to run a growing manufacturing network.",
    result: "Unified multi-plant operations",
    featured: true,
    layout: "case-study",
  },
  {
    slug: "koko",
    title: "Koko",
    category: "Enterprise",
    client: "Koko Spices",
    location: "Kerala, India",
    technology: "Development",
    thumbnail: "/works/koko/koko_cover.png",
    cover: "/works/koko/koko_cover.png",
    image1: "/works/koko/koko_cover.png",
    title1:
      "A centralized platform connecting workforce, harvesting, inventory, finance, and reporting across multiple plantations.",
    description1:
      "A centralized estate management platform built to simplify workforce operations, harvesting, inventory, finance, and business reporting across multiple plantations.",
    description2:
      "We brought greater structure and visibility to everyday operations, helping teams work more consistently across facilities and respond to issues faster.",
    description3:
      "Koko now gives directors real-time operational status, AI-powered insights, and a single place to run a growing network.",
    result: "Unified estate operations",
    featured: true,
    layout: "case-study",
  },
  {
    slug: "vq-buildware",
    title: "VQ Buildware",
    category: "Web Application",
    client: "VQ",
    location: "Global",
    technology: "React, Next.js",
    thumbnail: "/works/vq-buildware/hero_banner.png",
    cover: "/works/vq-buildware/hero_banner.png",
    image1: "/works/vq-buildware/laptop_mockup.png",
    image2: "/works/vq-buildware/iphone_mockup.png",
    title1: "Construction Commerce Case Study",
    description1: "A digital construction commerce platform case study.",
    description2: "Transforming the construction industry through digital innovation.",
    description3: "Empowering businesses with streamlined commerce solutions.",
    result: "Digital innovation in construction",
    featured: true,
    layout: "case-study",
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "Web Application",
    client: "NovaPay",
    location: "Kochi, India",
    technology: "React, Next.js, Node.js",
    thumbnail: "/industries/finance.jpg",
    image1: "/industries/finance.jpg",
    image2: "/about/about-img1.jpg",
    image3: "/about/about-img2.jpg",
    image4: "/about/img1.jpg",
    image5: "/backgrounds/1.jpg",
    image6: "/about/img5.jpg",
    title1: "A real-time command center for payments",
    description1:
      "We designed and built a scalable analytics dashboard that helps NovaPay monitor transactions, detect anomalies, and act faster across markets.",
    description2:
      "From information architecture to production deployment, every screen was shaped around clarity, speed, and trust.",
    description3:
      "The product now supports multi-role access, live reporting, and modular widgets that grow with the business.",
    result: "40% faster anomaly response",
    featured: true,
  },
  {
    slug: "retail-ecommerce",
    title: "Retail Ecommerce Experience",
    category: "Website",
    client: "UrbanNest",
    location: "Bangalore, India",
    technology: "Shopify, Custom Theme",
    thumbnail: "/industries/retail.jpg",
    image1: "/industries/retail.jpg",
    image2: "/about/about-img3.jpg",
    image5: "/backgrounds/1.jpg",
    title1: "Commerce that feels effortless",
    description1:
      "A conversion-focused storefront with refined product storytelling, fast checkout, and inventory-ready integrations.",
    description2: "We rebuilt the brand’s digital shelf to match how customers actually shop.",
    description3: "Launch included campaign landing pages, SEO foundations, and performance tuning.",
    result: "2.1× checkout completion",
    featured: true,
  },
  {
    slug: "health-mobile-app",
    title: "Wellness Companion App",
    category: "Mobile App",
    client: "PulseCare",
    location: "Dubai, UAE",
    technology: "React Native, Firebase",
    thumbnail: "/industries/healthcare.jpg",
    image1: "/industries/healthcare.jpg",
    image2: "/team/team-work.jpg",
    title1: "Daily health habits, beautifully guided",
    description1:
      "A cross-platform mobile experience for tracking wellness goals, reminders, and coach-led programs.",
    description2: "Calm visuals and frictionless flows keep users coming back.",
    description3: "Built for iOS and Android with shared design systems and offline-friendly sync.",
    result: "68% weekly active retention",
    featured: true,
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    category: "Creatives",
    client: "Lumen Studio",
    location: "Kochi, India",
    thumbnail: "/services/marketing.jpg",
    image1: "/services/marketing.jpg",
    title1: "A visual language that scales",
    description1:
      "Logo, typography, color, and motion guidelines that keep every touchpoint consistent.",
    description2: "Designed for digital-first teams shipping fast.",
    description3: "Deliverables included brand book, social templates, and UI starter kit.",
    result: "Unified brand across 12 surfaces",
    featured: true,
  },
  {
    slug: "product-launch-film",
    title: "Product Launch Film",
    category: "Productions",
    client: "Aether Labs",
    location: "Mumbai, India",
    thumbnail: "/industries/media.jpg",
    image1: "/industries/media.jpg",
    title1: "Story-led product storytelling",
    description1:
      "A cinematic launch film and cutdowns for web, social, and event screens.",
    description2: "We paired product demos with human moments that sell the why.",
    description3: "Delivered master edit plus platform-specific versions.",
    result: "1.8M campaign views",
    featured: true,
  },
  {
    slug: "saas-marketing-site",
    title: "SaaS Marketing Website",
    category: "Website",
    client: "Stackflow",
    location: "Remote",
    technology: "Next.js, Tailwind",
    thumbnail: "/industries/saas.jpg",
    image1: "/industries/saas.jpg",
    title1: "Clarity for a complex product",
    description1:
      "A marketing site that explains the product in plain language and drives qualified demos.",
    description2: "Modular sections make future campaigns easy to ship.",
    description3: "Integrated CMS-ready content blocks and analytics events.",
    result: "3× demo request rate",
    featured: true,
  },
];

export const workCategories = [
  "All",
  "Website",
  "Mobile App",
  "Web Application",
  "Creatives",
  "Productions",
] as const;

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function isCaseStudy(work: Work) {
  return work.layout === "case-study";
}

export function isWorksCaseStudyPath(pathname: string) {
  const slug = pathname.match(/^\/works\/([^/]+)\/?$/)?.[1];
  if (!slug) return false;
  return getWorkBySlug(slug)?.layout === "case-study";
}

export function getFeaturedWorks(limit = 10) {
  return works.filter((w) => w.featured).slice(0, limit);
}
