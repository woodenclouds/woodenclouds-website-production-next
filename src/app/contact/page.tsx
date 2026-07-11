import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Woodenclouds — call, email, or send a message about your next product, marketing, or dedicated team engagement.",
};

export default function ContactPage() {
  return <ContactView />;
}
