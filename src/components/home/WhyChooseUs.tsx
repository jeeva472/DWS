"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, TrendingUp, Users2, Lock, Zap } from "lucide-react";
import { HeroSectionData, IconItemData } from "@/lib/types/wordpress";
import { IconRenderer } from "../ui/IconRenderer";

interface WhyChooseUsProps {
  section: HeroSectionData;
  items: IconItemData[];
}

export function WhyChooseUs({ section, items }: WhyChooseUsProps) {
  const displayItems = items && items.length > 0 ? items : [];

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-[#080d11] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#9ae64c]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
            <span>Partnership & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {section.heading || "We Are Your Long-Term Growth Partner"}
          </h2>

          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            {section.description ||
              "We take full technical accountability for your digital infrastructure. No handoffs to unvetted subcontractors, no hidden fees, and no black-box development."}
          </p>
        </div>

        {/* =================================================================== */}
        {/* 1. IMAGE FIRST (Wide Editorial Strategy & Collaboration Banner)     */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#09120c] mb-12 sm:mb-16 group"
        >
          {/* Main Cinematic Image Container */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden">
            <Image
              src="/images/digital-growth-strategy-collaboration.webp"
              alt="Digital strategy and engineering team collaborating on website architecture and growth analytics"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1200px"
              className="object-cover object-[center_35%] transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient Overlay for atmospheric lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a]/90 via-black/25 to-black/20 pointer-events-none" />
          </div>

          {/* Floating Bottom Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-[#060e08]/90 border border-[#9ae64c]/30 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/15 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#9ae64c] uppercase tracking-wider">
                  Strategic Alignment & Technical Depth
                </div>
                <div className="text-sm font-semibold text-white">
                  Collaborative Roadmaps • Transparent Sprints • Measurable Commercial ROI
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-[#9cb1a6] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#9ae64c] animate-pulse" />
              <span>Full Technical Ownership</span>
            </div>
          </div>
        </motion.div>

        {/* =================================================================== */}
        {/* 2. ALL BOXES FOLLOW ON VERTICAL SCROLL (Equal Height 3-Col Grid)     */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl glass-card glass-card-hover border border-white/[0.07] relative group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] group-hover:bg-[#9ae64c]/20 transition-colors">
                    <IconRenderer name={item.icon || "puzzle"} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#9cb1a6]/40">0{idx + 1}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#9ae64c] transition-colors mb-3">
                  {item.title}
                </h3>

                {item.text && (
                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {item.text}
                  </p>
                )}
              </div>

              {/* Bottom Equal-Aligned Status Badge */}
              <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-semibold text-[#9ae64c]/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9ae64c]" />
                <span>Verified Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
