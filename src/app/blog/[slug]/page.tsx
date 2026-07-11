import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, formatBlogDate, getBlogBySlug } from "@/data/blogs";
import { EnquireCta } from "@/components/shared/PageBits";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return {
    title: blog?.title ?? "Blog",
    description: blog?.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const gallery = [blog.image2, blog.image3, blog.image4].filter(Boolean) as string[];
  const index = blogs.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <>
      <header className="wc-work-detail-hero">
        <div className="wc-work-detail-hero-media" aria-hidden>
          <img src={blog.image} alt="" />
        </div>
        <div className="wc-work-detail-hero-overlay" aria-hidden />
        <div className="wc-work-detail-hero-ui">
          <div className="wc-container">
            <Link href="/blog" className="wc-work-detail-back">
              ← All posts
            </Link>
            <h1 className="wc-work-detail-title">{blog.title}</h1>
            <p className="wc-work-detail-lede">{blog.excerpt}</p>
          </div>
        </div>
      </header>

      <section className="wc-work-detail-meta">
        <div className="wc-container">
          <dl className="wc-work-detail-meta-grid">
            <div>
              <dt>Published</dt>
              <dd>{formatBlogDate(blog.createdAt)}</dd>
            </div>
            <div>
              <dt>Updated</dt>
              <dd>{formatBlogDate(blog.updatedAt)}</dd>
            </div>
            <div>
              <dt>Read time</dt>
              <dd>{blog.readMinutes} min</dd>
            </div>
            <div>
              <dt>Topics</dt>
              <dd>{blog.tags.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="wc-work-detail-body">
        <div className="wc-container">
          <p className="wc-work-detail-copy">{blog.description1}</p>

          {gallery.length > 0 && (
            <div className={`wc-work-detail-gallery cols-${Math.min(gallery.length, 3)}`}>
              {gallery.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
          )}

          {blog.pullQuote && <blockquote className="wc-blog-pull">{blog.pullQuote}</blockquote>}

          {blog.principles && blog.principles.length > 0 && (
            <div className="wc-blog-principles">
              {blog.principles.map((item, i) => (
                <article key={item.title} className="wc-blog-principle">
                  <span className="wc-blog-principle-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          )}

          <p className="wc-work-detail-copy is-center">{blog.description2}</p>

          {blog.image5 && (
            <figure className="wc-work-detail-figure">
              <img src={blog.image5} alt="" />
            </figure>
          )}

          <div className="wc-work-detail-split">
            {blog.image6 && (
              <figure>
                <img src={blog.image6} alt="" />
              </figure>
            )}
            <p className="wc-work-detail-copy">{blog.description3}</p>
          </div>
        </div>
      </section>

      <nav className="wc-work-detail-nav" aria-label="Adjacent posts">
        <div className="wc-container">
          <div className="wc-work-detail-nav-row">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="wc-work-detail-nav-link">
                <span>Previous</span>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="wc-work-detail-nav-link is-next">
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
