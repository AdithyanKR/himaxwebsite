"use client";
import { siteConfig } from "@/config/content";

// We double the list to create a seamless infinite loop
const doubleLogos = [...siteConfig.partners.logos, ...siteConfig.partners.logos];

export default function ClientLogos() {
    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 text-center">
                <h3 className="font-sans text-xs tracking-[0.3em] font-semibold text-[var(--color-brand-dark-green)] uppercase">
                    {siteConfig.partners.title}
                </h3>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden flex whitespace-nowrap group">
                <div className="flex animate-slide-infinite hover:[animation-play-state:paused]">
                    {doubleLogos.map((logo, index) => (
                        <div 
                            key={index} 
                            className="w-48 mx-8 h-24 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <img 
                                src={logo}
                                alt={`Partner Logo ${index}`}
                                className="max-w-full max-h-full object-contain pointer-events-none mix-blend-multiply"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
