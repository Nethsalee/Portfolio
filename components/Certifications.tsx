import { BookOpen } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";

export default function Certifications() {
  const { certifications } = content;
  return (
    <section id="certifications" className="section">
      <Reveal>
        <div className="section-heading"><p className="eyebrow">{certifications.label}</p><h2>{certifications.title}</h2></div>
        <div className="course-list">
          {certifications.items.map(item => <article key={item.title}>
            <BookOpen size={21} strokeWidth={1.5} aria-hidden="true" />
            <div><h3>{item.title}</h3><p>{item.institution}</p></div>
          </article>)}
        </div>
      </Reveal>
    </section>
  );
}
