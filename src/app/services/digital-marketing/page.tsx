import type { Metadata } from "next";
import { DigitalMarketingView } from "@/components/services/DigitalMarketingView";

export const metadata: Metadata = {
  title: "Branding & Digital Marketing",
  description:
    "Woodenclouds branding and digital marketing — brand identity, campaigns, social, content, and SEO that make your brand seen and remembered.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingView />;
}
