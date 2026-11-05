"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
export default function Contact() {
    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);
    async function copyEmail() { setCopied(false); try {
        await navigator.clipboard.writeText("nethsalee@gmail.com");
        setCopied(true);
        setStatus("Email address copied.");
    }
    catch {
        setStatus("Copy failed. Please select and copy the email address manually.");
    } }
    function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = "Portfolio inquiry from " + String(data.get("name")); const body = String(data.get("message")) + "\r\n\r\nFrom: " + String(data.get("name")) + "\r\nEmail: " + String(data.get("email")); window.location.href = "mailto:nethsalee@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body); }
    return <section id="contact" className="section contact-section"><div className="contact-grid"><div><span className="eyebrow">04 / GET IN TOUCH</span><h2>Good things start<br />with a conversation.</h2><p>Have an opportunity, an idea, or a question? I’d love to hear from you.</p><div className="email-line"><a href="mailto:nethsalee@gmail.com">nethsalee@gmail.com</a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={17}/> : <Copy size={17}/>}</button></div><p className="copy-status" role="status">{status}</p><div className="contact-links"><a href="tel:+94719002919">+94 71 900 2919</a><a href="https://linkedin.com/in/nethsalee" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/nethsalee" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a></div></div>
 <form onSubmit={submit} className="contact-form"><div className="form-pair"><label>Your name<input name="name" autoComplete="name" required placeholder="Jane Doe"/></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="jane@example.com"/></label></div><label>Your message<textarea name="message" required rows={4} placeholder="Tell me what you have in mind…"/></label><button type="submit" className="button primary">Open email draft <ArrowUpRight size={16}/></button><p className="form-note">Opens your email app. Send the draft there to deliver your message. If no app opens, use the email address alongside.</p></form></div></section>;
}
