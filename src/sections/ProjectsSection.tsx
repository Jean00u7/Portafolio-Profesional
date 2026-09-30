import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "../components/BrandIcons";
import { Section } from "../components/Section";
import { StatusBadge } from "../components/StatusBadge";
import { projects } from "../data/projects";
import { visible } from "../lib/utils";

export function ProjectsSection() {
  return (
    <Section id="proyectos" title="Proyectos">
      <div className="grid gap-4 lg:grid-cols-2">
        {visible(projects).map((p) => (
          <article key={p.name} className="card flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold leading-snug">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-2 text-[0.95rem] text-muted">{p.summary}</p>

            {p.features.length > 0 && (
              <ul className="list mt-3 space-y-1 text-[0.92rem]">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
            {p.next && (
              <p className="mt-3 text-[0.92rem]">
                <span className="font-semibold">Próximo: </span>
                <span className="text-muted">{p.next}</span>
              </p>
            )}

            <div className="mt-auto pt-4">
              <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
                {p.stack.map((s) => (
                  <li key={s} className="chip text-[0.78rem]">
                    {s}
                  </li>
                ))}
              </ul>
              {(p.repo || p.demo) && (
                <div className="mt-4 flex gap-4 text-sm font-semibold text-accent">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                      <GitHubIcon size={15} /> Código
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
