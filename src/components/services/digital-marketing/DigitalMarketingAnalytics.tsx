"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, LineChart, PieChart, CheckCircle2, ShieldCheck } from "lucide-react";

interface DigitalMarketingAnalyticsProps {
  analytics?: {
    eyebrow?: string;
    title: string;
    description: string;
  };
}

export function DigitalMarketingAnalytics({
  analytics,
}: DigitalMarketingAnalyticsProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = analytics?.eyebrow || "MEASUREMENT & ATTRIBUTION";
  const title =
    analytics?.title || "Transparent data tracking with GA4 & Tag Manager.";
  const description =
    analytics?.description ||
    "We configure enterprise-grade Google Analytics 4 and Google Tag Manager setups so you always know where your leads come from.";

  return (
    <section className="py-24 sm:py-32 bg-[#030608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Analytics Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-8 rounded-3xl bg-[#060a0d] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono font-bold text-white uppercase">
                  GA4 Telemetry Stream
                </span>
                <span className="text-[10px] font-mono text-[#9ae64c] bg-[#9ae64c]/10 px-2 py-0.5 rounded border border-[#9ae64c]/20">
                  REAL-TIME
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">Form Submits</span>
                  <span className="text-base font-bold text-[#9ae64c] font-mono">100% Tracked</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">UTM Source</span>
                  <span className="text-base font-bold text-white font-mono">Preserved</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] text-[#7d9287] font-mono uppercase block">Channel ROI</span>
                  <span className="text-base font-bold text-[#9ae64c] font-mono">Attributed</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#080d11] border border-white/[0.06] text-xs text-[#9cb1a6] leading-relaxed">
                Custom Google Tag Manager dataLayer capturing exact acquisition paths, conversion rates, and revenue impact across organic search and advertising campaigns.
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#9ae64c]" />
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
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
