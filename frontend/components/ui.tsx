"use client";
import { ReactNode } from "react";

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
