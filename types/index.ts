export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  links: {
    demo?: string;
    github?: string;
  };
  featured?: boolean;
}

export interface Tag {
  label: string;
  variant: "cyan" | "amber";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  active: boolean;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  content: string;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  readingTime: string;
}
