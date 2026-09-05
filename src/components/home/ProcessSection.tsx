"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Code2, Compass, Layers, Rocket, ShieldCheck } from "lucide-react";

export function ProcessSection({
  onOpenConsultation,
}: {
  onOpenConsultation?: () => void;
}) {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Discovery & Architecture",
      desc: "We analyze your business workflows, audience intent, API requirements, and technical bottlenecks to engineer an optimal solution roadmap.",
      tags: ["Technical Audit", "Stack Selection", "Scope Blueprint"],
    },
    {
      num: "02",
      icon: Layers,
      title: "UI/UX & Design System",
      desc: "We design tailored, conversion-driven interfaces with accessible typography, micro-interactions, and component-based design systems.",
      tags: ["Interactive Wireframes", "Design Tokens", "Brand Alignment"],
    },
    {
      num: "03",
      icon: Code2,
      title: "Full-Stack Development",
      desc: "We build clean Next.js architectures with TypeScript, integrate headless CMS and AI pipelines, and execute comprehensive QA testing.",
      tags: ["Clean Code", "API Pipelines", "Automated QA"],
    },
    {
      num: "04",
      icon: Rocket,
      title: "Edge Deployment & Scale",
      desc: "We launch on Vercel Edge infrastructure with 99+ Core Web Vitals, automated revalidation, SEO monitoring, and SLA support.",
      tags: ["Vercel Edge", "Live SEO Sync", "Ongoing Evolution"],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#05080a] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#9ae64c]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
            <span>Agile Delivery Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            How we execute <span className="text-gradient-green">predictable results.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            Our delivery framework combines engineering discipline with direct human communication to launch mission-critical platforms on time and within scope.
          </p>
        </div>

        {/* ================================================================= */}
        {/* SUBTLE MID-PAGE ANIMATED PROCESS PIPELINE (Desktop SVG Energy Track) */}
        {/* ================================================================= */}
        <div className="hidden lg:block relative mb-8">
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 1100 48" fill="none">
            {/* Base dashed connecting track */}
            <path
              d="M 50 24 L 1050 24"
              stroke="#9ae64c"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              strokeOpacity="0.25"
            />

            {/* Slow moving glowing energy beam traveling through the process */}
            <motion.path
              d="M 50 24 L 1050 24"
              stroke="url(#processBeamGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0.15, pathOffset: 0 }}
              animate={{ pathOffset: [0, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* 4 Connecting Step Nodes */}
            {[140, 420, 700, 980].map((cx, i) => (
              <g key={i}>
                <circle cx={cx} cy="24" r="8" fill="#05080a" stroke="#9ae64c" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle
                  cx={cx}
                  cy="24"
                  r="3.5"
                  fill={activeHover === i ? "#9ae64c" : "#9ae64c"}
                  fillOpacity={activeHover === i ? 1 : 0.6}
                />
              </g>
            ))}

            <defs>
              <linearGradient id="processBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9ae64c" stopOpacity="0" />
                <stop offset="50%" stopColor="#b4fa6c" stopOpacity="1" />
                <stop offset="100%" stopColor="#9ae64c" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isHovered = activeHover === idx;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`p-7 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  isHovered
                    ? "bg-[#09150d] border-[#9ae64c]/50 shadow-xl shadow-[#9ae64c]/10"
                    : "glass-card border-white/[0.08] hover:border-[#9ae64c]/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-extrabold text-gradient-green">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] group-hover:bg-[#9ae64c]/20 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#9ae64c] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#9cb1a6] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                  {step.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 text-xs text-[#9cb1a6]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c]" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Transparent Process Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-white/[0.08] text-xs font-medium text-[#9cb1a6]">
            <ShieldCheck className="w-4 h-4 text-[#9ae64c]" />
            <span>Weekly Sprint Demos • Dedicated Slack/Teams Channel • Direct Git Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
