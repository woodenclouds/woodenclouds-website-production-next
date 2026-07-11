import type { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Woodenclouds is a digital partner for products, brands, and teams — built on innovation, collaboration, and integrity.",
};

export default function AboutPage() {
  return <AboutView />;
}
