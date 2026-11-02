import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "../useInView";

type SceneId = "paste" | "leave" | "remote" | "phone" | "person" | "devtools" | "screen";

const SCENES: Array<{ id: SceneId; label: string; keys?: string[]; stamp: string; note: string; cursor: [number, number] }> = [
  { id: "paste", label: "Copy-paste", keys: ["Ctrl", "V"], stamp: "Paste blocked", note: "Text copied from outside the exam never reaches the answer.", cursor: [40, 58] },
  { id: "leave", label: "Switching apps", keys: ["Alt", "Tab"], stamp: "Window left · screenshot taken", note: "Leaving the exam window is recorded with a picture of the screen.", cursor: [58, 93] },
  { id: "remote", label: "Remote access", stamp: "Remote access detected", note: "AnyDesk, TeamViewer, Parsec - someone else can't take the exam for them.", cursor: [30, 93] },
  { id: "phone", label: "Phone", stamp: "Phone in frame", note: "The camera watches the whole exam, not just the start.", cursor: [70, 40] },
  { id: "person", label: "Second person", stamp: "Second person in frame", note: "Someone sitting next to the student is flagged with a photo.", cursor: [70, 40] },
  { id: "devtools", label: "Dev tools", keys: ["F12"], stamp: "Dev tools blocked", note: "The developer tools never open inside the exam.", cursor: [50, 45] },
  { id: "screen", label: "Second screen", stamp: "Second screen detected", note: "Plugging in another display is caught the moment it happens.", cursor: [84, 20] },
];

const SCENE_MS = 3800;
const STAMP_AT = 1500;

function Person({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 30" className={className} fill="currentColor">
      <circle cx="20" cy="11" r="6" />
      <path d="M8 30c1.5-7 6-10 12-10s10.5 3 12 10z" />
    </svg>
  );
}

