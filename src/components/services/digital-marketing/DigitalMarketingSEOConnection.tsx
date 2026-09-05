"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Search, Megaphone, BarChart3, ArrowRight } from "lucide-react";

interface DigitalMarketingSEOConnectionProps {
  seoConnection?: {
    eyebrow?: string;
    title: string;
    description: string;
  };
}

export function DigitalMarketingSEOConnection({
  seoConnection,
}: DigitalMarketingSEOConnectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = seoConnection?.eyebrow || "SYNERGY ACROSS CHANNELS";
  const title =
    seoConnection?.title || "How SEO, content, and campaigns work together.";
  const description =
    seoConnection?.description ||
    "Digital marketing performs best when organic search foundations, paid campaigns, and analytical telemetry reinforce one another into a unified growth engine.";

  return (
    <section className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
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
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-6"
            >
              {description}
            </motion.p>
          </div>

          {/* Right Synergy Diagram */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#080d11] border border-white/[0.08] space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Organic Foundation (SEO)</h4>
                  <p className="text-xs text-[#9cb1a6]">Builds long-term sustainable authority & lowers blended CAC.</p>
                </div>
              </div>

              <div className="flex items-center justify-center text-[#9ae64c]">
                <span>+</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Targeted Paid Campaigns</h4>
                  <p className="text-xs text-[#9cb1a6]">Delivers immediate high-intent leads and tests conversion messaging.</p>
                </div>
              </div>

              <div className="flex items-center justify-center text-[#9ae64c]">
                <span>=</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#9ae64c]/[0.05] border border-[#9ae64c]/30">
                <div className="w-10 h-10 rounded-xl bg-[#9ae64c] flex items-center justify-center text-[#05080a] font-bold shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#9ae64c]">Compounding Growth Engine</h4>
                  <p className="text-xs text-white/90">Continuous feedback loop that converts search demand into revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
