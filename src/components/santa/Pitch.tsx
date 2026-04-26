import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Pitch = () => (
  <section className="py-24 lg:py-32 border-t border-border/60 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero opacity-80" />
    <div className="container relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">§ 07 — Final Pitch</div>
        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance">
          “Swiggy, you've fed our stomachs for a decade.
          <br />
          Now let's feed our{" "}
          <span className="bg-festive bg-clip-text text-transparent">friendships.</span>”
        </blockquote>
        <p className="mt-10 text-muted-foreground text-lg max-w-xl mx-auto">
          Bhukkad Santa isn't an order. It's a story — delivered in a brown paper bag.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="h-13 px-7 bg-orange-grad text-primary-foreground border-0 font-semibold shadow-glow">
            Greenlight the prototype
            <ArrowUpRight className="size-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-13 px-7 border-border bg-card/50 hover:bg-card font-semibold">
            Read the n8n flow draft
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-muted-foreground">
          <span>Author · Bharat Pahwa</span>
          <span className="text-border">·</span>
          <span>AI Developer / Full-Stack Engineer</span>
          <span className="text-border">·</span>
          <span>Pitch v1.0 · April 2026</span>
        </div>
      </div>
    </div>
  </section>
);