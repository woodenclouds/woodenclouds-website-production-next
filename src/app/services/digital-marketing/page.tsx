import type { Metadata } from "next";
import { DigitalMarketingView } from "@/components/services/DigitalMarketingView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Branding & Digital Marketing",
  description:
    "Woodenclouds branding and digital marketing — brand identity, campaigns, social, content, and SEO that make your brand seen and remembered.",
  path: "/services/digital-marketing",
});

export default function DigitalMarketingPage() {
  return <DigitalMarketingView />;
}
