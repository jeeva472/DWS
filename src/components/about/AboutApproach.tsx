"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  Target,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { AboutApproachData } from "@/lib/types/wordpress";

interface AboutApproachProps {
  approach: AboutApproachData;
}

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  target: Target,
  code: Code2,
  rocket: Rocket,
  "chart-up": TrendingUp,
  sparkles: Sparkles,
};

export function AboutApproach({ approach }: AboutApproachProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  const eyebrow = approach.eyebrow || "OUR APPROACH";
  const title = approach.title || "From idea to impact.";
  const description =
    approach.description ||
    "A practical, five-stage methodology built for precision, performance, and measurable growth.";

  const defaultSteps = [
    {
      number: "01",
      title: "Understand",
      description: "We start by understanding your business, audience and goals.",
      icon: "eye",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We turn those goals into a clear digital strategy and practical roadmap.",
      icon: "target",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We design and develop reliable digital experiences around your requirements.",
      icon: "code",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We test, refine and launch with performance and usability in mind.",
      icon: "rocket",
    },
    {
      number: "05",
      title: "Grow",
      description:
        "We continue improving your digital presence as your business evolves.",
      icon: "chart-up",
    },
  ];

  const steps =
    approach.steps && approach.steps.length >= 5
      ? approach.steps
      : defaultSteps;

  return (
    <section className="py-24 relative overflow-hidden bg-[#030608]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#9ae64c]/[0.03] rounded-full blur-[160px] pointer-events-none" />

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

        {/* ================================================================= */}
        {/* Process Roadmap Pipeline with Animated SVG Connecting Path         */}
        {/* ================================================================= */}
        <div className="relative">
          {/* Desktop Connecting SVG Pipeline (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-8 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 32"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="approachGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <path id="approachTrack" d="M 0 16 L 1000 16" />
              </defs>

              {/* Base Track Line */}
              <line
                x1="0"
                y1="16"
                x2="1000"
                y2="16"
                stroke="#ffffff"
                strokeOpacity="0.12"
                strokeWidth="2"
                strokeDasharray="4 6"
              />

              {/* Glowing Active Track */}
              <line
                x1="0"
                y1="16"
                x2="1000"
                y2="16"
                stroke="#9ae64c"
                strokeOpacity="0.3"
                strokeWidth="2"
              />

              {/* Traveling Subtle Green Light Along Connecting Line */}
              {!shouldReduceMotion && (
                <g filter="url(#approachGlow)">
                  <circle r="4" fill="#9ae64c">
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#approachTrack" />
                    </animateMotion>
                  </circle>
                </g>
              )}
            </svg>
          </div>

          {/* 5 Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Sparkles;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={step.number || idx}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 flex flex-col items-start text-left cursor-default ${
                    isSelected
                      ? "bg-[#060e08]/90 border border-[#9ae64c]/60 shadow-[0_8px_30px_rgba(154,230,76,0.15)]"
                      : "bg-[#05080a]/80 border border-white/[0.08] hover:border-white/[0.2] shadow-lg"
                  }`}
                >
                  {/* Step Milestone Node */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? "bg-[#9ae64c] text-[#05080a] shadow-[0_0_20px_rgba(154,230,76,0.5)]"
                          : "bg-[#030608] border border-white/[0.14] text-[#9ae64c] group-hover:border-[#9ae64c]/50"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Step Number Badge */}
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md transition-colors duration-300 ${
                        isSelected
                          ? "bg-[#9ae64c]/20 text-[#9ae64c] border border-[#9ae64c]/40"
                          : "bg-white/[0.04] text-white/50 border border-white/[0.08]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#9ae64c] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8c9e94] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom Accent Glow Line */}
                  <div
                    className={`mt-4 w-full h-[2px] rounded-full transition-opacity duration-300 ${
                      isSelected ? "bg-[#9ae64c] opacity-100" : "bg-white/[0.08] opacity-40 group-hover:opacity-80"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
