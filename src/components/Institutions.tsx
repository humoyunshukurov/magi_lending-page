const POINTS = [
  "Batch class and exam management across every section",
  "A grading dashboard built for reviewing a dossier, not just a score",
  "Exportable, timestamped records for every attempt",
  "A compliance-ready audit trail, end to end",
];

export function Institutions() {
  return (
    <section id="institutions" className="max-w-5xl mx-auto px-6 py-20 border-t border-magi-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold font-outfit text-magi-primary tracking-wide mb-4">Built for institutions</h2>
          <p className="text-sm text-magi-secondary font-light leading-relaxed">
            Administrators need more than a gradebook - they need a record they can stand behind.
          </p>
        </div>
        <ul className="space-y-4">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-magi-primary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-magi-accent shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
