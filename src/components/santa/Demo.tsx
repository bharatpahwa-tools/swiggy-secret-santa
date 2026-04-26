import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Gift,
  Loader2,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

type Phase = "lobby" | "spy" | "shuffle" | "reveal";

const participants = [
  { id: "A", name: "Aanya", emoji: "🌶️", city: "Bangalore", persona: "Spice Hunter", craving: "Andhra Chicken Biryani", count: 22, allergy: "None" },
  { id: "B", name: "Bharat", emoji: "🍜", city: "Delhi", persona: "Midnight Maggi Loyalist", craving: "Cheese Maggi + Cold Coffee", count: 14, allergy: "Mushroom" },
  { id: "C", name: "Chitra", emoji: "🍫", city: "Mumbai", persona: "Sweet Tooth", craving: "Belgian Dark Truffle", count: 9, allergy: "Peanut" },
  { id: "D", name: "Dev", emoji: "🥟", city: "Pune", persona: "Momo Maximalist", craving: "Cheese Corn Momos x2", count: 18, allergy: "None" },
];

// Recipient -> what gets sent (sender hidden until reveal)
const assignments = [
  { to: "Aanya", giftFrom: "D", gift: "Wood-fired Margherita", swap: "Substituted via Food API · 4.6★ in HSR Layout", mode: "Food", price: "₹389" },
  { to: "Bharat", giftFrom: "C", gift: "Maggi Masala (12-pack) + Hide & Seek", swap: "Instamart · Connaught Place dark store", mode: "Instamart", price: "₹342" },
  { to: "Chitra", giftFrom: "A", gift: "Bournville Almond + Vanilla Tub", swap: "Instamart · Bandra dark store · peanut-free", mode: "Instamart", price: "₹410" },
  { to: "Dev", giftFrom: "B", gift: "Veg Steamed Momos x2", swap: "Substituted to Wow! Momo · 4.5★ Koregaon Park", mode: "Food", price: "₹298" },
];

