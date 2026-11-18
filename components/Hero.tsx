import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { content } from "@/content";
import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import AnimatedName from "./AnimatedName";
import MotionPanel from "./MotionPanel";

export default function Hero() {
  const { hero, person } = content;

  return (
    <section id="home" className="hero">
      <Reveal>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-tagline">{hero.tagline}</p>
            <AnimatedName />
            <p className="hero-statement">{hero.statement}</p>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <MagneticLink href="#projects" className="button primary">
                {hero.projectsCta}<ArrowDown size={17} aria-hidden="true" />
              </MagneticLink>
              <a href="#contact" className="text-link">
                {hero.contactCta}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-location"><span aria-hidden="true" />{hero.location}</div>
          </div>

          <MotionPanel className="hero-visual-stage" depth={24}>
          <figure className={`portrait-panel ${person.portrait ? "has-portrait" : ""}`}>
            <div className="portrait-image">
              {person.portrait ? (
                <Image
                  src={person.portrait}
                  alt={person.portraitAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                  preload
                  className="portrait-photo"
                />
              ) : (
                <div className="portrait-monogram" aria-hidden="true">
                  <div className="portrait-ring ring-one" />
                  <div className="portrait-ring ring-two" />
                  <span>{person.initials}<i>.</i></span>
                </div>
              )}
            </div>
            <figcaption>
              <span>{person.name}</span>
              <span>{person.location}</span>
            </figcaption>
            <a href="#projects" className="portrait-arrow" aria-label={hero.projectsCta}>
              <ArrowDown size={25} aria-hidden="true" />
            </a>
          </figure>
          </MotionPanel>
        </div>

        <div className="hero-bottom">
          <ul className="hero-focus" aria-label={hero.visualLabel}>
            {hero.process.map(step => <li key={step}>{step}</li>)}
          </ul>
          <a href="#solea" className="current-project">
            <span className="status-dot" aria-hidden="true" />
            <span><small>{hero.currentLabel}</small><strong>{hero.currentProject}</strong></span>
            <ArrowUpRight size={19} aria-hidden="true" />
            <span className="sr-only">{hero.currentLink}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
