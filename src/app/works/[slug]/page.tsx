import type { Metadata } from "next";
import Link from "next/link";
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
  return {
    title: work?.title ?? "Work",
    description: work?.description1,
  };
}

export default async function WorkDetailsPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const gallery = [work.image2, work.image3, work.image4].filter(Boolean) as string[];
  const index = works.findIndex((w) => w.slug === work.slug);
  const prev = index > 0 ? works[index - 1] : null;
  const next = index < works.length - 1 ? works[index + 1] : null;

  return (
    <>
      <header className="wc-work-detail-hero">
        <div className="wc-work-detail-hero-media" aria-hidden>
          <img src={work.image1} alt="" />
        </div>
        <div className="wc-work-detail-hero-overlay" aria-hidden />
        <div className="wc-work-detail-hero-ui">
          <div className="wc-container">
            <Link href="/works" className="wc-work-detail-back">
              ← All works
            </Link>
            <h1 className="wc-work-detail-title">{work.title}</h1>
            <p className="wc-work-detail-lede">{work.title1}</p>
          </div>
        </div>
      </header>

      <section className="wc-work-detail-meta">
        <div className="wc-container">
          <dl className="wc-work-detail-meta-grid">
            <div>
              <dt>Client</dt>
              <dd>{work.client}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{work.location}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{work.category}</dd>
            </div>
            {work.technology && (
              <div>
                <dt>Technology</dt>
                <dd>{work.technology}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="wc-work-detail-body">
        <div className="wc-container">
          <p className="wc-work-detail-copy">{work.description1}</p>

          {gallery.length > 0 && (
            <div className={`wc-work-detail-gallery cols-${Math.min(gallery.length, 3)}`}>
              {gallery.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
          )}

          <p className="wc-work-detail-copy is-center">{work.description2}</p>

          {work.image5 && (
            <figure className="wc-work-detail-figure">
              <img src={work.image5} alt="" />
            </figure>
          )}

          <div className="wc-work-detail-split">
            {work.image6 && (
              <figure>
                <img src={work.image6} alt="" />
              </figure>
            )}
            <p className="wc-work-detail-copy">{work.description3}</p>
          </div>
        </div>
      </section>

      <nav className="wc-work-detail-nav" aria-label="Adjacent projects">
        <div className="wc-container">
          <div className="wc-work-detail-nav-row">
            {prev ? (
              <Link href={`/works/${prev.slug}`} className="wc-work-detail-nav-link">
                <span>Previous</span>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/works/${next.slug}`} className="wc-work-detail-nav-link is-next">
                <span>Next</span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </nav>

      <EnquireCta buttonLabel="Start a conversation" />
    </>
  );
}
