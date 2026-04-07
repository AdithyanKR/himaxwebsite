"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/content";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Set a timer to end loading state and re-enable scrolling
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Reset inline overflow
    }, 2500); // 2.5 seconds total loading time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1], // Premium smooth start and elastic end interpolation
            }}
            className="flex items-center justify-center w-full px-8"
          >
            {/* The user's provided logo is fetched from public folder */}
            <img 
                src={`/${siteConfig.brand.logo.main}`} 
                alt={`${siteConfig.brand.name} Launch Logo`} 
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
