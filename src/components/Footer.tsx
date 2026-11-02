import { DOWNLOAD } from "../links";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "#desktop-app", label: "Anti-cheating" },
      { href: "#inside", label: "Inside MAGI" },
      { href: "#how-it-works", label: "How it works" },
      { href: DOWNLOAD, label: "Download the app" },
    ],
  },
  {
    title: "Institutions",
    links: [
      { href: "#institutions", label: "For institutions" },
      { href: "#demo", label: "Request a demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-magi-border">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <span className="font-outfit font-extrabold text-lg tracking-tight">MAGI</span>
          <p className="mt-2 text-xs text-magi-secondary font-light leading-relaxed max-w-[14rem]">
            Academic integrity, proven by process.
          </p>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magi-secondary mb-3">{c.title}</p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-magi-primary hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-magi-border">
        <p className="max-w-6xl mx-auto px-6 py-5 text-xs text-magi-secondary font-light">
          &copy; {new Date().getFullYear()} MAGI University
        </p>
      </div>
    </footer>
  );
}
