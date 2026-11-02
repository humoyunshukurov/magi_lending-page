import type { ReactNode } from "react";
import { useInView } from "../useInView";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`reveal ${inView ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
