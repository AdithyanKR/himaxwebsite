"use client";

import { MotionValue } from "framer-motion";

export default function StoryOverlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
    // Return null to make the scrolling background plain without text overlays.
    return null;
}
