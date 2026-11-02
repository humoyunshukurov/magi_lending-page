const FEATURES = [
  { title: "Tamper-evident log", body: "Every keystroke, paste and window change is hash-chained - edited after the fact, it shows." },
  { title: "Live proctoring", body: "Camera and microphone checks run through the exam, not just at the door." },
  { title: "Works offline", body: "The exam runs locally and syncs the moment a connection comes back." },
  { title: "Exams and homework", body: "The same process tracking applies whether it's timed or take-home." },
];

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <h2 className="text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-12">Why it matters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="glass-card p-6">
            <h3 className="text-base font-bold text-magi-primary font-outfit mb-1.5">{f.title}</h3>
            <p className="text-sm text-magi-secondary font-light leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
