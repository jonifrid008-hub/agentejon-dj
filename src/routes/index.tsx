import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Mic2, Sparkles, Speaker } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgenteJon DJ — Sitio oficial" },
      {
        name: "description",
        content:
          "Sitio oficial de AgenteJon DJ. Conocé el proyecto, escuchá la música y contactame para tus eventos.",
      },
      { property: "og:title", content: "AgenteJon DJ — Sitio oficial" },
      {
        property: "og:description",
        content: "Conocé el proyecto, escuchá la música y contactame.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Cabina de DJ iluminada en penumbra"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

        <div className="section-shell relative z-10 flex flex-col items-center py-32 text-center">
          <img
            src={logo.url}
            alt="Logo de AgenteJon DJ"
            width={320}
            height={224}
            className="w-52 max-w-full object-contain mix-blend-screen sm:w-64 md:w-72"
          />
          <h1 className="mt-10 font-display text-3xl font-semibold tracking-[0.22em] uppercase sm:text-5xl">
            AgenteJon DJ
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            La música es mi forma de conectar con la gente.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/musica"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Escuchar música
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Contactarme
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-28 sm:py-36">
        <div className="section-shell grid gap-14 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="eyebrow">El proyecto</p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
              Un proyecto que recién empieza, construido con intención.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground">
              AgenteJon DJ nace de las ganas de compartir música y crear momentos. Este espacio
              va a ir creciendo con cada set, cada foto y cada persona que se sume al camino.
            </p>
            <Link
              to="/sobre-mi"
              className="mt-8 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            >
              Sobre mí <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-28 sm:py-36">
        <div className="section-shell grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {[
            { to: "/musica", title: "Música", text: "Sets, mixes y plataformas." },
            { to: "/galeria", title: "Galería", text: "Fotos y videos del camino." },
            { to: "/contacto", title: "Contacto", text: "Consultas y fechas." },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 100}>
              <Link
                to={item.to}
                className="group flex h-full flex-col justify-between gap-10 bg-background p-10 transition-colors hover:bg-surface"
              >
                <span className="font-display text-xl">{item.title}</span>
                <span className="flex items-center justify-between text-sm text-muted-foreground">
                  {item.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
