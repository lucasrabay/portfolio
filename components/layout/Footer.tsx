"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">
        <span className="font-mono text-xs text-text-dim">
          Built with Next.js &middot; {year}
        </span>
        <a
          href="#"
          className="font-mono text-xs text-text-dim hover:text-text-muted transition-all"
          aria-label="Back to top"
        >
          &uarr; top
        </a>
      </div>
    </footer>
  );
}
