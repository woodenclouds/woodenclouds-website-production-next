import type { Metadata } from "next";
import { TechnologyView } from "@/components/services/TechnologyView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Technology",
  description:
    "Woodenclouds technology services — website, web app, mobile, custom software, ecommerce, and extension development engineered to ship and scale.",
  path: "/services/technology",
});

export default function TechnologyPage() {
  return <TechnologyView />;
}
