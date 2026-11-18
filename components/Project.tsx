import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";
import PortfolioLink from "./PortfolioLink";
import MotionPanel from "./MotionPanel";

export default function Project() {
  const { projects } = content;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading project-heading">
        <div><p className="eyebrow">{projects.label}</p><h2>{projects.title}</h2></div>
        <p>{projects.intro}</p>
      </div>
      <div className="project-list">
        {projects.items.map(project => (
          <Reveal key={project.id}>
            <MotionPanel depth={12}>
            <article className={`case-card case-${project.id}`} id={project.id}>
              <div className={`project-cover ${project.image ? "has-screenshot" : ""}`}>
                <div className="cover-topline">
                  <span className="project-category">{project.category}</span>
                  <ArrowUpRight size={23} aria-hidden="true" />
                </div>
                {project.image ? (
                  <div className="screenshot-frame">
                    <div className="browser-chrome" aria-hidden="true"><i /><i /><i /></div>
                    <Image src={project.image} alt={project.imageAlt} width={1440} height={900}
                      sizes="(max-width: 760px) 100vw, 85vw" className="project-screenshot" />
                  </div>
                ) : (
                  <div className="project-cover-art" aria-hidden="true">
                    <span className="cover-initials">{project.monogram}</span>
                    <div className="cover-disc" /><div className="cover-disc disc-two" />
                  </div>
                )}
                <div className="project-poster"><span>{project.title}</span><p>{project.poster}</p></div>
              </div>
              <div className="project-detail">
                <div className="project-overview">
                  <p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={content.skills.label}>
                    {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <div className="project-contribution">
                  <h4>{projects.contributionLabel}</h4>
                  <ul className="contribution-list">
                    {project.contributions.map(text => <li key={text}>{text}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.links.map(link => <PortfolioLink key={link.label} link={link} placeholder={projects.placeholder} />)}
                  </div>
                </div>
              </div>
            </article>
            </MotionPanel>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
