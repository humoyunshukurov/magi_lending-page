export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 sm:pt-20 pb-10 text-center">
      <p className="fade-up text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary">
        Proctored desktop exams · Forensic grading
      </p>
      <h1
        className="fade-up mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit tracking-tight text-magi-primary leading-tight"
        style={{ animationDelay: "120ms" }}
      >
        Academic Integrity, Proven by Process.
      </h1>
      <p
        className="fade-up mt-6 text-base sm:text-lg text-magi-secondary font-light max-w-2xl mx-auto leading-relaxed"
        style={{ animationDelay: "240ms" }}
      >
        Not another LMS. Exams run inside a locked desktop app that blocks the usual ways to cheat and records the
        rest - so professors see how the work was done, not just the answer.
      </p>
      <div
        className="fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        style={{ animationDelay: "360ms" }}
      >
        <a
          href="#demo"
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-magi-primary text-white font-semibold text-sm transition-all hover:bg-magi-hover"
        >
          Talk to us
        </a>
        <a
          href="#desktop-app"
          className="w-full sm:w-auto px-6 py-3 rounded-lg border border-magi-border text-magi-primary font-semibold text-sm transition-colors hover:border-magi-primary"
        >
          See the anti-cheating
        </a>
      </div>
    </section>
  );
}
