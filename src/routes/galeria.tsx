import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

const video = { url: "/videos/galeria-video.mp4" };
const videoPoster = { url: "/images/galeria/video-poster.jpg" };

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

const fotos = Array.from({ length: 10 }, (_, i) => ({
  asset_id: `foto-${i}`,
  url: `/images/galeria/foto-${i}.jpg`,
}));

function Galeria() {
  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Galería</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Momentos guardados detrás de la música.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Una selección de imágenes que muestran parte de mi recorrido como DJ, desde eventos y
            presentaciones hasta momentos detrás de las bandejas.
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
