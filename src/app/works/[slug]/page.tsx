import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  return { title: work?.title ?? "Work" };
}

export default async function WorkDetailsPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <>
      <header className="bg-paper pb-8 pt-16 md:pt-24">
        <div className="wc-container">
          <h1 className="mb-8 text-4xl font-light md:text-5xl">{work.title}</h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-muted">Client</p>
              <p className="text-sm">{work.client}</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-muted">Location</p>
              <p className="text-sm">{work.location}</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-muted">Category</p>
              <p className="text-sm">{work.category}</p>
            </div>
            {work.technology && (
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-muted">Technology</p>
                <p className="text-sm">{work.technology}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="wc-section pt-0">
        <div className="wc-container">
          <img src={work.image1} alt={work.title} className="mb-10 w-full rounded-xl" />
          <h3 className="mb-4 text-2xl font-light">{work.title1}</h3>
          <p className="mb-10 max-w-3xl text-sm font-light leading-relaxed text-muted">
            {work.description1}
          </p>

          {(work.image2 || work.image3 || work.image4) && (
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {[work.image2, work.image3, work.image4].filter(Boolean).map((src) => (
                <img key={src} src={src!} alt="" className="w-full rounded-xl" />
              ))}
            </div>
          )}

          <p className="mx-auto mb-10 max-w-2xl text-center text-sm font-light leading-relaxed text-muted">
            {work.description2}
          </p>

          {work.image5 && <img src={work.image5} alt="" className="mb-10 w-full rounded-xl" />}

          <div className="grid items-center gap-8 lg:grid-cols-2">
            {work.image6 && <img src={work.image6} alt="" className="rounded-xl" />}
            <p className="text-sm font-light leading-relaxed text-muted">{work.description3}</p>
          </div>
        </div>
      </section>
      <EnquireCta />
    </>
  );
}
