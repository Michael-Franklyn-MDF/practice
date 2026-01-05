import { Github, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {currentYear} Michael Franklyn. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Michael-Franklyn-MDF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="size-5" />
                    </a>
                    <a
                        href="mailto:michkealfranklyn@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="size-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
