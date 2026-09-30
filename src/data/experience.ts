import type { Experience } from "../types";

// De la más reciente a la más antigua.

export const experience: Experience[] = [
  {
    organization: "Colegio Leonardo da Vinci",
    role: "Soporte TI",
    start: "Marzo de 2026",
    end: "Actualidad",
    tasks: [
      "Soporte a docentes y funcionarios: hardware, software y conectividad.",
      "Mantención de computadores e impresoras.",
      "Administración de Google Workspace, Microsoft 365 y red (firewall, switches, WiFi).",
    ],
    tools: ["Google Admin", "Microsoft 365", "Windows", "MikroTik"],
  },
  {
    organization: "4BIT Limitada",
    role: "Práctica profesional",
    start: "Sep 2024",
    end: "Nov 2024",
    tasks: [
      "Levantamiento de requerimientos para un sistema informático.",
      "Definición de requisitos funcionales y no funcionales.",
    ],
    tools: ["TypeScript", "Javascript", "Node.js", "SQLServer", "Git"],
  },
  {
    // Figura en el CV. Oculto por no ser del área TI. Cambia a false para mostrarlo.
    organization: "Comercializadora Martínez y Duery Ltda.",
    role: "Auxiliar de aseo",
    start: "Jul 2025",
    end: "",
    tasks: ["Limpieza e higiene de instalaciones con normas de seguridad."],
    tools: [],
    hidden: false,
  },
];
