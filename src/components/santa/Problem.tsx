import { Clock, HelpCircle, MapPinOff } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "The Utility Trap",
    body: "Users open Swiggy, spend 3 minutes, leave. Zero community feel. Pure transaction.",
    stat: "3 min",
    statLabel: "avg session",
  },
  {
    icon: HelpCircle,
    title: "The Gift Anxiety",
    body: "“Will they like it? Are they allergic? Is it too expensive?” Sending food is stressful.",
    stat: "67%",
    statLabel: "abandon gift orders",
  },
  {
    icon: MapPinOff,
    title: "The Logistics Gap",
    body: "You can't send a friend their 'usual' without ruining the surprise by asking first.",
    stat: "0",
    statLabel: "surprise-native flows",
  },
];

export const Problem = () => (
  <section id="problem" className="py-12 border-t border-border/60">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">§ 02 — The Conflict</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Swiggy mastered <span className="text-muted-foreground line-through decoration-primary/60">"I'm hungry."</span>
          <br />
          Now let's master <span className="text-primary">"I love you."</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p) => (
          <div
            key={p.title}
            className="group relative p-7 rounded-2xl bg-card-grad border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card-soft"
          >
            <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-5">
              <p.icon className="size-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.body}</p>
            <div className="pt-5 border-t border-border/60 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-accent">{p.stat}</span>
              <span className="text-xs text-muted-foreground">{p.statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);