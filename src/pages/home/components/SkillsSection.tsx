import "./../styles/SkillsSection.scss";
import FrontendBranches from "./FrontendBranches";
import BackendBranches from "./BackendBranches";
import PaystackBranches from "./PaystackBranches";
import LangCarousel from "./LangCarousel";
import { Code2, Database, Server, CreditCard } from "lucide-react";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiSqlite,
  SiRedis,
  SiFirebase,
  SiNodedotjs,
  SiDjango,
} from "@icons-pack/react-simple-icons";

const PaystackIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 7h16v2.5H4z" fill="#00C3F7" />
    <path d="M4 11h16v2.5H4z" fill="#00C3F7" opacity="0.7" />
    <path d="M4 15h10v2.5H4z" fill="#00C3F7" opacity="0.4" />
  </svg>
);

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

        {/* DATABASES CARD — concentric rings with icons on ring borders */}
        <div className="skills-section__card skills-section__card--databases">

          {/* RINGS — same CSS ring technique as about section, scaled to card */}
          <div className="skills-section__db-rings">
            <div className="skills-section__db-ring skills-section__db-ring--1" />
            <div className="skills-section__db-ring skills-section__db-ring--2" />
            <div className="skills-section__db-ring skills-section__db-ring--3" />
            <div className="skills-section__db-ring skills-section__db-ring--4" />
            <div className="skills-section__db-ring skills-section__db-ring--5" />
          </div>

          {/* CENTER CORE */}
          <div className="skills-section__db-core">
            <Database size={36} strokeWidth={1.2} />
          </div>

          {/* RING ICONS — one per ring, positioned on the ring border */}
          <div className="skills-section__db-icon skills-section__db-icon--1" title="PostgreSQL">
            <SiPostgresql size={28} color="#336791" />
          </div>
          <div className="skills-section__db-icon skills-section__db-icon--2" title="Prisma">
            <SiPrisma size={28} color="#2D3748" />
          </div>
          <div className="skills-section__db-icon skills-section__db-icon--3" title="SQLite">
            <SiSqlite size={28} color="#003B57" />
          </div>
          <div className="skills-section__db-icon skills-section__db-icon--4" title="Redis">
            <SiRedis size={28} color="#DC382D" />
          </div>
          <div className="skills-section__db-icon skills-section__db-icon--5" title="Firebase">
            <SiFirebase size={28} color="#FFCA28" />
          </div>

          <div className="skills-section__card-label">
            <h3>Databases</h3>
            <p>PostgreSQL, Prisma, SQLite, Redis, Firebase</p>
            <em>Managing structured &amp; unstructured data with reliability.</em>
          </div>
        </div>

        {/* BACKEND CARD — horizontal pipeline: Node.js ←— Server core —→ Django */}
        <div className="skills-section__card skills-section__card--backend">
          <BackendBranches />

          {/* LEFT NODE — Node.js */}
          <div
            className="skills-section__node skills-section__node--pipeline-left"
            title="Node.js"
          >
            <SiNodedotjs size={32} color="#339933" />
          </div>

          {/* CORE */}
          <div className="skills-section__core skills-section__core--backend">
            <Server size={36} strokeWidth={1.2} />
          </div>

          {/* RIGHT NODE — Django */}
          <div
            className="skills-section__node skills-section__node--pipeline-right"
            title="Django"
          >
            <SiDjango size={32} color="#092E20" />
          </div>

          <div className="skills-section__card-label">
            <h3>Backend</h3>
            <p>Node.js, Django</p>
            <em>Creating APIs and server-side logic that scale.</em>
          </div>
        </div>

        {/* PAYMENTS CARD — single left node (Paystack) → core */}
        <div className="skills-section__card skills-section__card--backend">
          <PaystackBranches />

          {/* LEFT NODE — Paystack */}
          <div
            className="skills-section__node skills-section__node--pipeline-left skills-section__node--paystack"
            title="Paystack"
          >
            <PaystackIcon size={32} />
          </div>

          {/* CORE */}
          <div className="skills-section__core skills-section__core--backend">
            <CreditCard size={36} strokeWidth={1.2} />
          </div>

          <div className="skills-section__card-label">
            <h3>Payments</h3>
            <p>Paystack</p>
            <em>Seamless checkout and payment integration.</em>
          </div>
        </div>

      </div>

      <LangCarousel />
    </section>
  );
};

export default SkillsSection;
