"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel number="02" label="work" />
              <h2 className="font-display text-4xl text-text-primary">Work</h2>
            </div>
            <a
              href="#"
              className="font-mono text-xs text-text-dim hover:text-text-muted transition-all"
            >
              view all &rarr;
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured && (
            <AnimatedSection className="col-span-full">
              <ProjectCard project={featured} />
            </AnimatedSection>
          )}
          {rest.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 * (i + 1)}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
