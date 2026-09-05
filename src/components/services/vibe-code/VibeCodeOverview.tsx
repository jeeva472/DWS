"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Terminal, Code2 } from "lucide-react";

interface VibeCodeOverviewProps {
  overview?: {
    eyebrow?: string;
    title: string;
    description: string;
  };
}

export function VibeCodeOverview({ overview }: VibeCodeOverviewProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = overview?.eyebrow || "WHAT IS VIBE CODING";
  const title =
    overview?.title || "AI velocity guided by senior engineering craft.";
  const description =
    overview?.description ||
    "Vibe coding leverages AI-assisted engineering workflows to compress months of boilerplate scaffolding into days, while experienced senior engineers guide architecture, validate security, and ensure maintainable production quality.";

  return (
    <section className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
          <span>{eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8 max-w-3xl mx-auto"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-white/[0.08] text-base sm:text-lg text-[#9cb1a6] leading-relaxed max-w-4xl mx-auto text-left shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0 mt-1">
              <Terminal className="w-4 h-4" />
            </div>
            <p className="text-white/95 font-medium leading-relaxed">
              {description}
            </p>
          </div>
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#7d9287]">
            <span>Workflow: Prompt-to-Component + Code Review</span>
            <span className="text-[#9ae64c]">Zero AI Hallucinations in Production</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
