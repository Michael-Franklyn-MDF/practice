import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6 text-center">
                <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                        Available for hire
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Hi, I'm <span className="text-primary">Michael Franklyn</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light">
                        Intermediate Full Stack Developer
                    </p>
                    <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
                        I build elegant, scalable, and user-centric digital solutions using modern web technologies.
                        Passionate about clean code and exceptional user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="group px-8 py-3 bg-secondary text-secondary-foreground border border-border font-medium rounded-full hover:bg-muted transition-all flex items-center gap-2"
                        >
                            Contact Me
                            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
