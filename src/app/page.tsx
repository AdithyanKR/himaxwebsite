"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import StoryOverlay from "@/components/StoryOverlay";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of the entire page for the overlays
  // Note: ScrollyCanvas tracks its own internal container scroll for exact frame mapping.
  // The overlays could use the page-level scroll.
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="bg-[var(--background)] min-h-screen">
      <Navbar />

      {/* 
        The ScrollyCanvas is 600vh tall and sticky. 
        It holds the canvas sequence. 
        We pass children which map text overlays over the canvas.
      */}
      <ScrollyCanvas>
        <HeroOverlay scrollProgress={scrollYProgress} />
        <StoryOverlay scrollProgress={scrollYProgress} />
      </ScrollyCanvas>

      {/* 
        Once the user scrolls past the 600vh canvas section, 
        these sections flow naturally below it.
      */}
      <About />
      <Services />
      <Projects />
      <ClientLogos />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
