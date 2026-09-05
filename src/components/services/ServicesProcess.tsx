"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  Target,
  Layers,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { ServicesProcessData } from "@/lib/types/wordpress";

interface ServicesProcessProps {
  process: ServicesProcessData;
}

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  target: Target,
  layers: Layers,
  code: Code2,
  rocket: Rocket,
  "chart-up": TrendingUp,
  sparkles: Sparkles,
};

export function ServicesProcess({ process }: ServicesProcessProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  const eyebrow = process.eyebrow || "OUR PROCESS";
  const title = process.title || "From idea to launch.";
  const description =
    process.description ||
    "A disciplined, six-stage delivery framework that turns vision into reliable, high-performing digital systems.";

  const defaultSteps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand the business, audience and goals.",
      icon: "eye",
    },
    {
      number: "02",
      title: "Plan",
      description: "Define the strategy, technology and roadmap.",
      icon: "target",
    },
    {
      number: "03",
      title: "Design",
      description: "Create the experience and interface.",
      icon: "layers",
    },
    {
      number: "04",
      title: "Build",
      description: "Develop and integrate the solution.",
      icon: "code",
    },
    {
      number: "05",
      title: "Launch",
      description: "Test, deploy and refine.",
      icon: "rocket",
    },
    {
      number: "06",
      title: "Grow",
      description: "Measure, improve and support.",
      icon: "chart-up",
    },
  ];

  const steps =
    process.steps && process.steps.length >= 6
      ? process.steps
      : defaultSteps;

  return (
    <section className="py-24 relative overflow-hidden bg-[#030608] border-t border-white/[0.06]">
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

        {/* Process Roadmap Pipeline with Animated SVG Connecting Path */}
        <div className="relative">
          {/* Desktop Connecting SVG Pipeline (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-[44px] left-[4%] right-[4%] h-8 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 32"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="servicesProcessGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <path id="servicesProcessTrack" d="M 0 16 L 1000 16" />
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
                <g filter="url(#servicesProcessGlow)">
                  <circle r="4" fill="#9ae64c">
                    <animateMotion
                      dur="9s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#servicesProcessTrack" />
                    </animateMotion>
                  </circle>
                </g>
              )}
            </svg>
          </div>

          {/* 6 Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Sparkles;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={step.number || idx}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative p-5 rounded-2xl transition-all duration-300 flex flex-col items-start text-left cursor-default ${
                    isSelected
                      ? "bg-[#060e08]/90 border border-[#9ae64c]/60 shadow-[0_8px_30px_rgba(154,230,76,0.15)]"
                      : "bg-[#05080a] border border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? "bg-[#9ae64c] text-[#05080a]"
                          : "bg-[#030608] text-[#9ae64c] border border-white/[0.08] group-hover:border-[#9ae64c]/40"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-[#9ae64c]" : "text-[#8c9e94]/40"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`text-base font-bold mb-2 tracking-tight transition-colors ${
                      isSelected ? "text-white" : "text-[#f5f8f6]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#8c9e94] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
