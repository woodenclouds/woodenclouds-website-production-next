import type { Metadata } from "next";
import { TechnologyView } from "@/components/services/TechnologyView";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Woodenclouds technology services — website, web app, mobile, custom software, ecommerce, and extension development engineered to ship and scale.",
};

export default function TechnologyPage() {
  return <TechnologyView />;
}
