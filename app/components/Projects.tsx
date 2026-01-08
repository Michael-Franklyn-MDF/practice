import { DestinationCard } from "@/components/ui/card-21"
import { projects } from "../lib/data"

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

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {projects.map((project) => (
                        <div key={project.title} className="w-full max-w-[320px] h-[450px]">
                            <DestinationCard
                                imageUrl={project.imageUrl}
                                location={project.title}
                                flag={project.flag}
                                stats={`${project.tags.length} Technologies • ${project.year}`}
                                href={project.link}
                                themeColor={project.themeColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
