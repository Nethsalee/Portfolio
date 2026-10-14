"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Code2,
  Workflow,
  Sparkles,
  CheckCircle,
  FileText,
  Lightbulb,
  GitBranch,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              01 — About Me
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Where Technical Engineering Meets{" "}
            <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">
              Strategic Execution
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am an Information Systems undergraduate driven by the dynamic intersection of
            software engineering and agile project coordination. Having written code and built
            databases myself, I understand the challenges developers face—allowing me to manage
            deadlines, roadmaps, and stakeholder expectations with genuine technical empathy.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Span - The Hybrid Advantage */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 p-7 rounded-3xl glass-card glass-card-hover relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Workflow className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-medium">
                  Core Differentiator
                </span>
                <h3 className="font-display text-xl font-bold text-white">The Hybrid Advantage</h3>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Most project managers don't know what happens behind a Git merge conflict or an API
              bottleneck. Because I have hands-on experience in full-stack web development and database
              architectures, I provide realistic sprint estimations, eliminate technical ambiguity,
              and facilitate high-trust collaboration.
            </p>

            {/* Interactive workflow strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/5">
              {[
                { step: "01", title: "Product Discovery", icon: Lightbulb },
                { step: "02", title: "Sprint Sizing", icon: Target },
                { step: "03", title: "Git Review & QA", icon: GitBranch },
                { step: "04", title: "Deliver & Demo", icon: CheckCircle },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-start gap-1"
                >
                  <span className="text-[10px] font-mono text-accent">{item.step}</span>
                  <span className="text-xs font-medium text-slate-200">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Agile & Team Leadership */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 p-7 rounded-3xl glass-card glass-card-hover flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Team Leadership</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Coordinating multi-functional student dev teams, facilitating standups, and fostering
                a culture of accountability and transparent communication.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {["Scrum & Kanban", "Sprint Planning", "Jira & Trello", "Conflict Resolution"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Card 3: Technical Problem Solving */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 p-7 rounded-3xl glass-card glass-card-hover flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Technical DNA</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Practical engineering in JavaScript, React, Node.js, Express, and MySQL. Capable of
                reviewing code, inspecting schemas, and debugging backend APIs.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {["MERN Stack", "RESTful APIs", "MySQL Schemas", "Git Workflows"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Full-width / 4-col Working Philosophy */}
          <motion.div
            className="md:col-span-3 lg:col-span-4 p-7 sm:p-8 rounded-3xl glass-card border border-white/10 bg-gradient-to-r from-slate-900/60 via-slate-900/80 to-slate-950/90 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Work Ethic & Vision
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  "Projects succeed when clarity, empathy, and technical rigor move in sync."
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Currently seeking a Project Manager Intern position where I can take ownership of
                  sprint coordination, requirement roadmaps, and stakeholder alignment while
                  contributing technical depth to production software initiatives.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2.5 sm:border-l sm:border-white/10 sm:pl-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pragmatic Agile Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Crystal-Clear Documentation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Proactive Risk Mitigation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Collaborative Team Spirit</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
