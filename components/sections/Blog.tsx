"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogCard from "@/components/ui/BlogCard";
import type { Post } from "@/types";

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <SectionLabel number="04" label="blog" />
          <h2 className="font-display text-4xl text-text-primary mb-12">
            Writing
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
