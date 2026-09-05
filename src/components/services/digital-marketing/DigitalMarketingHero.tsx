"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp, BarChart3, Target, Users, Sparkles, CheckCircle2, DollarSign } from "lucide-react";
import { ServicesHeroData } from "@/lib/types/wordpress";

interface DigitalMarketingHeroProps {
  hero: ServicesHeroData;
  onOpenConsultation?: () => void;
}

export function DigitalMarketingHero({ hero, onOpenConsultation }: DigitalMarketingHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "DIGITAL GROWTH • PERFORMANCE MARKETING";
  const title = hero.title || "Digital Marketing Built Around Growth";
  const description =
    hero.description ||
    "We combine strategy, content, campaigns and measurement to help businesses reach the right audience and turn attention into meaningful opportunities.";
  const ctaText = hero.ctaText || "Plan Your Growth";

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#030608]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#9ae64c]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#9ae64c]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Eyebrow Tag */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5 text-[11px] font-bold text-[#9ae64c] tracking-[0.22em] uppercase font-mono"
            >
              <span className="w-3.5 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Single Main H1 for SEO */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              Digital Marketing{" "}
              <span className="text-[#9ae64c]">Built Around Growth</span>
            </motion.h1>

            {/* Narrative Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-xl font-normal"
            >
              {description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#marketing-services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ChevronDown className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/[0.08] text-xs text-[#7d9287]"
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#9ae64c]" />
                <span>High-Intent Audience Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#9ae64c]" />
                <span>Full GA4 Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#9ae64c]" />
                <span>Optimized Customer Acquisition Cost</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Conversion Funnel Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#060a0d]/90 border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
            >
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#9ae64c] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                    Growth Funnel Telemetry
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30 text-[10px] font-mono">
                  LIVE ATTRIBUTION
                </span>
              </div>

              {/* Conversion Stages */}
              <div className="space-y-3 relative">
                <div className="p-3.5 rounded-xl bg-[#080d11] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#9ae64c]" />
                    <span className="text-xs font-bold text-white">01. Reach</span>
                    <span className="text-[11px] text-[#7d9287]">SEO + Targeted Ads</span>
                  </div>
                  <span className="text-xs font-mono text-[#9ae64c] font-bold">100% Inflow</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080d11] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#9ae64c]" />
                    <span className="text-xs font-bold text-white">02. Engage</span>
                    <span className="text-[11px] text-[#7d9287]">High-Value Content & UX</span>
                  </div>
                  <span className="text-xs font-mono text-[#9ae64c] font-bold">High Intent</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#9ae64c]/[0.05] border border-[#9ae64c]/30 flex items-center justify-between shadow-[0_0_20px_rgba(154,230,76,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#9ae64c]" />
                    <span className="text-xs font-bold text-[#9ae64c]">03. Convert</span>
                    <span className="text-[11px] text-white/80">Streamlined Lead Capture</span>
                  </div>
                  <span className="text-xs font-mono text-[#9ae64c] font-bold">+42% CVR</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080d11] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#9ae64c]" />
                    <span className="text-xs font-bold text-white">04. Measure</span>
                    <span className="text-[11px] text-[#7d9287]">GA4 & Server Data Layer</span>
                  </div>
                  <span className="text-xs font-mono text-white/90 font-bold">Verified ROI</span>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#7d9287] font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c]" />
                  <span>UTM Tracking Active</span>
                </span>
                <span>Zero Vanity Metrics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
