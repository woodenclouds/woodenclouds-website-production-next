import type { Metadata } from "next";
import { BlogView } from "@/components/blog/BlogView";
import { fetchAllPosts } from "@/data/blog";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description:
    "Notes on product, teams, brand, and AI — practical writing from how we design, build, and deliver.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  return <BlogView posts={posts} />;
}
