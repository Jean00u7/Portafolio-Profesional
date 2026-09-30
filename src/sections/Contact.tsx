import { Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/BrandIcons";
import { Missing } from "../components/Missing";
import { Section } from "../components/Section";
import { profile } from "../data/profile";
import { asset } from "../lib/utils";

export function Contact() {
  const { email, linkedin, github } = profile.links;
  return (
    <Section id="contacto" title="Contacto">
      <p>¿Quieres conversar sobre una oportunidad o un proyecto? Escríbeme.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {email && (
          <a href={`mailto:${email}`} className="btn btn-primary">
            <Mail size={16} /> {email}
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn">
            <LinkedInIcon size={16} /> LinkedIn
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
            <GitHubIcon size={16} /> GitHub
          </a>
        )}
        <a href={asset(profile.cv)} download className="btn">
          <Download size={16} /> CV en PDF
        </a>
      </div>
      {!email && <Missing label="correo en src/data/profile.ts" />}
    </Section>
  );
}
