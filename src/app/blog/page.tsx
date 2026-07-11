import type { Metadata } from "next";
import { BlogView } from "@/components/blog/BlogView";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Woodenclouds — product design, dedicated teams, brand systems, and practical AI.",
};

export default function BlogPage() {
  return <BlogView />;
}
