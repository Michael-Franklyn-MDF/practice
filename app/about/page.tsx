import { experiences, skills } from "../lib/data";

export default function About() {
  return (
    <div className="container py-24 space-y-20 max-w-3xl">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h1>
        <div className="prose prose-zinc dark:prose-invert leading-relaxed text-muted-foreground">
          <p>
            I&apos;m Franklyn, a multidisciplinary developer based in San Francisco. I have a passion for creating intuitive, dynamic user experiences. My background in design allows me to bridge the gap between aesthetics and functionality.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring the city&apos;s coffee shops, reading about urban planning, or tinkering with new IoT devices.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-8">
          {experiences.map((job, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 border-l-2 border-border pl-6 relative">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-muted-foreground" />
              <div className="w-32 flex-shrink-0 pt-0.5">
                <span className="text-sm text-muted-foreground font-mono">{job.period}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-none">{job.company}</h3>
                <div className="text-md text-primary font-medium">{job.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}