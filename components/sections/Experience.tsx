"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="exp" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <SectionLabel number="03" label="experience" />
          <h2 className="font-display text-4xl text-text-primary mb-12">
            Experience
          </h2>
        </AnimatedSection>

        <div className="border-l border-text-dim/30 ml-3">
          {experience.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={0.1 * i}>
              <div className="relative pl-8 pb-10 last:pb-0">
                <div
                  className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[5.5px] ${
                    exp.active
                      ? "bg-accent"
                      : "border border-text-dim bg-background"
                  }`}
                />

                <p
                  className={`font-mono text-xs mb-1 ${
                    exp.active ? "text-text-dim" : "text-text-dim"
                  }`}
                >
                  {exp.period}
                </p>

                <h3
                  className={`text-lg font-sans font-medium mb-0.5 ${
                    exp.active ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {exp.role}
                </h3>

                <p
                  className={`font-mono text-sm mb-2 ${
                    exp.active ? "text-accent" : "text-text-dim"
                  }`}
                >
                  {exp.company}
                </p>

                <p
                  className={`text-sm leading-relaxed max-w-xl ${
                    exp.active ? "text-text-muted" : "text-text-dim"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
