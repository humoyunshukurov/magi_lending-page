import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Professor assigns",
    body: "An exam or homework is created with a deadline and assigned to a class.",
  },
  {
    n: "02",
    title: "Student completes",
    body: "Work happens inside the secure desktop app, which records the writing process.",
  },
  {
    n: "03",
    title: "Professor reviews",
    body: "Each submission arrives with a full forensic dossier, not only a final answer.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <Reveal>
        <h2 className="text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-12">How it works</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <p className="text-sm font-mono text-magi-secondary mb-3">{s.n}</p>
            <div className="h-px bg-magi-border mb-5" />
            <h3 className="text-lg font-bold text-magi-primary font-outfit mb-2">{s.title}</h3>
            <p className="text-sm text-magi-secondary font-light leading-relaxed">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