export const Demo = () => {
  const [phase, setPhase] = useState<Phase>("lobby");
  const [revealedCard, setRevealedCard] = useState<number | null>(null);

  // Auto-progress through spy + shuffle
  useEffect(() => {
    if (phase === "spy") {
      const t = setTimeout(() => setPhase("shuffle"), 2800);
      return () => clearTimeout(t);
    }
    if (phase === "shuffle") {
      const t = setTimeout(() => setPhase("reveal"), 2600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const reset = () => {
    setRevealedCard(null);
    setPhase("lobby");
  };

  return (
    <section id="demo" className="py-12 border-t border-border/60 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">§ 04 — Live Prototype</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Run the agent yourself.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A 4-friend lobby. Tap <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">Begin Shuffle</kbd> to watch the
            agent spy, panga, and deliver.
          </p>
        </div>

        {/* Demo container */}
        <div className="relative rounded-3xl bg-card-grad border border-border shadow-card-soft overflow-hidden">
          {/* Top status bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/30">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-santa-yellow/60" />
                <span className="size-2.5 rounded-full bg-santa-mint/60" />
              </div>
              <span className="font-mono text-xs text-muted-foreground hidden sm:inline">swiggy.app/santa/lobby#diwali2026</span>
            </div>
            <PhaseIndicator phase={phase} />
          </div>

          <div className="p-6 lg:p-10 min-h-[600px]">
            {phase === "lobby" && <LobbyView onStart={() => setPhase("spy")} />}
            {phase === "spy" && <SpyView />}
            {phase === "shuffle" && <ShuffleView />}
            {phase === "reveal" && (
              <RevealView revealedCard={revealedCard} setRevealedCard={setRevealedCard} onReset={reset} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const PhaseIndicator = ({ phase }: { phase: Phase }) => {
  const phases: { id: Phase; label: string }[] = [
    { id: "lobby", label: "Lobby" },
    { id: "spy", label: "Spy" },
    { id: "shuffle", label: "Shuffle" },
    { id: "reveal", label: "Reveal" },
  ];
  const activeIdx = phases.findIndex((p) => p.id === phase);
  return (
    <div className="flex items-center gap-1.5">
      {phases.map((p, i) => (
        <div key={p.id} className="flex items-center gap-1.5">
          <div
            className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all ${
              i === activeIdx
                ? "bg-primary text-primary-foreground"
                : i < activeIdx
                ? "text-santa-mint"
                : "text-muted-foreground"
            }`}
          >
            {p.label}
          </div>
          {i < phases.length - 1 && <span className="text-muted-foreground/40 text-xs">·</span>}
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────  LOBBY  ───────────────────────── */
const LobbyView = ({ onStart }: { onStart: () => void }) => (
  <div className="grid lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <div className="flex items-center gap-2 mb-6">
        <Users className="size-4 text-primary" />
        <h3 className="font-display text-xl font-semibold">Diwali 2026 · 4 bhukkads in lobby</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {participants.map((p) => (
          <div key={p.id} className="p-4 rounded-xl bg-background/40 border border-border flex items-center gap-3">
            <div className="size-12 rounded-xl bg-orange-grad/20 border border-primary/20 grid place-items-center text-2xl">
              {p.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold flex items-center gap-2">
                {p.name}
                <span className="text-[10px] font-mono text-muted-foreground">· {p.city}</span>
              </div>
              <div className="text-xs text-muted-foreground truncate">{p.persona}</div>
            </div>
            <CheckCircle2 className="size-5 text-santa-mint" />
          </div>
        ))}
      </div>
    </div>

    <aside className="space-y-4">
      <div className="p-5 rounded-xl bg-background/40 border border-border">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
          <Wallet className="size-3.5" /> Budget Lock
        </div>
        <div className="font-display text-3xl font-bold">₹350 <span className="text-base text-muted-foreground font-sans font-normal">±10%</span></div>
        <div className="text-xs text-muted-foreground mt-1">Per gift · agent enforced</div>
      </div>

      <div className="p-5 rounded-xl bg-background/40 border border-border">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
          <ShieldCheck className="size-3.5" /> Allergy Guard
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="border-destructive/30 text-destructive bg-destructive/10">Mushroom</Badge>
          <Badge variant="outline" className="border-destructive/30 text-destructive bg-destructive/10">Peanut</Badge>
        </div>
        <div className="text-xs text-muted-foreground mt-3">Filtered from all SKU searches</div>
      </div>

      <Button
        size="lg"
        onClick={onStart}
        className="w-full h-13 py-4 bg-orange-grad text-primary-foreground border-0 font-semibold shadow-glow hover:opacity-95"
      >
        <Sparkles className="size-4" />
        Begin Shuffle
        <ArrowRight className="size-4" />
      </Button>
    </aside>
  </div>
);

/* ─────────────────────────  SPY  ───────────────────────── */
const SpyView = () => (
  <div>
    <div className="flex items-center gap-3 mb-8">
      <div className="size-10 rounded-xl bg-santa-yellow/15 border border-santa-yellow/30 grid place-items-center">
        <Bot className="size-5 text-santa-yellow animate-pulse" />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold">Spy Phase active…</h3>
        <p className="text-sm text-muted-foreground font-mono">$ mcp.invoke get_order_history --depth=30d</p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-3">
      {participants.map((p, i) => (
        <div
          key={p.id}
          className="p-5 rounded-xl bg-background/40 border border-border animate-pulse-glow"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-lg bg-card border border-border grid place-items-center text-xl">
              {p.emoji}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{p.name}</div>
              <div className="text-[10px] font-mono text-muted-foreground">PERSONA_GENERATED</div>
            </div>
            <Loader2 className="size-4 text-santa-yellow animate-spin" />
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Top SKU</span>
              <span className="font-medium">{p.craving}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frequency</span>
              <span className="font-mono text-accent">{p.count}× / 30d</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Allergy</span>
              <span className="font-mono text-xs">{p.allergy}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─────────────────────────  SHUFFLE  ───────────────────────── */
const ShuffleView = () => (
  <div className="flex flex-col items-center justify-center py-12 min-h-[500px]">
    <div className="relative">
      <div className="absolute inset-0 bg-mystery rounded-full blur-3xl opacity-30 animate-spin-slow" />
      <div className="relative size-48 rounded-full bg-mystery grid place-items-center animate-spin-slow">
        <div className="size-44 rounded-full bg-card grid place-items-center">
          <Gift className="size-16 text-primary" />
        </div>
      </div>
      {participants.map((p, i) => {
        const angle = (i / participants.length) * Math.PI * 2 - Math.PI / 2;
        const r = 140;
        return (
          <div
            key={p.id}
            className="absolute size-12 rounded-xl bg-card border border-border grid place-items-center text-xl shadow-card-soft"
            style={{
              left: `calc(50% + ${Math.cos(angle) * r}px - 24px)`,
              top: `calc(50% + ${Math.sin(angle) * r}px - 24px)`,
              animation: `float-slow 3s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {p.emoji}
          </div>
        );
      })}
    </div>
    <div className="mt-16 text-center space-y-2">
      <div className="font-display text-2xl font-semibold">Vault sealing assignments…</div>
      <div className="font-mono text-xs text-muted-foreground flex items-center gap-2 justify-center">
        <Lock className="size-3" />
        AES-256 · sender_identity := encrypted
      </div>
    </div>
  </div>
);

/* ─────────────────────────  REVEAL  ───────────────────────── */
const RevealView = ({
  revealedCard,
  setRevealedCard,
  onReset,
}: {
  revealedCard: number | null;
  setRevealedCard: (n: number | null) => void;
  onReset: () => void;
}) => (
  <div>
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="size-4 text-santa-mint" />
          <span className="text-xs font-mono uppercase tracking-wider text-santa-mint">Shuffle complete</span>
        </div>
        <h3 className="font-display text-2xl font-semibold">4 surprises ready · tap to peek</h3>
      </div>
      <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground">
        <RefreshCw className="size-3.5" />
        Reshuffle
      </Button>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      {assignments.map((a, i) => {
        const recipient = participants.find((p) => p.name === a.to)!;
        const sender = participants.find((p) => p.id === a.giftFrom)!;
        const isRevealed = revealedCard === i;
        return (
          <button
            key={i}
            onClick={() => setRevealedCard(isRevealed ? null : i)}
            className="group text-left p-5 rounded-2xl bg-background/50 border border-border hover:border-primary/40 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-orange-grad/20 border border-primary/20 grid place-items-center text-xl">
                  {recipient.emoji}
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">For</div>
                  <div className="font-semibold">{recipient.name}</div>
                </div>
              </div>
              <Badge
                variant="outline"
                className={
                  a.mode === "Instamart"
                    ? "border-santa-yellow/40 text-santa-yellow bg-santa-yellow/10"
                    : "border-primary/40 text-primary bg-primary/10"
                }
              >
                {a.mode}
              </Badge>
            </div>

            <div className="font-display text-lg font-semibold leading-snug mb-1">{a.gift}</div>
            <div className="text-xs text-muted-foreground mb-4">{a.swap}</div>

            <div className="pt-4 border-t border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                {isRevealed ? (
                  <>
                    <span className="text-muted-foreground">From</span>
                    <span className="font-semibold flex items-center gap-1">
                      <span>{sender.emoji}</span> {sender.name}
                    </span>
                  </>
                ) : (
                  <span className="font-mono text-muted-foreground flex items-center gap-1.5">
                    <Lock className="size-3" />
                    sender · vault-locked
                  </span>
                )}
              </div>
              <span className="font-mono text-sm font-semibold">{a.price}</span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);