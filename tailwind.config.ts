import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090911",
        surface: "#111120",
        border: "#1a1a2e",
        accent: "#34d399",
        accent2: "#f59e0b",
        "text-primary": "#f0f4ff",
        "text-muted": "#6b7280",
        "text-dim": "#374151",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        btn: "2px",
        card: "6px",
        section: "12px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
