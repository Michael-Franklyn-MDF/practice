export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Avatar/Image Placeholder */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative size-64 md:size-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border border-border shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                                MF
                            </div>
                            {/* Replace with actual image if available */}
                            {/* <Image src="/path-to-image.jpg" alt="Michael Franklyn" fill className="object-cover" /> */}
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Hello! I'm <strong className="text-foreground">Michael Franklyn</strong>, a passionate Intermediate Full Stack Developer with a knack for identifying problems and crafting elegant, efficient solutions. My journey in tech is driven by curiosity and a commitment to continuous learning.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I specialize in building modern web applications using the latest technologies like Next.js, React, and Python. Whether it's designing a clean user interface or architecting a robust backend, I enjoy every aspect of the development process.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            When I'm not coding, you can find me exploring new tech trends, contributing to open source, or refining my photography skills. I believe in writing clean, maintainable code that not only works but stands the test of time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
