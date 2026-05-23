import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mindful Agile" },
      { name: "description", content: "Mindful Agile blends agile coaching, leadership development and mindfulness to help people and organizations grow with intention." },
      { property: "og:title", content: "About — Mindful Agile" },
      { property: "og:description", content: "An approach that blends agility, leadership and presence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),

  component: About,
});

const values = [
  { title: "Presence first", body: "Real change happens when we slow down enough to see clearly. We start there." },
  { title: "Practical over theoretical", body: "Frameworks serve people, not the other way around. Everything we do is useful on Monday morning." },
  { title: "Whole human", body: "You are not a role. We work with the person inside the leader, the team member, the professional." },
  { title: "Honest partnership", body: "I'll tell you what I see — kindly, directly, and always in service of your goals." },
];

function About() {
  return (
    <PageShell>
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">About</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            A different kind of <span className="text-gradient">consultancy.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Mindful Agile was born from a simple observation: the most effective leaders and teams
            aren't the busiest — they're the most present. We bring together agile coaching,
            leadership development and mindfulness practice to help people lead themselves
            and their organizations with clarity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {values.map((v) => (
            <div key={v.title} className="bg-surface p-10">
              <h2 className="text-2xl font-semibold mb-3">{v.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </div>

          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">How we work together</h2>
          <ol className="space-y-8">
            {[
              { n: "01", t: "Listen", d: "We start with a discovery conversation. No agenda — just understanding where you are." },
              { n: "02", t: "Design", d: "Together we shape the right engagement: one-to-one coaching, team work, or a longer transformation." },
              { n: "03", t: "Practice", d: "We work in real time, on real challenges. Insight without action stays theoretical." },
              { n: "04", t: "Integrate", d: "We build habits and structures so the change stays after our work ends." },
            ].map((s) => (
              <li key={s.n} className="flex gap-6">
                <span className="font-mono text-primary text-sm pt-1">{s.n}</span>
                <div>
                  <h3 className="text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent-gradient text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
