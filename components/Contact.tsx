"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { content } from "@/content";
import Reveal from "./Reveal";
import PortfolioLink from "./PortfolioLink";

export default function Contact() {
  const { contact, person } = content;
  const [copyStatus, setCopyStatus] = useState("");
  const [draftStatus, setDraftStatus] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    setCopied(false);
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setCopyStatus(contact.copied);
    } catch {
      setCopyStatus(contact.copyFailed);
    }
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${contact.subjectPrefix} ${String(data.get("name")).trim()}`;
    const body = [
      String(data.get("message")).trim(),
      "",
      `${contact.nameLabel}: ${String(data.get("name")).trim()}`,
      `${contact.emailLabel}: ${String(data.get("email")).trim()}`,
    ].join("\r\n");
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftStatus(contact.feedback);
  }

  return (
    <section id="contact" className="section contact-section">
      <Reveal className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">{contact.label}</p><h2>{contact.title}</h2><p>{contact.intro}</p>
          <div className="email-line"><a href={`mailto:${person.email}`}>{person.email}</a>
            <button type="button" className="icon-button" onClick={copyEmail} aria-label={contact.copy}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <p role="status" className="status-message">{copyStatus}</p>
          <div className="contact-socials">{contact.links.map(link =>
            <PortfolioLink key={link.label} link={link} placeholder={contact.placeholder} />)}</div>
        </div>
        <form onSubmit={prepareEmail} className="contact-form">
          <div className="form-pair">
            <label htmlFor="contact-name">{contact.nameLabel}
              <input id="contact-name" name="name" autoComplete="name" required maxLength={150} placeholder={contact.namePlaceholder} />
            </label>
            <label htmlFor="contact-email">{contact.emailLabel}
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder={contact.emailPlaceholder} />
            </label>
          </div>
          <label htmlFor="contact-message">{contact.messageLabel}
            <textarea id="contact-message" name="message" required rows={4} maxLength={4000} placeholder={contact.messagePlaceholder} />
          </label>
          <button type="submit" className="button primary">{contact.submit}<ArrowUpRight size={17} /></button>
          <p className="form-note">{contact.note}</p>
          <p role="status" className="status-message">{draftStatus}</p>
        </form>
      </Reveal>
    </section>
  );
}
