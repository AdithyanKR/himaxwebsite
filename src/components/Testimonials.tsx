"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/content";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 md:px-8 bg-[#0a0a0a] text-white relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                        {siteConfig.testimonials.title}
                    </h2>
                    <p className="font-sans text-[var(--color-brand-lime)] uppercase tracking-[0.2em] text-sm md:text-base">
                        {siteConfig.testimonials.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.testimonials.reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="bg-[#111] border border-white/5 p-8 rounded-2xl relative shadow-2xl hover:border-[var(--color-brand-lime)]/30 transition-colors duration-300"
                        >
                            {/* Quotation Mark Accent */}
                            <div className="absolute top-6 right-8 text-6xl font-serif text-white/5 font-black">
                                &rdquo;
                            </div>

                            {/* 5-Star Rating */}
                            <div className="flex gap-1 mb-6 text-[var(--color-brand-lime)] text-xl">
                                ★★★★★
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed mb-8 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-dark-green)] text-white flex items-center justify-center font-serif text-lg font-bold shrink-0">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white tracking-wide">{review.client}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
