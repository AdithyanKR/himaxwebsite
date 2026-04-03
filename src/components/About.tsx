"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/content";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-8 bg-white text-[#0a0a0a] overflow-hidden relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Left Side: Philosophy Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <div className="w-16 h-1 bg-[var(--color-brand-lime)] mb-8" />
                    <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6 text-[var(--color-brand-dark-green)]">
                        {siteConfig.about.title}
                    </h2>
                    <p className="text-[#333] text-lg md:text-xl leading-relaxed mb-6 font-light">
                        {siteConfig.about.description1}
                    </p>
                    <p className="text-[#555] text-base md:text-lg leading-relaxed font-light mb-6">
                        {siteConfig.about.description2}
                    </p>
                    <a href="#services" className="inline-block px-8 py-4 md:py-3 bg-[var(--color-brand-dark-green)] text-white text-sm tracking-widest uppercase hover:bg-[var(--color-brand-lime)] hover:text-[#0a0a0a] transition-colors rounded-sm font-semibold">
                        {siteConfig.about.buttonText}
                    </a>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 w-full aspect-[4/5] md:aspect-square relative rounded-xl overflow-hidden shadow-2xl"
                >
                    {/* Delete the old placeholder div and add this: */}
                    <img
                        src={siteConfig.about.image} /* IMPORTANT: Change .jpg to .png if your image is a PNG */
                        alt={siteConfig.about.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}
