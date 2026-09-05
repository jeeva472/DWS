"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  UserCheck,
  Copy,
  Mail,
  Database,
  FileSpreadsheet,
  MessageSquare,
  BellRing,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { ProblemItemData } from "@/lib/types/wordpress";

interface AIProblemSectionProps {
  problem?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: ProblemItemData[];
  };
}

const ICON_MAP: Record<string, React.ElementType> = {
  clipboard: ClipboardList,
  "user-check": UserCheck,
  copy: Copy,
  mail: Mail,
  database: Database,
  "file-text": FileSpreadsheet,
  "message-square": MessageSquare,
  bell: BellRing,
};

export function AIProblemSection({ problem }: AIProblemSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = problem?.eyebrow || "THE BOTTLENECK";
  const title = problem?.title || "Too much manual work?";
  const description =
    problem?.description ||
    "Growing businesses often get weighed down by repetitive digital tasks that take valuable time away from clients, strategy, and revenue.";
  const items = problem?.items || [];

  return (
    <section className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-500/[0.02] rounded-full blur-[180px] pointer-events-none" />

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

        {/* 8 Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || AlertTriangle;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-[#090e12]/80 border border-white/[0.08] hover:border-red-400/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-red-400/40 group-hover:bg-red-500/[0.08] flex items-center justify-center text-[#9cb1a6] group-hover:text-red-400 transition-colors mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7d9287] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#556960] font-mono">
                  <span>Friction Point #{index + 1}</span>
                  <span className="text-red-400/80 group-hover:text-red-400">Bottleneck</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Bridge Banner */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#070b0e] border border-[#9ae64c]/20 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#9ae64c]/10 border border-[#9ae64c]/40 flex items-center justify-center text-[#9ae64c] flex-shrink-0">
              <span className="text-lg font-bold">→</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Every one of these friction points can be automated.
              </h4>
              <p className="text-xs sm:text-sm text-[#9cb1a6]">
                Our workflows run silently in the background, freeing your team for high-value client work.
              </p>
            </div>
          </div>

          <a
            href="#what-we-automate"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-[#9ae64c] hover:text-[#05080a] text-white text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 border border-white/[0.1] hover:border-[#9ae64c]"
          >
            <span>See The Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
