"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

interface VibeCodeApproachProps {
  approach?: {
    eyebrow?: string;
    title: string;
    description: string;
    aiPoints: string[];
    humanPoints: string[];
  };
}

export function VibeCodeApproach({ approach }: VibeCodeApproachProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = approach?.eyebrow || "OUR BALANCED APPROACH";
  const title =
    approach?.title || "AI accelerates speed. Human expertise controls quality.";
  const description =
    approach?.description ||
    "We use AI where it excels and senior engineers where human judgement is essential.";
  const aiPoints = approach?.aiPoints || [
    "Rapid ideation and architectural scaffolding",
    "Boilerplate and component structure generation",
    "Fast prototyping of UI iterations",
    "Automated test suite scaffolding",
  ];
  const humanPoints = approach?.humanPoints || [
    "Scalable database and system architecture",
    "Security, authentication and data protection",
    "Core Web Vitals and runtime performance audits",
    "Refactoring for long-term code maintainability",
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#9ae64c]" />
            {eyebrow}
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: AI Acceleration */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-white/[0.08] relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Where AI Excels</h3>
                <span className="text-xs font-mono text-[#9ae64c]">Velocity & Iteration Speed</span>
              </div>
            </div>

            <ul className="space-y-4">
              {aiPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#9cb1a6]">
                  <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Senior Human Engineering */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-[#9ae64c]/30 shadow-[0_10px_40px_rgba(154,230,76,0.05)] relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#9ae64c] flex items-center justify-center text-[#05080a] font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Where Humans Control Quality</h3>
                <span className="text-xs font-mono text-[#9ae64c]">Senior Engineering Oversight</span>
              </div>
            </div>

            <ul className="space-y-4">
              {humanPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
