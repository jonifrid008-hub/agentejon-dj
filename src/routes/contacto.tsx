import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Instagram, Music4, Youtube, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — AgenteJon DJ" },
      {
        name: "description",
        content: "Escribime para consultas, fechas o colaboraciones con AgenteJon DJ.",
      },
      { property: "og:title", content: "Contacto — AgenteJon DJ" },
      {
        property: "og:description",
        content: "Consultas, fechas o colaboraciones con AgenteJon DJ.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const schema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "Ingresá tu nombre" })
    .max(100, { message: "Máximo 100 caracteres" }),
  correo: z
    .string()
    .trim()
    .email({ message: "Ingresá un correo válido" })
    .max(255, { message: "Máximo 255 caracteres" }),
  mensaje: z
    .string()
    .trim()
    .min(1, { message: "Escribí un mensaje" })
    .max(1000, { message: "Máximo 1000 caracteres" }),
});

const redes = [
  { icon: Instagram, nombre: "Instagram", href: "https://www.instagram.com/agente_jon_dj/" },
  { icon: Music4, nombre: "TikTok", href: "https://www.tiktok.com/@agente_jon_dj" },
  { icon: Youtube, nombre: "YouTube", href: "https://www.youtube.com/@agentejondj-b3b" },
  { icon: MessageCircle, nombre: "WhatsApp", href: "https://wa.me/5491152267138" },
];

const inputClass =
  "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzenqka";

function Contacto() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setEnviando(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Error de envío");
      form.reset();
      toast.success("¡Gracias por tu mensaje! Me pondré en contacto con vos lo antes posible.");
    } catch {
      toast.error("No se pudo enviar el mensaje. Intentá de nuevo en unos minutos.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Hablemos.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm text-muted-foreground">
                  Nombre
                </label>
                <input id="nombre" name="nombre" maxLength={100} className={inputClass} />
                {errors.nombre && (
                  <p className="mt-2 text-xs text-muted-foreground">{errors.nombre}</p>
                )}
              </div>
              <div>
                <label htmlFor="correo" className="mb-2 block text-sm text-muted-foreground">
                  Correo
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  maxLength={255}
                  className={inputClass}
                />
                {errors.correo && (
                  <p className="mt-2 text-xs text-muted-foreground">{errors.correo}</p>
                )}
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  maxLength={1000}
                  className={`${inputClass} resize-none`}
                />
                {errors.mensaje && (
                  <p className="mt-2 text-xs text-muted-foreground">{errors.mensaje}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
              >
                Enviar
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm text-muted-foreground">
              También podés escribirme por mis redes.
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {redes.map((r) => (
                <a
                  key={r.nombre}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-background px-6 py-5 text-sm transition-colors hover:bg-surface"
                >
                  <r.icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  {r.nombre}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
