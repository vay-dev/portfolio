import { useEffect, useState } from "react";
import type { Project } from "../pages/projects/data/projects";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then((r) => {
        if (!r.ok) throw new Error(`Server returned ${r.status}`);
        return r.json();
      })
      .then((data) => setProjects(data.data ?? []))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}
