"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, FileText, CheckCircle2 } from "lucide-react";

interface AICaseStudyCTAProps {
  caseStudyCTA?: {
    eyebrow?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export function AICaseStudyCTA({ caseStudyCTA }: AICaseStudyCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = caseStudyCTA?.eyebrow || "REAL-WORLD RESULTS";
  const title =
    caseStudyCTA?.title || "See how we solve real operational challenges.";
  const description =
    caseStudyCTA?.description ||
    "Explore how we engineered an automated lead processing pipeline that connected multi-channel forms to CRM and notifications.";
  const buttonText =
    caseStudyCTA?.buttonText || "See How We Solve Real Problems";
  const buttonUrl = caseStudyCTA?.buttonUrl || "/case-studies";

  return (
    <section className="py-20 bg-[#030608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#060b0e] via-[#091116] to-[#060b0e] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#9ae64c]/[0.05] rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {eyebrow}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {title}
            </h3>

            <p className="text-sm sm:text-base text-[#9cb1a6] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Link
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
