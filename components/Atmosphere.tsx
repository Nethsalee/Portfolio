"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function Atmosphere() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const glowX = useSpring(x, { stiffness: 45, damping: 22 });
  const glowY = useSpring(y, { stiffness: 45, damping: 22 });

  useEffect(() => {
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    if (reduced || !finePointer.matches) return;
    const move = (event: PointerEvent) => { x.set(event.clientX - 180); y.set(event.clientY - 180); };
    const leave = () => { x.set(-1000); y.set(-1000); };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [reduced, x, y]);

  return <div className="atmosphere" aria-hidden="true">
    <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    {!reduced && <motion.div className="pointer-glow" style={{ x: glowX, y: glowY }} />}
  </div>;
}
