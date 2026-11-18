import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Atmosphere from "@/components/Atmosphere";
import SkillsRibbon from "@/components/SkillsRibbon";

export default function Home() {
  return <>
    <Atmosphere />
    <Navigation />
    <main className="page-shell" id="main-content">
      <Hero /><SkillsRibbon /><About /><Project /><Skills /><Certifications /><Contact />
    </main>
    <Footer />
  </>;
}
