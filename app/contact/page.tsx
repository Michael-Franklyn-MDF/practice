export default function Contact() {
    return (
        <div className="container py-24 max-w-2xl space-y-12">
            <section className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
            </section>

            <section className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a href="mailto:hello@franklyn.dev" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                        hello@franklyn.dev
                    </a>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Socials</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                            GitHub
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                            LinkedIn
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                            Twitter
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-muted/50 p-6 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                    Prefer a form? <a href="#" className="text-primary underline">Fill this out</a> and I&apos;ll receive it directly.
                </p>
            </section>
        </div>
    );
}
