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
    title: "Calculator",
    description: "A simple yet elegant calculator application built with Python (CLI version) and HTML/CSS/JavaScript (Web version). Perfect for beginners learning programming fundamentals.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Michael-Franklyn-MDF/calculator",
    year: "2024",
    imageUrl: "/project-todo.png",
    flag: "🔢",
    themeColor: "280 60% 35%", // Purple/Violet
  },
  {
    title: "Coffe-e-Haven",
    description: "A modern, responsive digital menu website template designed for coffee shops and cafés. Enhances customer experience, reduces printed materials, and provides 24/7 menu accessibility.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Michael-Franklyn-MDF/Coffe-e-Haven",
    year: "2024",
    imageUrl: "/project-coffee.png",
    flag: "☕",
    themeColor: "30 50% 30%", // Coffee Brown
  },
  {
    title: "To-Do List",
    description: "Minimalist to-do list application for organizing tasks and boosting productivity. Clean interface with essential task management features.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Michael-Franklyn-MDF/To-Do-List",
    year: "2024",
    imageUrl: "/project-calculator.png",
    flag: "✅",
    themeColor: "150 50% 30%", // Green
  },
  {
    title: "Photography Portfolio",
    description: "A modern, visually captivating photography portfolio showcasing favorite images, stories, and the creative journey of Michael David Franklyn.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Michael-Franklyn-MDF/Photography",
    year: "2024",
    imageUrl: "/project-photography.png",
    flag: "📸",
    themeColor: "200 60% 35%", // Blue
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
