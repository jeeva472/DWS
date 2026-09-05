"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Phone, Mail, MapPin, Send } from "lucide-react";
import { HeroSectionData, GlobalSettings } from "@/lib/types/wordpress";

interface ContactCTAProps {
  contactCta: HeroSectionData;
  globalSettings?: GlobalSettings;
  onOpenConsultation?: () => void;
}

export function ContactCTA({
  contactCta,
  globalSettings,
  onOpenConsultation,
}: ContactCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#05080a] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Glow Ambience */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#9ae64c]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl glass-card border border-[#9ae64c]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Copy & Quick Contacts */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
                <span>{contactCta.eyebrow || "Let's Work Together"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                Ready to build something{" "}
                <span className="text-gradient-green">remarkable?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
                {contactCta.description ||
                  "Tell us about your project, timeline, and vision. Our technical leads will analyze your requirements and present a tailored architecture roadmap within 24 hours."}
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                {globalSettings?.phone && (
                  <a
                    href={`tel:${globalSettings.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-[#f5f8f6] hover:text-[#9ae64c] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{globalSettings.phone}</span>
                  </a>
                )}

                {globalSettings?.email && (
                  <a
                    href={`mailto:${globalSettings.email}`}
                    className="flex items-center gap-3 text-sm text-[#f5f8f6] hover:text-[#9ae64c] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>{globalSettings.email}</span>
                  </a>
                )}

                {globalSettings?.address && (
                  <div className="flex items-center gap-3 text-sm text-[#9cb1a6]">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center text-[#9cb1a6]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{globalSettings.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Interactive Project Inquiry Card */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#0a0f13]/90 border border-white/[0.1] shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#9ae64c]/20 border border-[#9ae64c]/40 flex items-center justify-center text-[#9ae64c] mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-sm text-[#9cb1a6] max-w-sm mx-auto">
                      Thank you for contacting DigitalWebStudio. Our lead engineer will review your project and get in touch within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#9ae64c] hover:underline pt-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none focus:ring-1 focus:ring-[#9ae64c] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none focus:ring-1 focus:ring-[#9ae64c] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0f161b] border border-white/[0.08] text-white focus:border-[#9ae64c] focus:outline-none focus:ring-1 focus:ring-[#9ae64c] text-sm"
                      >
                        <option value="Web Development">Web Development & Headless Next.js</option>
                        <option value="AI & Automation">AI & Workflow Automation</option>
                        <option value="Integrations & Systems">Integrations & Systems</option>
                        <option value="Growth & Marketing">Growth, SEO & Paid Ads</option>
                        <option value="Custom Scope">Comprehensive Custom Scope</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-2">
                        Project Brief / Goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Brief overview of goals, timeline, or requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none focus:ring-1 focus:ring-[#9ae64c] text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_-5px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
