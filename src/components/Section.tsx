import type { ReactNode } from "react";

/** Sección en dos columnas: título a la izquierda, contenido a la derecha. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-t`}
      className="grid gap-4 border-t border-line py-10 sm:grid-cols-[9rem_1fr] sm:gap-10"
    >
      <h2 id={`${id}-t`} className="text-sm font-bold text-accent sm:pt-0.5">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
