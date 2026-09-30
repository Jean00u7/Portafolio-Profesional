import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <a href="#inicio" className="font-bold">
          {profile.name}
        </a>
        <div className="flex items-center gap-5">
          <nav aria-label="Principal" className="hidden sm:block">
            <ul className="flex gap-5 text-sm text-muted">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
