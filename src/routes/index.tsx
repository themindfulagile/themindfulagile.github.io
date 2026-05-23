import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Sparkles, Users, Briefcase } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mindful Agile — Leadership, agility and clarity" },
      { name: "description", content: "Mindful Agile partners with leaders and teams on leadership development, agile transformation, self leadership and career consulting." },
      { property: "og:title", content: "Mindful Agile — Leadership, agility and clarity" },
      { property: "og:description", content: "Coaching and consulting that helps people and teams lead themselves first — then everything else follows." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Home,
});

const services = [
  { icon: Users, title: "Leadership Development", desc: "Grow leaders who inspire trust, hold complexity, and bring out the best in their teams." },
  { icon: Sparkles, title: "Agile Transformation", desc: "Move beyond frameworks. Build a culture of adaptability, learning and meaningful delivery." },
  { icon: Compass, title: "Self Leadership", desc: "Reconnect with your purpose, energy and presence — the foundation for everything else." },
  { icon: Briefcase, title: "Career Consulting", desc: "Design the next chapter of your career with clarity, courage and a concrete plan." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-40 lg:pt-44 lg:pb-56">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/40 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Coaching · Consulting · Transformation
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
              Lead with <span className="text-gradient">clarity.</span><br />
              Change with <span className="text-gradient">intention.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Mindful Agile helps individuals, leaders and organizations grow through coaching,
              agile transformation and deep career work — grounded in presence and built for real life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-gradient text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
              >
                Start a conversation <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground hover:bg-surface transition-smooth"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">What I do</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Four practices.<br />One <span className="text-gradient">human-centered</span> approach.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Whether you're scaling a team, navigating change, or rewriting your own story —
              each engagement is shaped around what's actually true for you.
            </p>
          </div>

          <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-10 bg-surface hover:bg-surface-elevated transition-smooth"
              >
                <div className="h-12 w-12 rounded-xl bg-accent-gradient flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-28 lg:py-40 bg-hero overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Philosophy</span>
          <p className="mt-8 text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            "Agility isn't a process — it's a way of being.
            <span className="text-gradient"> Lead yourself first,</span> and everything else follows."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-3xl bg-surface border border-border p-12 md:p-16 text-center shadow-soft relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight">
              Ready for your next chapter?
            </h2>
            <p className="relative mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Let's spend 30 minutes together. No pitch — just a real conversation about where you are
              and where you'd like to go.
            </p>
            <Link
              to="/contact"
              className="relative mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-gradient text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
            >
              Book a discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
