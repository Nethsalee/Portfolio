"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/10 relative bg-slate-950/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent to-accent-purple flex items-center justify-center font-display font-bold text-xs text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              NS
            </div>
            <div>
              <span className="font-display font-bold text-sm text-white block">
                Nethsalee Samarawickrama
              </span>
              <span className="text-xs text-text-muted font-mono">
                Project Manager & Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Quick Anchor links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary font-mono">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-accent transition-colors">
              Education
            </a>
            <a href="#project" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-mono text-text-secondary hover:text-white hover:border-accent/40 flex items-center gap-1.5 transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </motion.button>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted font-mono">
          <p>© {currentYear} Nethsalee Samarawickrama. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nethsalee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/nethsalee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:nethsalee@gmail.com" className="hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
