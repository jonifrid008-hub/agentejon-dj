import { Link } from "@tanstack/react-router";
import logo from "@/assets/agentejon-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Logo de AgenteJon DJ"
            width={36}
            height={36}
            loading="lazy"
            className="h-8 w-8 object-contain mix-blend-screen"
          />
          <span className="font-display text-xs tracking-[0.3em] uppercase">AgenteJon DJ</span>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <Link to="/sobre-mi" className="transition-colors hover:text-foreground">
            Sobre mí
          </Link>
          <Link to="/musica" className="transition-colors hover:text-foreground">
            Música
          </Link>
          <Link to="/galeria" className="transition-colors hover:text-foreground">
            Galería
          </Link>
          <Link to="/contacto" className="transition-colors hover:text-foreground">
            Contacto
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AgenteJon DJ
        </p>
      </div>
    </footer>
  );
}
