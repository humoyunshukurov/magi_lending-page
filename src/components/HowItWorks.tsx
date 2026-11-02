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
      <h2 className="text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-12">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {STEPS.map((s) => (
          <div key={s.n}>
            <p className="text-sm font-mono text-magi-secondary mb-3">{s.n}</p>
            <h3 className="text-lg font-bold text-magi-primary font-outfit mb-2">{s.title}</h3>
            <p className="text-sm text-magi-secondary font-light leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
