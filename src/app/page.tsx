import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects().slice(0, 3);

  return (
    <div className="page">
      <SiteHeader />

      <main>
        <section className="hero" id="top" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">Android Developer</p>
            <h1>
              Building fast, reliable mobile experiences with Kotlin, Jetpack,
              and clean architecture.
            </h1>
            <p className="lead">
              I design and ship Android apps that scale, from startup MVPs to
              production-grade products. Focused on performance, offline-first
              UX, and maintainable codebases.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View projects
              </a>
              <a className="btn ghost" href="#contact">
                Let&apos;s work together
              </a>
            </div>
            <div className="hero-meta">
              <span>Based in: Bangladesh</span>
              <span>Open to remote roles</span>
            </div>
          </div>
          <div className="hero-card" data-reveal>
            <div className="stat">
              <p className="stat-title">Apps shipped</p>
              <p className="stat-value">12+</p>
            </div>
            <div className="stat">
              <p className="stat-title">Play Store rating</p>
              <p className="stat-value">4.7 avg</p>
            </div>
            <div className="stat">
              <p className="stat-title">Core stack</p>
              <p className="stat-value">Kotlin, Compose</p>
            </div>
            <div className="tag-list">
              <span>Jetpack Compose</span>
              <span>Coroutines</span>
              <span>Room</span>
              <span>Hilt</span>
              <span>Retrofit</span>
              <span>Firebase</span>
            </div>
          </div>
        </section>

        <section className="projects" id="projects" data-reveal>
          <div className="section-head">
            <h2>Selected projects</h2>
            <p>
              Replace these with your top Android apps. Include measurable
              impact, Play Store links, and screenshots.
            </p>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.slug} className="card" data-reveal>
                <img
                  className="card-image"
                  src={project.image}
                  alt={`${project.title} app preview`}
                  loading="lazy"
                />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="card-meta">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={`/projects/${project.slug}`}>Case study</a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills" id="skills" data-reveal>
          <div className="section-head">
            <h2>Core skills</h2>
            <p>Mobile-first product work with strong backend collaboration.</p>
          </div>
          <div className="pill-grid">
            <span>Android Studio</span>
            <span>Kotlin</span>
            <span>Jetpack Compose</span>
            <span>MVVM + Clean Architecture</span>
            <span>Coroutines + Flow</span>
            <span>Room + DataStore</span>
            <span>Firebase + Crashlytics</span>
            <span>CI/CD (GitHub Actions)</span>
          </div>
        </section>

        <section className="about" id="about" data-reveal>
          <div className="section-head">
            <h2>About</h2>
            <p>
              I am an Android developer focused on performance, accessibility,
              and clean architecture. I enjoy turning product goals into smooth,
              reliable experiences and working closely with design and backend
              teams.
            </p>
          </div>
          <div className="timeline">
            <div>
              <h4>2024 - Present</h4>
              <p>Senior Android Developer, shipping fintech features.</p>
            </div>
            <div>
              <h4>2022 - 2024</h4>
              <p>Android Engineer, leading the migration to Jetpack Compose.</p>
            </div>
            <div>
              <h4>2020 - 2022</h4>
              <p>Android Developer, built offline-first retail tools.</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" data-reveal>
          <div className="section-head">
            <h2>Let&apos;s build something great</h2>
            <p>
              Share your idea or role. I reply within 48 hours. Replace the
              links below with your real contact info.
            </p>
          </div>
          <div className="contact-layout">
            <ContactForm />
            <div className="contact-grid">
              <a href="mailto:sazzadfaysal671@gmail.com">
                sazzadfaysal671@gmail.com
              </a>
              <a
                href="https://github.com/shfaysal"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sazzadfoysal/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="tel:+8801615980897">WhatsApp: 01615980897</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
