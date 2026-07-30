import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Mic2, Sparkles, Speaker } from "lucide-react";
import heroAsset from "@/assets/hero-crowd.png.asset.json";
import retrato from "@/assets/agentejon-retrato-bn.jpg";
import { Reveal, Parallax } from "@/components/Reveal";

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
          src={heroAsset.url}
          alt="AgenteJon DJ tocando frente al público"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

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

      <section className="border-t border-border bg-background py-28 sm:py-40">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[45%_1fr] lg:gap-20">
          <Reveal>
            <Parallax strength={18}>
              <div className="group relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 rounded-[1.75rem] bg-[radial-gradient(60%_50%_at_50%_40%,rgba(255,255,255,0.10),transparent_70%)] blur-xl"
                />
                <img
                  src={retrato}
                  alt="Retrato en blanco y negro de AgenteJon DJ con auriculares"
                  width={1080}
                  height={1920}
                  loading="lazy"
                  className="relative aspect-[9/16] w-full rounded-xl object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[oklch(1_0_0/10%)]"
                />
              </div>
            </Parallax>
          </Reveal>

          <Reveal delay={220}>
            <p className="eyebrow">Sobre mí</p>
            <h2 className="mt-6 font-display text-3xl leading-[1.05] tracking-[0.14em] uppercase sm:text-5xl">
              AgenteJon DJ
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              <p>
                Soy AgenteJon DJ. Comencé mi camino como DJ desde muy joven, impulsado por mi
                pasión por la música y las ganas de aprender y crecer constantemente.
              </p>
              <p>
                Desde mis primeros pasos fui desarrollando mi técnica, explorando diferentes
                estilos musicales y adquiriendo experiencia en distintos eventos.
              </p>
              <p>
                Para mí, ser DJ no es solamente seleccionar canciones: es entender la energía del
                momento, conectar con el público y crear una experiencia que se recuerde.
              </p>
            </div>
            <blockquote className="mt-10 border-l border-border pl-6 font-display text-lg leading-snug text-foreground sm:text-xl">
              “Una pasión que empezó desde muy temprano y que sigue creciendo con cada
              presentación.”
            </blockquote>
            <Link
              to="/musica"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-xs font-medium tracking-[0.22em] text-primary-foreground uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:tracking-[0.28em] hover:opacity-85"
            >
              Conocé mi música
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

      <section className="border-t border-border py-32 sm:py-40">
        <div className="section-shell flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              ¿Tenés una fecha en mente?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground">
              Escribime y armamos algo juntos.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Contactarme <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

