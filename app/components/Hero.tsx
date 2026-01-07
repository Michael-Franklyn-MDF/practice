"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Globe } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
    id: number;
    initial: { x: string; y: string; scale: number; opacity: number };
    animate: { x: string[]; y: string[] };
    transition: { duration: number; repeat: number; ease: "easeInOut" };
    style: { width: string; height: string };
}

export function Hero() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setParticles(
                [...Array(5)].map((_, i) => ({
                    id: i,
                    initial: {
                        x: Math.random() * 100 - 50 + "%",
                        y: Math.random() * 100 - 50 + "%",
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: 0.3
                    },
                    animate: {
                        x: [
                            Math.random() * 100 - 50 + "%",
                            Math.random() * 100 - 50 + "%",
                            Math.random() * 100 - 50 + "%"
                        ],
                        y: [
                            Math.random() * 100 - 50 + "%",
                            Math.random() * 100 - 50 + "%",
                            Math.random() * 100 - 50 + "%"
                        ],
                    },
                    transition: {
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    style: {
                        width: Math.random() * 300 + 100 + "px",
                        height: Math.random() * 300 + 100 + "px",
                    }
                }))
            );
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-purple-900/20 to-slate-900 animate-gradient-slow opacity-80 bg-[length:200%_200%]" />

            {/* Floating Elements / Particles */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-primary/10 rounded-full blur-xl"
                        initial={particle.initial}
                        animate={particle.animate}
                        transition={particle.transition}
                        style={particle.style}
                    />
                ))}
            </div>


            {/* Floating Tech Icons */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-10 md:left-1/4 text-primary/20"
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Code size={48} />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/4 right-10 md:right-1/4 text-purple-500/20"
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Database size={48} />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-20 text-blue-400/20"
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    <Globe size={40} />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">

                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 shadow-[0_0_30px_rgba(37,99,235,0.3)] bg-background overflow-hidden"
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Michael Franklyn"
                            fill
                            sizes="(max-width: 768px) 128px, 160px"
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 ring-1 ring-primary/20 backdrop-blur-sm">
                                Available for hire
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                        >
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Michael Franklyn</span>
                        </motion.h1>

                        <div className="h-16 md:h-20 flex items-center justify-center">
                            <span className="text-xl md:text-3xl text-muted-foreground font-light">
                                <TypeAnimation
                                    sequence={[
                                        "Intermediate Full Stack Developer",
                                        2000,
                                        "Building Elegant Solutions",
                                        2000,
                                        "Passionate About Clean Code",
                                        2000,
                                        "Creating User-Centric Applications",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed"
                        >
                            I build elegant, scalable, and user-centric digital solutions using modern web technologies.
                            Passionate about clean code and exceptional user experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                        >
                            <Link
                                href="#projects"
                                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 relative overflow-hidden group"
                            >
                                <span className="relative z-10">View Projects</span>
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>
                            <Link
                                href="#contact"
                                className="group px-8 py-3 bg-secondary text-secondary-foreground border border-border font-medium rounded-full hover:bg-muted transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Contact Me
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

