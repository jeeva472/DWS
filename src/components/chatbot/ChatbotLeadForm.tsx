"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

interface ChatbotLeadFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

const SERVICES_OPTIONS = [
  "AI Automation",
  "Technical SEO",
  "Digital Marketing",
  "Vibe Code Development",
  "Chatbot Development",
  "API Integration",
  "Modern Web Development",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "Flexible / Undecided",
];

export function ChatbotLeadForm({
  initialService = "AI Automation",
  onSuccess,
}: ChatbotLeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    budget: "$5,000 - $15,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
          phone: formData.phone || undefined,
          service: formData.service,
          budget: formData.budget,
          message: formData.company
            ? `[Company: ${formData.company}] ${formData.message}`
            : formData.message,
          formLocation: "AI Chatbot Assistant Lead Card",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation inquiry.");
      }

      setSubmitted(true);
      trackLeadSubmission({
        service: formData.service,
        budget: formData.budget,
        formLocation: "AI Chatbot Assistant Lead Card",
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-xl bg-[#06120b] border border-[#9ae64c]/40 text-center space-y-2 mt-2">
        <div className="w-9 h-9 rounded-full bg-[#9ae64c]/20 text-[#9ae64c] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="text-xs font-bold text-white">Inquiry Received!</div>
        <p className="text-[11px] text-[#9cb1a6] leading-relaxed">
          Our technical team will review your project requirements and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-2.5 p-3.5 rounded-xl bg-[#060a0d] border border-white/[0.1] text-xs space-y-2.5 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <span className="font-semibold text-white flex items-center gap-1.5 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
          Direct Project Consultation
        </span>
        <span className="text-[9px] font-mono text-[#9ae64c] uppercase">24h Response</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        {errorMessage && (
          <div className="p-2 rounded bg-red-950/50 border border-red-500/40 text-red-300 text-[10px]">
            {errorMessage}
          </div>
        )}

        {/* Name & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <input
              type="text"
              required
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c]"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Work Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c]"
            />
          </div>
        </div>

        {/* Phone & Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c]"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0b1014] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c]"
          >
            {SERVICES_OPTIONS.map((srv) => (
              <option key={srv} value={srv} className="bg-[#080d11] text-white">
                {srv}
              </option>
            ))}
          </select>
        </div>

        {/* Optional Budget Bracket */}
        <div>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0b1014] border border-white/[0.08] text-[#9cb1a6] text-[11px] focus:outline-none focus:border-[#9ae64c]"
          >
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="bg-[#080d11] text-white">
                Budget: {b}
              </option>
            ))}
          </select>
        </div>

        {/* Message / Brief */}
        <div>
          <textarea
            rows={2}
            placeholder="Tell us about your project or timeline..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] focus:outline-none focus:border-[#9ae64c] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(154,230,76,0.4)] transition-all disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Send Project Request</span>
            </>
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-1 text-[9px] text-[#556960] pt-1">
        <ShieldCheck className="w-3 h-3 text-[#9ae64c]" />
        <span>100% Privacy • Direct response from engineering leads</span>
      </div>
    </div>
  );
}
