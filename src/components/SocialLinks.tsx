import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { Missing } from "./Missing";

export function SocialLinks() {
  const { email, linkedin, github } = profile.links;
  return (
    <>
      <ul className="flex gap-2" aria-label="Enlaces">
        {linkedin && (
          <li>
            <a className="icon-btn" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={17} />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a className="icon-btn" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={17} />
            </a>
          </li>
        )}
        {email && (
          <li>
            <a className="icon-btn" href={`mailto:${email}`} aria-label="Correo">
              <Mail size={17} />
            </a>
          </li>
        )}
      </ul>
      {(!email || !linkedin || !github) && <Missing label="correo, LinkedIn y GitHub en src/data/profile.ts" />}
    </>
  );
}
