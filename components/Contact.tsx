"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { useState, FormEvent } from "react";

const opportunityTypes = [
  "Project Manager Intern",
  "Full-Stack Developer",
  "Agile Sprint Coordinator",
  "General Collaboration",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleInterest: "Project Manager Intern",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `[${formData.roleInterest}] Portfolio Inquiry from ${formData.name}`;
    const body = `${formData.message}%0D%0A%0D%0A--------------------%0D%0ASender Name: ${formData.name}%0D%0ASender Email: ${formData.email}%0D%0AOpportunity Interest: ${formData.roleInterest}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      window.location.href = `mailto:nethsalee@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-8 h-[1px] bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                05 — Get In Touch
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's Build & Ship{" "}
              <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I am actively seeking Project Manager Intern and Junior Full-Stack opportunities.
              Whether you have an open role, want to collaborate on a system, or just wish to say
              hello, I'd love to connect.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Contact & Availability */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Availability Badge Card */}
              <div className="p-6 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Currently Available For Hiring</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Open for Internship Opportunities
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Ready to contribute to agile sprints, feature coordination, and full-stack software
                  milestones starting immediately.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-text-muted">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>Prompt Response (typically &lt; 24h)</span>
                </div>
              </div>

              {/* Direct Click-to-Copy Email Card */}
              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between group hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:nethsalee@gmail.com"
                      className="text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      nethsalee@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("nethsalee@gmail.com", "email")}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Click-to-Copy Phone Card */}
              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between group hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+94719002919"
                      className="text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      +94 71 900 2919
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("+94719002919", "phone")}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-all"
                  title="Copy phone to clipboard"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Socials */}
              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted block">Location</span>
                    <span className="text-xs font-medium text-slate-200">
                      Sri Lanka (GMT+5:30) • Remote Ready
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/nethsalee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 text-slate-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nethsalee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 text-slate-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Quick Inquiry Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-7 sm:p-9 rounded-3xl glass-card border border-white/10 relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>Send a Direct Message</span>
                </div>

                {/* Role Interest Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2.5">
                    Regarding Role / Interest:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {opportunityTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, roleInterest: type })}
                        className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                          formData.roleInterest === type
                            ? "bg-accent text-slate-950 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                            : "bg-white/[0.04] text-text-secondary border border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell me about the project, role responsibilities, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-accent via-sky-400 to-accent-hover hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Opening email client...</span>
                  ) : isSent ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Message Drafted!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-text-muted text-center mt-4">
                  Opens directly in your default email client. References and CV available on request.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
