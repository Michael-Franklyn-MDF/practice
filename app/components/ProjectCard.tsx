import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    // imageUrl would go here
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
    return (
        <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
            {/* Thumbnail Placeholder */}
            <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-lg group-hover:scale-110 transition-transform duration-500">
                    {title} Preview
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors w-full justify-center"
                    >
                        <Github className="size-4" />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    )
}
