"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Search, Globe, Gauge, CheckCircle2, ShieldCheck, Activity, LineChart, Code2 } from "lucide-react";
import { ServicesHeroData } from "@/lib/types/wordpress";

interface SEOHeroProps {
  hero: ServicesHeroData;
  onOpenConsultation?: () => void;
}

export function SEOHero({ hero, onOpenConsultation }: SEOHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "SEARCH ENGINE OPTIMIZATION • ORGANIC GROWTH";
  const title = hero.title || "SEO That Helps Your Business Get Found";
  const description =
    hero.description ||
    "We combine technical SEO, on-page optimisation and search strategy to improve visibility, attract relevant visitors and build sustainable organic growth.";
  const ctaText = hero.ctaText || "Get an SEO Audit";

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
              SEO That Helps Your Business{" "}
              <span className="text-[#9ae64c]">Get Found & Grow</span>
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
                href="#seo-capabilities"
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
                <Gauge className="w-4 h-4 text-[#9ae64c]" />
                <span>100% Core Web Vitals Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#9ae64c]" />
                <span>JSON-LD Schema Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-[#9ae64c]" />
                <span>Transparent Search Console Data</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive SEO Architecture Dashboard Visual */}
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
                    Search Engine Telemetry
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30 text-[10px] font-mono">
                  INDEXED & HEALTHY
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">LCP Speed</span>
                  <span className="text-sm font-bold text-[#9ae64c] font-mono">1.1s</span>
                  <span className="text-[9px] text-[#556960] block">Good (Fast)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">CLS Score</span>
                  <span className="text-sm font-bold text-[#9ae64c] font-mono">0.00</span>
                  <span className="text-[9px] text-[#556960] block">Zero Shift</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">Index Status</span>
                  <span className="text-sm font-bold text-white font-mono">100%</span>
                  <span className="text-[9px] text-[#9ae64c] block">0 Errors</span>
                </div>
              </div>

              {/* Technical Layers Checklist */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080d11] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Structured Schema Markup</p>
                      <p className="text-[10px] text-[#7d9287]">Organization, Service & FAQPage JSON-LD</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#9ae64c] font-mono bg-[#9ae64c]/10 px-2 py-0.5 rounded border border-[#9ae64c]/20">
                    VALID
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080d11] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Server-Side Rendered (SSR)</p>
                      <p className="text-[10px] text-[#7d9287]">Next.js Static Generation + Dynamic Hydration</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#9ae64c] font-mono bg-[#9ae64c]/10 px-2 py-0.5 rounded border border-[#9ae64c]/20">
                    SSR
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080d11] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">High-Intent Topic Clusters</p>
                      <p className="text-[10px] text-[#7d9287]">Semantic Hierarchy & Internal Linking Matrix</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#9ae64c] font-mono bg-[#9ae64c]/10 px-2 py-0.5 rounded border border-[#9ae64c]/20">
                    MAPPED
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#7d9287] font-mono">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#9ae64c]" />
                  <span>Crawl Health: Optimal</span>
                </span>
                <span>Audit Score: 98/100</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
