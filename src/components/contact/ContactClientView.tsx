"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FullHomepageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { trackLeadSubmission, trackPhoneClick, trackEmailClick } from "@/lib/analytics";

interface ContactClientViewProps {
  data: FullHomepageData;
}

export function ContactClientView({ data }: ContactClientViewProps) {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation",
    timeline: "Within 2-4 weeks",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          timeline: formData.timeline,
          message: formData.message,
          formLocation: "Contact Page Form",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      trackLeadSubmission({
        service: formData.service,
        timeline: formData.timeline,
        formLocation: "Contact Page Form",
      });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesList = [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Vibe Code Development", href: "/services/vibe-code-development" },
    { label: "Chatbot Development", href: "/services/chatbot-development" },
    { label: "API Integration", href: "/services/api-integration" },
    { label: "Web Development", href: "/services/web-development" },
  ];

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
      />

      {/* Accessible Breadcrumbs with JSON-LD schema */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact", current: true },
        ]}
      />

      <main className="pb-24">
        {/* Contact Hero & Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Positioning */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START A CONVERSATION</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                  Let&apos;s Build, Automate &amp;{" "}
                  <span className="text-[#9ae64c]">Scale Your Business</span>
                </h1>
                <p className="text-base text-[#9cb1a6] leading-relaxed">
                  Have a project in mind or want to explore how AI automation, modern SEO, and custom development can transform your operations? Get in touch for a senior technical consultation.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#060b0e] border border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#8c9e94] uppercase tracking-wider">
                      Direct Email
                    </div>
                    <a
                      href="mailto:contact@digitalwebstudio.in"
                      onClick={() => trackEmailClick("contact@digitalwebstudio.in")}
                      className="text-sm font-bold text-white hover:text-[#9ae64c] transition-colors mt-0.5 block"
                    >
                      contact@digitalwebstudio.in
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#060b0e] border border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#8c9e94] uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <a
                      href="tel:+916383088993"
                      onClick={() => trackPhoneClick("+916383088993")}
                      className="text-sm font-bold text-white hover:text-[#9ae64c] transition-colors mt-0.5 block"
                    >
                      +91 63830 88993
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#060b0e] border border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#8c9e94] uppercase tracking-wider">
                      Guaranteed Response SLA
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      Under 2 Hours (Mon - Sat)
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Discovery Links */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                  Explore Specialized Service Pages:
                </div>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/30 transition-all font-mono"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="p-7 sm:p-10 rounded-3xl bg-[#05090c] border border-white/[0.1] shadow-2xl relative overflow-hidden">
                {/* Subtle Ambient Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9ae64c]/10 rounded-full blur-3xl pointer-events-none" />

                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#9ae64c]/20 border border-[#9ae64c]/40 text-[#9ae64c] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#9cb1a6] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. A senior technical partner from DigitalWebStudio will review your inquiry and get back to you within 2 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-[#05080a] bg-[#9ae64c] hover:bg-[#b4fa6c] transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Project Scope &amp; Inquiry
                      </h2>
                      <p className="text-xs sm:text-sm text-[#8c9e94]">
                        Fill out the details below and we&apos;ll schedule a structured technical discovery call.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-[#9cb1a6] mb-2 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-[#030608] border border-white/[0.1] text-sm text-white placeholder-[#556960] focus:border-[#9ae64c] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#9cb1a6] mb-2 uppercase tracking-wider">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#030608] border border-white/[0.1] text-sm text-white placeholder-[#556960] focus:border-[#9ae64c] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-[#9cb1a6] mb-2 uppercase tracking-wider">
                          Primary Capability Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#030608] border border-white/[0.1] text-sm text-white focus:border-[#9ae64c] focus:outline-none transition-colors"
                        >
                          <option value="AI Automation">AI Automation</option>
                          <option value="SEO">SEO (Search Engine Optimization)</option>
                          <option value="Digital Marketing">Digital Marketing &amp; Growth</option>
                          <option value="Vibe Code Development">Vibe Code Development</option>
                          <option value="Chatbot Development">Chatbot Development</option>
                          <option value="API Integration">API Integration</option>
                          <option value="Web Development">Web Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#9cb1a6] mb-2 uppercase tracking-wider">
                          Target Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#030608] border border-white/[0.1] text-sm text-white focus:border-[#9ae64c] focus:outline-none transition-colors"
                        >
                          <option value="Immediately (1-2 weeks)">Immediately (1-2 weeks)</option>
                          <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                          <option value="Next Quarter">Next Quarter</option>
                          <option value="Exploring Options">Exploring Options</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9cb1a6] mb-2 uppercase tracking-wider">
                        Project Overview &amp; Key Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about what you want to build, automate, or optimize..."
                        className="w-full px-4 py-3 rounded-xl bg-[#030608] border border-white/[0.1] text-sm text-white placeholder-[#556960] focus:border-[#9ae64c] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full font-bold text-xs text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Sending Inquiry..." : "Send Project Inquiry"}</span>
                      <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#8c9e94] pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9ae64c]" />
                      <span>Strict privacy policy • No spam • NDA protected</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer siteLogo={data.siteLogo} globalSettings={data.globalSettings} />
    </div>
  );
}
