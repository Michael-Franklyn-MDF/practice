import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/data";

export default function Projects() {
    return (
        <div className="container py-24 space-y-12">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of projects I&apos;ve worked on, ranging from web applications to experimental interfaces.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}
