"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

export default function MagneticLink({ href, children, className = "" }: {
  href: string; children: ReactNode; className?: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.1);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.15);
  }

  return (
    <motion.a href={href} className={className} style={{ x: springX, y: springY }}
      onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }}
      onBlur={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.a>
  );
}
