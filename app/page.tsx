import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import BlogSection from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <BlogSection posts={posts} />
      <Contact />
    </>
  );
}
