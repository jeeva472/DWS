"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Search, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { ServicesCTAData } from "@/lib/types/wordpress";

interface SEOConsultationCTAProps {
  cta?: ServicesCTAData;
  onOpenConsultation?: () => void;
}

export function SEOConsultationCTA({ cta, onOpenConsultation }: SEOConsultationCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = cta?.eyebrow || "ORGANIC VISIBILITY AUDIT";
  const title = cta?.title || "Let's Find Where Your Website Can Grow.";
  const description =
    cta?.description ||
    "Request a technical and on-page SEO assessment. We will identify the specific opportunities to increase your organic visibility and attract high-intent visitors.";
  const buttonText = cta?.buttonText || "Request an SEO Audit";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#05080a] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#9ae64c]/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#060a0d] border border-[#9ae64c]/30 shadow-[0_20px_70px_rgba(154,230,76,0.1)] text-center overflow-hidden"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed max-w-xl mx-auto mb-10">
            {description}
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_35px_rgba(154,230,76,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Value points */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#7d9287]">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9ae64c]" />
              <span>Actionable Technical Roadmap</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9ae64c]" />
              <span>Zero Black-Hat Risks</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#9ae64c]" />
              <span>Direct Engineering Fixes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
