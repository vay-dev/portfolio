import "./styles/ProjectsPage.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { deriveCategories, type ProjectCategory } from "./data/projects";
import { useProjects } from "../../hooks/useProjects";
import Seo from "../../components/Seo";
import { absoluteUrl } from "../../lib/site";

const CATEGORIES: ProjectCategory[] = ["All", "Frontend", "Backend", "Mobile", "Fullstack"];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const { projects, loading, error } = useProjects();

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => deriveCategories(p.techStack).includes(active));

  return (
    <div className="projects-page">
      <Seo
        title="Projects"
        description="Browse selected frontend, backend, mobile, and full-stack projects built by Victor Ayeni."
        path="/projects"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vay Dev Projects",
          url: absoluteUrl("/projects"),
          description:
            "Selected software projects by Victor Ayeni across frontend, backend, mobile, and full-stack development.",
        }}
      />
      <Navbar variant="fixed" />

      <main className="projects-page__main">
        <section className="projects-page__hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="projects-page__hero-label">Portfolio</span>
            <h1>My Projects</h1>
            <p>
              Things I&apos;ve built from idea to production. Focused on
              performance, scalability, and cinematic user experiences.
            </p>
          </motion.div>
        </section>

        <motion.div
          className="projects-page__filters"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`projects-page__filter-btn${active === cat ? " projects-page__filter-btn--active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {loading && (
          <div className="projects-page__state">
            <span className="projects-page__spinner" />
            Loading projects…
          </div>
        )}

        {!loading && error && (
          <div className="projects-page__state projects-page__state--error">
            Could not load projects — {error}
          </div>
        )}

        {!loading && !error && (
          <motion.div
            key={active}
            className="projects-page__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="projects-page__empty">No projects in this category yet.</p>
        )}
      </main>

      <footer>
        <div className="projects-page__footer">
          <span>© 2025 VAY. Built with precision.</span>
          <div className="projects-page__footer-links">
            <a href="https://github.com/vay-dev/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ayeni-victor-6a403136b/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:ayeniv69@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <div className="projects-page__scroll-indicator" />
    </div>
  );
}
