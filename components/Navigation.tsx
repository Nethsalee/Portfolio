"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [["About", "about"], ["Work", "project"], ["Skills", "skills"], ["Education", "education"]];
export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    useEffect(() => {
      const sections = ["home", "about", "project", "skills", "education", "contact"];
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
      sections.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
      return () => observer.disconnect();
    }, []);
    const toggle = useRef<HTMLButtonElement>(null);
    return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation" onKeyDown={e => { if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
    } }}>
    <a className="wordmark" href="#home" onClick={() => setOpen(false)}>nethsalee<span>.</span></a>
    <div className="desktop-links">{links.map(([label, id]) => <a key={id} className={active === id ? "nav-active" : undefined} aria-current={active === id ? "location" : undefined} href={"#" + id}>{label}</a>)}</div>
    <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a>
    <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <div id="mobile-navigation" className="mobile-links" hidden={!open}>{links.map(([label, id]) => <a key={id} href={"#" + id} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </nav></header>;
}
