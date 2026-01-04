export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
    year: "2025",
  },
  {
    title: "Task Management App",
    description: "A minimalist productivity tool focused on deep work and distraction-free task tracking.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL"],
    link: "#",
    year: "2024",
  },
  {
    title: "AI Content Generator",
    description: "An interface for generating marketing copy using large language models, with a focus on ease of use.",
    tags: ["Vue.js", "OpenAI API", "Nuxt"],
    link: "#",
    year: "2024",
  },
  {
    title: "Architectural Portfolio",
    description: "A highly visual portfolio website for a boutique architecture firm, emphasizing imagery and typography.",
    tags: ["Svelte", "Netlify", "CMS"],
    link: "#",
    year: "2023",
  },
];

export const experiences: Experience[] = [
  {
    company: "TechFlow Solutions",
    role: "Senior Frontend Engineer",
    period: "2023 - Present",
    description: "Leading the frontend architecture for our flagship SaaS product. Improving performance and accessibility across the board.",
  },
  {
    company: "Creative Digital Agency",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built custom web experiences for diverse clients. integrated multiple CMS platforms and handled e-commerce integrations.",
  },
  {
    company: "StartUp Inc",
    role: "Junior Developer",
    period: "2020 - 2021",
    description: "Collaborated on the MVP launch. Responsible for implementing core UI components and API integration.",
  },
];

export const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Node.js",
  "Design Systems",
  "UI/UX Design",
  "PostgreSQL",
  "Git / CI/CD",
];
