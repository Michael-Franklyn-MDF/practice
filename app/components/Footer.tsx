export default function Footer() {
    return (
        <footer className="border-t border-border mt-20">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Franklyn. Built with Next.js & Tailwind CSS.
                </p>
                <div className="flex gap-4">
                    {/* Placeholder for social links if needed later, kept text-only for minimal vibe */}
                    <span className="text-sm text-muted-foreground">GitHub</span>
                    <span className="text-sm text-muted-foreground">LinkedIn</span>
                    <span className="text-sm text-muted-foreground">Twitter</span>
                </div>
            </div>
        </footer>
    );
}
