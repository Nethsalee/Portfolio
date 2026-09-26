"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Information Systems",
    institution: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    period: "2024 – Present",
    status: "ongoing",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    period: "2023",
    status: "completed",
  },
  {
    degree: "Advanced Level (Physical Science Stream)",
    institution: "Mahamaya Girls' College, Kandy",
    period: "2022",
    status: "completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="grid lg:grid-cols-12 gap-16"
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
                02 — Education
              </span>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-16 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Academic Journey
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              <div className="space-y-12">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 top-2 w-3 h-3 -translate-x-[5px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-full h-full rounded-full bg-accent ring-4 ring-accent/20" />
                    </motion.div>

                    <div className="group">
                      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 text-accent" />
                          {item.status === "ongoing" && (
                            <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                              In Progress
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-text-secondary font-mono">{item.period}</span>
                      </div>

                      <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                        {item.degree}
                      </h3>
                      <p className="text-text-secondary">{item.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
