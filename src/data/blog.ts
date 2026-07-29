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
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const app = await fetchBlogPostDetail(slug);
    if (!app.data) return null;
    return mapPost(app.data as ApiBlogPost);
  } catch {
    return null;
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
