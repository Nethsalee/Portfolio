"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Project Manager", "Full-Stack Developer", "Team Coordinator"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? role.substring(0, displayText.length - 1)
            : role.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - Asymmetric layout */}
          <motion.div
            className="lg:col-span-7 lg:col-start-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border-subtle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-accent text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Nethsalee
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Samarawickrama
              </motion.span>
            </h1>

            <div className="mb-8 h-12 flex items-center">
              <span className="text-2xl md:text-3xl text-text-secondary font-display">
                {displayText}
                <motion.span
                  className="inline-block w-1 h-8 bg-accent ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </div>

            <p className="text-lg text-text-secondary mb-8 max-w-xl">
              Information Systems undergraduate passionate about bridging technology and project
              management to deliver impactful, user-centered solutions.
            </p>

            {/* Contact info */}
            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="mailto:nethsalee@gmail.com"
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">nethsalee@gmail.com</span>
              </a>
              <a
                href="tel:+94719002919"
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+94 71 900 2919</span>
              </a>
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Sri Lanka</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/nethsalee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-surface border border-border-subtle flex items-center gap-2 hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-105 group"
              >
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nethsalee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-surface border border-border-subtle flex items-center gap-2 hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-105 group"
              >
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual element - Abstract geometric shape */}
          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full aspect-square">
              <motion.div
                className="absolute inset-0 border-2 border-accent/20 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-accent/30 rounded-3xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-accent/10 to-accent-hover/5 rounded-3xl backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
