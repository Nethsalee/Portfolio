import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 selection:text-white relative selection:text-accent">
      <Navigation />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
