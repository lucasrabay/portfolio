"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="group flex items-baseline gap-4 py-3 border-b border-border/50 transition-all"
      >
        <span className="font-mono text-xs text-accent shrink-0">
          {post.date}
        </span>
        <span className="text-text-primary group-hover:text-accent transition-all text-sm">
          {post.title}
        </span>
        <span className="font-mono text-xs text-text-dim ml-auto shrink-0 hidden sm:inline">
          {post.readingTime}
        </span>
      </motion.div>
    </Link>
  );
}
