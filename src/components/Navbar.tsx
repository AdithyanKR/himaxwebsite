"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/content";
import { Facebook, Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > window.innerHeight);
        if (isMobileMenuOpen && latest > 50) setIsMobileMenuOpen(false); // Close on scroll for usability
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
                <a href="#" className="h-10 md:h-12 w-auto flex items-center justify-center relative z-20">
                    <img src={siteConfig.brand.logo.main} alt={`${siteConfig.brand.name} Logo`} className="h-full w-auto object-contain" />
                </a>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <div className="md:hidden flex items-center relative z-20">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className={`p-3 -mr-3 rounded-full transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className={`hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? "text-gray-800" : "text-white/80"}`}>
                <a href="#about" className="py-2 hover:text-[var(--color-brand-lime)] transition-colors">About</a>
                <a href="#services" className="py-2 hover:text-[var(--color-brand-lime)] transition-colors">Services</a>
                <a href="#projects" className="py-2 hover:text-[var(--color-brand-lime)] transition-colors">Projects</a>
                <a href="#testimonials" className="py-2 hover:text-[var(--color-brand-lime)] transition-colors">Testimonials</a>

                <div className="flex items-center gap-4 ml-2 border-l border-current pl-6 opacity-90">
                    <a
                        href="https://www.facebook.com/share/1E5LWKkSr7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 hover:text-[var(--color-brand-lime)] transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook size={18} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.instagram.com/hi.max.landscape?igsh=cGNlZzh3a2U3bWU1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 hover:text-[var(--color-brand-lime)] transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                </div>

                <a
                    href="https://wa.link/vrhsk5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[var(--color-brand-dark-green)] border border-[var(--color-brand-dark-green)] text-white hover:bg-[var(--color-brand-lime)] hover:border-[var(--color-brand-lime)] hover:text-black transition-all rounded-sm font-semibold inline-block"
                >
                    Book Service
                </a>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 mt-4 p-6 bg-white border border-gray-100 shadow-2xl rounded-2xl flex flex-col gap-6 text-[var(--color-brand-dark-green)] font-sans text-sm tracking-[0.2em] font-semibold uppercase md:hidden"
                    >
                        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-100">About</a>
                        <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-100">Services</a>
                        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-100">Projects</a>
                        <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-100">Testimonials</a>
                        
                        <div className="flex items-center gap-6 py-3">
                            <a href="https://www.facebook.com/share/1E5LWKkSr7/" target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 text-gray-500 hover:text-[var(--color-brand-lime)]">
                                <Facebook size={24} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.instagram.com/hi.max.landscape?igsh=cGNlZzh3a2U3bWU1" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-[var(--color-brand-lime)]">
                                <Instagram size={24} strokeWidth={1.5} />
                            </a>
                        </div>
                        
                        <a
                            href="https://wa.link/vrhsk5"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-center py-4 bg-[var(--color-brand-dark-green)] text-white hover:bg-[var(--color-brand-lime)] hover:text-black transition-colors rounded-sm shadow-xl"
                        >
                            Book Service
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
