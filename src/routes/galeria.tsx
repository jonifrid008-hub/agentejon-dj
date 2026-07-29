import { createFileRoute } from "@tanstack/react-router";
import { Camera, Video } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — AgenteJon DJ" },
      {
        name: "description",
        content: "Fotos y videos del proyecto AgenteJon DJ, en construcción.",
      },
      { property: "og:title", content: "Galería — AgenteJon DJ" },
      {
        property: "og:description",
        content: "Fotos y videos del proyecto AgenteJon DJ.",
      },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const slots = [
  { tipo: "foto", ratio: "aspect-[4/5]" },
  { tipo: "video", ratio: "aspect-[4/3]" },
  { tipo: "foto", ratio: "aspect-[4/3]" },
  { tipo: "foto", ratio: "aspect-[4/5]" },
  { tipo: "video", ratio: "aspect-[4/5]" },
  { tipo: "foto", ratio: "aspect-[4/3]" },
];

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
            Espacios listos para sumar fotos y videos reales de cada fecha.
          </p>
        </Reveal>

        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {slots.map((slot, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="mb-6 break-inside-avoid">
              <div
                className={`${slot.ratio} flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface transition-colors hover:bg-surface-2`}
              >
                {slot.tipo === "video" ? (
                  <Video className="h-6 w-6 text-muted-foreground" strokeWidth={1.25} />
                ) : (
                  <Camera className="h-6 w-6 text-muted-foreground" strokeWidth={1.25} />
                )}
                <span className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                  {slot.tipo === "video" ? "Video" : "Foto"}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
