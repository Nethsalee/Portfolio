"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { content } from "@/content";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const previousY = useRef(0);
  const header = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const nav = content.navigation;

  useMotionValueEvent(scrollY, "change", current => {
    const delta = current - previousY.current;
    setCompact(current > 60);
    if (Math.abs(delta) > 3) setHidden(current > 180 && delta > 0);
    if (current < 100 || header.current?.contains(document.activeElement)) setHidden(false);
    previousY.current = current;
  });

  useEffect(() => {
    // Use viewport coordinates so detection also works inside nested sections.
    const update = () => {
      let next = "";
      for (const item of nav.items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 180) next = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) next = "contact";
      setActive(next);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [nav.items]);

  function toggleMenu() {
    setOpen(!open);
    if (!open) requestAnimationFrame(() => firstLink.current?.focus());
  }

  return (
    <motion.header ref={header} className={`site-header ${compact ? "is-compact" : ""}`}
      animate={{ y: hidden && !open ? -140 : 0 }}
      transition={{ duration: reduced ? 0 : 0.26, ease: "easeOut" }}
      onFocusCapture={() => setHidden(false)}>
      <nav className="floating-nav" aria-label={nav.label} onKeyDown={event => {
        if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
      }}>
        <a className="nav-brand" href="#home" aria-label={nav.home} onClick={() => setOpen(false)}>
          {content.person.initials}<span>.</span>
        </a>
        <div className="desktop-links">
          {nav.items.map(item => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>
              {active === item.id && <motion.span className="nav-indicator" layoutId="active-section"
                transition={{ type: "spring", stiffness: 350, damping: 32 }} />}
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <ThemeToggle />
          <button type="button" ref={toggle} className="icon-button menu-toggle"
            aria-label={open ? nav.close : nav.open} aria-expanded={open}
            aria-controls="mobile-navigation" onClick={toggleMenu}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="mobile-menu" id="mobile-navigation" hidden={!open}>
          {nav.items.map((item, index) => (
            <a key={item.id} ref={index === 0 ? firstLink : undefined}
              href={`#${item.id}`} onClick={() => setOpen(false)}
              aria-current={active === item.id ? "location" : undefined}>{item.label}</a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
