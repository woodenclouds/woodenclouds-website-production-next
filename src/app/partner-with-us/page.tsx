import type { Metadata } from "next";
import { PartnerView } from "@/components/partner/PartnerView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Partner with us",
  description:
    "Partner with Woodenclouds through outsourcing, affiliate, and business partnership programs — collaboration that drives growth.",
  path: "/partner-with-us",
});

export default function PartnerPage() {
  return <PartnerView />;
}
