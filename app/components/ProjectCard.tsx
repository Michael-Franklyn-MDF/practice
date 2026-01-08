"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Code2, Database, Globe, Palette, Calculator } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl?: string
    imageUrl: string
    index?: number
}

// Map technologies to icons
const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('python')) return <Code2 className="size-3" />
    if (techLower.includes('javascript') || techLower.includes('js')) return <Code2 className="size-3" />
    if (techLower.includes('html')) return <Globe className="size-3" />
    if (techLower.includes('css')) return <Palette className="size-3" />
    if (techLower.includes('react') || techLower.includes('next')) return <Code2 className="size-3" />
    if (techLower.includes('database') || techLower.includes('sql')) return <Database className="size-3" />
    return <Code2 className="size-3" />
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, imageUrl, index = 0 }: ProjectCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full cursor-pointer hover:ring-2 hover:ring-primary/20"
            >
                {/* Project Image */}
                <div className="h-56 bg-muted relative overflow-hidden">
                    {/* Loading Skeleton */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                    )}

                    {/* Image */}
                    <Image
                        src={imageUrl}
                        alt={`${title} Preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover object-top transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

                    {/* Hover Overlay with Buttons */}
                    <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-6">
                        <div className="flex flex-col gap-3 w-full max-w-xs">
                            {liveUrl && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        window.open(liveUrl, '_blank')
                                    }}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                                >
                                    <ExternalLink className="size-4" />
                                    View Live Demo
                                </button>
                            )}
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open(githubUrl, '_blank')
                                }}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-all hover:scale-105"
                            >
                                <Github className="size-4" />
                                View Code
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg hover:scale-110 hover:bg-primary/20 transition-all duration-200"
                            >
                                {getTechIcon(tech)}
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-full justify-center">
                            <Github className="size-4" />
                            View on GitHub
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

