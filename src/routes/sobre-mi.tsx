import { createFileRoute, Link } from "@tanstack/react-router";
import retrato from "@/assets/retrato.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — AgenteJon DJ" },
      {
        name: "description",
        content: "Quién soy y de qué se trata el proyecto AgenteJon DJ.",
      },
      { property: "og:title", content: "Sobre mí — AgenteJon DJ" },
      {
        property: "og:description",
        content: "Quién soy y de qué se trata el proyecto AgenteJon DJ.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Sobre mí</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            Soy AgenteJon DJ.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1fr] md:items-start">
          <Reveal>
            <img
              src={retrato}
              alt="Retrato de AgenteJon DJ frente a la consola"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="md:sticky md:top-32">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy AgenteJon DJ, un joven DJ apasionado por la música y por crear experiencias
                únicas. Este proyecto nació con el objetivo de compartir mi estilo, seguir
                creciendo y llevar mi música a cada vez más personas.
              </p>
              <p>
                Todavía estoy construyendo mi camino, y prefiero que esta página crezca a la par:
                con lo que realmente hago, set a set.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {[
                { k: "Estilo", v: "Espacio editable" },
                { k: "Formato", v: "Espacio editable" },
                { k: "Ubicación", v: "Espacio editable" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-4 bg-background px-6 py-5 text-sm"
                >
                  <span className="text-muted-foreground">{row.k}</span>
                  <span>{row.v}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contacto"
              className="mt-12 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Contactarme
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
