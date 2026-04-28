"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

      <Hero />
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
