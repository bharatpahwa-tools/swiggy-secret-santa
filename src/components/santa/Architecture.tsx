const layers = [
  { label: "Identity Layer", value: "Swiggy Auth + Group Consent", tag: "OAUTH" },
  { label: "Logic Engine", value: "n8n · State machine for shuffle", tag: "WORKFLOW" },
  { label: "Intelligence", value: "AWS Bedrock · Claude 3.5 / Gemini 3", tag: "LLM" },
  { label: "Tooling", value: "Swiggy MCP · get_order_history, search_sku", tag: "MCP" },
  { label: "Safety Filter", value: "LLM allergy + dietary cross-check", tag: "GUARD" },
  { label: "Delivery Monitor", value: "EchoPort CLI · real-time tracing", tag: "OBS" },
];

export const Architecture = () => (
  <section className="py-12 lg:py-12 border-t border-border/60">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">§ 05 — Architecture</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
            Built on the rails Swiggy already owns.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No new SKUs. No new logistics. Just a thin agentic layer over the
            existing MCP, dark-store inventory, and delivery network.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-2 font-mono text-sm">
          {layers.map((l, i) => (
            <div
              key={l.label}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-colors"
            >
              <span className="text-muted-foreground text-xs">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="text-foreground font-semibold">{l.label}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{l.value}</div>
              </div>
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                {l.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);