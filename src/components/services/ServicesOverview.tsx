"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Target,
  Cpu,
  Bot,
  Layers,
  Zap,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { ServicesIntroData, ServicesPageItemData } from "@/lib/types/wordpress";

interface ServicesOverviewProps {
  intro: ServicesIntroData;
  services: ServicesPageItemData[];
}

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  megaphone: Megaphone,
  target: Target,
  cpu: Cpu,
  sparkles: Bot,
  bot: Bot,
  layers: Layers,
  zap: Zap,
};

export function ServicesOverview({ intro, services }: ServicesOverviewProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = intro.eyebrow || "OUR CAPABILITIES";
  const title = intro.title || "Everything you need to automate, rank and scale.";
  const description =
    intro.description ||
    "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems.";

  return (
    <section
      id="services-overview"
      className="py-24 relative overflow-hidden bg-[#05080a] border-y border-white/[0.06]"
    >
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#9ae64c]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
            <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Editorial Service List (01 to 07) */}
        <div className="flex flex-col gap-3.5 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const IconComp = iconMap[service.icon] || Code2;
            const targetUrl = `/services/${service.slug || "web-development"}`;

            return (
              <motion.div
                key={service.slug || idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={targetUrl}
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#030608]/70 border border-white/[0.08] hover:border-[#9ae64c]/50 hover:bg-[#060e08]/90 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Left Side: Number, Icon, Title, Short Description */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Number Badge */}
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#9ae64c] bg-[#9ae64c]/10 border border-[#9ae64c]/20 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#9ae64c] group-hover:text-[#05080a] transition-all duration-300">
                      {service.number || sprintfNumber(idx + 1)}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] group-hover:text-[#9ae64c] group-hover:border-[#9ae64c]/40 transition-colors shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Titles */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#9ae64c] transition-colors tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-[#8c9e94] line-clamp-1">
                        {service.shortDescription}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Arrow CTA */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9cb1a6] group-hover:text-[#9ae64c] transition-colors mt-3 sm:mt-0 self-end sm:self-auto shrink-0 font-mono">
                    <span className="hidden md:inline">Explore {service.title}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:bg-[#9ae64c]/15 group-hover:border-[#9ae64c]/40 flex items-center justify-center transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function sprintfNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
