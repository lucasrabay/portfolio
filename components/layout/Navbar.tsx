"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Avatar from "@/components/ui/Avatar";

const navLinks = [
  { label: "work", href: "#work" },
  { label: "exp", href: "#exp" },
  { label: "blog", href: "#blog" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/50"
    >
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-accent text-sm tracking-wider">
          <Avatar size={32} />
          {siteConfig.initials}_
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-xs border border-accent/50 text-accent rounded-btn px-3 py-1.5 hover:bg-accent/10 transition-all"
        >
          hire me &rarr;
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-xs text-text-muted"
          aria-label="Toggle menu"
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14 bg-background/95 backdrop-blur-md md:hidden z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-lg text-text-muted hover:text-text-primary transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm border border-accent/50 text-accent rounded-btn px-4 py-2 hover:bg-accent/10 transition-all"
              >
                hire me &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
