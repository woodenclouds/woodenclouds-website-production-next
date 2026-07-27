import type { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Woodenclouds is a digital partner for products, brands, and teams in Kochi — built on innovation, collaboration, and integrity.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutView />;
}
