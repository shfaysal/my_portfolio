import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug, getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

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
          <div className="detail-stats">
            {project.metrics.map((item) => (
              <span key={item} className="stat-chip">
                {item}
              </span>
            ))}
          </div>
          <ProjectGallery
            images={project.gallery}
            fallbackImage={project.image}
            title={project.title}
          />
        </section>

        <section className="detail-grid" data-reveal>
          <div>
            <h2>Description</h2>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
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
          </div>
        </section>

        <section className="detail-gallery-grid" data-reveal>
          <h2>Screens</h2>
          <div className="gallery-grid">
            {(project.gallery.length > 0 ? project.gallery : [project.image]).map(
              (image) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} screen`}
                />
              )
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
