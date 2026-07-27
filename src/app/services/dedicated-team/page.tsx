import type { Metadata } from "next";
import { DedicatedTeamView } from "@/components/team/DedicatedTeamView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dedicated Team",
  description:
    "Hire dedicated Woodenclouds squads for marketing, technology, product development, and technical support — teams that plug into your roadmap and ship with you.",
  path: "/services/dedicated-team",
});

export default function DedicatedTeamPage() {
  return <DedicatedTeamView />;
}
