"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Sparkles, ShieldCheck } from "lucide-react";
import { trackLeadSubmission, trackContactFormStart } from "@/lib/analytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  initialService = "AI Automation",
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService,
    budget: "$5k - $15k",
    message: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      trackContactFormStart("Contact Modal");
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          budget: formData.budget,
          message: formData.message,
          formLocation: "Contact Modal",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      trackLeadSubmission({
        service: formData.service,
        budget: formData.budget,
        formLocation: "Contact Modal",
      });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0a0f13] border border-white/[0.12] rounded-3xl p-7 sm:p-9 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] text-[#9cb1a6] hover:text-white hover:bg-white/[0.1] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#9ae64c]/20 border border-[#9ae64c]/40 flex items-center justify-center text-[#9ae64c] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Consultation Request Sent</h3>
            <p className="text-sm text-[#9cb1a6] max-w-sm mx-auto">
              We have received your requirements. Our lead engineer will review the details and reach out within 24 hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-[#05080a] bg-[#9ae64c]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-semibold text-[#9ae64c] uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#9ae64c]" />
                <span>Direct Inquiry</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-[#9cb1a6]">
                Fill out the form below to receive a custom architecture scope and estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-3 rounded-xl bg-[#0f161b] border border-white/[0.08] text-white text-xs focus:border-[#9ae64c] focus:outline-none"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3 py-3 rounded-xl bg-[#0f161b] border border-white/[0.08] text-white text-xs focus:border-[#9ae64c] focus:outline-none"
                  >
                    <option value="$2k - $5k">$2,000 - $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $30k">$15,000 - $30,000</option>
                    <option value="$30k+">$30,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9cb1a6] mb-1.5">
                  Project Brief &amp; Goals *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe what you want to build, automate, or optimize..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 focus:border-[#9ae64c] focus:outline-none text-sm resize-none"
                />
              </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_rgba(154,230,76,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Request Technical Scope"}</span>
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? "animate-pulse" : ""}`} />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#8c9e94] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9ae64c]" />
                  <span>NDA Protected • Zero spam policy</span>
                </div>
              </form>
            </div>
          )}
      </div>
    </div>
  );
}
