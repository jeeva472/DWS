"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Zap,
  Database,
  CreditCard,
  Network,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface APICapabilitiesProps {
  capabilities?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
}

const API_ICONS = [
  Zap,
  Database,
  CreditCard,
  Network,
  Cpu,
  Layers,
];

export function APICapabilities({ capabilities }: APICapabilitiesProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const eyebrow = capabilities?.eyebrow || "INTEGRATION CAPABILITIES";
  const title =
    capabilities?.title || "Connecting tools across your entire business.";
  const description =
    capabilities?.description ||
    "We engineer the underlying integration bridges that allow your software stack to operate as a single unified system.";
  const items = capabilities?.items || [];

  return (
    <section id="api-capabilities" className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
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

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = API_ICONS[index % API_ICONS.length];
            const isHovered = activeCard === index;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-default ${
                  isHovered
                    ? "bg-[#080e12] border-[#9ae64c]/40 shadow-[0_12px_40px_rgba(154,230,76,0.08)] -translate-y-1"
                    : "bg-[#080d11] border-white/[0.08] hover:border-white/[0.16]"
                } border`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#7d9287] group-hover:text-[#9ae64c] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/50 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#9ae64c] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#7d9287]">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c]" />
                    <span>Resilient</span>
                  </span>
                  <span className="text-[11px] font-mono text-white/40 group-hover:text-white/80 transition-colors">
                    Encrypted
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
