import { Header } from "./components/Header";
import { profile } from "./data/profile";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { Hero } from "./sections/Hero";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="wrap">
        <Hero />
        <About />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      <footer className="wrap border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.fullName}
      </footer>
    </>
  );
}
