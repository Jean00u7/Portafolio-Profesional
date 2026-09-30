import { Missing } from "../components/Missing";
import { Section } from "../components/Section";
import { StatusBadge } from "../components/StatusBadge";
import { certifications, education } from "../data/education";

export function EducationSection() {
  return (
    <Section id="formacion" title="Formación">
      <ul className="space-y-5">
        {education.map((e) => (
          <li key={e.degree} className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="font-bold">{e.degree}</h3>
              {e.institution ? <p className="text-sm text-muted">{e.institution}</p> : <Missing label="institución" />}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              {e.period}
              <StatusBadge status={e.status} />
            </div>
          </li>
        ))}
      </ul>
      {certifications.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold">Cursos y certificaciones</h3>
          <ul className="list mt-2 space-y-1">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
