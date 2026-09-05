"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Gauge, Layers, Server } from "lucide-react";

interface SEODevConnectionProps {
  devConnection?: {
    eyebrow?: string;
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
}

const DEV_ICONS = [Layers, Gauge, Code2, Server];

export function SEODevConnection({ devConnection }: SEODevConnectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = devConnection?.eyebrow || "SEO + TECHNICAL ENGINEERING";
  const title =
    devConnection?.title || "Why technical development is the backbone of search.";
  const description =
    devConnection?.description ||
    "Search engines favor fast, well-structured, clean websites. We build and refactor websites so search engines can easily crawl, render, and index your content.";
  const points = devConnection?.points || [];

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

        {/* 4 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => {
            const IconComponent = DEV_ICONS[index % DEV_ICONS.length];

            return (
              <motion.div
                key={point.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-2xl bg-[#080d11] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] shrink-0 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#9ae64c] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
