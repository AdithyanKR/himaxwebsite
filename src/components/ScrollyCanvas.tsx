"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192;
const currentFrame = (index: number) =>
    `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.041s.webp`;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        // Preload all 192 images
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setLoaded(true);
                }
            };
            // For immediate caching
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    const drawFrame = (index: number) => {
        if (!images[index] || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
        } else {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
        }
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Draw first frame exactly once after loading finishes
    useEffect(() => {
        if (loaded && images.length > 0) {
            drawFrame(0);
        }
    }, [loaded, images]);

    // Tie frame drawing strictly to the scroll position
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (loaded) {
            requestAnimationFrame(() => drawFrame(Math.round(latest)));
        }
    });

    // Re-draw if window handles a resize event
    useEffect(() => {
        const handleResize = () => {
            if (loaded) {
                drawFrame(Math.round(frameIndex.get()));
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[600vh] w-full bg-[#0a0a0a]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-50 text-white font-serif text-2xl tracking-widest">
                        LANDSCAPE
                    </div>
                )}
                
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {loaded && children}
                </div>
            </div>
        </div>
    );
}
