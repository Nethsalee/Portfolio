import { Braces, PanelsTopLeft, Database, Wrench, NotebookPen } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";

const icons = [Braces, PanelsTopLeft, Database, Wrench, NotebookPen];

export default function Skills() {
  const { skills } = content;
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="section-heading"><p className="eyebrow">{skills.label}</p><h2>{skills.title}</h2></div>
        <div className="skills-bento">
          {skills.groups.map((group, index) => {
            const Icon = icons[index];
            return <article key={group.title} className={`skill-card skill-card-${index}`}>
              <Icon size={23} strokeWidth={1.5} aria-hidden="true" /><h3>{group.title}</h3>
              <ul className="tag-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>;
          })}
        </div>
        <div className="soft-skills"><h3>{skills.softTitle}</h3><ul>{skills.soft.map(item => <li key={item}>{item}</li>)}</ul></div>
      </Reveal>
    </section>
  );
}
