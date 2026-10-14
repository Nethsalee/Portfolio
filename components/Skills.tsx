"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Globe,
  Database,
  Layers,
  Sparkles,
  Kanban,
  CheckCircle2,
  Terminal,
  Cpu,
  BarChart3,
} from "lucide-react";

type SkillCategory = {
  id: string;
  name: string;
  icon: any;
  description: string;
  skills: { name: string; level: string; highlight?: boolean }[];
};

const categories: SkillCategory[] = [
  {
    id: "pm",
    name: "Project Management & Agile",
    icon: Kanban,
    description: "Methodologies, sprint orchestration, and cross-functional leadership tools.",
    skills: [
      { name: "Agile & Scrum Frameworks", level: "Core Practice", highlight: true },
      { name: "Jira Software", level: "Proficient", highlight: true },
      { name: "Sprint Planning & Sizing", level: "Core Practice", highlight: true },
      { name: "Trello & Asana", level: "Proficient" },
      { name: "Kanban Boards", level: "Proficient" },
      { name: "Requirements Documentation", level: "Proficient" },
      { name: "Risk Assessment & Mitigation", level: "Practical" },
      { name: "Stakeholder Alignment", level: "Practical" },
    ],
  },
  {
    id: "web",
    name: "Web & Full-Stack Development",
    icon: Globe,
    description: "Modern frontend and backend architectures for scalable web applications.",
    skills: [
      { name: "React.js", level: "Proficient", highlight: true },
      { name: "Node.js", level: "Proficient", highlight: true },
      { name: "Express.js", level: "Proficient", highlight: true },
      { name: "RESTful API Design", level: "Proficient", highlight: true },
      { name: "MERN Stack", level: "Proficient", highlight: true },
      { name: "Next.js", level: "Working Knowledge" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TailwindCSS & CSS3", level: "Proficient" },
      { name: "HTML5 Semantic", level: "Proficient" },
    ],
  },
  {
    id: "db",
    name: "Databases & Architecture",
    icon: Database,
    description: "Relational and non-relational database design, querying, and schema modeling.",
    skills: [
      { name: "MySQL", level: "Proficient", highlight: true },
      { name: "MongoDB", level: "Working Knowledge" },
      { name: "Prisma ORM", level: "Practical" },
      { name: "Database Normalization", level: "Proficient" },
      { name: "Relational Schema Design", level: "Proficient" },
      { name: "CRUD Optimization", level: "Proficient" },
    ],
  },
  {
    id: "lang",
    name: "Programming Languages",
    icon: Code,
    description: "Foundational and object-oriented programming languages.",
    skills: [
      { name: "JavaScript", level: "Proficient", highlight: true },
      { name: "Java", level: "Academic & OOP", highlight: true },
      { name: "Python", level: "Practical" },
      { name: "PHP", level: "Working Knowledge" },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools & Collaboration",
    icon: Layers,
    description: "Version control, IDEs, UI prototyping, and workflow accelerators.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: true },
      { name: "VS Code", level: "Primary IDE" },
      { name: "Figma (UI/UX Review)", level: "Practical" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "Postman API Testing", level: "Proficient" },
      { name: "XAMPP", level: "Proficient" },
    ],
  },
  {
    id: "data",
    name: "Data & Analytical Tools",
    icon: BarChart3,
    description: "Spreadsheets, computational notebooks, and data representation platforms.",
    skills: [
      { name: "Microsoft Excel & Advanced Sheets", level: "Proficient", highlight: true },
      { name: "Google Sheets Collaboration", level: "Proficient" },
      { name: "Jupyter Notebook", level: "Practical" },
      { name: "Google Colab", level: "Practical" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all" ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              04 — Skills & Capabilities
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical Mastery &{" "}
            <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent">
              Project Leadership
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A multi-disciplinary toolkit built on technical execution, software systems
            comprehension, and structured agile team delivery.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeTab === "all"
                ? "bg-accent text-slate-950 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                : "bg-white/[0.04] text-text-secondary hover:text-white border border-white/5"
            }`}
          >
            All Disciplines
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                activeTab === c.id
                  ? "bg-accent text-slate-950 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "bg-white/[0.04] text-text-secondary hover:text-white border border-white/5"
              }`}
            >
              <c.icon className="w-3.5 h-3.5" />
              <span>{c.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              className="p-7 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.08 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">{cat.name}</h3>
                  </div>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-6">{cat.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                        skill.highlight
                          ? "bg-accent/10 border border-accent/30 text-white shadow-[0_0_10px_rgba(56,189,248,0.15)]"
                          : "bg-white/[0.03] border border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom level footnote */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>{cat.skills.length} Capabilities Verified</span>
                <span className="text-accent flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Applied in Projects
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
