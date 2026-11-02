import { useState } from "react";
import { CONTACT_EMAIL, DOWNLOAD } from "../links";
import { Reveal } from "./Reveal";

const inputClass =
  "w-full px-3 py-2.5 rounded-lg border border-magi-border bg-white text-sm text-magi-primary placeholder-magi-secondary focus:outline-none focus:ring-1 focus:ring-magi-primary focus:border-magi-primary";

export function ClosingCta() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo request - ${institution}`;
    const body = [`Name: ${name}`, `Institution: ${institution}`, `Email: ${email}`, "", message].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 py-20 border-t border-magi-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-magi-primary tracking-tight leading-tight">
            See it on your own exam.
          </h2>
          <p className="mt-5 text-base text-magi-secondary font-light leading-relaxed max-w-md">
            Tell us about your institution and we&apos;ll set up a pilot class - your professors, your exams, the full
            dossier for every attempt.
          </p>
          <p className="mt-8 text-sm text-magi-secondary">
            Are you a student?{" "}
            <a href={DOWNLOAD} className="font-semibold text-magi-primary hover:underline">
              Download the MAGI desktop app
            </a>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} className="glass-card p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-magi-primary mb-1.5">
                  Your name
                </label>
                <input id="demo-name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="demo-institution" className="block text-sm font-medium text-magi-primary mb-1.5">
                  Institution
                </label>
                <input
                  id="demo-institution"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-magi-primary mb-1.5">
                Work email
              </label>
              <input
                id="demo-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="demo-message" className="block text-sm font-medium text-magi-primary mb-1.5">
                Anything we should know <span className="text-magi-secondary font-normal">(optional)</span>
              </label>
              <textarea
                id="demo-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-magi-primary text-white font-semibold text-sm transition-all hover:bg-magi-hover"
            >
              Request a demo
            </button>
            {sent && (
              <p className="text-xs text-magi-secondary text-center">
                Your email app should open with the request filled in. If it didn&apos;t, write to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-magi-primary">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
