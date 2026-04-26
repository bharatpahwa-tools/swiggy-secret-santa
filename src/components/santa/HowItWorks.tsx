import { Eye, Shuffle, Wand2, PackageCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Eye,
    name: "Spy Phase",
    title: "Agent profiles each Bhukkad",
    body: "Using get_order_history MCP tool, the agent builds anonymized food personas. \"User A: Midnight Maggi enthusiast, 14 orders/30 days.\"",
    accent: "santa-yellow",
  },
  {
    n: "02",
    icon: Shuffle,
    name: "Panga Phase",
    title: "Secret Santa shuffle",
    body: "Cravings get reassigned across the lobby. Sender identity is locked inside the Secure Agentic Vault until reveal.",
    accent: "santa-pink",
  },
  {
    n: "03",
    icon: Wand2,
    name: "Jugaad Phase",
    title: "Cross-city substitution",
    body: "Recipient in Bangalore, sender in Delhi? Agent finds the closest-rated equivalent SKU at recipient's local dark store.",
    accent: "santa-mint",
  },
  {
    n: "04",
    icon: PackageCheck,
    name: "Mza Phase",
    title: "Surprise + debate",
    body: "Order arrives. Group chat lights up: \"Who sent it?!\" — 30-60 mins of high-frequency app opens, guaranteed.",
    accent: "santa-orange",
  },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 lg:py-32 border-t border-border/60 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mystery rounded-full blur-[120px] opacity-10" />
    <div className="container relative">
      <div className="max-w-2xl mb-16">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">§ 03 — The Workflow</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Four phases. One agentic loop. Infinite <span className="text-accent">mza</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent z-10" />
            )}
            <div className="relative p-6 h-full rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-between mb-5">
                <div className={`size-11 rounded-xl grid place-items-center bg-[hsl(var(--${s.accent})/0.12)] border border-[hsl(var(--${s.accent})/0.3)]`}>
                  <s.icon className={`size-5 text-[hsl(var(--${s.accent}))]`} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              </div>
              <div className={`text-xs font-mono uppercase tracking-wider mb-2 text-[hsl(var(--${s.accent}))]`}>{s.name}</div>
              <h3 className="font-display text-lg font-semibold mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);