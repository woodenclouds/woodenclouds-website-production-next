import type { Metadata } from "next";
import { BusinessSupportView } from "@/components/services/BusinessSupportView";

export const metadata: Metadata = {
  title: "Startup & Business Support",
  description:
    "Woodenclouds startup and business support — consulting, market research, strategic planning, financial analysis, and operational partnership for every stage.",
};

export default function BusinessSupportPage() {
  return <BusinessSupportView />;
}
