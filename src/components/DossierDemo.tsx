import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "../useInView";

// a static example of the writing-forensics panel professors see for every attempt
const SCORES = [
  { abbr: "VOL", title: "Volume score", description: "Manually typed characters versus pasted ones", score: 100 },
  { abbr: "RHY", title: "Rhythm score", description: "Natural variance in keystroke timing", score: 94 },
  { abbr: "EDT", title: "Editing score", description: "Correction and revision behavior", score: 66 },
];

const RAW = [
  { label: "Characters typed", value: 6184, format: (n: number) => n.toLocaleString("en-US") },
  { label: "Characters pasted", value: 0, format: String },
  { label: "Paste ratio", value: 0, format: (n: number) => `${n}%` },
  { label: "Correction keystrokes", value: 412, format: String },
  { label: "Paste events", value: 0, format: String },
  { label: "Total session duration", value: 42, format: (n: number) => `${n}m` },
  { label: "Active typing time", value: 31, format: (n: number) => `${n}m` },
];

const verdict = (s: number) => (s >= 70 ? "Strong" : s >= 40 ? "Moderate" : "Weak");
const COUNT_MS = 1400;

export function DossierDemo() {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) return setP(1);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      setP(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <div ref={ref} className="fade-up max-w-4xl mx-auto glass-card overflow-hidden" style={{ animationDelay: "480ms" }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 sm:px-8 py-4 text-xs text-magi-secondary">
          <span>Dossier · ECON 201 · Midterm · Student 40219</span>
          <span className="flex items-center gap-1.5 font-medium text-magi-primary">
            <span className={`w-1.5 h-1.5 rounded-full bg-magi-primary ${p === 1 ? "ping-soft" : ""}`} />
            {p === 1 ? "Log verified" : "Analyzing…"}
          </span>
        </div>

        <div className="px-5 sm:px-8 py-3 bg-magi-surface border-y border-magi-border text-[11px] font-semibold uppercase tracking-[0.2em] text-magi-secondary">
          Behavioral analysis · Sub-scores
        </div>
        <div className="divide-y divide-magi-border">
          {SCORES.map((s) => {
            const shown = Math.round(s.score * p);
            const strong = s.score >= 70;
            return (
              <div
                key={s.abbr}
                className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,1fr)_8rem] items-center gap-x-4 gap-y-2 px-5 sm:px-8 py-5"
              >
                <span className="text-[11px] font-bold tracking-widest text-magi-secondary">{s.abbr}</span>
                <div>
                  <p className="text-sm font-semibold text-magi-primary">{s.title}</p>
                  <p className="text-xs text-magi-secondary font-light mt-0.5">{s.description}</p>
                </div>
                <div className="col-start-2 sm:col-start-auto h-1.5 rounded-full bg-magi-surface overflow-hidden">
                  <div
                    className={`h-full rounded-full ${strong ? "bg-magi-primary" : "bg-magi-secondary"}`}
                    style={{ width: `${s.score * p}%` }}
                  />
                </div>
                <div className="col-start-2 sm:col-start-auto flex items-baseline sm:justify-end gap-3">
                  <span className="text-2xl font-bold font-outfit tabular-nums text-magi-primary w-12 text-right">{shown}</span>
                  <span className={`text-[11px] font-bold uppercase tracking-widest ${strong ? "text-magi-primary" : "text-magi-secondary"}`}>
                    {verdict(s.score)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 sm:px-8 py-3 bg-magi-surface border-y border-magi-border text-[11px] font-semibold uppercase tracking-[0.2em] text-magi-secondary">
          Writing statistics · Raw data
        </div>
        <dl className="divide-y divide-magi-border">
          {RAW.map((r) => (
            <div key={r.label} className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[16rem_1fr] gap-4 px-5 sm:px-8 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-magi-secondary">{r.label}</dt>
              <dd className="text-sm font-mono font-semibold tabular-nums text-magi-primary">{r.format(Math.round(r.value * p))}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
