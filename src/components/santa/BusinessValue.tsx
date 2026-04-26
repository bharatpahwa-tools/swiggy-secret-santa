import { TrendingUp, Repeat, Users2, Heart } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "+38%", label: "Projected AOV lift", body: "Group games skew higher than solo orders. Users spend on the experience, not the calorie.", color: "santa-orange" },
  { icon: Repeat, value: "5–10", label: "Concurrent active users / lobby", body: "30–60 min debate window keeps the whole group hot in-app. Swiggy becomes the group chat.", color: "santa-yellow" },
  { icon: Users2, value: "2.4×", label: "Food → Instamart cross-sell", body: "Mystery gifts naturally bridge verticals. A food user receives an Instamart surprise — and discovers the surface.", color: "santa-pink" },
  { icon: Heart, value: "1 of 1", label: "Defensible social moat", body: "No competitor has the order-history depth + dark-store inventory to replicate this. Period.", color: "santa-mint" },
];

export const BusinessValue = () => (
  <section id="business" className="py-24 lg:py-32 border-t border-border/60">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">§ 06 — Business Value</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Why this isn't a "fun toy."
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {metrics.map((m) => (
          <div key={m.label} className="p-7 rounded-2xl bg-card-grad border border-border">
            <div className="flex items-start justify-between mb-6">
              <div className={`size-11 rounded-xl bg-[hsl(var(--${m.color})/0.12)] border border-[hsl(var(--${m.color})/0.3)] grid place-items-center`}>
                <m.icon className={`size-5 text-[hsl(var(--${m.color}))]`} />
              </div>
              <div className={`font-display text-5xl font-bold text-[hsl(var(--${m.color}))]`}>{m.value}</div>
            </div>
            <div className="text-sm font-semibold mb-2">{m.label}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);