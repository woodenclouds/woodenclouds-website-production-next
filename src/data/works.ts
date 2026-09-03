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
    title1: "One place to run factory operations",
    description1:
      "A multi-factory operations platform for Lazza — production, inventory, utilities, machine complaints, wastage, and reporting in one place.",
    description2:
      "We helped teams work the same way across sites and respond to issues faster.",
    description3:
      "HISPAN now gives plant directors a live view of operations, helpful AI notes, and one place to run a growing manufacturing network.",
    result: "One place for every plant",
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
      "One platform for workforce, harvesting, inventory, finance, and reporting across plantations.",
    description1:
      "An estate management platform built to simplify workforce, harvesting, inventory, finance, and reporting across multiple plantations.",
    description2:
      "We helped teams work the same way across sites and respond to issues faster.",
    description3:
      "Koko now gives directors a live view of operations, helpful AI notes, and one place to run a growing network.",
    result: "One place for estate operations",
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
    title1: "Construction commerce case study",
    description1: "A digital construction commerce platform.",
    description2: "Helping construction businesses sell and operate online.",
    description3: "Clearer tools for buying, selling, and running construction work.",
    result: "Digital tools for construction",
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
