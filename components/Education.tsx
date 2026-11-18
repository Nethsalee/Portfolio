import { content } from "@/content";
import Reveal from "./Reveal";

export default function Education() {
  const { education } = content;
  return (
    <section id="education" className="section education-section">
      <Reveal className="timeline-layout">
        <div><p className="eyebrow">{education.label}</p><h2>{education.title}</h2></div>
        <ol className="education-timeline">
          {education.items.map(item => <li key={item.title}>
            <span className="timeline-dot" aria-hidden="true" />
            <p className="period">{item.period}</p><h3>{item.title}</h3><p>{item.institution}</p>
          </li>)}
        </ol>
      </Reveal>
    </section>
  );
}
