import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Calendar, Send } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mindful Agile" },
      { name: "description", content: "Get in touch with Mindful Agile to start a conversation about coaching, leadership or agile transformation." },
      { property: "og:title", content: "Contact — Mindful Agile" },
      { property: "og:description", content: "Book a discovery call or send a message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),

  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
              Let's start a <span className="text-gradient">conversation.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tell me a little about you and what you're working on. I read every message personally
              and reply within two business days.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@mindfulagile.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <Calendar size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Discovery call</p>
                  <p className="font-medium">30 minutes, free, no pitch</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Working</p>
                  <p className="font-medium">Remote · worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-surface border border-border rounded-2xl p-8 lg:p-10 shadow-soft h-fit"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  className="mt-2 w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  className="mt-2 w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground">What's on your mind?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                />
              </div>


              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-gradient text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth disabled:opacity-60"
              >
                {sent ? "Message sent — talk soon" : (<>Send message <Send size={16} /></>)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
