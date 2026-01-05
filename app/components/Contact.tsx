"use client"

import { useState } from "react"
import { Mail, Github, Send, Copy, Check } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [copied, setCopied] = useState(false)

    const email = "michkealfranklyn@gmail.com"

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }
        if (!formData.message.trim()) newErrors.message = "Message is required"
        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors = validate()

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setIsSubmitted(false), 5000)
        } else {
            setErrors(newErrors)
        }
    }

    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                            <h3 className="text-xl font-semibold">Contact Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer" onClick={copyEmail}>
                                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Mail className="size-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-foreground">Email</p>
                                        <p className="text-sm">{email}</p>
                                    </div>
                                    {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </div>

                                <a
                                    href="https://github.com/Michael-Franklyn-MDF"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Github className="size-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">GitHub</p>
                                        <p className="text-sm">Michael-Franklyn-MDF</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                            <p className="text-sm text-muted-foreground">
                                "The best way to predict the future is to create it."
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-1 transition-all`}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-1 transition-all`}
                                placeholder="your@email.com"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-1 transition-all resize-none`}
                                placeholder="Your message..."
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-6 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : isSubmitted ? (
                                <>Sent Successfully <Check className="size-4" /></>
                            ) : (
                                <>Send Message <Send className="size-4" /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
