"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eye, Target, Code2, Layers, TrendingUp } from "lucide-react";
import { ServicesProcessData } from "@/lib/types/wordpress";

interface AIHowItWorksProps {
  process?: ServicesProcessData;
}

const PROCESS_ICONS: Record<string, React.ElementType> = {
  eye: Eye,
  target: Target,
  code: Code2,
  layers: Layers,
  "chart-up": TrendingUp,
};

export function AIHowItWorks({ process }: AIHowItWorksProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = process?.eyebrow || "HOW IT WORKS";
  const title = process?.title || "From manual friction to seamless automation.";
  const description =
    process?.description ||
    "A disciplined, 5-stage deployment framework designed for reliability, data security, and long-term stability.";
  const steps = process?.steps || [];

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

        {/* 5 Sequential Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = PROCESS_ICONS[step.icon] || Target;

            return (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-[#9ae64c]">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#9ae64c] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9cb1a6] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] text-[#556960] font-mono uppercase tracking-wider">
                  Phase 0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
