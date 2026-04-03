"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { siteConfig } from "@/config/content";

function ProjectCard({ project, index, progress }: { project: any, index: number, progress: MotionValue<number> }) {
    // Calculates how far this card is from the center (0 = center)
    const offset = useTransform(progress, (p) => index - p);
    
    // Continuous maps for smooth 3D coverflow effect
    // We map up to +/- 5 just in case array grows
    const stops = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    
    const x = useTransform(
        offset, 
        stops, 
        ["-350%", "-280%", "-210%", "-140%", "-85%", "0%", "85%", "140%", "210%", "280%", "350%"]
    );
    
    const scale = useTransform(
        offset, 
        stops, 
        [0.1, 0.25, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.25, 0.1]
    );

    const zIndex = useTransform(
        offset, 
        stops, 
        [0, 10, 20, 30, 40, 50, 40, 30, 20, 10, 0]
    );
    
    // Smooth opacity fadeout to the far sides 
    const opacity = useTransform(
        offset, 
        stops, 
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    );

    // Deep background shading/fade overlay over the card edges
    const overlayOpacity = useTransform(
        offset, 
        stops, 
        [0.9, 0.9, 0.8, 0.6, 0.35, 0, 0.35, 0.6, 0.8, 0.9, 0.9]
    );

    // Text pops in perfectly centered elements
    const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);
    const textY = useTransform(offset, [-0.5, 0, 0.5], [20, 0, 20]);

    return (
        <motion.div
            style={{ x, scale, zIndex, opacity }}
            className="absolute top-0 bottom-0 m-auto w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] h-[60vh] max-h-[600px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.6)] border border-white/10"
        >
            {project.image ? (
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-600 font-mono tracking-widest text-center px-4">
                        IMG: {project.title}
                    </span>
                </div>
            )}
            
            {/* Depth darkening overlay mask */}
            <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black pointer-events-none" />
            
            {/* Base lower Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 pointer-events-none" />
            
            {/* Project Content Box */}
            <motion.div 
                style={{ opacity: textOpacity, y: textY }}
                className="absolute bottom-0 left-0 p-8 w-full pointer-events-none"
            >
                <span className="text-[var(--color-brand-lime)] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block drop-shadow-md">
                    {project.tag}
                </span>
                <h3 className="font-serif text-3xl md:text-3xl lg:text-4xl text-white drop-shadow-xl leading-snug">
                    {project.title}
                </h3>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const projects = siteConfig.projects.list;

    // We track the scroll progress of the 400vh section to map 0-1 values.
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Map the 0-1 progress continuously to 0 -> max index
    const progress = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);

    return (
        <section id="projects" className="bg-[#0a0a0a] relative z-20">
            {/* MOBILE VIEW: Standard Stack (visible only below md) */}
            <div className="block md:hidden py-20 px-4">
                {/* Mobile Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl text-white mb-4 drop-shadow-lg">
                        {siteConfig.projects.title}
                    </h2>
                    <div className="w-16 h-1 bg-[var(--color-brand-lime)] mx-auto shadow-[0_0_15px_var(--color-brand-lime)]" />
                </div>
                
                {/* Vertical Stack List */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id || index} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            ) : (
                                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                                    <span className="text-zinc-600 font-mono tracking-widest text-center px-4">
                                        IMG: {project.title}
                                    </span>
                                </div>
                            )}
                            {/* Darkening base overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 opacity-90 pointer-events-none" />
                            
                            <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
                                <span className="text-[var(--color-brand-lime)] text-xs font-semibold tracking-[0.2em] uppercase mb-2 block drop-shadow-md">
                                    {project.tag}
                                </span>
                                <h3 className="font-serif text-2xl text-white drop-shadow-xl leading-snug">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP VIEW: 3D Coverflow (visible only md and up) */}
            <div ref={targetRef} className="hidden md:block relative h-[400vh]">
                
                {/* The sticky shell acting as our viewport window for the canvas */}
                <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
                    
                    {/* Ambient Background Glow matching the brand color */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-[var(--color-brand-lime)]/10 blur-[130px] rounded-full pointer-events-none" />

                    {/* Header pinned at the top of the sticky element */}
                    <div className="absolute top-24 left-0 right-0 z-[100] px-16 text-center">
                        <h2 className="font-serif text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
                            {siteConfig.projects.title}
                        </h2>
                        <div className="w-24 h-1 bg-[var(--color-brand-lime)] mx-auto shadow-[0_0_15px_var(--color-brand-lime)]" />
                    </div>

                    {/* Carousel Tracks Centered within the sticky container */}
                    <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center perspective-[1000px] mt-24 pointer-events-none">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={project.id || index} 
                                project={project} 
                                index={index} 
                                progress={progress} 
                            />
                        ))}
                    </div>
                    
                    {/* Scroll Helper Details/Indicators */}
                    <div className="absolute bottom-12 left-0 right-0 flex justify-center text-[var(--color-brand-lime)]/50 tracking-widest text-xs uppercase font-sans animate-pulse">
                        Scroll to explore
                    </div>
                </div>
            </div>
        </section>
    );
}
