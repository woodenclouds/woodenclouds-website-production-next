import type { Metadata } from "next";
import { WaiSolutionView } from "@/components/solutions/WaiSolutionView";
import { JsonLd } from "@/components/seo/JsonLd";
import { waiProduct } from "@/data/wai";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "WAI — Woodenclouds AI Voice Agents",
  description:
    "Woodenclouds AI (WAI) voice agents for sales, support, reception, and appointments. English and Malayalam. Transparent pay-as-you-go pricing.",
  path: "/solutions/wai",
  image: waiProduct.image,
});

export default function WaiSolutionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "WAI", path: "/solutions/wai" },
        ])}
      />
      <WaiSolutionView />
    </>
  );
}
