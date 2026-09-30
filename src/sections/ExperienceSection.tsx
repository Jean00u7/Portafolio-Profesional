import { Missing } from "../components/Missing";
import { Section } from "../components/Section";
import { experience } from "../data/experience";
import { visible } from "../lib/utils";

export function ExperienceSection() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="space-y-8 divide-line">
        {visible(experience).map((job) => (
          <li key={job.organization}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-bold">{job.organization}</h3>
              <p className="text-sm text-muted">
                {job.start ? `${job.start} – ` : ""}
                {job.end}
              </p>
            </div>
            <p className="text-sm text-muted">{job.role}</p>
            {!job.start && <Missing label="fecha de inicio" />}
            {job.hidden && <span className="missing">Oculto en producción</span>}
            <ul className="list mt-3 space-y-1 text-[0.95rem]">
              {job.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {job.tools.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Herramientas">
                {job.tools.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
