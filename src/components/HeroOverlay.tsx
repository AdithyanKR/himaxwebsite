"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroOverlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
    const opacity = useTransform(scrollProgress, [0, 0.1], [1, 0]);
    const y = useTransform(scrollProgress, [0, 0.1], [0, -50]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
            <h1 className="font-serif text-5xl md:text-8xl tracking-tight mb-3 drop-shadow-2xl">
                HI MAX
            </h1>
            <p className="font-sans text-sm md:text-xl tracking-[0.3em] uppercase text-[var(--color-gold)] mb-12 drop-shadow-lg">
                LANDSCAPE
            </p>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-12"
            >
                <ArrowDown className="w-8 h-8 text-white/50" />
            </motion.div>
        </motion.div>
    );
}
