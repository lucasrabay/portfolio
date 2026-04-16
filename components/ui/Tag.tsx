"use client";

interface TagProps {
  label: string;
  variant: "cyan" | "amber";
}

export default function Tag({ label, variant }: TagProps) {
  return (
    <span
      className={`inline-block rounded-btn px-2 py-0.5 font-mono text-xs transition-all ${
        variant === "cyan"
          ? "border border-accent/30 text-accent bg-accent/5"
          : "border border-accent2/30 text-accent2 bg-accent2/5"
      }`}
    >
      {label}
    </span>
  );
}
