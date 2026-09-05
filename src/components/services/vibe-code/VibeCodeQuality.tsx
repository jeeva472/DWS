"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, ShieldAlert, Gauge, CheckCircle2 } from "lucide-react";

interface VibeCodeQualityProps {
  quality?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
}

const QUALITY_ICONS = [Code2, ShieldAlert, Gauge];

export function VibeCodeQuality({ quality }: VibeCodeQualityProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = quality?.eyebrow || "ENGINEERING RIGOR";
  const title = quality?.title || "Fast does not mean careless.";
  const description =
    quality?.description ||
    "AI code generation without senior oversight leads to security vulnerabilities, brittle edge cases, and technical debt. We enforce strict engineering standards on every line of code.";
  const items = quality?.items || [
    {
      title: "Strict TypeScript Typings",
      description:
        "Zero runtime surprises with comprehensive type safety across all frontend and API layers.",
    },
    {
      title: "Security & Auth Verification",
      description:
        "Human validation of auth tokens, CORS policies, environment variables, and secure API bridges.",
    },
    {
      title: "Production Performance Audits",
      description:
        "Every build is benchmarked for bundle size, image optimization, and sub-second page loads.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#030608] relative overflow-hidden">
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

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = QUALITY_ICONS[index % QUALITY_ICONS.length];

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-2xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-6 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#9ae64c] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-[#556960] font-mono flex items-center justify-between">
                  <span>Quality Standard</span>
                  <span className="text-[#9ae64c]/80">Strict</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
