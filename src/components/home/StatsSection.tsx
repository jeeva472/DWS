"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatItemData } from "@/lib/types/wordpress";
import { IconRenderer } from "../ui/IconRenderer";

interface StatsSectionProps {
  stats: StatItemData[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const displayStats = stats && stats.length > 0 ? stats : [];

  return (
    <section className="relative py-20 bg-[#080d11] border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {displayStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl glass-pill border border-white/[0.06] hover:border-[#9ae64c]/30 transition-colors"
            >
              {stat.icon && (
                <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-3">
                  <IconRenderer name={stat.icon} className="w-5 h-5" />
                </div>
              )}

              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-mono mb-2">
                <span className="text-gradient-green">{stat.number}</span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#9cb1a6] tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
