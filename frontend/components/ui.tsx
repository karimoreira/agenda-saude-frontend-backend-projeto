"use client";
import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export function Avatar({ name, size = 56 }: { name: string; size?: number }) {
  const initials = name
    .replace(/^Dra?\.\s/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      style={{ width: size, height: size, fontSize: size / 2.6 }}
      className="rounded-2xl flex items-center justify-center text-white font-bold shrink-0 bg-petrol"
    >
      {initials}
    </div>
  );
}

export function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="text-sm text-amber" aria-label={`Nota ${rating}`}>
      {"★".repeat(full)}
      <span className="text-line">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E2F2EF] text-petrol">
      {children}
    </span>
  );
}

export function PrimaryButton({
  children, onClick, disabled,
}: { children: ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-3 rounded-xl font-semibold text-white bg-brand transition-opacity disabled:opacity-40 active:opacity-80"
    >
      {children}
    </button>
  );
}

export function Button({ children, onClick, variant, className, ...props }: { children: ReactNode; onClick?: () => void; variant?: "primary" | "secondary"; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = "px-4 py-2 rounded-xl font-semibold text-sm transition-colors";
  const styles = variant === "primary"
    ? "bg-brand text-white hover:bg-brand/90"
    : variant === "secondary"
    ? "bg-mist text-ink border border-line hover:bg-line"
    : "bg-brand text-white hover:bg-brand/90";
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand transition-colors ${className ?? ""}`}
      {...props}
    />
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
