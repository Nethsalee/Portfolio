"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Database, GitBranch, Users, Target } from "lucide-react";

const stack = [
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "JWT", category: "Auth" },
  { name: "REST API", category: "Architecture" },
];

const contributions = [
  {
    icon: Target,
    title: "Project Planning & Coordination",
    description: "Organized sprint cycles and coordinated task distribution across multiple teams",
  },
  {
    icon: Code2,
    title: "API Development & Documentation",
    description: "Contributed to RESTful API design and maintained comprehensive endpoint docs",
  },
  {
    icon: GitBranch,
    title: "Code Review & Integration",
    description: "Facilitated code reviews and resolved merge conflicts during integration phases",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Bridged communication between frontend, backend, AI, and gamification teams",
  },
];

export default function Project() {
  return (
    <section id="project" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-display text-sm uppercase tracking-wider text-accent">
              Featured Project
            </span>
          </motion.div>

          {/* Project header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="font-display text-4xl md:text-6xl font-bold">EduConnect</h2>
            </div>
            <p className="text-2xl text-text-secondary font-display">
              AI-Powered Peer Mentorship Platform
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Problem statement */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-accent mb-3 uppercase tracking-wide">
                  The Challenge
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  University students often struggle to find peer mentors with the right skills
                  and availability. Traditional mentorship models lack the engagement and
                  accessibility needed for effective peer-to-peer learning in a digital-first
                  academic environment.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-accent mb-3 uppercase tracking-wide">
                  The Solution
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  A gamified, AI-powered platform that intelligently matches students with peer
                  mentors based on skills, learning goals, and availability. The system incentivizes
                  collaboration through gamification mechanics while maintaining a seamless,
                  user-friendly experience for both mentors and mentees.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-accent mb-3 uppercase tracking-wide">
                  My Role
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  Served as a <span className="text-text-primary font-medium">technical coordinator</span> and{" "}
                  <span className="text-text-primary font-medium">full-stack contributor</span> for this capstone project.
                  Balanced project management responsibilities with hands-on development across frontend,
                  backend, and system integration workstreams.
                </p>
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-display text-lg font-semibold text-accent mb-4 uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    className="px-4 py-2 bg-surface border border-border-subtle rounded-full text-sm text-text-secondary hover:border-accent/50 hover:text-text-primary transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-surface/50 backdrop-blur-sm border border-border-subtle rounded-2xl">
                <Database className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-display font-semibold mb-2">System Architecture</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Full MERN stack implementation with JWT-based authentication, RESTful API design,
                  and normalized MySQL schema for data integrity
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contributions grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8">Key Contributions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contributions.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group p-6 bg-surface/30 backdrop-blur-sm border border-border-subtle rounded-2xl hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
