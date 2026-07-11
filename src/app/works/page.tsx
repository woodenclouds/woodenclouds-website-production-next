import type { Metadata } from "next";
import { WorksView } from "@/components/works/WorksView";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected Woodenclouds work — products, websites, apps, brands, and productions shaped for clarity and outcomes.",
};

export default function WorksPage() {
  return <WorksView />;
}
