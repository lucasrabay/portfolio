import type { Project, Experience } from "@/types";

export const siteConfig = {
  name: "Lucas Rabay Butcher",
  initials: "LRB",
  role: "AI Engineer  \u00b7  Builder  \u00b7  Researcher",
  bio: "I build AI that actually does something \u2014 for the people who usually get left out of the conversation. Python, LLMs, computer vision, and the occasional existential question about what any of this is for.",
  email: "lucasrabaybutcher@gmail.com",
  url: "https://lucasrabay.dev",
  social: {
    github: "https://github.com/lucasrabay",
    linkedin: "https://linkedin.com/in/lucas-rabay-butcher",
    "twitter/x": "https://x.com/lucasrabayb",
  },
};

export const projects: Project[] = [
  {
    title: "Biu",
    description:
      "Multimodal AI agent bridging the gap between the illiterate and the job market.",
    longDescription:
      "Biu uses vision, speech, and language models to help functionally illiterate adults navigate job applications, interviews, and workplace documents \u2014 without needing to read.",
    tags: [
      { label: "LLMs", variant: "cyan" },
      { label: "Multimodal", variant: "cyan" },
      { label: "LangChain", variant: "cyan" },
      { label: "Python", variant: "amber" },
      { label: "Social Impact", variant: "amber" },
    ],
    links: {},
    status: "live",
    featured: true,
  },
  {
    title: "Warao",
    description:
      "Gamified web app that teaches Portuguese to migrants and refugees.",
    longDescription:
      "Named after the Warao people, one of Brazil\u2019s largest indigenous migrant groups. Warao uses game mechanics and adaptive exercises to make language acquisition accessible and engaging.",
    tags: [
      { label: "EdTech", variant: "cyan" },
      { label: "NLP", variant: "cyan" },
      { label: "React", variant: "amber" },
      { label: "Python", variant: "amber" },
    ],
    links: {},
    status: "live",
    featured: false,
  },
  {
    title: "More in the lab",
    description: "A few projects currently cooking. Check back soon.",
    tags: [
      { label: "LLMs", variant: "cyan" },
      { label: "CV", variant: "cyan" },
      { label: "Python", variant: "amber" },
    ],
    links: {},
    status: "in_progress",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    role: "Data Engineer Intern",
    company: "V360",
    period: "2024 \u2014 present",
    description: "Building data pipelines and ML tooling.",
    active: true,
  },
  {
    role: "Research Member",
    company: "TAIL Lab, UFPB",
    period: "2023 \u2014 present",
    description:
      "Researching applied AI at the Tecnologia e Intelig\u00eancia Artificial Lab.",
    active: true,
  },
  {
    role: "BSc Computer Science",
    company: "UFPB",
    period: "2022 \u2014 present",
    description: "Universidade Federal da Para\u00edba, Brazil.",
    active: true,
  },
];
