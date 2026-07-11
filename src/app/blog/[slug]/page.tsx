import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, formatBlogDate, getBlogBySlug } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return { title: blog?.title ?? "Blog" };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const index = blogs.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;
  const recent = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <section className="wc-section">
      <div className="wc-container grid gap-12 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <h1 className="mb-6 text-3xl font-light md:text-4xl">{blog.title}</h1>
          <div className="mb-8 flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Author</p>
              <p>Woodenclouds</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Published</p>
              <p>{formatBlogDate(blog.createdAt)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Last Updated</p>
              <p>{formatBlogDate(blog.updatedAt)}</p>
            </div>
          </div>
          <img src={blog.image} alt={blog.title} className="mb-8 w-full rounded-xl" />
          <div
            className="prose prose-neutral max-w-none text-sm font-light leading-relaxed text-ink/80"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line-dark px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 flex justify-between gap-6 border-t border-line-dark pt-8">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="max-w-[45%]">
                <span className="text-xs uppercase tracking-wider text-muted">Previous</span>
                <h6 className="mt-1 text-sm font-light">{prev.title}</h6>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="max-w-[45%] text-right">
                <span className="text-xs uppercase tracking-wider text-muted">Next</span>
                <h6 className="mt-1 text-sm font-light">{next.title}</h6>
              </Link>
            )}
          </div>
        </article>
        <aside className="lg:col-span-3 lg:col-start-10">
          <h5 className="mb-6 text-lg font-light">Recent Posts</h5>
          <div className="space-y-6">
            {recent.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="block">
                <img src={item.image} alt={item.title} className="mb-3 w-full rounded-xl" />
                <h6 className="text-sm font-light">{item.title}</h6>
                <span className="mt-1 block text-xs text-muted">
                  {formatBlogDate(item.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
