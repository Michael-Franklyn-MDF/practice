import { Code2, Database, Layout, Terminal, GitBranch, Server } from "lucide-react"

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="size-5 mb-2 text-blue-500" />,
        items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    },
    {
        category: "Backend",
        icon: <Server className="size-5 mb-2 text-green-500" />,
        items: ["Python", "Node.js", "API Development", "Database Management"],
    },
    {
        category: "Tools & Others",
        icon: <Terminal className="size-5 mb-2 text-orange-500" />,
        items: ["Git", "GitHub", "VS Code", "Vercel", "Command Line", "Agile"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground">
                        A comprehensive overview of the technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-muted rounded-lg">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm font-medium rounded-md hover:text-foreground hover:bg-muted transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
