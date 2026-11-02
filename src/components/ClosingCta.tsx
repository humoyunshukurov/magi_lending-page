import { Reveal } from "./Reveal";

export function ClosingCta() {
  return (
    <section id="demo" className="max-w-4xl mx-auto px-6 py-20 border-t border-magi-border text-center">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-6">
          See it on your own exam.
        </h2>
        <a
          href="mailto:hello@trymagi.org"
          className="inline-block px-6 py-3 rounded-lg bg-magi-primary text-white font-semibold text-sm transition-all hover:bg-magi-hover"
        >
          Request a demo
        </a>
      </Reveal>
    </section>
  );
}
