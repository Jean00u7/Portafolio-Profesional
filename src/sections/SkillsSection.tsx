import { Section } from "../components/Section";
import { skills } from "../data/skills";

export function SkillsSection() {
  return (
    <Section id="habilidades" title="Habilidades">
      <dl className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.label}>
            <dt className="text-sm font-semibold text-muted">{g.label}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
