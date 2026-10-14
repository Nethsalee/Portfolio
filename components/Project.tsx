"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Layers,
  Database,
  CheckCircle2,
  GitBranch,
  Target,
  Users,
  Code2,
  Calendar,
  Kanban,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useState } from "react";

const projects = [
  {
    id: "educonnect",
    title: "EduConnect",
    subtitle: "AI-Powered Peer Mentorship & Gamified Learning Platform",
    featured: true,
    category: "Full-Stack + AI Capstone",
    role: "Technical Coordinator & Full-Stack Developer",
    timeline: "2024 – Present",
    description:
      "A university-wide collaborative learning platform that intelligently matches students with verified peer mentors using AI skill-profiling, incentivized by interactive gamification mechanics.",
    challenge:
      "Undergraduate students often struggle to identify mentors with matching course competencies and availability, leading to disengaged study groups and uneven academic performance.",
    solution:
      "Engineered an automated matching pipeline paired with gamified milestone badges and integrated scheduling, boosting peer participation and structured study accountability.",
    metrics: [
      { label: "Sprint Cycles", val: "6 Sprints" },
      { label: "Team Velocity", val: "94% On-Time" },
      { label: "Tech Stack", val: "MERN + MySQL" },
      { label: "Auth & Sec", val: "JWT Encrypted" },
    ],
    pmContributions: [
      "Orchestrated bi-weekly Agile sprint cycles and synchronized 4 functional sub-teams (Frontend, Backend, AI, Gamification)",
      "Authored exhaustive RESTful API specifications and OpenAPI docs to keep team contracts synchronized",
      "Managed Git repository branch strategies, reviewed pull requests, and resolved cross-branch merge conflicts",
      "Tracked backlog items, burndown rates, and sprint velocity using Jira and Trello boards",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "RESTful API",
      "TailwindCSS",
      "Jira",
      "Git",
    ],
    github: "https://github.com/nethsalee",
    liveDemo: "#contact",
  },
  {
    id: "sprintsync",
    title: "SprintSync",
    subtitle: "Lightweight Agile Sprint & Team Velocity Dashboard",
    featured: false,
    category: "Product Management Tooling",
    role: "Product Owner & Full-Stack Engineer",
    timeline: "2024",
    description:
      "A streamlined sprint coordination tool designed for academic engineering teams. Visualizes sprint burndown charts, task bottlenecks, and member workload distributions.",
    challenge:
      "Enterprise tools like enterprise Jira often have steep learning curves for rapid semester projects, causing student developers to fall back onto chaotic unstructured chats.",
    solution:
      "Built an intuitive Kanban board with instant estimation points, milestone blockers, and real-time sprint velocity calculations.",
    metrics: [
      { label: "Role", val: "Product Owner" },
      { label: "Architecture", val: "REST API" },
      { label: "Database", val: "Relational" },
      { label: "Delivery", val: "Completed" },
    ],
    pmContributions: [
      "Defined product backlog stories and acceptance criteria from developer feedback",
      "Implemented drag-and-drop Kanban workflow with customizable sprint status columns",
      "Automated sprint health indicators to flag at-risk deliverables early",
    ],
    techStack: ["React.js", "JavaScript", "TailwindCSS", "Node.js", "MySQL", "Express"],
    github: "https://github.com/nethsalee",
    liveDemo: "#contact",
  },
  {
    id: "campuscare",
    title: "CampusCare",
    subtitle: "Student Health & Clinical Appointment Management System",
    featured: false,
    category: "Full-Stack Enterprise Web App",
    role: "Full-Stack Developer",
    timeline: "2023 – 2024",
    description:
      "Role-based healthcare scheduling platform for university clinical health centers with automated slot allocation, secure health consultation notes, and prescription logs.",
    challenge:
      "Paper-based student appointment systems created long clinic queues and lost medical histories during peak exam semesters.",
    solution:
      "Created an encrypted appointment portal with role-based access for students, doctors, and pharmacy staff.",
    metrics: [
      { label: "Users", val: "Multi-Role" },
      { label: "Stack", val: "MERN Stack" },
      { label: "Security", val: "Role-Based" },
      { label: "Status", val: "Deployed" },
    ],
    pmContributions: [
      "Conducted user requirement interviews with campus clinic staff to define workflows",
      "Designed normalized database schema ensuring zero record duplication",
      "Built responsive student booking interface with instant email confirmations",
    ],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/nethsalee",
    liveDemo: "#contact",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="project" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
              03 — Featured Projects
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Architected for Impact,{" "}
            <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent">
              Coordinated with Precision
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A showcase of real-world initiatives demonstrating both my hands-on coding capabilities
            and agile leadership in steering cross-functional deliverables to completion.
          </motion.p>
        </div>

        {/* Flagship Hero Project: EduConnect */}
        <motion.div
          className="mb-16 rounded-3xl glass-card border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-accent/40 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle gradient corner accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Label & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Flagship Capstone
              </span>
              <span className="text-xs font-mono text-text-muted">{projects[0].timeline}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-accent hover:text-white transition-all flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-950 bg-accent hover:bg-sky-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Title & Overview */}
          <div className="grid lg:grid-cols-12 gap-8 mb-8 items-start">
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-2">
                {projects[0].title}
              </h3>
              <p className="text-base sm:text-lg font-medium text-sky-400 mb-4">
                {projects[0].subtitle}
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                {projects[0].description}
              </p>

              {/* Challenge vs Solution */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" /> The Problem
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {projects[0].challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> The Solution
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {projects[0].solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics & PM Highlights */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
              <h4 className="font-display font-semibold text-sm text-white mb-4 flex items-center gap-2">
                <Kanban className="w-4 h-4 text-accent" />
                Coordination & Technical Metrics
              </h4>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {projects[0].metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs text-text-muted">{m.label}</div>
                    <div className="text-base font-display font-bold text-white mt-0.5">{m.val}</div>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2">
                  My Core Role Contributions:
                </span>
                <ul className="space-y-2">
                  {projects[0].pmContributions.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-text-muted mr-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-accent" />
              Environment & Tools:
            </span>
            {projects[0].techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/5 hover:border-accent/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Secondary Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((proj, idx) => (
            <motion.div
              key={proj.id}
              className="p-7 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-text-muted">{proj.timeline}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1.5">{proj.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-sky-400 mb-3">{proj.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.pmContributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & Links */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-secondary hover:text-white flex items-center gap-1 font-mono hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
