"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function MotionPanel({ children, className = "", depth = 20 }: {
  children: ReactNode; className?: string; depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 130, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 130, damping: 22 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [depth, -depth]);

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rotateX.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 6);
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
  }

  function reset() { rotateX.set(0); rotateY.set(0); }

  return (
    <div ref={ref} className={`motion-panel ${className}`} onPointerMove={tilt} onPointerLeave={reset}>
      <motion.div className="motion-panel-inner"
        style={{ rotateX: reduced ? 0 : springX, rotateY: reduced ? 0 : springY, y: reduced ? 0 : drift }}>
        {children}
      </motion.div>
    </div>
  );
}
