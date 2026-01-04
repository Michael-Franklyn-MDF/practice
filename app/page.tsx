import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="container py-24 space-y-20">
      {/* Hero Section */}
      <section className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Franklyn.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I&apos;m a Senior Frontend Engineer who loves building digital products that are equal parts functional and beautiful. Currently improving the developer experience at TechFlow.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
          <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            View All &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
