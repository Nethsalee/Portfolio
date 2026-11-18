import { ArrowUp } from "lucide-react";
import { content } from "@/content";

export default function Footer() {
  return <footer className="footer">
    <div><p>© {new Date().getFullYear()} {content.person.name}</p><span>{content.footer.note}</span></div>
    <a href="#home" className="back-to-top">{content.footer.top}<ArrowUp size={16} aria-hidden="true" /></a>
  </footer>;
}
