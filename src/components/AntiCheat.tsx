import { Reveal } from "./Reveal";

const PROTECTIONS = [
  {
    title: "Locked exam session",
    body: "Full screen, no minimizing, no switching apps. Leaving the window is recorded with a screenshot.",
    icon: "M4 5h16v11H4zM9 20h6M12 16v4",
  },
  {
    title: "Identity at the door",
    body: "The student types their ID number and their face is matched against a reference photo.",
    icon: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5",
  },
  {
    title: "Camera and microphone watch",
    body: "A phone, a second person, looking away or talking nearby is flagged with a photo.",
    icon: "M4 7h11v10H4zM15 10l5-3v10l-5-3",
  },
  {
    title: "Remote access and recorders",
    body: "TeamViewer, AnyDesk, Parsec, OBS and similar tools hold the exam until they're closed.",
    icon: "M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z",
  },
  {
    title: "Clipboard and dev-tools lockdown",
    body: "Text pasted in from outside is blocked, and the developer tools never open.",
    icon: "M9 4h6v3H9zM7 6H5v14h14V6h-2M9 13l2 2 4-4",
  },
  {
    title: "Tamper-evident record",
    body: "Every event is hash-chained, so a log edited after the fact no longer verifies.",
    icon: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  },
];

export function AntiCheat() {
  return (
    <section id="desktop-app" className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary mb-4">The desktop app</p>
        <h2 className="text-3xl sm:text-5xl font-bold font-outfit text-magi-primary tracking-tight leading-tight">
          An exam room, not a browser tab.
        </h2>
        <p className="mt-5 text-base text-magi-secondary font-light leading-relaxed">
          Most LMS and ERP systems collect an answer and hope for the best. MAGI runs the exam inside its own locked
          desktop app - it blocks the usual ways to cheat, and anything it can't block, it records.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROTECTIONS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="group glass-card p-6 h-full transition-all duration-300 hover:border-magi-primary hover:-translate-y-1 hover:shadow-[4px_4px_0_#0a0a0a]">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg border border-magi-border mb-4 transition-colors group-hover:bg-magi-primary group-hover:text-white group-hover:border-magi-primary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={p.icon} />
                </svg>
              </span>
              <h3 className="text-base font-bold text-magi-primary font-outfit mb-1.5">{p.title}</h3>
              <p className="text-sm text-magi-secondary font-light leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
