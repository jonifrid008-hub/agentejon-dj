import { createFileRoute } from "@tanstack/react-router";
import { Disc3, Music2, Radio, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/musica")({
  head: () => ({
    meta: [
      { title: "Música — AgenteJon DJ" },
      {
        name: "description",
        content: "Sets, mixes y plataformas donde vas a poder escuchar a AgenteJon DJ.",
      },
      { property: "og:title", content: "Música — AgenteJon DJ" },
      {
        property: "og:description",
        content: "Sets, mixes y plataformas de AgenteJon DJ.",
      },
      { property: "og:url", content: "/musica" },
    ],
    links: [{ rel: "canonical", href: "/musica" }],
  }),
  component: Musica,
});

const plataformas = [
  { icon: Music2, nombre: "Spotify", nota: "Espacio reservado para el perfil." },
  { icon: Radio, nombre: "SoundCloud", nota: "Espacio reservado para los sets." },
  { icon: Youtube, nombre: "YouTube", nota: "Espacio reservado para los videos." },
  { icon: Disc3, nombre: "Mixes", nota: "Espacio reservado para mixes propios." },
];

function Musica() {
  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Música</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Todo lo que suene, va a estar acá.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Estos espacios están preparados para sumar los enlaces y reproductores a medida que
            publique material.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {plataformas.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <div className="flex h-full flex-col gap-6 bg-background p-10">
                <p.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                <div>
                  <h2 className="font-display text-xl">{p.nombre}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.nota}</p>
                </div>
                <div className="mt-auto flex h-28 items-center justify-center rounded-md border border-dashed border-border text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Próximamente
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
