"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

interface WebDevelopmentHeroProps {
  onOpenConsultation?: () => void;
}

export function WebDevelopmentHero({ onOpenConsultation }: WebDevelopmentHeroProps) {
  const shouldReduceMotion = useReducedMotion();

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
              <span>HIGH-PERFORMANCE ARCHITECTURE • NEXT.JS & APIS</span>
            </motion.div>

            {/* Single Main H1 for SEO */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              Modern Web Development Built for{" "}
              <span className="text-[#9ae64c]">Speed, Scale & Conversion</span>
            </motion.h1>

            {/* Narrative Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-xl font-normal"
            >
              We engineer custom Next.js applications, headless CMS platforms, and robust web solutions. Built with clean code, sub-second load times, and seamless API integrations that drive revenue.
            </motion.p>

            {/* Key Value Metrics Strip */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 py-4 px-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8 w-full max-w-xl backdrop-blur-sm"
            >
              <div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#9ae64c]">
                  &lt; 1.0s
                </div>
                <div className="text-[11px] text-[#8c9e94] font-mono mt-0.5">
                  Core Web Vitals LCP
                </div>
              </div>
              <div className="border-x border-white/[0.08] px-3 sm:px-4">
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                  100%
                </div>
                <div className="text-[11px] text-[#8c9e94] font-mono mt-0.5">
                  TypeScript Strict Mode
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#9ae64c]">
                  99.9%
                </div>
                <div className="text-[11px] text-[#8c9e94] font-mono mt-0.5">
                  Reliability & Uptime
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-xs text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs text-[#f5f8f6] bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-200"
              >
                <span>View All Services</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Code Architecture Terminal Visual */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#05090c] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#9ae64c]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-xs font-mono text-[#8c9e94] ml-2">app/architecture/stack.config.ts</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9ae64c]/15 text-[#9ae64c] border border-[#9ae64c]/30">
                  Production Ready
                </span>
              </div>

              {/* Code Snippet Block */}
              <div className="space-y-3 font-mono text-xs">
                <div className="text-[#8c9e94]">// Modern Full-Stack Stack Architecture</div>
                <div className="p-3 rounded-xl bg-[#030608] border border-white/[0.06] text-[#c4d6cb] space-y-1.5 leading-relaxed">
                  <div className="text-[#9ae64c] font-bold">export const stackConfig = &#123;</div>
                  <div className="pl-4 text-white">framework: <span className="text-[#9ae64c]">&quot;Next.js 15 (App Router)&quot;</span>,</div>
                  <div className="pl-4 text-white">language: <span className="text-[#9ae64c]">&quot;TypeScript Strict&quot;</span>,</div>
                  <div className="pl-4 text-white">cmsLayer: <span className="text-[#9ae64c]">&quot;Headless WP + WPGraphQL&quot;</span>,</div>
                  <div className="pl-4 text-white">styling: <span className="text-[#9ae64c]">&quot;Tailwind CSS &amp; Framer Motion&quot;</span>,</div>
                  <div className="pl-4 text-white">performance: <span className="text-[#9ae64c]">&quot;Edge Caching + ISR (60s)&quot;</span>,</div>
                  <div className="pl-4 text-white">seoOptimization: <span className="text-[#9ae64c]">&quot;Automated JSON-LD Schema&quot;</span>,</div>
                  <div className="text-[#9ae64c] font-bold">&#125;;</div>
                </div>

                {/* Status Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-[#06120a] border border-[#9ae64c]/30 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#9ae64c] shrink-0" />
                    <span className="text-[11px] text-[#9ae64c] font-semibold">Clean Architecture</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#9ae64c] shrink-0" />
                    <span className="text-[11px] text-[#c4d6cb] font-semibold">Sub-second Speed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
