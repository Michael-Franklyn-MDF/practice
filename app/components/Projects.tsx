import { ProjectCard } from "./ProjectCard"

const projects = [
    {
        title: "Calculator",
        description: "A simple yet elegant calculator application built with Python (CLI version) and HTML/CSS/JavaScript (Web version). Perfect for beginners learning programming fundamentals.",
        technologies: ["Python", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Michael-Franklyn-MDF/calculator",
        imageUrl: "/project-calculator.png",
    },
    {
        title: "Coffe-e-Haven",
        description: "A modern, responsive digital menu website template designed for coffee shops and cafés. Enhances customer experience, reduces printed materials, and provides 24/7 menu accessibility.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Michael-Franklyn-MDF/Coffe-e-Haven",
        imageUrl: "/project-coffee.png",
    },
    {
        title: "To-Do List",
        description: "Minimalist to-do list application for organizing tasks and boosting productivity. Clean interface with essential task management features.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Michael-Franklyn-MDF/To-Do-List",
        imageUrl: "/project-todo.png",
    },
    {
        title: "Photography Portfolio",
        description: "A modern, visually captivating photography portfolio showcasing favorite images, stories, and the creative journey of Michael David Franklyn.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Michael-Franklyn-MDF/Photography",
        imageUrl: "/project-photography.png",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground">
                        Here are some of the projects I&apos;ve worked on, ranging from web applications to utility tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
