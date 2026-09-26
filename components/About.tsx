"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";

const strengths = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Organizing complex projects with attention to detail and clear goal alignment",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Fostering collaboration and coordinating cross-functional development teams",
  },
  {
    icon: Lightbulb,
    title: "Technical Problem-Solving",
    description: "Bridging PM practices with hands-on software development knowledge",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="grid lg:grid-cols-12 gap-16 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <div className="lg:col-span-3">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display text-sm uppercase tracking-wider text-accent">
                01 — About
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Combining technical expertise with{" "}
              <span className="text-accent">strategic vision</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-text-secondary leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                I'm an Information Systems undergraduate driven by the intersection of{" "}
                <span className="text-text-primary font-medium">project management</span>,{" "}
                <span className="text-text-primary font-medium">software development</span>, and{" "}
                <span className="text-text-primary font-medium">technology-driven solutions</span>.
                My approach combines technical understanding with organizational acumen to deliver
                projects that matter.
              </p>
              <p>
                With a strong foundation in the full software development lifecycle and hands-on
                experience coordinating cross-functional teams, I thrive in environments where
                planning meets execution. Whether architecting RESTful APIs, managing sprints in
                Jira, or resolving merge conflicts during crunch time, I understand both the code
                and the roadmap.
              </p>
              <p>
                I bring effective communication, adaptive problem-solving, and a genuine enthusiasm
                for building systems that scale—technically and organizationally.
              </p>
            </motion.div>

            {/* Strengths grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  className="group p-6 bg-surface/30 backdrop-blur-sm border border-border-subtle rounded-2xl hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <strength.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{strength.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
