/** Aviso visible solo en local (npm run dev). No aparece en el sitio publicado. */
export function Missing({ label }: { label: string }) {
  if (!import.meta.env.DEV) return null;
  return <span className="missing">Falta completar: {label}</span>;
}
