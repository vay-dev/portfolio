import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`project-card${project.featured ? " project-card--featured" : ""}`}
    >
      {/* Thumbnail */}
      <div className="project-card__thumb">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} />
        ) : (
          <span className="project-card__monogram">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}

        {/* Status badge */}
        <div className={`project-card__status project-card__status--${project.status === "live" ? "live" : "dev"}`}>
          <span className="dot" />
          {project.status === "live" ? "Live" : "In Dev"}
        </div>

        {/* Featured star */}
        {project.featured && (
          <div className="project-card__star">
            <Star size={13} fill="currentColor" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body" style={{ transform: "translateZ(20px)" }}>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        {/* Tech stack */}
        <div className="project-card__stack">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--demo"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--github"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <span className="project-card__btn project-card__btn--coming">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
