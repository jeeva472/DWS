"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { ServicesCTAData } from "@/lib/types/wordpress";

interface ServicesCTAProps {
  cta: ServicesCTAData;
  onOpenConsultation?: () => void;
}

export function ServicesCTA({ cta, onOpenConsultation }: ServicesCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = cta.eyebrow || "READY TO BUILD?";
  const title = cta.title || "Let's create something that works for your business.";
  const description =
    cta.description ||
    "Tell us what you're working on. We'll help you turn it into a practical digital solution.";
  const buttonText = cta.buttonText || "Start a Project";

  return (
    <section className="py-24 relative overflow-hidden bg-[#030608]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9ae64c]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-card border border-white/[0.12] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#9ae64c] rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#9ae64c] rounded-br-xl pointer-events-none" />

          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#9ae64c]/10 border border-[#9ae64c]/30 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-2xl mx-auto"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-10 max-w-xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_35px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:contact@digitalwebstudio.in"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-[#9ae64c]" />
              <span>contact@digitalwebstudio.in</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
