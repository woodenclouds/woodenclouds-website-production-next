import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquireCta } from "@/components/shared/PageBits";
import {
  fetchAllPosts,
  fetchPostBySlug,
  formatBlogDate,
} from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchPostBySlug(slug);
  if (!blog) return { title: "Blog" };
  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.cover ? [{ url: blog.cover }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = await fetchPostBySlug(slug);
  if (!blog) notFound();

  const posts = await fetchAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;
  const related = posts.filter((p) => p.slug !== blog.slug).slice(0, 3);
  const topics = (blog.tags.length ? blog.tags : [blog.category]).filter(Boolean);

  return (
    <article className="wc-blog-article bg-paper text-ink">
      <header className="wc-blog-article-hero">
        <div className="wc-blog-article-hero-media" aria-hidden>
          <img src={blog.cover} alt="" />
        </div>
        <div className="wc-blog-article-hero-shade" aria-hidden />
        <div className="wc-blog-article-hero-ui">
          <div className="wc-container">
            <Link href="/blog" className="wc-blog-article-back">
              ← All essays
            </Link>
            <p className="wc-blog-article-kicker">
              {topics.join(" · ")}
              {blog.date ? ` · ${formatBlogDate(blog.date)}` : ""}
              {blog.readTime ? ` · ${blog.readTime}` : ""}
            </p>
            <h1 className="wc-blog-article-title">{blog.title}</h1>
            {blog.excerpt ? (
              <p className="wc-blog-article-lede">{blog.excerpt}</p>
            ) : null}
          </div>
        </div>
      </header>

      <section className="wc-blog-article-body">
        <div className="wc-container">
          <div
            className="wc-blog-prose"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="wc-blog-article-related">
          <div className="wc-container">
            <p className="wc-blog-kicker">Keep reading</p>
            <h2 className="wc-blog-index-title">More from the studio</h2>
            <ul className="wc-blog-article-related-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="wc-blog-article-related-card">
                    <span className="wc-blog-article-related-meta">
                      {formatBlogDate(item.date)} · {item.readTime}
                    </span>
                    <strong>{item.title}</strong>
                    <span>{item.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <nav className="wc-blog-article-nav" aria-label="Adjacent posts">
        <div className="wc-container">
          <div className="wc-blog-article-nav-row">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="wc-blog-article-nav-link">
                <span>Previous</span>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="wc-blog-article-nav-link is-next">
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
    </article>
  );
}
