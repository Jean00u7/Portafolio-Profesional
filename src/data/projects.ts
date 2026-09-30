import type { Project } from "../types";

// features: solo lo que ya funciona. next: lo que sigue.
// repo / demo vacíos = no se muestra el enlace.

export const projects: Project[] = [
  {
    name: "CLDV Nexus",
    status: "en-desarrollo",
    summary: "App de gestión y soporte TI para un colegio: registro y seguimiento de incidencias.",
    features: ["Instalable como PWA.", "Registro rápido de incidencias.", "Sincronización opcional con Supabase."],
    next: "Roles, código QR por equipo y reportes.",
    stack: ["JavaScript", "PWA", "Supabase"],
    repo: "",
  },
  {
    name: "Gestor de Soporte TI",
    status: "en-desarrollo",
    summary: "Aplicación web local para registrar solicitudes de soporte a partir de la planilla Excel del área.",
    features: [],
    next: "Ingreso por usuario, importación de Excel y exportación.",
    stack: ["PHP", "MySQL"],
    repo: "",
  },
  {
    name: "Infraestructura TI del colegio",
    status: "en-desarrollo",
    summary: "Operación y mejora de la red, equipos y plataformas del establecimiento.",
    features: ["Red: firewall, switches y WiFi.", "Cuentas en Google Workspace y Microsoft 365."],
    stack: ["MikroTik", "Windows", "Google Admin"],
  },
  {
    name: "Automatización de procesos",
    status: "planificado",
    summary: "Scripts para tareas repetitivas del área TI.",
    features: [],
    next: "Alta y baja de cuentas y reportes automáticos.",
    stack: ["Python"],
  },
];
