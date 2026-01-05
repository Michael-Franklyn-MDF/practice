"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Toggle theme</span>
                <div className="size-5" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Sun className="size-5" />
            ) : (
                <Moon className="size-5" />
            )}
        </button>
    )
}
