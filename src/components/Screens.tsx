import { Reveal } from "./Reveal";

type Shot = {
  src: string;
  width: number;
  height: number;
  app: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

const SHOTS: Shot[] = [
  {
    src: "/screens/admin-activity.png",
    width: 2240,
    height: 1672,
    app: "MAGI Director · Attempt #85",
    eyebrow: "What the professor sees",
    title: "Every attempt to cheat, counted and timestamped.",
    body: "After the exam, each submission opens with its activity report. Fourteen kinds of violation are tracked separately, and anything suspicious is called out before the professor reads a single answer.",
    points: [
      "Pasting from outside, leaving the window, a phone or a second person on camera",
      "An incident log with the exact time and the question the student was on",
      "The identity photo taken at the start of the exam, next to the ID number typed",
    ],
  },
  {
    src: "/screens/admin-forensics.png",
    width: 2240,
    height: 2194,
    app: "MAGI Director · Writing forensics",
    eyebrow: "How the answer was written",
    title: "Not just what the answer says - how it got there.",
    body: "Every answer comes with the trail of how it was typed. A real answer has corrections, pauses and a rhythm; a pasted or dictated one doesn't.",
    points: [
      "Volume, rhythm and editing scored separately, each with a verdict",
      "Raw counts: typed versus pasted, paste ratio, corrections, freezes",
      "Total session time against active typing time, plus an AI-probability estimate",
    ],
  },
  {
    src: "/screens/student-assignment.png",
    width: 1888,
    height: 1368,
    app: "MAGI Student · Assignment",
    eyebrow: "What the student sees",
    title: "There's no way to take the exam in a browser.",
    body: "The student portal shows what's assigned, but the exam itself only opens inside the MAGI desktop app - one click hands the student straight to it, already on the right exam.",
    points: [
      "Deadlines, marks and passing score up front",
      "Opens the locked desktop app directly on this exam",
      "A download link for students who don't have the app yet",
    ],
  },
  {
    src: "/screens/student-dashboard.png",
    width: 2880,
    height: 1260,
    app: "MAGI Student · Dashboard",
    eyebrow: "Everything in one place",
    title: "Classes, deadlines and grades for every student.",
    body: "Students see what's enrolled, what's due and what's been graded - the same records the professor works from, so there's never a question about what was submitted.",
    points: ["Enrolled classes and assigned exams", "Submitted and graded counts at a glance", "Feedback and a class rating once grades are out"],
  },
];

function Frame({ shot }: { shot: Shot }) {
  return (
    <div className="group rounded-xl border border-magi-border bg-magi-surface overflow-hidden shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-magi-border bg-white">
        <span className="w-2.5 h-2.5 rounded-full bg-magi-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-magi-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-magi-border" />
        <span className="ml-3 text-[11px] font-medium text-magi-secondary truncate">{shot.app}</span>
      </div>
      <img
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.title}
        loading="lazy"
        className="block w-full h-auto grayscale transition-[filter] duration-700 group-hover:grayscale-0"
      />
    </div>
  );
}

export function Screens() {
  return (
    <section id="inside" className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <Reveal className="max-w-2xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary mb-4">Inside MAGI</p>
        <h2 className="text-3xl sm:text-5xl font-bold font-outfit text-magi-primary tracking-tight leading-tight">
          The real product, not a mockup.
        </h2>
      </Reveal>

      <div className="space-y-24 sm:space-y-32">
        {SHOTS.map((shot, i) => (
          <div key={shot.src} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <Frame shot={shot} />
            </Reveal>
            <Reveal delay={120} className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-xs font-mono text-magi-secondary">
                {String(i + 1).padStart(2, "0")} · {shot.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold font-outfit text-magi-primary tracking-tight leading-snug">
                {shot.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-magi-secondary font-light leading-relaxed">{shot.body}</p>
              <ul className="mt-6 space-y-3">
                {shot.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-magi-primary">
                    <span className="mt-2 w-3 h-px bg-magi-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
