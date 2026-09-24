"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Code2, Compass, Layers, Rocket, ShieldCheck, Workflow, TrendingUp } from "lucide-react";

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
      title: "Discover",
      desc: "We analyze your business model, customer touchpoints, existing workflows, and technical bottlenecks to identify high-impact opportunities.",
      tags: ["Workflow Audit", "Tech Stack Review", "Requirement Mapping"],
    },
    {
      num: "02",
      icon: Layers,
      title: "Strategy",
      desc: "We define the complete digital architecture—connecting website foundations, search visibility, AI qualification, CRM flows, and tracking.",
      tags: ["Growth Blueprint", "Data Schema Spec", "Sprint Roadmap"],
    },
    {
      num: "03",
      icon: Code2,
      title: "Build",
      desc: "Our senior engineers develop clean Next.js websites, configure AI models, and scaffold robust backend integrations with zero technical debt.",
      tags: ["Modern Clean Code", "Custom UI Systems", "Automated Testing"],
    },
    {
      num: "04",
      icon: Workflow,
      title: "Connect",
      desc: "We integrate your website with webhooks, CRMs (HubSpot/Zoho), messaging channels, payment gateways, and notification systems.",
      tags: ["API Pipelines", "CRM Synchronization", "Slack/WhatsApp Alerts"],
    },
    {
      num: "05",
      icon: Rocket,
      title: "Launch",
      desc: "We rigorously test edge performance, Core Web Vitals, data pipelines, and error fallbacks before deploying live to production.",
      tags: ["Core Web Vitals", "Security Verification", "Live Deployment"],
    },
    {
      num: "06",
      icon: Sparkles,
      title: "Grow",
      desc: "We monitor execution telemetry, track organic search rankings, optimize conversion funnels, and evolve your systems as you scale.",
      tags: ["SEO Compounding", "CRO Refinement", "Continuous Support"],
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
            <span>Standardized Delivery Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            How we execute <span className="text-gradient-green">predictable results.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            A disciplined, six-stage framework applied consistently across Websites, SEO, Automation, CRM, AI systems, and API integrations.
          </p>
        </div>

        {/* 6 Process Step Cards in a responsive 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isHovered = activeHover === idx;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
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
            <span>Weekly Sprint Demos • Dedicated Communication Channel • Direct Git &amp; Architecture Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
