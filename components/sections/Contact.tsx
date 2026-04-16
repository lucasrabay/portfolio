"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-content mx-auto max-w-lg">
        <AnimatedSection>
          <SectionLabel number="05" label="contact" />
          <p className="font-display italic text-2xl text-text-muted mb-10">
            Open to interesting problems.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="name"
              className="w-full bg-surface border border-border rounded-btn px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent/50 transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="email"
              className="w-full bg-surface border border-border rounded-btn px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent/50 transition-all"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="message"
              className="w-full bg-surface border border-border rounded-btn px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent/50 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-accent text-background font-mono text-sm rounded-btn py-3 hover:bg-accent/90 transition-all disabled:opacity-50"
            >
              {status === "loading" ? "sending..." : "send message"}
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-accent text-center">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-400 text-center">
                {errorMessage}
              </p>
            )}
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-6 mt-10">
            {Object.entries(siteConfig.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-dim hover:text-accent transition-all"
              >
                {name}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
