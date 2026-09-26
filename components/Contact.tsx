"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = `mailto:nethsalee@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display text-sm uppercase tracking-wider text-accent block mb-6">
                05 — Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Create Something{" "}
                <span className="text-accent">Together</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                I'm currently seeking opportunities as a Project Manager Intern where I can apply
                my technical background and organizational skills to deliver impactful results.
                Open to collaborations and conversations about technology, project management, or
                interesting problems to solve.
              </p>

              {/* Contact details */}
              <div className="space-y-6 mb-12">
                <a
                  href="mailto:nethsalee@gmail.com"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <div className="font-medium">nethsalee@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+94719002919"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <div className="font-medium">+94 71 900 2919</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border-subtle flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Location
                    </div>
                    <div className="font-medium">Sri Lanka</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/nethsalee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-surface border border-border-subtle flex items-center gap-2 hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-105 group text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/nethsalee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-surface border border-border-subtle flex items-center gap-2 hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-105 group text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Right column - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-surface/30 backdrop-blur-sm border border-border-subtle rounded-3xl"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border-subtle rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border-subtle rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border-subtle rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-accent hover:bg-accent-hover text-text-primary font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group hover:scale-[1.02]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </form>

              <p className="text-sm text-text-secondary text-center mt-6">
                References available upon request
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
