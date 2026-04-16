"use client";

interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-sm text-text-dim">
        {number} / {label}
      </span>
    </div>
  );
}
