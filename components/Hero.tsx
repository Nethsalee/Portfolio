"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Clock,
  Layers,
  Terminal,
  Kanban,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Project Manager Intern",
  "Full-Stack Developer",
  "Agile Sprint Coordinator",
  "Information Systems Undergrad",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 2200);
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

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative pt-28 pb-20 md:pt-36 md:pb-32 flex items-center overflow-hidden">
      {/* Background Grid Pattern & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Dynamic Ambient Glow Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/15 rounded-full blur-[130px] pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-accent-purple/15 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm hover:border-accent/40 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for Project Manager Intern roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.08]">
              Hi, I'm{" "}
              <span className="text-white block sm:inline">Nethsalee</span>{" "}
              <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent">
                Samarawickrama
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300">
                <span>I build & coordinate as a </span>
                <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-4">
                  {displayText}
                </span>
                <motion.span
                  className="inline-block w-0.5 h-6 sm:h-7 bg-accent ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-xl leading-relaxed">
              Information Systems undergraduate at Sabaragamuwa University of Sri Lanka with a
              proven full-stack engineering background. Bridging technical design with agile project
              management to lead cross-functional teams toward impactful outcomes.
            </p>

            {/* Quick Metrics / Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="text-xl font-display font-bold text-white">Full-Stack</div>
                <div className="text-xs text-text-muted">MERN & REST APIs</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="text-xl font-display font-bold text-accent">Agile / Scrum</div>
                <div className="text-xs text-text-muted">Sprint Management</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-xl font-display font-bold text-accent-purple">BSc (Hons)</div>
                <div className="text-xs text-text-muted">Information Systems</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <motion.a
                href="#project"
                onClick={handleScrollTo("#project")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-accent via-sky-400 to-accent-hover shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] flex items-center gap-2 transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={handleScrollTo("#contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-full text-sm font-medium text-white bg-white/[0.05] border border-white/10 hover:border-accent/40 hover:bg-white/[0.08] transition-all flex items-center gap-2"
              >
                <span>Get in Touch</span>
              </motion.a>
            </div>

            {/* Contact Micro-Strip */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-text-secondary">
              <a
                href="mailto:nethsalee@gmail.com"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>nethsalee@gmail.com</span>
              </a>
              <a
                href="tel:+94719002919"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+94 71 900 2919</span>
              </a>
              <div className="flex items-center gap-1.5 text-text-muted">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sri Lanka</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Interactive PM & Tech Cockpit */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/30 via-accent-purple/20 to-sky-500/30 blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300" />

              {/* Main Cockpit Container */}
              <div className="relative rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-text-muted flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-accent" />
                      pm-cockpit.agile
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Sprint Active
                  </span>
                </div>

                {/* Active Project Highlight */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1">
                        <Kanban className="w-3 h-3" />
                        Lead Capstone Initiative
                      </span>
                      <h4 className="font-display font-bold text-base text-white">EduConnect Platform</h4>
                    </div>
                    <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-1 rounded-md">
                      v2.4
                    </span>
                  </div>

                  {/* Sprint progress meter */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1.5 font-mono">
                      <span className="text-text-secondary">Sprint Velocity</span>
                      <span className="text-accent font-semibold">88% (38/42 pts)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Live Task Feed */}
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-muted uppercase tracking-wider px-1">
                    <span>Recent Sprints & Tasks</span>
                    <span>Status</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-slate-200">RESTful API Design & MySQL Schema</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                      MERGED
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <GitPullRequest className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-xs text-slate-200">AI Matching Engine & Gamification</span>
                    </div>
                    <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                      REVIEW
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-xs text-slate-200">Sprint Retrospective & Team Sync</span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      TODAY
                    </span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-text-secondary">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "Node.js", "MySQL", "Jira", "Figma"].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
