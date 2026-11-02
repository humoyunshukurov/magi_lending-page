// a static mock of the forensic dossier a professor actually sees - stands in for a product
// screenshot without needing one
const BARS = [
  18, 32, 40, 28, 52, 44, 60, 38, 55, 70, 62, 48, 58, 72, 50, 66, 34, 42, 76, 64, 58, 46, 68, 52, 40, 30, 54, 62,
  48, 38, 44,
];

const METRICS: Array<{ label: string; value: string }> = [
  { label: "Keystrokes", value: "6,184" },
  { label: "Paste events", value: "0" },
  { label: "Window focus lost", value: "1 · 4s" },
  { label: "Camera", value: "Present" },
  { label: "Sync", value: "Complete" },
];

export function DossierDemo() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-5 text-xs text-magi-secondary">
          <span>Dossier · ECON 201 · Midterm · Student 40219</span>
          <span className="flex items-center gap-1.5 text-magi-success font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-magi-success" />
            Log verified
          </span>
        </div>

        <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2 space-y-3">
            <p className="text-sm font-bold text-magi-primary">Question 2 - Explain price elasticity of demand.</p>
            <p className="text-sm text-magi-secondary font-light leading-relaxed">
              Elasticity measures how quantity demanded responds to a change in price. When demand is elastic, a
              small price increase...
            </p>
            <div>
              <p className="text-xs text-magi-secondary mb-2">Typing activity · 42 min</p>
              <div className="flex items-end gap-1 h-12">
                {BARS.map((h, i) => (
                  <div key={i} className="flex-1 bg-magi-border rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <dl className="space-y-3 sm:border-l sm:border-magi-border sm:pl-6">
            {METRICS.map((m) => (
              <div key={m.label} className="flex items-center justify-between gap-3">
                <dt className="text-xs text-magi-secondary">{m.label}</dt>
                <dd className="text-sm font-semibold text-magi-primary">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
