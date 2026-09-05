"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Database, RefreshCw, BarChart2 } from "lucide-react";

interface APIBusinessValueProps {
  businessValue?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
}

const VALUE_ICONS = [RefreshCw, Database, BarChart2, ShieldCheck];

export function APIBusinessValue({ businessValue }: APIBusinessValueProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = businessValue?.eyebrow || "SYSTEM EFFICIENCY";
  const title =
    businessValue?.title || "Why unified systems create compounding value.";
  const description =
    businessValue?.description ||
    "Disconnected software creates data silos, manual entry errors, and communication delays. Modern API integrations solve this at the foundational level.";
  const items = businessValue?.items || [
    {
      title: "Eliminate Manual Data Entry",
      description:
        "Data entered in one platform updates everywhere automatically in real time.",
    },
    {
      title: "Keep Records Synchronized",
      description:
        "Prevent discrepancies between your CRM, billing software, and customer portal.",
    },
    {
      title: "Centralize Business Intelligence",
      description:
        "Consolidate operational metrics into a single source of truth for informed decision making.",
    },
    {
      title: "Enterprise Security & Reliability",
      description:
        "Secure API key handling, TLS encryption, retry logic, and fallback logging.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#030608] relative overflow-hidden">
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

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const IconComponent = VALUE_ICONS[index % VALUE_ICONS.length];

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-2xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] shrink-0 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#9ae64c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
