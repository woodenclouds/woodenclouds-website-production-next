import type { Metadata } from "next";
import { ServicesView } from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Woodenclouds services — technology, startup & business support, branding & digital marketing, and dedicated teams built to ship.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
