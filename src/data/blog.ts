import {
  fetchBlogPostDetail,
  fetchBlogPostsList,
  type ApiBlogPost,
} from "@/lib/api";

export type BlogPost = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  cover: string;
  coverAlt: string;
  /** HTML body from the admin rich text editor */
  content: string;
};

/** Offline fallback when the API is unreachable during local migrate. */
const FALLBACK_POSTS: BlogPost[] = [
  {
    slug: "designing-digital-products-that-scale",
    title: "Designing digital products that scale",
    cover: "/about/about-img1.jpg",
    coverAlt: "Designing digital products that scale",
    date: "2025-11-12",
    tags: ["Product", "Design"],
    category: "Product",
    excerpt: "How we approach systems thinking when building products meant to grow.",
    readTime: "7 min",
    content:
      "<p>Great products are not a collection of screens — they are systems. At Woodenclouds, we start with outcomes, map the journeys that matter, and design interfaces that stay clear as complexity grows.</p>",
  },
  {
    slug: "ai-insight-for-real-business-growth",
    title: "AI and insight for real business growth",
    cover: "/about/about-img2.jpg",
    coverAlt: "AI and insight for real business growth",
    date: "2025-10-03",
    tags: ["AI", "Technology"],
    category: "Technology",
    excerpt: "Practical ways teams can use AI without chasing hype.",
    readTime: "5 min",
    content:
      "<p>AI is most valuable when it removes friction from real workflows — not when it becomes a feature checklist.</p>",
  },
  {
    slug: "building-dedicated-teams-that-ship",
    title: "Building dedicated teams that ship",
    cover: "/team/team-work.jpg",
    coverAlt: "Building dedicated teams that ship",
    date: "2025-08-21",
    tags: ["Teams", "Delivery"],
    category: "Teams",
    excerpt: "What makes an outsourced product team feel like an extension of yours.",
    readTime: "4 min",
    content:
      "<p>Dedicated teams work when communication, ownership, and craft are shared.</p>",
  },
  {
    slug: "brand-systems-for-digital-first-companies",
    title: "Brand systems for digital-first companies",
    cover: "/services/marketing.jpg",
    coverAlt: "Brand systems for digital-first companies",
    date: "2025-06-14",
    tags: ["Branding", "Marketing"],
    category: "Branding",
    excerpt: "Why modern brands need more than a logo file.",
    readTime: "5 min",
    content:
      "<p>A brand system gives your team a shared language across product, marketing, and social.</p>",
  },
];

function normalizeHtmlContent(content: ApiBlogPost["content"]): string {
  if (Array.isArray(content)) {
    return content
      .map((p) => String(p || "").trim())
      .filter(Boolean)
      .map((p) => `<p>${p}</p>`)
      .join("");
  }
  return String(content || "");
}

function mapPost(item: ApiBlogPost): BlogPost {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || "",
    category: item.category || "",
    tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
    date: item.date || "",
    readTime: item.readTime || "4 min",
    cover: item.cover || "/about/about-img1.jpg",
    coverAlt: item.coverAlt || item.title,
    content: normalizeHtmlContent(item.content),
  };
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const app = await fetchBlogPostsList();
    const posts = ((app.data as ApiBlogPost[]) || []).map(mapPost);
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const app = await fetchBlogPostDetail(slug);
    if (!app.data) return null;
    return mapPost(app.data as ApiBlogPost);
  } catch {
    return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  }
}

export async function getFeaturedBlogs(limit = 2): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts.slice(0, limit);
}

export function formatBlogDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
