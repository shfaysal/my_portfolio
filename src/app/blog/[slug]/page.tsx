import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="detail-hero" data-reveal>
          <Link className="back-link" href="/blog">
            ← Back to writing
          </Link>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <div className="detail-meta">
            <span>{post.date}</span>
            <span>{post.tags.join(" · ")}</span>
          </div>
        </section>
        <section className="detail-body" data-reveal>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
