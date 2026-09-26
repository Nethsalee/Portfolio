"use client";

import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-text-secondary text-sm flex items-center gap-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>by Nethsalee Samarawickrama</span>
            </p>
            <p className="text-text-secondary text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/nethsalee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-surface/50 border border-border-subtle text-text-secondary hover:text-accent hover:border-accent transition-all duration-200 text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-3 h-3" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nethsalee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-surface/50 border border-border-subtle text-text-secondary hover:text-accent hover:border-accent transition-all duration-200 text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-3 h-3" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
