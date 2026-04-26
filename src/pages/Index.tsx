import { Navbar } from "@/components/santa/Navbar";
import { Hero } from "@/components/santa/Hero";
import { Problem } from "@/components/santa/Problem";
import { HowItWorks } from "@/components/santa/HowItWorks";
import { Demo } from "@/components/santa/Demo";
import { Architecture } from "@/components/santa/Architecture";
import { BusinessValue } from "@/components/santa/BusinessValue";
import { Pitch } from "@/components/santa/Pitch";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground antialiased font-sans">
    <Navbar />
    <Hero />
    <Problem />
    <HowItWorks />
    <Demo />
    <Architecture />
    <BusinessValue />
    <Pitch />
    <footer className="py-8 border-t border-border/60 text-center text-xs font-mono text-muted-foreground">
      Bhukkad Santa · concept prototype · not affiliated with Swiggy
    </footer>
  </main>
);

export default Index;
