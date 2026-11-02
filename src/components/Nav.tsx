import { useEffect, useRef, useState } from "react";
import { DIRECTOR, DOWNLOAD, STUDENT_PORTAL } from "../links";

const SECTIONS = [
  { href: "#desktop-app", label: "Anti-cheating" },
  { href: "#inside", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#institutions", label: "For institutions" },
];

const SIGN_IN = [
  { href: `${STUDENT_PORTAL}/login`, label: "Student portal", note: "Exams, grades, the desktop app" },
  { href: `${DIRECTOR}/login`, label: "MAGI Director", note: "For professors and staff" },
];

export function Nav() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!signInOpen) return;
    const close = (e: MouseEvent) => {
      if (!signInRef.current?.contains(e.target as Node)) setSignInOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSignInOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [signInOpen]);

  return (
    <header className="sticky top-0 z-50 bg-magi-white border-b border-magi-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="font-outfit font-extrabold text-lg tracking-tight shrink-0">
          MAGI
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-magi-secondary">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="hover:text-magi-primary transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div ref={signInRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setSignInOpen((o) => !o)}
              aria-expanded={signInOpen}
              className="flex items-center gap-1 text-sm text-magi-secondary hover:text-magi-primary transition-colors"
            >
              Sign in
              <svg className={`w-3.5 h-3.5 transition-transform ${signInOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {signInOpen && (
              <div className="absolute right-0 mt-3 w-64 glass-card p-1.5 shadow-lg">
                {SIGN_IN.map((s) => (
                  <a key={s.href} href={s.href} className="block px-3 py-2.5 rounded-md hover:bg-magi-surface transition-colors">
                    <span className="block text-sm font-semibold text-magi-primary">{s.label}</span>
                    <span className="block text-xs text-magi-secondary">{s.note}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#demo"
            className="px-3 sm:px-4 py-2 rounded-lg bg-magi-primary text-white text-sm font-semibold transition-all hover:bg-magi-hover whitespace-nowrap"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden -mr-1 p-2 text-magi-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-magi-border bg-magi-white px-4 py-3">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base text-magi-primary border-b border-magi-border/60"
            >
              {s.label}
            </a>
          ))}
          <p className="pt-4 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary">Sign in</p>
          {SIGN_IN.map((s) => (
            <a key={s.href} href={s.href} className="block py-2.5 text-base text-magi-primary">
              {s.label}
            </a>
          ))}
          <a href={DOWNLOAD} className="block py-2.5 text-base text-magi-primary">
            Download the app
          </a>
        </div>
      )}
    </header>
  );
}
