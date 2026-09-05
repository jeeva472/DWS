"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Workflow, Zap, CheckCircle2, Bot, Database, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";
import { ServicesHeroData } from "@/lib/types/wordpress";

interface AIAutomationHeroProps {
  hero: ServicesHeroData;
  onOpenConsultation?: () => void;
}

export function AIAutomationHero({ hero, onOpenConsultation }: AIAutomationHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "AI AUTOMATION • PROCESS OPTIMIZATION";
  const title = hero.title || "AI Automation for Smarter, More Efficient Businesses";
  const description =
    hero.description ||
    "We help businesses automate repetitive work, connect the tools they already use and build AI-powered workflows that save time and improve everyday operations.";
  const ctaText = hero.ctaText || "Automate Your Workflow";

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              AI Automation for{" "}
              <span className="text-[#9ae64c]">Smarter, More Efficient</span> Businesses
            </motion.h1>

            {/* Narrative Description */}
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
                href="#what-we-automate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>Explore Automations</span>
                <ChevronDown className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/[0.08] text-xs text-[#7d9287]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9ae64c]" />
                <span>Enterprise API Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9ae64c]" />
                <span>24/7 Automated Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9ae64c]" />
                <span>Zero Data Loss Protocol</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic SVG Workflow Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#060a0d]/90 border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
            >
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#9ae64c] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                    Live Workflow Orchestration
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30 text-[10px] font-mono">
                  ACTIVE
                </span>
              </div>

              {/* Animated Interactive Pipeline Nodes */}
              <div className="space-y-3.5 relative">
                {/* Connecting glowing pulse line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#9ae64c]/40 via-[#9ae64c]/80 to-[#9ae64c]/30" />

                {/* Node 1: Trigger Event */}
                <div className="relative flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors group">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0a1215] border border-[#9ae64c]/50 flex items-center justify-center text-[#9ae64c] shadow-[0_0_15px_rgba(154,230,76,0.2)]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Event Trigger</span>
                      <span className="text-[10px] text-[#7d9287] font-mono">0.02s</span>
                    </div>
                    <p className="text-[11px] text-[#9cb1a6] truncate">New Web Form / API Webhook Received</p>
                  </div>
                </div>

                {/* Node 2: AI Processing & Intent Scoring */}
                <div className="relative flex items-center gap-4 p-3.5 rounded-xl bg-[#9ae64c]/[0.04] border border-[#9ae64c]/30 shadow-[0_0_20px_rgba(154,230,76,0.08)] group">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#9ae64c] flex items-center justify-center text-[#05080a] font-bold shadow-[0_0_15px_rgba(154,230,76,0.4)]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#9ae64c]">AI Intelligence Layer</span>
                      <span className="text-[10px] text-[#9ae64c] font-mono">LLM Schema</span>
                    </div>
                    <p className="text-[11px] text-white/90 truncate">Intent Extraction & Entity Classification</p>
                  </div>
                </div>

                {/* Node 3: Decision & Routing Logic */}
                <div className="relative flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors group">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0a1215] border border-[#9ae64c]/50 flex items-center justify-center text-[#9ae64c] shadow-[0_0_15px_rgba(154,230,76,0.2)]">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Branching Logic</span>
                      <span className="text-[10px] text-[#7d9287] font-mono">Deterministic</span>
                    </div>
                    <p className="text-[11px] text-[#9cb1a6] truncate">Lead Scoring & Priority Routing Rules</p>
                  </div>
                </div>

                {/* Node 4: Target System Action */}
                <div className="relative flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors group">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0a1215] border border-[#9ae64c]/50 flex items-center justify-center text-[#9ae64c] shadow-[0_0_15px_rgba(154,230,76,0.2)]">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Target Ecosystem</span>
                      <span className="text-[10px] text-[#7d9287] font-mono">Bi-directional</span>
                    </div>
                    <p className="text-[11px] text-[#9cb1a6] truncate">HubSpot CRM + Slack Alert + Email Queue</p>
                  </div>
                </div>

                {/* Node 5: Success & Verification */}
                <div className="relative flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors group">
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0a1215] border border-[#9ae64c]/50 flex items-center justify-center text-[#9ae64c] shadow-[0_0_15px_rgba(154,230,76,0.2)]">
                    <CheckCircle2 className="w-4 h-4 text-[#9ae64c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Outcome</span>
                      <span className="text-[10px] text-[#9ae64c] font-mono">100% Synced</span>
                    </div>
                    <p className="text-[11px] text-[#9cb1a6] truncate">Zero Manual Effort • Log Verified</p>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#7d9287] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c]" />
                  Self-healing Retries
                </span>
                <span>Latency: 280ms avg</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
