import type { Metadata } from "next";
import { CareerView } from "@/components/career/CareerView";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join Woodenclouds — browse open roles in engineering, design, growth, and delivery, and apply to build with us.",
};

export default function CareerPage() {
  return <CareerView />;
}
