import type { Project, Experience } from "@/types";

export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  role: "AI Engineer \u00b7 Builder",
  bio: "I design and build intelligent systems that bridge research and production. Focused on large language models, retrieval-augmented generation, and developer tooling that makes AI accessible.",
  email: "you@example.com",
  url: "https://yourdomain.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export const projects: Project[] = [
  {
    title: "Cortex \u2014 Retrieval-Augmented Research Assistant",
    description:
      "A full-stack RAG pipeline that ingests academic papers, builds a vector index with sentence embeddings, and serves a conversational interface for literature review. Handles 50k+ documents with sub-second retrieval latency using HNSW indexing and streaming completions.",
    tags: [
      { label: "RAG", variant: "cyan" },
      { label: "LangChain", variant: "cyan" },
      { label: "FAISS", variant: "cyan" },
      { label: "Python", variant: "amber" },
      { label: "Next.js", variant: "amber" },
      { label: "PostgreSQL", variant: "amber" },
    ],
    links: {
      demo: "https://cortex-demo.vercel.app",
      github: "https://github.com/yourusername/cortex",
    },
    featured: true,
  },
  {
    title: "Synthwave \u2014 AI Music Stem Separator",
    description:
      "Real-time audio source separation using a fine-tuned Demucs model. Web UI lets users upload tracks and isolate vocals, drums, bass, and other instruments with drag-and-drop mixing.",
    tags: [
      { label: "PyTorch", variant: "cyan" },
      { label: "Demucs", variant: "cyan" },
      { label: "TypeScript", variant: "amber" },
      { label: "WebAudio API", variant: "amber" },
    ],
    links: {
      github: "https://github.com/yourusername/synthwave",
    },
  },
  {
    title: "Sentinel \u2014 LLM Output Guardrails",
    description:
      "A lightweight middleware layer that classifies and filters LLM outputs for toxicity, PII leakage, and prompt injection attempts. Pluggable into any OpenAI-compatible API with <5ms overhead per request.",
    tags: [
      { label: "Transformers", variant: "cyan" },
      { label: "FastAPI", variant: "cyan" },
      { label: "Go", variant: "amber" },
      { label: "Docker", variant: "amber" },
    ],
    links: {
      demo: "https://sentinel-guardrails.dev",
      github: "https://github.com/yourusername/sentinel",
    },
  },
];

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    company: "Nexus AI",
    period: "2024 \u2014 Present",
    description:
      "Building production LLM pipelines and retrieval systems. Leading the migration from monolithic prompt chains to modular agent architectures. Reduced inference costs by 40% through intelligent caching and model routing.",
    active: true,
  },
  {
    role: "Machine Learning Intern",
    company: "DataForge Labs",
    period: "2023 \u2014 2024",
    description:
      "Developed evaluation frameworks for generative models. Built internal tooling for dataset curation and annotation workflows using Python and React.",
    active: false,
  },
];
