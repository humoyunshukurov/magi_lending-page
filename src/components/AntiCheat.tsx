import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "../useInView";
import { Reveal } from "./Reveal";

type Kind = "ok" | "block" | "flag";

const EVENTS: Array<{ t: string; kind: Kind; text: string }> = [
  { t: "09:02:14", kind: "ok", text: "ID number matched · face verified against reference photo" },
  { t: "09:02:15", kind: "ok", text: "Locked to full screen · 1 display connected" },
  { t: "09:14:37", kind: "block", text: "Paste from outside the exam blocked · 214 characters" },
  { t: "09:21:02", kind: "block", text: "Developer tools shortcut blocked · Ctrl+Shift+I" },
  { t: "09:26:48", kind: "flag", text: "Phone detected in camera frame · photo saved" },
  { t: "09:33:55", kind: "flag", text: "AnyDesk started during the exam · flagged" },
  { t: "09:40:19", kind: "flag", text: "Second person in camera frame · photo saved" },
  { t: "09:44:02", kind: "ok", text: "Submitted · log hash chain verified" },
];

const DOT: Record<Kind, string> = {
  ok: "bg-magi-success",
  block: "bg-magi-primary",
  flag: "bg-red-600",
};

const LABEL: Record<Kind, string> = {
  ok: "OK",
  block: "BLOCKED",
  flag: "FLAGGED",
};

const STEP_MS = 1100;
const HOLD_MS = 3500;

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

function SessionLog() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setShown(EVENTS.length);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const next = (n: number) => {
      if (n > EVENTS.length) {
        timer = setTimeout(() => {
          setShown(0);
          next(1);
        }, HOLD_MS);
        return;
      }
      setShown(n);
      timer = setTimeout(() => next(n + 1), STEP_MS);
    };
    next(1);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref} className="glass-card overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-magi-border/60 text-xs">
        <span className="font-semibold text-magi-primary">Session log · Final exam · Student 40219</span>
        <span className="flex items-center gap-1.5 text-magi-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 ping-soft" />
          Live
        </span>
      </div>
      <ul className="px-5 py-4 space-y-2.5 font-mono text-[12px] sm:text-xs min-h-[17rem]">
        {EVENTS.slice(0, shown).map((e) => (
          <li key={e.t} className="log-in flex items-start gap-3">
            <span className="text-magi-secondary shrink-0 tabular-nums">{e.t}</span>
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${DOT[e.kind]}`} />
            <span className="text-magi-primary">
              <span className="font-semibold text-magi-secondary mr-1.5">{LABEL[e.kind]}</span>
              {e.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AntiCheat() {
  return (
    <section id="desktop-app" className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary mb-4">The desktop app</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-magi-primary tracking-tight leading-tight">
            An exam room, not a browser tab.
          </h2>
          <p className="mt-5 text-base text-magi-secondary font-light leading-relaxed max-w-lg">
            Most LMS and ERP systems collect an answer and hope for the best. MAGI runs the exam inside its own locked
            desktop app - it blocks the usual ways to cheat, and anything it can't block, it records.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <SessionLog />
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROTECTIONS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="glass-card p-6 h-full transition-colors hover:border-magi-primary">
              <svg
                className="w-5 h-5 text-magi-primary mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d={p.icon} />
              </svg>
              <h3 className="text-base font-bold text-magi-primary font-outfit mb-1.5">{p.title}</h3>
              <p className="text-sm text-magi-secondary font-light leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
