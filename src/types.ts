export type ProjectStatus = "finalizado" | "en-desarrollo" | "planificado";
export type StudyStatus = "finalizado" | "en-curso";

export interface Project {
  name: string;
  status: ProjectStatus;
  summary: string;
  /** Solo lo que ya funciona (máx. 3 recomendado) */
  features: string[];
  /** Lo siguiente, en una línea. Opcional. */
  next?: string;
  stack: string[];
  repo?: string;
  demo?: string;
  /** true = no se muestra en el sitio publicado */
  hidden?: boolean;
}

export interface Experience {
  organization: string;
  role: string;
  /** Vacío = pendiente de completar */
  start: string;
  end: string;
  tasks: string[];
  tools: string[];
  hidden?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: StudyStatus;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
