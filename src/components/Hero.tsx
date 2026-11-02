export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 sm:pt-20 pb-10 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit tracking-tight text-magi-primary leading-tight">
        Academic Integrity, Proven by Process.
      </h1>
      <p className="mt-6 text-base sm:text-lg text-magi-secondary font-light max-w-xl mx-auto leading-relaxed">
        MAGI gives professors forensic-level insight into how a student actually worked - not just the
        answer they turned in.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a
          href="#demo"
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-magi-primary text-white font-semibold text-sm transition-all hover:bg-magi-hover"
        >
          Talk to us
        </a>
        <a
          href="#"
          className="w-full sm:w-auto px-6 py-3 rounded-lg border border-magi-border text-magi-primary font-semibold text-sm transition-colors hover:border-magi-primary"
        >
          I&apos;m a student
        </a>
      </div>
    </section>
  );
}
