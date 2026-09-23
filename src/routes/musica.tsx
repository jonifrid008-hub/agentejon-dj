import { createFileRoute } from "@tanstack/react-router";
import { Disc3, Music2, Radio, Youtube } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MixPlayer } from "@/components/MixPlayer";

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
  {
    icon: Music2,
    nombre: "Spotify",
    nota: "Escuchá mi perfil en Spotify.",
    href: "https://open.spotify.com/user/kb2z4hlkxu7xeffmsk3lft4im?si=ff64584fa1c643b1",
  },
  {
    icon: Radio,
    nombre: "SoundCloud",
    nota: "Mis sets en SoundCloud.",
    href: "https://soundcloud.com/agentejon-dj-74494390",
  },
  {
    icon: Youtube,
    nombre: "YouTube",
    nota: "Videos y presentaciones.",
    href: "https://www.youtube.com/@agentejondj-b3b",
  },
  { icon: Disc3, nombre: "Mixes", nota: "Mixes propios para escuchar acá mismo.", href: null },
];

function Musica() {
  const [playerAbierto, setPlayerAbierto] = useState(false);

  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Música</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Todo lo que suene, va a estar acá.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Escuchá mis sets, mixes y producciones, con sonidos que van desde el Tech House hasta
            diferentes estilos que me inspiran.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {plataformas.map((p, i) => {
            const esMixes = !p.href;
            const Wrapper = p.href ? "a" : "button";
            return (
              <Reveal key={p.nombre} delay={i * 80}>
                <Wrapper
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : { type: "button" as const, onClick: () => setPlayerAbierto(true) })}
                  className="flex h-full w-full flex-col gap-6 bg-background p-10 text-left transition-colors hover:bg-surface"
                >
                  <p.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  <div>
                    <h2 className="font-display text-xl">{p.nombre}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.nota}</p>
                  </div>
                  <div className="mt-auto flex h-28 items-center justify-center rounded-md border border-dashed border-border text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {esMixes ? "Escuchar mixes" : "Abrir perfil"}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>

      <MixPlayer open={playerAbierto} onClose={() => setPlayerAbierto(false)} />
    </section>
  );
}
