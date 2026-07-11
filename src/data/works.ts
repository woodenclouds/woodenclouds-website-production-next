export type Work = {
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  technology?: string;
  thumbnail: string;
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
  featured?: boolean;
};

export const works: Work[] = [
  {
    slug: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "Web Application",
    client: "NovaPay",
    location: "Kochi, India",
    technology: "React, Next.js, Node.js",
    thumbnail: "/assets/user/imgs/services/technology.jpg",
    image1: "/assets/user/imgs/services/technology.jpg",
    image2: "/assets/user/imgs/about/about-img1.jpg",
    image3: "/assets/user/imgs/about/about-img2.jpg",
    image4: "/assets/user/imgs/img1.jpg",
    image5: "/assets/user/imgs/background/1.jpg",
    image6: "/assets/user/imgs/img5.jpg",
    title1: "A real-time command center for payments",
    description1:
      "We designed and built a scalable analytics dashboard that helps NovaPay monitor transactions, detect anomalies, and act faster across markets.",
    description2:
      "From information architecture to production deployment, every screen was shaped around clarity, speed, and trust.",
    description3:
      "The product now supports multi-role access, live reporting, and modular widgets that grow with the business.",
    featured: true,
  },
  {
    slug: "retail-ecommerce",
    title: "Retail Ecommerce Experience",
    category: "Website",
    client: "UrbanNest",
    location: "Bangalore, India",
    technology: "Shopify, Custom Theme",
    thumbnail: "/assets/user/imgs/services/startup-business-support.jpg",
    image1: "/assets/user/imgs/services/startup-business-support.jpg",
    image2: "/assets/user/imgs/about/about-img3.jpg",
    image5: "/assets/user/imgs/background/1.jpg",
    title1: "Commerce that feels effortless",
    description1:
      "A conversion-focused storefront with refined product storytelling, fast checkout, and inventory-ready integrations.",
    description2: "We rebuilt the brand’s digital shelf to match how customers actually shop.",
    description3: "Launch included campaign landing pages, SEO foundations, and performance tuning.",
    featured: true,
  },
  {
    slug: "health-mobile-app",
    title: "Wellness Companion App",
    category: "Mobile App",
    client: "PulseCare",
    location: "Dubai, UAE",
    technology: "React Native, Firebase",
    thumbnail: "/assets/user/imgs/services/marketing.jpg",
    image1: "/assets/user/imgs/services/marketing.jpg",
    image2: "/assets/user/imgs/team-work.jpg",
    title1: "Daily health habits, beautifully guided",
    description1:
      "A cross-platform mobile experience for tracking wellness goals, reminders, and coach-led programs.",
    description2: "Calm visuals and frictionless flows keep users coming back.",
    description3: "Built for iOS and Android with shared design systems and offline-friendly sync.",
    featured: true,
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    category: "Creatives",
    client: "Lumen Studio",
    location: "Kochi, India",
    thumbnail: "/assets/user/imgs/about/about-img1.jpg",
    image1: "/assets/user/imgs/about/about-img1.jpg",
    title1: "A visual language that scales",
    description1:
      "Logo, typography, color, and motion guidelines that keep every touchpoint consistent.",
    description2: "Designed for digital-first teams shipping fast.",
    description3: "Deliverables included brand book, social templates, and UI starter kit.",
    featured: true,
  },
  {
    slug: "product-launch-film",
    title: "Product Launch Film",
    category: "Productions",
    client: "Aether Labs",
    location: "Mumbai, India",
    thumbnail: "/assets/user/imgs/about/about-img2.jpg",
    image1: "/assets/user/imgs/about/about-img2.jpg",
    title1: "Story-led product storytelling",
    description1:
      "A cinematic launch film and cutdowns for web, social, and event screens.",
    description2: "We paired product demos with human moments that sell the why.",
    description3: "Delivered master edit plus platform-specific versions.",
    featured: true,
  },
  {
    slug: "saas-marketing-site",
    title: "SaaS Marketing Website",
    category: "Website",
    client: "Stackflow",
    location: "Remote",
    technology: "Next.js, Tailwind",
    thumbnail: "/assets/user/imgs/img1.jpg",
    image1: "/assets/user/imgs/img1.jpg",
    title1: "Clarity for a complex product",
    description1:
      "A marketing site that explains the product in plain language and drives qualified demos.",
    description2: "Modular sections make future campaigns easy to ship.",
    description3: "Integrated CMS-ready content blocks and analytics events.",
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

export function getFeaturedWorks(limit = 10) {
  return works.filter((w) => w.featured).slice(0, limit);
}
