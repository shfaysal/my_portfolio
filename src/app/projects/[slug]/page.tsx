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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const gallery = project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="detail-hero" data-reveal>
          <ProjectGallery
            images={gallery}
            fallbackImage={project.image}
            title={project.title}
          />
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="detail-body">
            <h2>Description</h2>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
          <div className="detail-stats">
            {project.metrics.map((item) => (
              <span key={item} className="stat-chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="detail-grid" data-reveal>
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

      </main>
      <SiteFooter />
    </div>
  );
}
