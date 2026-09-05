"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Workflow, Cpu, Zap, Database, Globe, Share2, Layers } from "lucide-react";
import { ServicesTechData } from "@/lib/types/wordpress";

interface AITechnologyProps {
  technology?: ServicesTechData;
}

const TECH_ICONS: Record<string, React.ElementType> = {
  n8n: Workflow,
  make: Layers,
  openai: Cpu,
  api: Zap,
  webhook: Share2,
  google: Globe,
  crm: Database,
};

export function AITechnology({ technology }: AITechnologyProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = technology?.eyebrow || "OUR AUTOMATION STACK";
  const title = technology?.title || "Built on battle-tested automation platforms.";
  const description =
    technology?.description ||
    "We connect your ecosystem using robust orchestration engines and modern AI models.";
  const items = technology?.items || [];

  return (
    <section className="py-24 sm:py-32 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
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

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = TECH_ICONS[item.iconKey] || Workflow;

            return (
              <motion.div
                key={item.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-[#080d11] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(154,230,76,0.06)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#9ae64c] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#7d9287] font-mono">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#556960] font-mono">
                  <span>Integration Ready</span>
                  <span className="text-[#9ae64c]/80">Connected</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
