"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Send } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "project", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Sleek top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent via-accent-purple to-accent-emerald origin-left z-50 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{ scaleX }}
      />

      {/* Floating Modern Pill Navbar */}
      <header className="fixed top-4 md:top-6 inset-x-0 mx-auto w-[92%] max-w-4xl z-40">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-3.5 py-2 md:px-5 md:py-2.5 rounded-full bg-slate-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)] flex items-center justify-between"
        >
          {/* Logo / Monogram badge */}
          <motion.a
            href="#"
            onClick={handleClick("#")}
            className="flex items-center gap-2.5 group pl-1.5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-accent-purple flex items-center justify-center font-display font-bold text-xs text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-shadow">
              NS
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-semibold text-xs tracking-tight text-white group-hover:text-accent transition-colors">
                Nethsalee S.
              </span>
              <span className="text-[10px] text-text-muted flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to PM & Dev
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredItem === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full duration-200 ${
                    isActive ? "text-white" : "text-text-secondary hover:text-white"
                  }`}
                >
                  {/* Active / Hover sliding indicator */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isActive
                          ? "bg-accent/15 border border-accent/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                          : "bg-white/[0.06]"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <motion.a
              href="#contact"
              onClick={handleClick("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-accent/90 via-sky-500 to-accent-purple/90 hover:from-accent hover:to-accent-purple shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all flex items-center gap-1.5"
            >
              <Send className="w-3 h-3" />
              <span>Let's Connect</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.a
              href="#contact"
              onClick={handleClick("#contact")}
              className="text-xs px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-medium"
            >
              Hire Me
            </motion.a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Island */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-4 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClick(item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-accent/15 text-white border border-accent/30"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between px-2 text-xs text-text-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Opportunities
                </span>
                <span>Sri Lanka</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
