import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="detail-hero" data-reveal>
          <Link className="back-link" href="/projects">
            ← Back to projects
          </Link>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="detail-meta">
            <span>{project.role}</span>
            <span>{project.year}</span>
          </div>
          <img
            className="detail-image"
            src={project.image}
            alt={`${project.title} app preview`}
          />
        </section>

        <section className="detail-grid" data-reveal>
          <div>
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Stack</h2>
            <div className="chip-row">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <h2>Impact</h2>
            <ul>
              {project.metrics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
