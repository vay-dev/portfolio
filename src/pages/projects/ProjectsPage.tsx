import "./styles/ProjectsPage.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { projects, type ProjectCategory } from "./data/projects";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Mobile", "Fullstack"];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <div className="projects-page">
      {/* Nav */}
      <Navbar variant="fixed" />

      {/* Main content */}
      <main className="projects-page__main">
        {/* Hero */}
        <section className="projects-page__hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="projects-page__hero-label">Portfolio</span>
            <h1>My Projects</h1>
            <p>
              Things I've built — from idea to production. Focused on
              performance, scalability, and cinematic user experiences.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <motion.div
          className="projects-page__filters"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`projects-page__filter-btn${active === cat ? " projects-page__filter-btn--active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
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

        {filtered.length === 0 && (
          <p className="projects-page__empty">No projects in this category yet.</p>
        )}
      </main>

      {/* Footer */}
      <footer>
        <div className="projects-page__footer">
          <span>© 2025 VAY. Built with precision.</span>
          <div className="projects-page__footer-links">
            {["GitHub", "LinkedIn", "Twitter"].map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Cinematic scroll indicator */}
      <div className="projects-page__scroll-indicator" />
    </div>
  );
}
