"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Database,
  MessageSquare,
  Cpu,
  Bell,
  Sparkles,
  Workflow,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface AIUseCasesProps {
  useCases?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{
      number: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  target: Target,
  database: Database,
  "message-square": MessageSquare,
  cpu: Cpu,
  bell: Bell,
  sparkles: Sparkles,
  workflow: Workflow,
  "bar-chart": BarChart3,
};

export function AIUseCases({ useCases }: AIUseCasesProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const eyebrow = useCases?.eyebrow || "WHAT WE AUTOMATE";
  const title = useCases?.title || "Practical automations that eliminate busywork.";
  const description =
    useCases?.description ||
    "We design end-to-end automation pipelines that run reliably in the background 24/7.";
  const items = useCases?.items || [];

  return (
    <section id="what-we-automate" className="py-24 sm:py-32 bg-[#030608] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#9ae64c]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#9ae64c]/[0.02] rounded-full blur-[160px] pointer-events-none" />

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

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = USE_CASE_ICONS[item.icon] || Workflow;
            const isHovered = activeCard === index;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-default ${
                  isHovered
                    ? "bg-[#080e12] border-[#9ae64c]/40 shadow-[0_12px_40px_rgba(154,230,76,0.08)] -translate-y-1"
                    : "bg-[#060a0d] border-white/[0.08] hover:border-white/[0.16]"
                } border`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#7d9287] group-hover:text-[#9ae64c] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/50 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#9ae64c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom status badge */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#7d9287]">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c]" />
                    <span>Automated</span>
                  </span>
                  <span className="text-[11px] font-mono text-white/40 group-hover:text-white/80 transition-colors">
                    24/7 Pipeline
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
