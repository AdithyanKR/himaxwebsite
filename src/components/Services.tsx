"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/content";

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 md:px-8 bg-[#f9f9f9] text-[#0a0a0a] relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-brand-dark-green)] mb-6">
                        {siteConfig.services.title}
                    </h2>
                    <p className="text-[#555] max-w-2xl mx-auto text-lg font-light">
                        {siteConfig.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {siteConfig.services.list.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[var(--color-brand-lime)] transition-colors duration-300" />
                            
                            <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-2xl mb-4 text-[var(--color-brand-dark-green)] group-hover:text-[var(--color-brand-lime)] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-8 font-light text-sm leading-relaxed">
                                {service.description}
                            </p>
                            
                            <a href="#book" className="text-sm font-semibold tracking-widest uppercase text-[var(--color-brand-dark-green)] group-hover:text-[var(--color-brand-lime)] transition-colors flex items-center gap-2">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
