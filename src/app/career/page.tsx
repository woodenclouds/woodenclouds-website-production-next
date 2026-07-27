import type { Metadata } from "next";
import { CareerView } from "@/components/career/CareerView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Career",
  description:
    "Join Woodenclouds — browse open roles in engineering, design, growth, and delivery, and apply to build with us.",
  path: "/career",
});

export default function CareerPage() {
  return <CareerView />;
}
