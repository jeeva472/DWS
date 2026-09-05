"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  MessageSquare,
  Zap,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { AboutWhyUsData } from "@/lib/types/wordpress";

interface AboutWhyUsProps {
  whyUs: AboutWhyUsData;
}

const icons: LucideIcon[] = [Wrench, MessageSquare, Zap, TrendingUp];

export function AboutWhyUs({ whyUs }: AboutWhyUsProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = whyUs.eyebrow || "WHY DIGITALWEBSTUDIO";
  const title = whyUs.title || "Built around your goals, not just your brief.";
  const description =
    whyUs.description ||
    "We operate as an extension of your team, delivering clarity, technical excellence, and genuine accountability.";

  const defaultItems = [
    {
      number: "01",
      title: "Practical expertise",
      description:
        "We combine development, design, marketing and automation to solve problems from multiple angles.",
    },
    {
      number: "02",
      title: "Clear communication",
      description:
        "We keep the process understandable and collaborative from start to finish, with no opaque agency jargon.",
    },
    {
      number: "03",
      title: "Built to perform",
      description:
        "We care about speed, usability, maintainability and strong technical foundations that score high on Core Web Vitals.",
    },
    {
      number: "04",
      title: "Long-term thinking",
      description:
        "We build solutions that can evolve and scale smoothly as your customer base and business volume grow.",
    },
  ];

  const items =
    whyUs.items && whyUs.items.length >= 4 ? whyUs.items : defaultItems;

  return (
    <section className="py-24 relative overflow-hidden bg-[#05080a] border-y border-white/[0.06]">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#9ae64c]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
            <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            {title}
          </h2>
          <p className="text-base text-[#9cb1a6] leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, idx) => {
            const IconComp = icons[idx % icons.length];

            return (
              <motion.div
                key={item.number || idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-7 sm:p-8 rounded-2xl bg-[#030608]/70 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] group-hover:bg-[#9ae64c] group-hover:text-[#05080a] transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#9ae64c]/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#9ae64c] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#8c9e94] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-xs text-[#9cb1a6] font-mono">
                  <span>Guaranteed Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
