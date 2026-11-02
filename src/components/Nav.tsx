import { useState } from "react";
import { DOWNLOAD } from "../links";

const SECTIONS = [
  { href: "#desktop-app", label: "Anti-cheating" },
  { href: "#inside", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#institutions", label: "For institutions" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href={DOWNLOAD} className="block py-3 text-base text-magi-primary">
            Download the app
          </a>
        </div>
      )}
    </header>
  );
}
