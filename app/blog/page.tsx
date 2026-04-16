import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";

export const metadata = {
  title: "Blog — Your Name",
  description: "Writing about AI engineering, machine learning, and building production systems.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-content mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-mono text-xs text-text-dim hover:text-text-muted transition-all inline-block mb-8"
        >
          &larr; back
        </Link>

        <h1 className="font-display text-4xl text-text-primary mb-12">
          Writing
        </h1>

        <div>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
