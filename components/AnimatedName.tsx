"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";

export default function AnimatedName() {
  const reduced = useReducedMotion();
  const names = [content.person.firstName, content.person.lastName];

  return (
    <h1 className="animated-name" aria-label={content.person.name}>
      {names.map((name, line) => (
        <span className="name-line" key={name} aria-hidden="true">
          {Array.from(name).map((letter, index) => (
            <motion.span className="name-letter" key={index}
              initial={{ y: reduced ? 0 : "110%", opacity: reduced ? 1 : 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : line * 0.12 + index * 0.025, ease: [0.22, 1, 0.36, 1] }}>
              {letter}
            </motion.span>
          ))}
          {line === 1 && <span className="name-dot">.</span>}
        </span>
      ))}
    </h1>
  );
}
