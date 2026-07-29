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

        <div className="section-shell relative z-10 flex flex-col items-center py-40 text-center">
          <p className="eyebrow">Sitio oficial</p>
          <h1 className="mt-8 font-display text-4xl font-semibold tracking-[0.22em] uppercase sm:text-6xl">
            AgenteJon DJ
          </h1>
          <p className="mt-8 max-w-md text-base text-muted-foreground sm:text-lg">
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
        <div className="section-shell">
          <Reveal>
            <p className="eyebrow">En qué trabajo</p>
            <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
              Música pensada para cada momento.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Headphones,
                title: "Sets en vivo",
                text: "Selección y mezcla en tiempo real, leyendo lo que pide la pista.",
              },
              {
                icon: Speaker,
                title: "Fiestas y eventos",
                text: "Musicalización adaptada al formato y a la duración del evento.",
              },
              {
                icon: Mic2,
                title: "Mixes propios",
                text: "Sesiones grabadas para escuchar cuando quieras.",
              },
              {
                icon: Sparkles,
                title: "Colaboraciones",
                text: "Abierto a proyectos, b2b y propuestas nuevas.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="flex h-full flex-col gap-6 bg-background p-10">
                  <s.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-28 sm:py-36">
        <div className="section-shell">
          <Reveal>
            <p className="eyebrow">Cómo trabajo</p>
          </Reveal>
          <div className="mt-16 grid gap-14 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Hablamos",
                d: "Me contás qué tipo de evento es, la fecha y el clima que buscás.",
              },
              {
                n: "02",
                t: "Preparo el set",
                d: "Armo una selección pensada para ese público y ese espacio.",
              },
              {
                n: "03",
                t: "Toco",
                d: "El día del evento me ocupo de que la música no baje nunca.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 110}>
                <div className="border-t border-border pt-8">
                  <span className="font-display text-sm tracking-[0.3em] text-muted-foreground">
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-display text-xl">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-32 sm:py-44">
        <div className="section-shell">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug sm:text-4xl">
              “Recién empiezo, y prefiero que cada fecha hable por sí sola.”
            </blockquote>
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
