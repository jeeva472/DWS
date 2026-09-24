"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Users,
  CheckCircle2,
} from "lucide-react";
import { HeroSectionData, IconItemData } from "@/lib/types/wordpress";
import { IconRenderer } from "../ui/IconRenderer";
import { HeroServicesOrbit } from "./HeroServicesOrbit";
import { trackPrimaryCTA, trackCTAClick } from "@/lib/analytics";

interface HeroProps {
  hero: HeroSectionData;
  benefits?: IconItemData[];
  onOpenConsultation?: () => void;
}

export function Hero({ hero, benefits, onOpenConsultation }: HeroProps) {
  // Eyebrow text formatting reflecting core business positioning
  const eyebrow = hero.eyebrow || "WEBSITES · SEO · AI-POWERED SYSTEMS";

  // Standardized agency metrics for the bottom glass bar
  const defaultStats = [
    {
      icon: Rocket,
      value: "5+",
      label: "Years of Proven Delivery",
    },
    {
      icon: CheckCircle2,
      value: "50+",
      label: "Digital Systems Built",
    },
    {
      icon: Users,
      value: "100+",
      label: "Automated Workflows",
    },
  ];

  const handleConsultationClick = () => {
    trackPrimaryCTA("Start Your Growth Project", "Hero Section");
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#030608]">
      {/* Background Deep Obsidian & Ambient Brand Glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#9ae64c]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#9ae64c]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ================================================================= */}
          {/* Left Column: Typography & CTAs (Spacious 7-column layout)         */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-20">
            {/* Small Eyebrow Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5 text-[11px] font-bold text-[#9ae64c] tracking-[0.22em] uppercase font-mono"
            >
              <span className="w-3.5 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-[45px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-xl lg:max-w-[580px] xl:max-w-[620px]"
            >
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Build Your
              </span>
              <span className="text-[#9ae64c] block">
                Digital Growth System.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-lg"
            >
              {hero.description ||
                "Attract the right visitors, capture better leads, automate what happens next, and connect your digital systems for sustainable growth."}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              {/* Primary Green CTA */}
              <button
                type="button"
                onClick={handleConsultationClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{hero.btnPrimaryText || "Start Your Growth Project"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Translucent CTA */}
              <a
                href={hero.btnSecondaryUrl || "#growth-system"}
                onClick={() => trackCTAClick(hero.btnSecondaryText || "Explore Our Solutions", hero.btnSecondaryUrl || "#growth-system", "Hero Secondary")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>{hero.btnSecondaryText || "Explore Our Solutions"}</span>
                <ArrowRight className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* Right Column: Custom Orbital Services Animation (Hidden on Mobile) */}
          {/* ================================================================= */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 items-center justify-center lg:justify-end relative w-full">
            <HeroServicesOrbit />
          </div>
        </div>

        {/* =================================================================== */}
        {/* Bottom Floating Glass Stats Banner                                  */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 pt-2"
        >
          <div className="w-full rounded-2xl glass-card border border-white/[0.08] p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
              {defaultStats.map((s, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx > 0 ? "pt-3 sm:pt-0 sm:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <s.icon className="w-5 h-5 text-[#9ae64c]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base sm:text-lg tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-xs text-white/50">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

