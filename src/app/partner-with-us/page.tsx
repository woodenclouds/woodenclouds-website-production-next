import type { Metadata } from "next";
import { PartnerView } from "@/components/partner/PartnerView";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "Partner with Woodenclouds through outsourcing, affiliate, and business partnership programs — collaboration that drives growth.",
};

export default function PartnerPage() {
  return <PartnerView />;
}
