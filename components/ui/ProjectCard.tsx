"use client";

import { motion } from "framer-motion";
import Tag from "./Tag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, links, featured } = project;

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`group rounded-card p-6 transition-all ${
        featured
          ? "border border-accent/40 bg-surface col-span-full"
          : "border border-border bg-surface"
      } hover:border-accent/50`}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <Tag key={tag.label} label={tag.label} variant={tag.variant} />
        ))}
      </div>

      <h3
        className={`font-display font-medium text-text-primary mb-2 ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {title}
      </h3>

      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex gap-4">
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent hover:text-accent/80 transition-all"
          >
            demo &rarr;
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-dim hover:text-text-muted transition-all"
          >
            github &rarr;
          </a>
        )}
      </div>
    </motion.div>
  );
}
