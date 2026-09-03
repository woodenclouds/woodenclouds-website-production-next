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
    thumbnail: "/works/hispan/laptop_mockup.png",
    cover: "/works/hispan/laptop_mockup.png",
    image1: "/works/hispan/laptop_mockup.png",
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
];

export const workCategories = [
  "All",
  "Web Application",
  "Enterprise",
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
