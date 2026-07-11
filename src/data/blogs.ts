export type Blog = {
  slug: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  excerpt: string;
  readMinutes: number;
  description1: string;
  description2: string;
  description3: string;
  pullQuote?: string;
  principles?: { title: string; body: string }[];
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
};

export const blogs: Blog[] = [
  {
    slug: "designing-digital-products-that-scale",
    title: "Designing digital products that scale",
    image: "/about/about-img1.jpg",
    createdAt: "2025-11-12",
    updatedAt: "2025-11-18",
    tags: ["Product", "Design"],
    excerpt: "How we approach systems thinking when building products meant to grow.",
    readMinutes: 7,
    description1:
      "Great products are not a collection of screens — they are systems. At Woodenclouds, we start with outcomes, map the journeys that matter, and design interfaces that stay clear as complexity grows. The goal is not more features. It is a product that still feels intentional when the team, the audience, and the roadmap all get bigger.",
    description2:
      "From information architecture to component libraries, every decision is made to help teams ship faster without losing craft. We treat design as infrastructure: shared language, reusable patterns, and constraints that protect quality under pressure.",
    description3:
      "Whether you are launching an MVP or modernizing a mature platform, the same principles apply: clarity, consistency, and measurable impact. Scale is not a later problem. It is a design problem you solve from the first serious release.",
    pullQuote: "Clarity compounds. Complexity compounds faster — design for the former.",
    principles: [
      {
        title: "Outcomes before screens",
        body: "We define what success looks like for users and the business before we draw a single frame. Flows follow jobs-to-be-done, not a feature wishlist.",
      },
      {
        title: "Architecture that flexes",
        body: "Navigation, content models, and components are built to absorb new modules without rewriting the product’s mental model every quarter.",
      },
      {
        title: "Craft that ships",
        body: "A living design system keeps teams aligned. Tokens, patterns, and documentation turn taste into something the whole org can execute.",
      },
    ],
    image2: "/about/about-img2.jpg",
    image3: "/about/img5.jpg",
    image4: "/hero/hero-collab.jpg",
    image5: "/services/technology.jpg",
    image6: "/team/team-work.jpg",
  },
  {
    slug: "ai-insight-for-real-business-growth",
    title: "AI and insight for real business growth",
    image: "/about/about-img2.jpg",
    createdAt: "2025-10-03",
    updatedAt: "2025-10-08",
    tags: ["AI", "Technology"],
    excerpt: "Practical ways teams can use AI without chasing hype.",
    readMinutes: 5,
    description1:
      "AI is most valuable when it removes friction from real workflows — not when it becomes a feature checklist. The teams that win start with a painful, frequent job and ask where judgment, speed, or pattern recognition is the bottleneck.",
    description2:
      "We help businesses identify high-leverage use cases, design trustworthy experiences, and ship systems that improve with feedback. Transparency, human oversight, and clear failure states matter as much as model quality.",
    description3:
      "Insight only counts when it changes a decision. Build for that loop — capture, recommend, act, measure — and AI becomes infrastructure instead of a demo.",
    image2: "/hero/thumb-ai.jpg",
    image3: "/about/img1.jpg",
  },
  {
    slug: "building-dedicated-teams-that-ship",
    title: "Building dedicated teams that ship",
    image: "/team/team-work.jpg",
    createdAt: "2025-08-21",
    updatedAt: "2025-08-22",
    tags: ["Teams", "Delivery"],
    excerpt: "What makes an outsourced product team feel like an extension of yours.",
    readMinutes: 4,
    description1:
      "Dedicated teams work when communication, ownership, and craft are shared. We embed with your product rhythm and measure success by shipped outcomes — not hours logged or tickets closed in isolation.",
    description2:
      "The difference is proximity of intent. Shared standups, shared backlog language, and designers sitting next to engineers keep quality from leaking at the handoff.",
    description3:
      "When the team feels like yours, velocity stops being a negotiation and becomes a habit.",
    image2: "/team/team-01.jpg",
    image3: "/about/img3.jpg",
  },
  {
    slug: "brand-systems-for-digital-first-companies",
    title: "Brand systems for digital-first companies",
    image: "/services/marketing.jpg",
    createdAt: "2025-06-14",
    updatedAt: "2025-06-16",
    tags: ["Branding", "Marketing"],
    excerpt: "Why modern brands need more than a logo file.",
    readMinutes: 5,
    description1:
      "A brand system gives your team a shared language across product, marketing, and social. We build systems that are expressive and practical — distinctive enough to be remembered, flexible enough to ship weekly.",
    description2:
      "Logo files age poorly. Tokens, type scales, motion rules, and content patterns age with the company. That is the difference between a brand kit and a brand system.",
    description3:
      "When product and marketing speak the same visual language, every release reinforces the brand instead of diluting it.",
    image2: "/about/about-img3.jpg",
    image3: "/hero/hero-2.jpg",
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
