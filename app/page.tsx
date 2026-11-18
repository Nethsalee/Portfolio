import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Community from "@/components/Community";
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
      <Hero /><SkillsRibbon /><About /><Project /><Skills /><Education /><Community /><Certifications /><Contact />
    </main>
    <Footer />
  </>;
}
