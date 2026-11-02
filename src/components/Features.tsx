import { Reveal } from "./Reveal";

const FEATURES = [
  { title: "The process, not just the answer", body: "Keystroke, pause and revision patterns are summarized for every answer a student writes." },
  { title: "Evidence attached to every flag", body: "A flagged event comes with the photo or screenshot taken at that moment - no guesswork." },
  { title: "Works offline", body: "The exam runs locally and syncs the moment a connection comes back." },
  { title: "Exams and homework", body: "The same tracking applies whether it's a timed exam or a take-home assignment." },
];

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <Reveal>
        <h2 className="text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-12">Why it matters</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-base font-bold text-magi-primary font-outfit mb-1.5">{f.title}</h3>
              <p className="text-sm text-magi-secondary font-light leading-relaxed">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
