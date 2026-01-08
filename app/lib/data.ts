export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  imageUrl: string;
  flag: string;
  themeColor: string; // HSL format, e.g., "150 50% 25%"
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
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    flag: "📊",
    themeColor: "200 60% 35%", // Blue
  },
  {
    title: "Task Management App",
    description: "A minimalist productivity tool focused on deep work and distraction-free task tracking.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL"],
    link: "#",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
    flag: "✅",
    themeColor: "150 50% 30%", // Green
  },
  {
    title: "AI Content Generator",
    description: "An interface for generating marketing copy using large language models, with a focus on ease of use.",
    tags: ["Vue.js", "OpenAI API", "Nuxt"],
    link: "#",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    flag: "🤖",
    themeColor: "250 50% 30%", // Purple
  },
  {
    title: "Architectural Portfolio",
    description: "A highly visual portfolio website for a boutique architecture firm, emphasizing imagery and typography.",
    tags: ["Svelte", "Netlify", "CMS"],
    link: "#",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=80",
    flag: "🏛️",
    themeColor: "30 60% 40%", // Orange
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
