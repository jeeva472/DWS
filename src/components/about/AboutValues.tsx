"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { AboutValuesData } from "@/lib/types/wordpress";

interface AboutValuesProps {
  values: AboutValuesData;
}

export function AboutValues({ values }: AboutValuesProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = values.eyebrow || "WHAT WE BELIEVE";
  const title = values.title || "Good digital work starts with good thinking.";
  const description =
    values.description ||
    "Core principles that guide how we design systems, write code, and collaborate with our clients.";

  const defaultItems = [
    {
      number: "01",
      title: "Purpose over complexity",
      description:
        "We build what your business actually needs, without unnecessary complexity or bloated tech stacks.",
    },
    {
      number: "02",
      title: "Design with intention",
      description:
        "Every interaction should have a reason and every element should support the overall user experience and conversion.",
    },
    {
      number: "03",
      title: "Technology that works",
      description:
        "We focus on reliable, maintainable, and high-performance solutions that work reliably far beyond launch day.",
    },
    {
      number: "04",
      title: "Partnerships, not handoffs",
      description:
        "We aim to build long-term relationships, acting as your dedicated technical partner rather than disappearing after delivery.",
    },
  ];

  const items =
    values.items && values.items.length >= 4 ? values.items : defaultItems;

  return (
    <section className="py-24 relative overflow-hidden bg-[#05080a] border-y border-white/[0.06]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#9ae64c]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================================================================= */}
          {/* Left Column: Sticky Editorial Statement                           */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
              <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
              {description}
            </p>

            <div className="hidden sm:flex items-center gap-3 p-4 rounded-xl bg-[#030608]/80 border border-white/[0.08] backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-white/80 font-medium">
                Our principles ensure every deliverable remains robust, clear, and sustainable.
              </p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* Right Column: Editorial Value Cards List (No generic 4-card grid)  */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {items.map((item, idx) => (
              <motion.div
                key={item.number || idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#030608]/70 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] font-mono font-bold text-sm shrink-0 group-hover:bg-[#9ae64c] group-hover:text-[#05080a] transition-all duration-300">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#9ae64c] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8c9e94] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
