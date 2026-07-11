export type Blog = {
  slug: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  excerpt: string;
  description: string;
};

export const blogs: Blog[] = [
  {
    slug: "designing-digital-products-that-scale",
    title: "Designing digital products that scale",
    image: "/assets/user/imgs/about/about-img1.jpg",
    createdAt: "2025-11-12",
    updatedAt: "2025-11-18",
    tags: ["Product", "Design"],
    excerpt: "How we approach systems thinking when building products meant to grow.",
    description: `
      <p>Great products are not a collection of screens — they are systems. At Woodenclouds, we start with outcomes, map the journeys that matter, and design interfaces that stay clear as complexity grows.</p>
      <p>From information architecture to component libraries, every decision is made to help teams ship faster without losing craft.</p>
      <p>Whether you are launching an MVP or modernizing a mature platform, the same principles apply: clarity, consistency, and measurable impact.</p>
    `,
  },
  {
    slug: "ai-insight-for-real-business-growth",
    title: "AI and insight for real business growth",
    image: "/assets/user/imgs/about/about-img2.jpg",
    createdAt: "2025-10-03",
    updatedAt: "2025-10-08",
    tags: ["AI", "Technology"],
    excerpt: "Practical ways teams can use AI without chasing hype.",
    description: `
      <p>AI is most valuable when it removes friction from real workflows — not when it becomes a feature checklist.</p>
      <p>We help businesses identify high-leverage use cases, design trustworthy experiences, and ship systems that improve with feedback.</p>
    `,
  },
  {
    slug: "building-dedicated-teams-that-ship",
    title: "Building dedicated teams that ship",
    image: "/assets/user/imgs/team-work.jpg",
    createdAt: "2025-08-21",
    updatedAt: "2025-08-22",
    tags: ["Teams", "Delivery"],
    excerpt: "What makes an outsourced product team feel like an extension of yours.",
    description: `
      <p>Dedicated teams work when communication, ownership, and craft are shared. We embed with your product rhythm and measure success by shipped outcomes.</p>
    `,
  },
  {
    slug: "brand-systems-for-digital-first-companies",
    title: "Brand systems for digital-first companies",
    image: "/assets/user/imgs/services/marketing.jpg",
    createdAt: "2025-06-14",
    updatedAt: "2025-06-16",
    tags: ["Branding", "Marketing"],
    excerpt: "Why modern brands need more than a logo file.",
    description: `
      <p>A brand system gives your team a shared language across product, marketing, and social. We build systems that are expressive and practical.</p>
    `,
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export function getFeaturedBlogs(limit = 2) {
  return blogs.slice(0, limit);
}

export function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
