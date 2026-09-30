import type { ProjectStatus, StudyStatus } from "../types";

const MAP: Record<ProjectStatus | StudyStatus, { label: string; cls: string }> = {
  finalizado: { label: "Finalizado", cls: "status-done" },
  "en-desarrollo": { label: "En desarrollo", cls: "status-progress" },
  "en-curso": { label: "En curso", cls: "status-progress" },
  planificado: { label: "Planificado", cls: "status-planned" },
};

export function StatusBadge({ status }: { status: ProjectStatus | StudyStatus }) {
  const { label, cls } = MAP[status];
  return <span className={`status ${cls}`}>{label}</span>;
}
