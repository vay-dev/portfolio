import "./../styles/AboutSection.scss";
import TechBranches from "./TechBranches";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
// Core center icon — kept as lucide (generic </> symbol, not a brand)
import { Code2 } from "lucide-react";
// Official brand SVG icons from simple-icons — pixel-perfect brand marks
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPostgresql,
  SiDjango,
  SiFlutter,
} from "@icons-pack/react-simple-icons";

const AboutSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* SECTION ACTION BUTTONS (PLACEHOLDER) */}

      <div className="about-section__content">
        {/* LEFT: LABEL + TITLE + COPY + CTA */}
        <article className="about-section__left">
          <span className="about-section__pill" data-reveal>About Me</span>

          <h2 className="about-section__title" data-reveal>
            EVERYTHING ABOUT <span>VICTOR</span>
          </h2>

          <p data-reveal>
            Hi, <em>Victor Ayeni</em> a passionate <em>Full Stack Developer</em>{" "}
            who loves crafting modern web applications that are both beautiful
            on the surface and powerful under the hood.
          </p>

          <p data-reveal>
            With expertise in{" "}
            <strong>
              React, Next.js, Angular, Node.js, Django PostgreSQL, and Flutter
            </strong>
            , I bring together intuitive design and efficient functionality. My
            experience with authentication systems, payment gateways, and cloud
            deployment makes me confident in delivering production-ready
            solutions for real-world clients.
          </p>

          <p data-reveal>
            Whether it&apos;s a <em>Startup, MVP</em> or a scalable enterprise
            application, I focus on writing clean, maintainable code and
            creating experiences that users love.
          </p>

          <button className="about-section__cta" data-reveal type="button">
            MORE ABOUT ME -&gt;
          </button>
        </article>

        {/* RIGHT: TECH ORBIT PANEL */}
        <aside
          className="about-section__right"
          aria-label="Tech stack network diagram"
        >
          {/* CSS DIV RINGS — box-shadow handles inset+outer depth, container repositions at breakpoints */}
          <div className="about-section__rings">
            <div className="about-section__ring about-section__ring--1" />
            <div className="about-section__ring about-section__ring--2" />
            <div className="about-section__ring about-section__ring--3" />
            <div className="about-section__ring about-section__ring--4" />
            <div className="about-section__ring about-section__ring--5" />
          </div>

          {/* ANIMATED BRANCH LINES SVG — drawn on top of rings, behind nodes */}
          <TechBranches />

          {/* TECH NODE CARDS — official brand icons, positions match TechBranches.tsx path endpoints */}

          {/* React — top-left | color prop sets SVG fill for hover reveal, CSS grayscale handles default */}
          <div
            className="about-section__node about-section__node--top-left"
            title="React"
          >
            <SiReact size={42} color="#61DAFB" />
          </div>

          {/* Angular — top-right | gradient glow hover handled via --angular modifier class */}
          <div
            className="about-section__node about-section__node--top-right about-section__node--angular"
            title="Angular"
          >
            <SiAngular size={42} color="#DD0031" />
          </div>

          {/* Node.js — mid-right */}
          <div
            className="about-section__node about-section__node--mid-right"
            title="Node.js"
          >
            <SiNodedotjs size={42} color="#339933" />
          </div>

          {/* PostgreSQL — bottom-right */}
          <div
            className="about-section__node about-section__node--bottom-right"
            title="PostgreSQL"
          >
            <SiPostgresql size={42} color="#336791" />
          </div>

          {/* Flutter — bottom-center, sits between Django and PostgreSQL, taller position */}
          <div
            className="about-section__node about-section__node--bottom-center"
            title="Flutter"
          >
            <SiFlutter size={42} color="#54C5F8" />
          </div>

          {/* Django — bottom-left */}
          <div
            className="about-section__node about-section__node--bottom-left"
            title="Django"
          >
            <SiDjango size={42} color="#44B78B" />
          </div>

          {/* CORE CARD — center piece, larger than nodes */}
          <div className="about-section__core">
            <Code2 size={52} strokeWidth={1.2} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
