import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "../useInView";

// a static mock of the forensic dossier a professor actually sees - stands in for a product
// screenshot without needing one
const BARS = [
  18, 32, 40, 28, 52, 44, 60, 38, 55, 70, 62, 48, 58, 72, 50, 66, 34, 42, 76, 64, 58, 46, 68, 52, 40, 30, 54, 62,
  48, 38, 44,
];

const ANSWER =
  "Elasticity measures how quantity demanded responds to a change in price. When demand is elastic, a small price increase leads to a proportionally larger drop in quantity.";
const KEYSTROKES = 6184;
const TYPE_MS = 22;

export function DossierDemo() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [typed, setTyped] = useState(0);
  const [keys, setKeys] = useState(0);
  const done = typed >= ANSWER.length;

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setTyped(ANSWER.length);
      setKeys(KEYSTROKES);
      return;
    }
    const typing = setInterval(() => setTyped((n) => (n >= ANSWER.length ? n : n + 1)), TYPE_MS);
    const total = ANSWER.length * TYPE_MS;
    const start = performance.now();
    let frame = 0;
    const count = (now: number) => {
      const p = Math.min(1, (now - start) / total);
      setKeys(Math.round(KEYSTROKES * p));
      if (p < 1) frame = requestAnimationFrame(count);
    };
    frame = requestAnimationFrame(count);
    return () => {
      clearInterval(typing);
      cancelAnimationFrame(frame);
    };
  }, [inView]);

  const metrics = [
    { label: "Keystrokes", value: keys.toLocaleString("en-US") },
    { label: "Paste events", value: "0" },
    { label: "Window focus lost", value: "1 · 4s" },
    { label: "Camera", value: "Present" },
    { label: "Sync", value: done ? "Complete" : "Syncing…" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <div
        ref={ref}
        className="fade-up max-w-4xl mx-auto glass-card overflow-hidden"
        style={{ animationDelay: "480ms" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-4 sm:px-6 pt-5 text-xs text-magi-secondary">
          <span>Dossier · ECON 201 · Midterm · Student 40219</span>
          <span
            className={`flex items-center gap-1.5 font-medium transition-colors duration-500 ${done ? "text-magi-primary" : "text-magi-secondary"}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${done ? "bg-magi-primary ping-soft" : "bg-magi-border"}`} />
            {done ? "Log verified" : "Recording…"}
          </span>
        </div>

        <div className="px-4 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2 space-y-3">
            <p className="text-sm font-bold text-magi-primary">Question 2 - Explain price elasticity of demand.</p>
            <p className="text-sm text-magi-secondary font-light leading-relaxed min-h-[4.5rem]">
              {ANSWER.slice(0, typed)}
              {!done && <span className="caret inline-block w-px h-4 align-middle bg-magi-primary ml-0.5" />}
            </p>
            <div>
              <p className="text-xs text-magi-secondary mb-2">Typing activity · 42 min</p>
              <div className="flex items-end gap-1 h-12">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 bg-magi-border rounded-sm ${inView ? "bar-grow" : "opacity-0"}`}
                    style={{ height: `${h}%`, animationDelay: `${i * 45}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <dl className="space-y-3 sm:border-l sm:border-magi-border sm:pl-6">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between gap-3">
                <dt className="text-xs text-magi-secondary">{m.label}</dt>
                <dd className="text-sm font-semibold text-magi-primary tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
