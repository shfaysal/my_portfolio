import Link from "next/link";
import ProjectCardMedia from "@/components/ProjectCardMedia";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects().slice(0, 3);

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="page-head" data-reveal>
          <h1>Projects</h1>
          <p>
            A deeper look at Android apps I have shipped. Swap these samples for
            your real work and include Play Store links or screenshots.
          </p>
        </section>

        <section className="list-grid" data-reveal>
          {projects.map((project) => (
            <article key={project.slug} className="card" data-reveal>
              <ProjectCardMedia
                images={project.gallery}
                fallbackImage={project.image}
                title={project.title}
              />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="card-meta">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Link href={`/projects/${encodeURIComponent(project.slug)}`}>
                View case study
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
