import type { Metadata } from "next";
import { FutureView } from "@/components/future/FutureView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Future Woodenclouds",
  description:
    "Future Woodenclouds is Woodenclouds Connect — with internet and a laptop, skilled people work from anywhere. A company-managed global remote network built to be the world's #1.",
  path: "/future-woodenclouds",
});

export default function FutureWoodencloudsPage() {
  return <FutureView />;
}
