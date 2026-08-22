import type { Metadata } from "next";
import { ServicesView } from "@/components/services/ServicesView";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesFaqs } from "@/data/content";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Woodenclouds services — branding, experience design, technology, digital marketing, and startup & business support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(servicesFaqs)} />
      <ServicesView />
    </>
  );
}
