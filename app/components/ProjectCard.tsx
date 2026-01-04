import Link from "next/link";
import { Project } from "../lib/data";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col gap-3 rounded-lg border border-transparent p-4 transition-all hover:border-border hover:bg-muted/50">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-primary">
                    <Link href={project.link} className="hover:underline">
                        {project.title}
                    </Link>
                </h3>
                <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-gray-500/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
