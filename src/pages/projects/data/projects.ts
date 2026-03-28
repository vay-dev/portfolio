// Project shape returned by GET /api/projects
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string | null;
  techStack: string[];
  status: "live" | "in-development" | "archived";
  featured: boolean;
  githubUrl?: string | null;
  demoUrl?: string | null;
  screenshots: string[];
  role?: string | null;
  displayOrder: number;
  createdAt: string;
}

export type ProjectCategory = "All" | "Frontend" | "Backend" | "Mobile" | "Fullstack";

// Derive a category list from techStack so the filter still works without
// a category field on the backend model.
const FRONTEND_TECH  = ["react", "next.js", "angular", "vue", "svelte", "bootstrap", "tailwind", "scss", "html", "css"];
const BACKEND_TECH   = ["node.js", "django", "express", "fastapi", "laravel", "rails", "graphql", "prisma", "postgresql", "mysql", "redis", "sqlite"];
const MOBILE_TECH    = ["flutter", "react native", "dart", "swift", "kotlin", "expo"];

export function deriveCategories(techStack: string[]): ProjectCategory[] {
  const lower = techStack.map((t) => t.toLowerCase());
  const cats = new Set<ProjectCategory>();

  const hasFrontend = lower.some((t) => FRONTEND_TECH.some((f) => t.includes(f)));
  const hasBackend  = lower.some((t) => BACKEND_TECH.some((b)  => t.includes(b)));
  const hasMobile   = lower.some((t) => MOBILE_TECH.some((m)   => t.includes(m)));

  if (hasFrontend) cats.add("Frontend");
  if (hasBackend)  cats.add("Backend");
  if (hasMobile)   cats.add("Mobile");
  if (hasFrontend && hasBackend) cats.add("Fullstack");
  if (hasMobile   && hasBackend) cats.add("Fullstack");

  if (cats.size === 0) cats.add("Frontend"); // fallback

  return Array.from(cats);
}
