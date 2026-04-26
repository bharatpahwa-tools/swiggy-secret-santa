import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Pitch = () => (
  <section className="py-12 border-t border-border/60 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero opacity-80" />
    <div className="container relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">§ 07 — Final Pitch</div>
        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance">
          “Swiggy, you've fed our stomachs for a decade.
          <br />
          Now let's feed our{" "}
          <span className="bg-festive">friendships.</span>”
        </blockquote>
        <p className="mt-10 text-muted-foreground text-lg max-w-xl mx-auto">
          Bhukkad Santa isn't an order. It's a story — delivered in a brown paper bag.
        </p>

        <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-muted-foreground">
          <span>Author · Bharat Pahwa</span>
          <span>AI Developer / Full-Stack Engineer</span>
          <span>Pitch v1.0 · April 2026</span>
        </div>
      </div>
    </div>
  </section>
);