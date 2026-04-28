"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import React from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const bgRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const bgRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-[#11130d] pt-24 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Background Image */}
      <motion.div
        style={{
          rotateX: bgRotateX,
          rotateY: bgRotateY,
          scale: 1.1,
          transformStyle: "preserve-3d",
          backgroundImage: "url(/DP.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start pt-10 pb-20"
      >
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Transforming landscapes <br />
            into iconic living <span className="text-[#c6f036]">spaces.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-12">
            Achieve unparalleled property distinction with Hì Max. We provide precision landscaping and complete garden management,
            combining advanced horticultural knowledge with dedicated craftsmanship.
            We ensure your outdoor environment is healthy, sustainable, and undeniably stunning.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
