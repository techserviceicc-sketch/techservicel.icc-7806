import type { ReactNode } from "react";
import { Link } from "wouter";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c9a24b] mb-4">
      <span className="h-px w-6 bg-[#c9a24b]" />
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#f4f1e8] mb-4">{title}</h2>
      {subtitle && <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function GoldButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base = "inline-flex items-center justify-center gap-2 text-sm uppercase tracking-[0.1em] font-medium px-7 py-3.5 rounded-sm transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#c9a24b] text-[#05070d] hover:bg-[#e8cd82]"
      : "border border-[#c9a24b] text-[#e8cd82] hover:bg-[#c9a24b] hover:text-[#05070d]";
  return (
    <Link to={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
