import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { content } from "@/content";
import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import AnimatedName from "./AnimatedName";
import styles from "./HeroPortrait.module.css";
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

          <MotionPanel className="hero-visual-stage orbital-stage" depth={24}>
          <figure className={styles.portrait}>
            <div className={styles.scene}>
              <div className={styles.orbit} aria-hidden="true" />
              <div className={`${styles.orbit} ${styles.secondOrbit}`} aria-hidden="true" />
              <div className={styles.circle}>
                {person.portrait ? (
                  <Image
                    src={person.portrait}
                    alt={person.portraitAlt}
                    fill
                    sizes="(max-width: 444px) 63vw, (max-width: 760px) 280px, (max-width: 913px) 210px, (max-width: 1282px) 23vw, 295px"
                    preload
                    className={styles.photo}
                  />
                ) : (
                  <span className={styles.initials} aria-hidden="true">{person.initials}.</span>
                )}
              </div>
              <a href="#projects" className={styles.arrow} aria-label={hero.projectsCta}>
                <ArrowDown size={22} aria-hidden="true" />
              </a>
            </div>
            <figcaption className={styles.caption}>
              <span>{person.name}</span>
              <span>{person.location}</span>
            </figcaption>
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
