import { Waves, HeartHandshake, CalendarDays, PenLine } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";

const icons = [Waves, HeartHandshake, CalendarDays, PenLine];

export default function Community() {
  const { community } = content;
  return (
    <section id="community" className="section">
      <Reveal>
        <div className="section-heading"><p className="eyebrow">{community.label}</p><h2>{community.title}</h2></div>
        <div className="community-grid">
          {community.items.map((item, index) => {
            const Icon = icons[index];
            return <article className="community-card" key={item.title}>
              <div className="community-top"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><span className="period">{item.period}</span></div>
              <h3>{item.title}</h3><p>{item.organisation}</p>
            </article>;
          })}
        </div>
      </Reveal>
    </section>
  );
}
