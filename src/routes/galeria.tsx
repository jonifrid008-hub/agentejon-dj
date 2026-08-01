import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

import foto0 from "@/assets/galeria/foto-0.jpg.asset.json";
import foto1 from "@/assets/galeria/foto-1.jpg.asset.json";
import foto2 from "@/assets/galeria/foto-2.jpg.asset.json";
import foto3 from "@/assets/galeria/foto-3.jpg.asset.json";
import foto4 from "@/assets/galeria/foto-4.jpg.asset.json";
import foto5 from "@/assets/galeria/foto-5.jpg.asset.json";
import foto6 from "@/assets/galeria/foto-6.jpg.asset.json";
import foto7 from "@/assets/galeria/foto-7.jpg.asset.json";
import foto8 from "@/assets/galeria/foto-8.jpg.asset.json";
import foto9 from "@/assets/galeria/foto-9.jpg.asset.json";
import video from "@/assets/galeria/video.mp4.asset.json";
import videoPoster from "@/assets/galeria/video-poster.jpg.asset.json";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — AgenteJon DJ" },
      {
        name: "description",
        content: "Fotos y video del proyecto AgenteJon DJ.",
      },
      { property: "og:title", content: "Galería — AgenteJon DJ" },
      {
        property: "og:description",
        content: "Fotos y video del proyecto AgenteJon DJ.",
      },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const fotos = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

function Galeria() {
  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Galería</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Un archivo que se va a ir llenando.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Fotos y video de cada fecha.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto, i) => (
            <Reveal key={foto.asset_id} delay={(i % 3) * 80}>
              <div className="hover-lift group aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface">
                <img
                  src={foto.url}
                  alt={`AgenteJon DJ — foto ${i + 1}`}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}

          <Reveal delay={80} className="sm:col-span-2 lg:col-span-1">
            <div className="hover-lift overflow-hidden rounded-lg border border-border bg-surface">
              <video
                src={video.url}
                poster={videoPoster.url}
                controls
                playsInline
                preload="metadata"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
