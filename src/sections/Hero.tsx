import { Download, MapPin } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";
import { profile } from "../data/profile";
import { asset } from "../lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="fade-in grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_auto] md:gap-14">
      <div className="order-2 md:order-1">
        <p className="text-sm text-muted">Hola, soy</p>
        <h1 className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 font-semibold text-accent">{profile.title}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} aria-hidden="true" /> {profile.location}
        </p>

        <p className="mt-6 max-w-[52ch]">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href={asset(profile.cv)} download className="btn">
            <Download size={16} /> Descargar CV
          </a>
          <SocialLinks />
        </div>
      </div>

      {profile.photo && (
        <div className="relative order-1 w-36 justify-self-start sm:w-44 md:order-2 md:w-56 md:justify-self-end">
          {/* Bloque azul desplazado detrás de la foto */}
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-accent" />
          <img
            src={asset(profile.photo)}
            alt={`Fotografía de ${profile.fullName}`}
            width={238}
            height={238}
            className="relative aspect-square w-full rounded-2xl border-2 border-accent object-cover"
          />
        </div>
      )}
    </section>
  );
}
