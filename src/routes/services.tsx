import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Sparkles, Compass, Briefcase, ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mindful Agile" },
      { name: "description", content: "Leadership development, agile transformation, self leadership and career consulting tailored to your context." },
      { property: "og:title", content: "Services — Mindful Agile" },
      { property: "og:description", content: "Four practices — leadership coaching, agile transformation, self leadership, and career consulting — shaped to your context." },
      { property: "og:url", content: "/services" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Mindful Agile Consulting",
        provider: { "@type": "Organization", name: "Mindful Agile" },
        description:
          "Leadership development, agile transformation, self leadership and career consulting for individuals, leaders and organizations.",
        serviceType: [
          "Leadership Development",
          "Agile Transformation",
          "Self Leadership",
          "Career Consulting",
        ],
      }),
    }],
    links: [{ rel: "canonical", href: "/services" }],
  }),

  component: Services,
});

const services = [
  {
    icon: Users,
    title: "Leadership Development",
    tagline: "For leaders who want to grow people, not just performance.",
    bullets: [
      "1:1 executive and team-lead coaching",
      "Leadership cohort programs",
      "360° feedback and growth plans",
      "Difficult conversations and coaching skills",
    ],
  },
  {
    icon: Sparkles,
    title: "Agile Transformation",
    tagline: "Real agility — beyond ceremonies and certificates.",
    bullets: [
      "Agile assessments and roadmap design",
      "Team and program coaching (Scrum, Kanban, Scaled)",
      "Leadership alignment workshops",
      "Operating model and ways-of-working redesign",
    ],
  },
  {
    icon: Compass,
    title: "Self Leadership",
    tagline: "Come back to the leader within.",
    bullets: [
      "Mindfulness-based coaching",
      "Values, purpose and energy work",
      "Stress, burnout and sustainable performance",
      "Personal practices that actually stick",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Consulting",
    tagline: "Design a career that fits the person you're becoming.",
    bullets: [
      "Career direction and clarity sessions",
      "Transition planning and decision frameworks",
      "Personal brand, CV and interview prep",
      "Negotiation and onboarding support",
    ],
  },
];

function Services() {
  return (
    <PageShell>
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Services</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Practical work. <span className="text-gradient">Lasting change.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Every engagement starts with a conversation. Below are the practices I'm trained in —
            we'll shape the right mix for your context.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-px bg-border rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div key={s.title} className="bg-surface p-10 lg:p-16 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-primary">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-6 h-14 w-14 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-glow">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{s.tagline}</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 p-5 rounded-xl bg-surface-elevated/60 border border-border">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-gradient text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
          >
            Discuss your context <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
