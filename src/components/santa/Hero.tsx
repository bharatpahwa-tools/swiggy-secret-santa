import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Gift, ShieldCheck, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero noise">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Floating chips */}
      <FloatingChip className="left-[6%] top-[22%] hidden lg:flex" emoji="🍕" label="Margherita" delay="0s" />
      <FloatingChip className="right-[8%] top-[18%] hidden lg:flex" emoji="🍦" label="Belgian Dark" delay="1.5s" />
      <FloatingChip className="left-[10%] bottom-[18%] hidden lg:flex" emoji="🍜" label="Midnight Maggi" delay="3s" />
      <FloatingChip className="right-[6%] bottom-[24%] hidden lg:flex" emoji="🥟" label="Momos x14" delay="2s" />

      <div className="container relative pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-card/40 backdrop-blur text-xs font-medium text-muted-foreground mb-7">
            <span className="size-1.5 rounded-full bg-santa-mint animate-pulse" />
            Pitch v1.0 · for Swiggy Builders Club · April 2026
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
            Friendship,
            <br />
            delivered in a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-festive bg-clip-text text-transparent">brown bag.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q 75 2, 150 6 T 298 4" stroke="hsl(var(--santa-orange))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            <span className="text-foreground font-semibold">Bhukkad Santa</span> is the world's first agentic
            mystery-gifting engine for <span className="text-primary font-semibold">Swiggy Food</span> &{" "}
            <span className="text-accent font-semibold">Instamart</span>. An AI that knows your friends'
            cravings — and sends them as a surprise.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button size="lg" className="h-14 px-7 bg-orange-grad text-primary-foreground border-0 font-semibold text-base shadow-glow hover:opacity-95 hover:scale-[1.02] transition-all">
              <Sparkles className="size-5" />
              Start a Bhukkad lobby
              <ArrowRight className="size-5" />
            </Button>
            <Button size="lg" variant="ghost" className="h-14 px-6 text-base text-muted-foreground hover:text-foreground hover:bg-card/60">
              Watch the 60-sec demo →
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <TrustItem icon={<Bot className="size-4 text-santa-yellow" />} label="Powered by Swiggy MCP" />
            <TrustItem icon={<ShieldCheck className="size-4 text-santa-mint" />} label="Allergy-aware agent" />
            <TrustItem icon={<Gift className="size-4 text-santa-pink" />} label="Identity-vault verified" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingChip = ({ className, emoji, label, delay }: { className: string; emoji: string; label: string; delay: string }) => (
  <div
    className={`absolute z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-card-soft animate-float-slow ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="text-lg">{emoji}</span>
    <span className="text-xs font-mono font-medium">{label}</span>
  </div>
);

const TrustItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);