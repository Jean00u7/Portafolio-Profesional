import type { Education } from "../types";

export const education: Education[] = [
  { degree: "Ingeniería en Informática", institution: "CFT Inacap", period: "En curso", status: "en-curso" },
  { degree: "Técnico Analista Programador", institution: "CFT Inacap", period: "2020 – 2024", status: "finalizado" },
  { degree: "Enseñanza Media", institution: "Liceo Bicentenario Óscar Castro Zúñiga", period: "2013 – 2019", status: "finalizado" },
];

// Cursos y certificaciones. Vacío = no se muestra.
// Ej: "MTCNA, MikroTik (2026)"
export const certifications: string[] = [];
