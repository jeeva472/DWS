"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Bot, ShieldCheck, Compass } from "lucide-react";

interface SEOModernSearchProps {
  aiSearch?: {
    eyebrow?: string;
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
}

export function SEOModernSearch({ aiSearch }: SEOModernSearchProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = aiSearch?.eyebrow || "MODERN SEARCH LANDSCAPE";
  const title =
    aiSearch?.title || "SEO for traditional search and modern AI discovery.";
  const description =
    aiSearch?.description ||
    "As search experiences evolve, the core principles of authority, technical clarity, and authentic expertise matter more than ever.";
  const points = aiSearch?.points || [];

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
            <Bot className="w-3.5 h-3.5 text-[#9ae64c]" />
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
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-8 rounded-2xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#9ae64c] transition-colors">
                  {point.title}
                </h3>

                <p className="text-sm text-[#9cb1a6] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-[#556960] font-mono uppercase tracking-wider">
                Authority Signal 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
