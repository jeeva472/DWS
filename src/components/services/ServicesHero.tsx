"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Globe, Cpu, Search, Layers, Zap, Bot, ArrowUpRight } from "lucide-react";
import { ServicesHeroData } from "@/lib/types/wordpress";

interface ServicesHeroProps {
  hero: ServicesHeroData;
  onOpenConsultation?: () => void;
}

export function ServicesHero({ hero, onOpenConsultation }: ServicesHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "AI AUTOMATION • SEO • DIGITAL GROWTH";
  const title = hero.title || "AI Automation & SEO Solutions Built for Business Growth";
  const description =
    hero.description ||
    "We help businesses automate repetitive work, improve search visibility and build smarter digital systems using AI, automation and modern technology.";
  const ctaText = hero.ctaText || "Start a Project";

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#030608]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#9ae64c]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#9ae64c]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Eyebrow Tag */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5 text-[11px] font-bold text-[#9ae64c] tracking-[0.22em] uppercase font-mono"
            >
              <span className="w-3.5 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Single Main H1 for SEO & Page Identity */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              {title.includes("Built for") ? (
                <>
                  {title.split("Built for")[0]}
                  <span className="text-[#9ae64c]">Built for{title.split("Built for")[1]}</span>
                </>
              ) : title.includes("Built Around") ? (
                <>
                  {title.split("Built Around")[0]}
                  <span className="text-[#9ae64c]">Built Around{title.split("Built Around")[1]}</span>
                </>
              ) : (
                title
              )}
            </motion.h1>

            {/* Human-Sounding Story Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-xl font-normal"
            >
              {description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services-overview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>View All 7 Capabilities</span>
                <ArrowDownIcon className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Abstract Digital Toolkit SVG Graphic */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#9ae64c] rounded-tl-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#9ae64c] rounded-br-xl pointer-events-none" />

              {/* Digital Toolkit Interactive Nodes Schema */}
              <div className="relative z-10 space-y-4">
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="text-[11px] font-mono text-[#9cb1a6] ml-2">automation-growth.stack</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30">
                    Production Stack
                  </span>
                </div>

                {/* 2x3 Grid of Capability Elements */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Automation</div>
                    <div className="text-[10px] text-[#8c9e94]">n8n & Pipelines</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Search className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Organic SEO</div>
                    <div className="text-[10px] text-[#8c9e94]">Technical & Growth</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Vibe Code MVP</div>
                    <div className="text-[10px] text-[#8c9e94]">AI Speed + Oversight</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Digital Growth</div>
                    <div className="text-[10px] text-[#8c9e94]">Funnels & ROI</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">AI Chatbots</div>
                    <div className="text-[10px] text-[#8c9e94]">Support & Leads</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030608]/80 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-2">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">API & Foundation</div>
                    <div className="text-[10px] text-[#8c9e94]">Integrations & Web</div>
                  </div>
                </div>

                {/* Bottom Status Terminal Line */}
                <div className="p-3 rounded-xl bg-[#05080a] border border-[#9ae64c]/30 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-[#9ae64c] animate-pulse" />
                    <span>7 Core Capabilities Active</span>
                  </div>
                  <span className="text-[#9ae64c]">AI + Human Engineering</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
