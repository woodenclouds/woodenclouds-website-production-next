import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { HispanCaseStudy } from "@/components/works/hispan/HispanCaseStudy";
import { EnquireCta } from "@/components/shared/PageBits";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWorkBySlug } from "@/data/works";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hispan",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hispan-mono",
  display: "swap",
});

const work = getWorkBySlug("hispan");

export const metadata: Metadata = pageMeta({
  title: work?.title ?? "HISPAN",
  description:
    work?.description1 ??
    "HISPAN — an enterprise multi-factory manufacturing operations platform designed for Lazza.",
  path: "/works/hispan",
  image: work?.thumbnail || work?.image1,
});

export default function HispanWorkPage() {
  if (!work) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" },
          { name: work.title, path: `/works/${work.slug}` },
        ])}
      />
      <div className={`${jakarta.variable} ${jakarta.className} ${jetbrains.variable} hispan-case`}>
        <HispanCaseStudy />
      </div>
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </>
  );
}
