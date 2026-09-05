"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  Gauge,
  ShieldCheck,
  Layout,
  Database,
  CheckCircle2,
} from "lucide-react";

export function WebDevelopmentCapabilities() {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      icon: Code2,
      title: "Custom Next.js Applications",
      description:
        "Modern, scalable web applications built with React 19, TypeScript, and the App Router for optimal rendering velocity.",
      bullets: ["Server & Client Components", "Type-safe architectures", "Tailored state management"],
    },
    {
      icon: Layers,
      title: "Headless CMS & Decoupled Backends",
      description:
        "Decoupled WordPress with WPGraphQL or custom headless architectures providing content editors flexibility without sacrificing frontend speed.",
      bullets: ["WPGraphQL Integration", "Incremental Static Regeneration", "Enterprise content security"],
    },
    {
      icon: Gauge,
      title: "Core Web Vitals & Performance Engineering",
      description:
        "Rigorous optimization targeting green 95+ PageSpeed scores, sub-second LCP, zero CLS, and instant user interaction response.",
      bullets: ["AVIF/WebP image pipelines", "Code splitting & tree shaking", "Edge caching & CDN setup"],
    },
    {
      icon: Database,
      title: "API Gateway & Third-Party Integration",
      description:
        "Connecting your web platform directly with CRMs (HubSpot/Zoho), payment gateways (Stripe), email automation, and custom webhooks.",
      bullets: ["Secure webhook handlers", "Payment & checkout flows", "Real-time data synchronization"],
    },
    {
      icon: Layout,
      title: "Design System & UI/UX Engineering",
      description:
        "Pixel-perfect responsive interfaces built with custom Tailwind CSS and micro-interactions that engage users and elevate your brand.",
      bullets: ["Dark mode aesthetic", "Fully mobile-responsive", "Accessible WCAG standards"],
    },
    {
      icon: ShieldCheck,
      title: "SEO-First Technical Foundations",
      description:
        "Built from the ground up for search engine discovery, with automated canonicalization, clean metadata, and rich JSON-LD schema markup.",
      bullets: ["Dynamic OpenGraph & Twitter cards", "Automated XML sitemaps", "Semantic HTML5 hierarchy"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>FULL-STACK CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Engineering Precision for the Modern Web
          </h2>
          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            We don’t build generic cookie-cutter templates. We craft tailored, high-performance web systems engineered for tangible business results.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="p-7 rounded-2xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 hover:bg-[#060e08]/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-5 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#9ae64c] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9cb1a6] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-[#c4d6cb]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
