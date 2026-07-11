import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTechPage, techPages } from "@/data/technology";
import { TechnologyDetailView } from "@/components/services/TechnologyDetailView";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return techPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTechPage(slug);
  return {
    title: page?.title ?? "Technology",
    description: page?.description,
  };
}

export default async function TechSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getTechPage(slug);
  if (!page) notFound();

  return <TechnologyDetailView page={page} />;
}
