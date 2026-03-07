import "./../styles/SkillsSection.scss";
import FrontendBranches from "./FrontendBranches";
import { Code2 } from "lucide-react";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__header">
        <span className="skills-section__pill">Skills &amp; Tech Stack</span>
        <h2 className="skills-section__title">MY TECH TOOLBOX</h2>
      </div>

      <div className="skills-section__grid">

        {/* FRONTEND CARD — full branching treatment */}
        <div className="skills-section__card skills-section__card--frontend">
          {/* SVG branch lines */}
          <FrontendBranches />

          {/* TOP ROW NODES */}
          <div className="skills-section__node skills-section__node--top-left skills-section__node--angular" title="Angular">
            <SiAngular size={36} color="#DD0031" />
          </div>
          <div className="skills-section__node skills-section__node--top-center" title="React">
            <SiReact size={36} color="#61DAFB" />
          </div>
          <div className="skills-section__node skills-section__node--top-right" title="Next.js">
            <SiNextdotjs size={36} color="#ffffff" />
          </div>

          {/* SIDE NODES */}
          <div className="skills-section__node skills-section__node--mid-left" title="Bootstrap 5">
            <SiBootstrap size={36} color="#7952B3" />
          </div>
          <div className="skills-section__node skills-section__node--mid-right" title="Tailwind CSS">
            <SiTailwindcss size={36} color="#06B6D4" />
          </div>

          {/* CORE */}
          <div className="skills-section__core">
            <Code2 size={40} strokeWidth={1.2} />
          </div>

          {/* CARD LABEL */}
          <div className="skills-section__card-label">
            <h3>Frontend</h3>
            <p>Angular, React, Next.js, Bootstrap 5, TypeScript</p>
            <em>Building sleek, responsive, and accessible user interfaces.</em>
          </div>
        </div>

        {/* DATABASES CARD — placeholder */}
        <div className="skills-section__card skills-section__card--placeholder">
          <div className="skills-section__card-label">
            <h3>Databases</h3>
            <p>PostgreSQL</p>
            <em>Managing structured data with reliability.</em>
          </div>
        </div>

        {/* BACKEND CARD — placeholder */}
        <div className="skills-section__card skills-section__card--placeholder">
          <div className="skills-section__card-label">
            <h3>Backend</h3>
            <p>Django, Node.js</p>
            <em>Creating APIs and server-side logic that scale.</em>
          </div>
        </div>

        {/* AUTHENTICATION CARD — placeholder */}
        <div className="skills-section__card skills-section__card--placeholder">
          <div className="skills-section__card-label">
            <h3>Authentication</h3>
            <p>JWT</p>
            <em>Secure login &amp; role-based access made simple.</em>
          </div>
        </div>

        {/* PAYMENTS CARD — placeholder */}
        <div className="skills-section__card skills-section__card--placeholder">
          <div className="skills-section__card-label">
            <h3>Payments</h3>
            <p>Stripe, Paypal</p>
            <em>Seamless checkout and payment integration.</em>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
