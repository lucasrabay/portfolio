"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-content mx-auto w-full"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm text-accent tracking-[0.2em] mb-6"
        >
          // hello, world
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[48px] md:text-[80px] leading-[1.05] text-text-primary mb-4"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="font-display italic text-2xl md:text-[32px] text-text-muted mb-6"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={item}
          className="font-sans text-text-muted max-w-lg leading-relaxed mb-8"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div variants={item} className="flex gap-4">
          <a
            href="#work"
            className="font-mono text-sm bg-accent text-background rounded-btn px-5 py-2.5 hover:bg-accent/90 transition-all"
          >
            view work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm border border-border text-text-muted rounded-btn px-5 py-2.5 hover:border-accent/50 hover:text-text-primary transition-all"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-text-dim" />
        <span className="font-mono text-[10px] text-text-dim tracking-widest [writing-mode:vertical-lr]">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
