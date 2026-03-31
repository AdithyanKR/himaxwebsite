"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/config/content";
import { Facebook, Instagram } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > window.innerHeight);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`fixed left-0 right-0 mx-auto z-50 flex items-center justify-between transition-all duration-500 w-[95%] md:w-[90%] max-w-7xl ${isScrolled
                ? "top-4 py-4 px-6 md:px-10 bg-white/95 backdrop-blur-3xl saturate-150 border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl md:rounded-full"
                : "top-0 py-6 px-6 md:px-12 bg-transparent"
                }`}
        >
            <div className="flex items-center">
                <div className="h-10 md:h-12 w-auto flex items-center justify-center">
                    <img src={siteConfig.brand.logo.main} alt={`${siteConfig.brand.name} Logo`} className="h-full w-auto object-contain" />
                </div>
            </div>

            <div className={`hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? "text-gray-800" : "text-white/80"}`}>
                <a href="#about" className="hover:text-[var(--color-brand-lime)] transition-colors">About</a>
                <a href="#services" className="hover:text-[var(--color-brand-lime)] transition-colors">Services</a>
                <a href="#projects" className="hover:text-[var(--color-brand-lime)] transition-colors">Projects</a>
                <a href="#testimonials" className="hover:text-[var(--color-brand-lime)] transition-colors">Testimonials</a>

                <div className="flex items-center gap-4 ml-2 border-l border-current pl-6 opacity-90">
                    {/* Facebook Link */}
                    <a
                        href="https://www.facebook.com/share/1E5LWKkSr7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-brand-lime)] transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook size={18} strokeWidth={1.5} />
                    </a>

                    {/* Instagram Link */}
                    <a
                        href="https://www.instagram.com/hi.max.landscape?igsh=cGNlZzh3a2U3bWU1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-brand-lime)] transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                </div>

                <a
                    href="https://wa.link/vrhsk5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[var(--color-brand-dark-green)] border border-[var(--color-brand-dark-green)] text-white hover:bg-[var(--color-brand-lime)] hover:border-[var(--color-brand-lime)] hover:text-black transition-all rounded-sm font-semibold inline-block"
                >
                    Book Service
                </a>
            </div>
        </motion.nav>
    );
}
