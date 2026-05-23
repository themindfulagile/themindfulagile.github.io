import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";


export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Mindful Agile" width={36} height={36} className="h-9 w-9 rounded-full shadow-soft" />
            <span className="font-semibold tracking-tight">Mindful Agile</span>
          </div>

          <p className="text-sm text-muted-foreground max-w-xs">
            Leadership, agility and clarity — for people and teams ready to grow with intention.
          </p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-foreground text-muted-foreground transition-smooth">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground transition-smooth">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</h2>
          <p className="text-sm text-muted-foreground">hello@mindfulagile.com</p>
          <p className="text-sm text-muted-foreground mt-1">By appointment, worldwide.</p>
        </div>

      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Mindful Agile</span>
          <span>Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
