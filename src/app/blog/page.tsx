import type { Metadata } from "next";
import Link from "next/link";
import { blogs, formatBlogDate } from "@/data/blogs";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader subtitle="Our Blog" title="Blog" />
      <section className="wc-section pt-0">
        <div className="wc-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.slug} className="group">
              <Link href={`/blog/${blog.slug}`}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted">
                {formatBlogDate(blog.createdAt)}
              </p>
              <h5 className="mt-2 text-xl font-light">
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h5>
              <p className="mt-2 text-sm font-light text-muted">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 inline-block text-sm text-ink/70 hover:text-ink"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
