import { ArrowUpRight } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";

export default function About() {
  const { about } = content;
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="about-grid">
          <div><p className="eyebrow">{about.label}</p><h2>{about.title}</h2></div>
          <div className="about-copy">{about.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        </div>
        <div className="highlight-grid">
          {about.highlights.map(item => (
            <article className="highlight-card" key={item.title}>
              <ArrowUpRight size={20} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
