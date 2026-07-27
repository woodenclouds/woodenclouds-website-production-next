import type { Metadata } from "next";
import { BusinessSupportView } from "@/components/services/BusinessSupportView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Startup & Business Support",
  description:
    "Woodenclouds startup and business support — consulting, market research, strategic planning, financial analysis, and operational partnership for every stage.",
  path: "/services/business-support",
});

export default function BusinessSupportPage() {
  return <BusinessSupportView />;
}
