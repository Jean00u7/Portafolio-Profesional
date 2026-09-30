import { Section } from "../components/Section";
import { profile } from "../data/profile";

export function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="max-w-[62ch] space-y-4">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="text-muted">
          <span className="font-semibold text-ink">Idiomas: </span>
          {profile.languages}
        </p>
      </div>
    </Section>
  );
}
