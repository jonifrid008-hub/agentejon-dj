import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agentejon-logo.png.asset.json";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/", hash: "sobre-mi", label: "Sobre mí" },
  { to: "/musica", label: "Música" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || open
          ? "border-b border-border bg-background/60 shadow-[0_10px_40px_-30px_oklch(1_0_0/40%)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Logo de AgenteJon DJ"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain mix-blend-screen"
          />
          <span className="truncate font-display text-sm tracking-[0.28em] uppercase">
            AGENTEJON DJ
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              activeOptions={{ exact: l.to === "/", includeHash: "hash" in l }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="section-shell flex flex-col gap-1 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-display text-lg tracking-tight"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
