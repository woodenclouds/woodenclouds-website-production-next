import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Woodenclouds in Kochi — call, email, or send a message about your next product, marketing, or dedicated team engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactView />;
}
