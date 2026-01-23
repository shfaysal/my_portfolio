import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="page-head" data-reveal>
          <h1>Writing</h1>
          <p>
            Notes on Android architecture, Jetpack Compose, and performance.
            Swap these with your real posts.
          </p>
        </section>

        <section className="list-grid" data-reveal>
          {posts.map((post) => (
            <article key={post.slug} className="card" data-reveal>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="card-meta">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`}>Read article</Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
