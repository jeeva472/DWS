"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Bot, CheckCircle2, ShieldCheck, Clock, Zap, ArrowRightLeft, UserCheck } from "lucide-react";
import { ServicesHeroData } from "@/lib/types/wordpress";

interface ChatbotHeroProps {
  hero: ServicesHeroData;
  onOpenConsultation?: () => void;
}

export function ChatbotHero({ hero, onOpenConsultation }: ChatbotHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "AI CHATBOTS • CONVERSATIONAL LEAD SYSTEMS";
  const title = hero.title || "AI Chatbots That Qualify Leads & Move Sales Forward";
  const description =
    hero.description ||
    "Your chatbot should not just answer questions. We build intelligent conversational agents that engage visitors 24/7, qualify purchase intent, capture structured data, and route opportunities directly into your CRM.";
  const ctaText = hero.ctaText || "Start Your Growth Project";

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

            {/* Single Main H1 for SEO */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              Conversational AI That Moves Leads Into{" "}
              <span className="text-[#9ae64c]">Your Sales Workflow</span>
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
                href="#chatbot-use-cases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>Explore Use Cases</span>
                <ChevronDown className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/[0.08] text-xs text-[#7d9287]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9ae64c]" />
                <span>Grounded Knowledge Base & Guardrails</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9ae64c]" />
                <span>24/7 Real-Time Lead Qualification</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9ae64c]" />
                <span>Direct CRM & WhatsApp Routing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Chatbot Conversation & Workflow Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#060a0d]/90 border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
            >
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#9ae64c] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                    Conversational Sales Funnel
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30 text-[10px] font-mono">
                  CRM SYNCED
                </span>
              </div>

              {/* Chat Dialogue Stream */}
              <div className="space-y-3">
                {/* User Message */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="p-3 rounded-2xl rounded-tr-sm bg-white/[0.06] border border-white/[0.08] text-xs text-white max-w-[85%]">
                    Can your chatbot qualify high-ticket B2B leads and schedule meetings directly on our sales calendar?
                  </div>
                </div>

                {/* AI Grounded Response */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#9ae64c] flex items-center justify-center text-[#05080a] font-bold shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#080d11] border border-[#9ae64c]/30 text-xs text-[#f5f8f6] max-w-[85%] shadow-[0_0_20px_rgba(154,230,76,0.06)]">
                    <p className="mb-2">
                      Absolutely. We connect your custom knowledge base to conversational qualification logic. When intent and budget match your criteria, it books a Calendly slot and syncs the transcript to HubSpot.
                    </p>
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#9ae64c]">
                      <span>Lead Score: High (94/100)</span>
                      <span>Routing: Calendar Synced</span>
                    </div>
                  </div>
                </div>

                {/* Lead Captured & Routed Event */}
                <div className="p-3 rounded-xl bg-[#9ae64c]/[0.05] border border-[#9ae64c]/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#9ae64c]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Lead Pushed to CRM + Sales Rep Alerted</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#7d9287]">Slack Pushed</span>
                </div>
              </div>

              {/* Multi-step pipeline pill */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-[#7d9287] font-mono">
                <span>Visitor → Conversation → Qualification → CRM</span>
                <span className="text-[#9ae64c]">Automated Flow</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
