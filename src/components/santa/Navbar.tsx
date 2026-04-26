import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Navbar = () => (
  <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
    <div className="container flex items-center justify-between h-16">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#problem" className="hover:text-foreground transition">The Problem</a>
        <a href="#how" className="hover:text-foreground transition">How it works</a>
        <a href="#demo" className="hover:text-foreground transition">Live demo</a>
        <a href="#business" className="hover:text-foreground transition">For Swiggy</a>
      </nav>
    </div>
  </header>
);