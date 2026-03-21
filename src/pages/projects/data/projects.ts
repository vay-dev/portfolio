export type ProjectCategory = "All" | "Frontend" | "Backend" | "Mobile" | "Fullstack";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  category: ProjectCategory[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  thumbnail?: string;
  status: "live" | "in-development" | "archived";
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "pendu",
    title: "Pendu",
    shortDescription:
      "WhatsApp-level real-time chat app for Android & iOS. Offline-first SQLite, Socket.IO, WebRTC calls, group moderation, JWT auth with refresh locking.",
    techStack: ["Flutter", "Socket.IO", "Node.js", "SQLite", "WebRTC"],
    category: ["Mobile", "Fullstack"],
    githubUrl: "https://github.com/vay-dev",
    featured: true,
    status: "live",
  },
  {
    id: "2",
    slug: "bistropulse",
    title: "BistroPulse",
    shortDescription:
      "Restaurant management platform with navigation sidebar, Angular Router, accordion menus, and a polished dark-themed design system.",
    techStack: ["Angular", "TypeScript", "SCSS"],
    category: ["Frontend"],
    githubUrl: "https://github.com/vay-dev",
    status: "live",
  },
  {
    id: "3",
    slug: "stockpilot",
    title: "StockPilot",
    shortDescription:
      "Mobile-first inventory tracker for Nigerian SMEs — product tracking, sales reporting, cash logging, offline-first architecture.",
    techStack: ["React", "Node.js", "MySQL"],
    category: ["Fullstack"],
    githubUrl: "https://github.com/vay-dev",
    status: "live",
  },
  {
    id: "4",
    slug: "swift-wallet",
    title: "Swift Wallet",
    shortDescription:
      "Cross-platform digital wallet with secure JWT auth, smart Dio interceptor for silent token refresh, Material 3 dashboard, and real-time balance management.",
    techStack: ["Flutter", "Django", "PostgreSQL", "Riverpod"],
    category: ["Mobile", "Fullstack"],
    githubUrl: "https://github.com/vay-dev",
    featured: true,
    status: "in-development",
  },
  {
    id: "5",
    slug: "ali-sport",
    title: "Ali Sport Media",
    shortDescription:
      "Full-featured sports competition admin dashboard with real-time match management via WebSocket, live score updates, and role-based access control.",
    techStack: ["Next.js", "TypeScript", "TanStack Query", "ShadCN UI"],
    category: ["Frontend"],
    demoUrl: "https://sports.allimediahub.com",
    status: "live",
  },
  {
    id: "6",
    slug: "ijaw-voices",
    title: "Ijaw Voices",
    shortDescription:
      "Duolingo-style language learning app for the Ijaw language. Structured courses, progress tracking, image-based exercises, deployed on AWS EC2.",
    techStack: ["Angular", "Django REST Framework", "AWS EC2"],
    category: ["Fullstack"],
    status: "in-development",
  },
];
