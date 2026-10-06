"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "PHP", "HTML", "CSS"],
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
  },
  {
    title: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "MERN Stack"],
    color: "from-cyan-500/20 to-cyan-600/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Database",
    skills: ["MySQL", "Prisma", "MongoDB"],
    color: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
  },
  {
    title: "Tools & Platforms",
    skills: ["Trello", "Jira", "Asana", "GitHub", "VS Code", "IntelliJ IDEA", "XAMPP", "Figma"],
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
  },
  {
    title: "Other",
    skills: ["Excel", "Google Sheets", "Jupyter Notebook", "Google Colab"],
    color: "from-pink-500/20 to-pink-600/20",
    border: "border-pink-500/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.span
              className="font-display text-sm uppercase tracking-wider text-accent block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Technical Skills
            </motion.span>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Tools & Technologies
            </motion.h2>
            <motion.p
              className="text-lg text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              A versatile technical foundation spanning full-stack development, project management
              tools, and data analysis platforms
            </motion.p>
          </div>

          {/* Skills constellation - asymmetric grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className={`group p-8 bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.border} rounded-3xl hover:scale-[1.02] transition-all duration-300 ${
                    categoryIndex === 4 ? "md:col-span-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.5 + categoryIndex * 0.1 }}
                >
                  <h3 className="font-display text-xl font-semibold mb-6 text-text-primary">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border-subtle rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all duration-200 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.03,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional context */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="p-8 bg-surface/30 backdrop-blur-sm border border-border-subtle rounded-3xl">
              <p className="text-text-secondary leading-relaxed">
                Continuously expanding my technical toolkit while deepening expertise in project
                management methodologies, Agile frameworks, and the software development lifecycle.
                Always eager to learn emerging technologies that drive efficient, scalable solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
