import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Lucas Rabay Butcher`,
    description: post.description,
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <article className="max-w-content mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="font-mono text-xs text-text-dim hover:text-text-muted transition-all inline-block mb-8"
        >
          &larr; back
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent">{post.date}</span>
            <span className="font-mono text-xs text-text-dim">
              {post.readingTime}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert max-w-none font-sans text-sm leading-relaxed">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
