import type { Metadata } from "next";
import { BlogView } from "@/components/blog/BlogView";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on product, teams, brand, and AI — practical writing from how we design, build, and deliver.",
};

export default function BlogPage() {
  return <BlogView />;
}
