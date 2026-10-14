"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Sparkles } from "lucide-react";

const educationData = [
  {
    degree: "BSc (Hons) in Information Systems",
    institution: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    location: "Belihuloya, Sri Lanka",
    period: "2024 – Present",
    status: "ongoing",
    description:
      "Specializing in enterprise systems analysis, software engineering principles, and technology management. Actively developing technical leadership through agile projects and collaborative academic coursework.",
    coursework: [
      "Software Project Management",
      "Systems Analysis & Design",
      "Database Management Systems",
      "Web Technologies & Frameworks",
      "Object-Oriented Programming",
      "Agile & Scrum Methodologies",
    ],
  },
  {
    degree: "Diploma in Information Technology (DIT)",
    institution: "ESOFT Metro Campus",
    location: "Kandy, Sri Lanka",
    period: "2023",
    status: "completed",
    description:
      "Completed comprehensive foundational diploma covering practical programming fundamentals, database structures, system design basics, and modern web application development.",
    coursework: [
      "Programming Fundamentals",
      "Relational Databases",
      "Web Development Basics",
      "IT Systems Architecture",
    ],
  },
  {
    degree: "G.C.E. Advanced Level (Physical Science Stream)",
    institution: "Mahamaya Girls' College, Kandy",
    location: "Kandy, Sri Lanka",
    period: "2022",
    status: "completed",
    description:
      "Rigorous physical science stream foundation emphasizing analytical problem-solving, advanced mathematics, physics, and scientific research methodologies.",
    coursework: ["Combined Mathematics", "Physics", "Chemistry"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36 relative">
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
              02 — Academic Journey
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Educational Background &{" "}
            <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent">
              Qualifications
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A strong academic foundation bridging scientific discipline, modern software
            engineering concepts, and modern information systems management.
          </motion.p>
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent via-accent-purple/50 to-transparent opacity-40" />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                className="relative pl-12 sm:pl-20 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Glowing Node Dot */}
                <div className="absolute left-4 sm:left-8 top-6 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-accent group-hover:border-white shadow-[0_0_12px_rgba(56,189,248,0.8)] transition-colors">
                    {item.status === "ongoing" && (
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                    )}
                  </div>
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 group-hover:border-accent/40 transition-all duration-300">
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.status === "ongoing" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Undergraduate
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-accent transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-4">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Coursework / Modules Chips */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      Key Focus Areas & Modules:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/5 hover:border-accent/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
