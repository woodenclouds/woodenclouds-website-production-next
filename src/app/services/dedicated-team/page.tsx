import type { Metadata } from "next";
import { DedicatedTeamView } from "@/components/team/DedicatedTeamView";

export const metadata: Metadata = {
  title: "Dedicated Team",
  description:
    "Hire dedicated Woodenclouds squads for marketing, technology, product development, and technical support — teams that plug into your roadmap and ship with you.",
};

export default function DedicatedTeamPage() {
  return <DedicatedTeamView />;
}
