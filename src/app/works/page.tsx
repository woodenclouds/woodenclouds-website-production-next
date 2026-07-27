import type { Metadata } from "next";
import { WorksView } from "@/components/works/WorksView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Works",
  description:
    "Selected Woodenclouds work — products, websites, apps, brands, and productions shaped for clarity and outcomes.",
  path: "/works",
});

export default function WorksPage() {
  return <WorksView />;
}
