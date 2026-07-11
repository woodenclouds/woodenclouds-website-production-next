import type { Metadata } from "next";
import { FutureView } from "@/components/future/FutureView";

export const metadata: Metadata = {
  title: "Future Woodenclouds",
  description:
    "Future Woodenclouds unites developers, designers, marketers, and creative minds to build what's next — join the revolution.",
};

export default function FutureWoodencloudsPage() {
  return <FutureView />;
}
