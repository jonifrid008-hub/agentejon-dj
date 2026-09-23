import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, SkipBack, SkipForward, X } from "lucide-react";

const mix1 = { url: "/audio/mix-1.m4a" };
const mix2 = { url: "/audio/mix-2.m4a" };
const mix3 = { url: "/audio/mix-3.m4a" };

export const mixes = [
  { titulo: "Pre Dancing Mix 2026", nota: "Para arrancar la fiesta", src: mix1.url },
  { titulo: "Chiquetere x Latinoamérica", nota: "Remix explosivo 2025", src: mix2.url },
  { titulo: "Otro Mix de Música", nota: "Sesión AgenteJon DJ", src: mix3.url },
];

function fmt(s: number) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function Equalizer({ activo }: { activo: boolean }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-end justify-center gap-[3px] rounded-full border border-border p-2.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[2px] bg-foreground"
          style={{
            height: activo ? undefined : "20%",
            animation: activo ? `eq-bar 900ms ease-in-out ${i * 120}ms infinite alternate` : "none",
          }}
        />
      ))}
    </div>
  );
}

export function MixPlayer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [sonando, setSonando] = useState(false);
  const [actual, setActual] = useState(0);
  const [duracion, setDuracion] = useState(0);

  const actualMix = mixes[index]!;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    audioRef.current?.pause();
    setSonando(false);
  }, [open]);

  const reproducir = useCallback((i: number) => {
    setIndex(i);
    setActual(0);
    requestAnimationFrame(() => {
      const el = audioRef.current;
      if (!el) return;
      el.load();
      void el.play();
    });
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current;
    if (!el || !Number.isFinite(el.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    el.currentTime = ratio * el.duration;
    setActual(el.currentTime);
  };

  if (!open) return null;

  const progreso = duracion > 0 ? (actual / duracion) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      style={{ animation: "mix-fade 300ms cubic-bezier(0.16,1,0.3,1)" }}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Reproductor de mixes"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg border border-border bg-background"
        style={{ animation: "mix-panel 500ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-5">
          <h2 className="min-w-0 truncate font-display text-sm tracking-[0.18em] uppercase">
            AgenteJon DJ — Mixes
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar reproductor"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        <div className="px-6 py-8">
          <div className="flex items-center gap-4">
            <Equalizer activo={sonando} />
            <div className="min-w-0">
              <p className="font-mono text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
                Reproduciendo ahora
              </p>
              <p className="mt-1 truncate font-display text-lg">{actualMix.titulo}</p>
            </div>
          </div>

          <div className="mt-8">
            <div
              onClick={seek}
              role="presentation"
              className="group h-6 cursor-pointer py-[11px]"
            >
              <div className="h-[2px] w-full bg-surface-2">
                <div className="h-full bg-foreground" style={{ width: `${progreso}%` }} />
              </div>
            </div>
            <div className="mt-1 flex justify-between font-mono text-[0.6875rem] text-muted-foreground">
              <span>{fmt(actual)}</span>
              <span>{fmt(duracion)}</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => reproducir((index - 1 + mixes.length) % mixes.length)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipBack className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={sonando ? "Pausar" : "Reproducir"}
              onClick={toggle}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 hover:scale-105"
            >
              {sonando ? (
                <Pause className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Play className="ml-0.5 h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => reproducir((index + 1) % mixes.length)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipForward className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <ul className="border-t border-border">
          {mixes.map((m, i) => (
            <li key={m.titulo}>
              <button
                type="button"
                onClick={() => reproducir(i)}
                className={`flex w-full items-center gap-4 border-b border-border px-6 py-4 text-left transition-colors last:border-b-0 hover:bg-surface ${
                  i === index ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span className="font-mono text-[0.6875rem] tracking-widest">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm">{m.titulo}</span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {m.nota}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <audio
          ref={audioRef}
          src={actualMix.src}
          preload="metadata"
          onPlay={() => setSonando(true)}
          onPause={() => setSonando(false)}
          onTimeUpdate={(e) => setActual(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuracion(e.currentTarget.duration)}
          onEnded={() => reproducir((index + 1) % mixes.length)}
        />
      </div>
    </div>
  );
}