function Cursor() {
  return (
    <svg viewBox="0 0 16 22" className="w-4 h-5 drop-shadow">
      <path d="M1 1l13 12h-7l4 7-3 1.5-4-7-3 4z" fill="#fff" stroke="#000" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function CheatScene() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const [step, setStep] = useState(0);
  const [stamped, setStamped] = useState(false);
  const [playing, setPlaying] = useState(true);
  const still = typeof window !== "undefined" && reducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (still) {
      setStamped(true);
      return;
    }
    setStamped(false);
    const stamp = setTimeout(() => setStamped(true), STAMP_AT);
    const next = playing ? setTimeout(() => setStep((s) => (s + 1) % SCENES.length), SCENE_MS) : undefined;
    return () => {
      clearTimeout(stamp);
      clearTimeout(next);
    };
  }, [step, inView, playing, still]);

  const scene = SCENES[step];
  const is = (id: SceneId) => scene.id === id;

  return (
    <div ref={ref}>
      {/* the screen */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-black rounded-2xl p-2 sm:p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="relative h-full rounded-lg overflow-hidden bg-neutral-900">
          {/* exam window */}
          <div
            className={`absolute inset-x-[3%] top-[4%] bottom-[14%] bg-white rounded-md overflow-hidden transition-all duration-700 ${
              is("leave") && !stamped ? "scale-[0.92] opacity-40" : ""
            }`}
          >
            <div className="h-[9%] min-h-6 border-b border-neutral-200 flex items-center gap-1.5 px-3">
              <span className="w-2 h-2 rounded-full bg-neutral-300" />
              <span className="w-2 h-2 rounded-full bg-neutral-300" />
              <span className="w-2 h-2 rounded-full bg-neutral-300" />
              <span className="ml-3 text-[9px] sm:text-[11px] font-semibold text-neutral-500 tracking-wide">MAGI Desktop · Final exam · 38:12 left</span>
            </div>
            <div className="p-[4%] pr-[26%] space-y-2 sm:space-y-3">
              <p className="text-[10px] sm:text-sm font-bold text-black">Question 2 - Explain price elasticity of demand.</p>
              <div className="rounded border border-neutral-300 p-2 sm:p-3 space-y-1.5 sm:space-y-2 relative">
                <p className="text-[9px] sm:text-xs text-neutral-700 leading-relaxed">
                  Elasticity measures how quantity demanded responds to a change in price. When demand is elastic
                  <span className="caret inline-block w-px h-3 align-middle bg-black ml-0.5" />
                </p>
                <div className="h-1.5 sm:h-2 w-11/12 bg-neutral-100 rounded" />
                <div className="h-1.5 sm:h-2 w-3/4 bg-neutral-100 rounded" />
                <div className="h-1.5 sm:h-2 w-5/6 bg-neutral-100 rounded" />
              </div>
              <div className="pt-[3%] space-y-2 opacity-60">
                <p className="text-[10px] sm:text-sm font-bold text-neutral-400">Question 3 - Give one real-world example of inelastic demand.</p>
                <div className="rounded border border-neutral-200 h-10 sm:h-20" />
              </div>
            </div>

            {/* camera */}
            <div className="absolute top-[13%] right-[3%] w-[21%] aspect-[4/3] bg-neutral-800 rounded overflow-hidden text-neutral-300">
              <Person className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%]" />
              <div
                className={`absolute bottom-0 left-[2%] w-[45%] text-neutral-500 transition-all duration-700 ${
                  is("person") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
              >
                <Person />
              </div>
              <div
                className={`absolute right-[8%] w-[16%] aspect-[1/2] rounded-[3px] border-2 border-white bg-black transition-all duration-700 ${
                  is("phone") ? "bottom-[10%] opacity-100" : "-bottom-1/2 opacity-0"
                }`}
              />
              {(is("phone") || is("person")) && !stamped && <div className="scanline absolute inset-x-0 h-px bg-white/80" />}
              <span className="absolute top-1 left-1.5 flex items-center gap-1 text-[7px] sm:text-[9px] text-white/80">
                <span className="w-1 h-1 rounded-full bg-white ping-mono" />
                REC
              </span>
            </div>

            {/* clipboard trying to get in */}
            {is("paste") && (
              <div
                className={`absolute left-[34%] top-[50%] max-w-[46%] bg-black text-white text-[9px] sm:text-xs px-2.5 py-1.5 sm:px-3 sm:py-2 rounded shadow-lg ${
                  stamped ? "shake opacity-0 transition-opacity duration-700 delay-300" : "drop-in"
                }`}
              >
                <span className="opacity-60">Clipboard · </span>&ldquo;Price elasticity of demand is defined as the…&rdquo;
              </div>
            )}

            {/* dev tools trying to open */}
            <div
              className={`absolute inset-x-0 bottom-0 h-[42%] bg-neutral-900 text-neutral-400 font-mono text-[8px] sm:text-[10px] p-2 sm:p-3 transition-transform duration-500 ${
                is("devtools") && !stamped ? "translate-y-[55%]" : "translate-y-full"
              }`}
            >
              Elements · Console · Sources · Network
            </div>
          </div>

          {/* taskbar */}
          <div className="absolute bottom-0 inset-x-0 h-[11%] bg-black/90 border-t border-white/10 flex items-center gap-2 sm:gap-3 px-3">
            <span className="h-[55%] aspect-square rounded bg-white" />
            <span className="h-[55%] aspect-square rounded bg-white/20" />
            <span className="h-[55%] aspect-square rounded bg-white/20" />
            <span
              className={`h-[55%] px-2 rounded bg-white text-black text-[8px] sm:text-[10px] font-bold flex items-center transition-all duration-500 ${
                is("remote") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              AnyDesk
            </span>
          </div>

          {/* second display notification */}
          <div
            className={`absolute top-[6%] right-[3%] bg-white text-black rounded-md shadow-xl px-3 py-2 text-[9px] sm:text-xs flex items-center gap-2 transition-all duration-500 ${
              is("screen") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[120%]"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 5h18v11H3zM8 20h8M12 16v4" />
            </svg>
            <span>
              <b>Display 2</b> connected
            </span>
          </div>

          {/* key presses */}
          {scene.keys && !stamped && (
            <div key={`keys-${step}`} className="absolute bottom-[16%] left-1/2 -translate-x-1/2 flex items-center gap-1.5 drop-in">
              {scene.keys.map((k, i) => (
                <span key={k} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white text-xs font-bold">+</span>}
                  <kbd
                    className="key-press min-w-8 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md bg-white text-black text-[10px] sm:text-sm font-bold font-mono border-2 border-black"
                    style={{ animationDelay: `${300 + i * 120}ms` }}
                  >
                    {k}
                  </kbd>
                </span>
              ))}
            </div>
          )}

          {/* cursor */}
          <div
            className="absolute z-20 transition-all duration-1000 ease-in-out"
            style={{ left: `${scene.cursor[0]}%`, top: `${scene.cursor[1]}%` }}
          >
            <Cursor />
          </div>

          {/* screenshot flash */}
          {is("leave") && stamped && <div key={`flash-${step}`} className="flash absolute inset-0 z-30 bg-white pointer-events-none" />}

          {/* the stamp */}
          {stamped && (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/10 pointer-events-none">
              <div
                key={`stamp-${step}`}
                className="stamp-in bg-white border-[3px] border-black px-4 py-2 sm:px-7 sm:py-3.5 shadow-[6px_6px_0_#000] text-center"
              >
                <p className="text-[9px] sm:text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">MAGI</p>
                <p className="text-sm sm:text-2xl font-extrabold font-outfit uppercase tracking-wider text-black whitespace-nowrap">
                  {scene.stamp}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* caption + chapters */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div key={`cap-${step}`} className="fade-up">
          <p className="text-xs font-mono text-magi-secondary">
            {String(step + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}
          </p>
          <p className="mt-1 text-lg sm:text-xl font-bold font-outfit text-magi-primary">They try: {scene.label.toLowerCase()}.</p>
          <p className="text-sm text-magi-secondary font-light">{scene.note}</p>
        </div>
        {!still && (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="self-start sm:self-auto px-3 py-1.5 rounded-lg border border-magi-border text-xs font-semibold text-magi-primary hover:border-magi-primary transition-colors"
          >
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStep(i)}
            aria-label={`Show: ${s.label}`}
            className="group text-left"
          >
            <span className="block h-1 bg-neutral-200 rounded-full overflow-hidden">
              <span
                key={i === step ? `p-${step}-${playing}` : `p-${i}`}
                className={`block h-full bg-black origin-left ${
                  i < step ? "" : i === step ? (playing && !still ? "progress" : "") : "scale-x-0"
                }`}
                style={i === step && playing && !still ? { animationDuration: `${SCENE_MS}ms` } : undefined}
              />
            </span>
            <span
              className={`hidden md:block mt-2 text-[11px] transition-colors ${
                i === step ? "text-magi-primary font-semibold" : "text-magi-secondary group-hover:text-magi-primary"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
