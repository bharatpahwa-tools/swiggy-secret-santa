import { Gift } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-orange-grad rounded-xl blur-md opacity-60" />
      <div className="relative size-9 rounded-xl bg-orange-grad grid place-items-center shadow-glow">
        <Gift className="size-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
    <div className="leading-none">
      <div className="font-display font-bold text-lg tracking-tight">Bhukkad<span className="text-primary">.</span>Santa</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">by Swiggy Builders Club</div>
    </div>
  </div>
);