"use client";

import React from "react";
import Image from "next/image";
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
  CheckCircle2,
  ArrowRight,
  Terminal,
  Activity,
  Workflow,
  Sparkles,
  GitBranch,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { ServicesPageItemData } from "@/lib/types/wordpress";

interface ServicesDetailedListProps {
  services: ServicesPageItemData[];
  onOpenConsultation?: (serviceName?: string) => void;
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

/**
 * Custom Interactive Visual for Vibe Code Development (Progressive Build Pipeline)
 */
function VibeCodePipelineVisual() {
  const steps = [
    { label: "Idea & Spec", icon: Sparkles, detail: "Requirements & Logic" },
    { label: "AI Assist", icon: Cpu, detail: "Fast Architecture Scaffolding" },
    { label: "Clean Code", icon: Terminal, detail: "Next.js & TypeScript" },
    { label: "Quality Audit", icon: ShieldCheck, detail: "Linting, Tests & Performance" },
    { label: "Live Product", icon: Zap, detail: "Production Deployment" },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#9ae64c]/30 shadow-2xl relative overflow-hidden bg-[#060e08]/90">
      {/* Corner Ambient Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#9ae64c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c]">
            <Zap className="w-4 h-4 text-[#9ae64c]" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Vibe Code Pipeline
            </div>
            <div className="text-[11px] text-[#9ae64c]">
              AI Velocity + Human Senior Engineering
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30">
          Rapid MVP
        </span>
      </div>

      {/* Progressive Pipeline Nodes */}
      <div className="space-y-3 relative">
        {/* Subtle connecting track line */}
        <div className="absolute top-4 bottom-4 left-5 w-[1px] bg-gradient-to-b from-[#9ae64c]/40 via-[#9ae64c]/20 to-transparent pointer-events-none" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex items-center gap-4 p-3 rounded-xl bg-[#030608]/80 border border-white/[0.06] hover:border-[#9ae64c]/40 transition-all duration-200 z-10"
          >
            <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0 font-mono text-xs font-bold">
              0{idx + 1}
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-white">
                {step.label}
              </span>
              <span className="text-[11px] text-[#8c9e94] font-mono">
                {step.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Principle Quote */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] bg-[#030608]/60 p-3.5 rounded-xl border border-white/[0.04]">
        <p className="text-xs text-white/90 font-medium italic">
          &ldquo;AI helps us move faster. Engineering experience makes sure what we build actually works.&rdquo;
        </p>
      </div>
    </div>
  );
}

/**
 * Custom Interactive Visual for SEO
 */
function SEODiagramVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.1] shadow-2xl relative overflow-hidden bg-[#05080a]">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c]">
            <Target className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">Organic Search Engine Architecture</span>
        </div>
        <span className="text-[10px] font-mono text-[#9ae64c]">100/100 CWV</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3.5 rounded-xl bg-[#030608] border border-white/[0.08]">
          <div className="text-[11px] text-[#8c9e94] mb-1 font-mono">Technical Health</div>
          <div className="text-lg font-extrabold text-white">99.4%</div>
          <div className="text-[10px] text-[#9ae64c] mt-0.5">Zero Indexing Errors</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#030608] border border-white/[0.08]">
          <div className="text-[11px] text-[#8c9e94] mb-1 font-mono">Core Web Vitals</div>
          <div className="text-lg font-extrabold text-[#9ae64c]">Good (Fast)</div>
          <div className="text-[10px] text-white/70 mt-0.5">LCP &lt; 1.2s • CLS 0</div>
        </div>
      </div>

      <div className="space-y-2 text-xs font-mono">
        <div className="p-2.5 rounded-lg bg-[#030608] border border-white/[0.06] flex items-center justify-between">
          <span className="text-[#9cb1a6]">High-Intent Keywords Ranked</span>
          <span className="text-[#9ae64c] font-bold">Top 3 Positions</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#030608] border border-white/[0.06] flex items-center justify-between">
          <span className="text-[#9cb1a6]">Structured Schema Coverage</span>
          <span className="text-white font-bold">Organization & Service</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom Interactive Visual for AI Automation (Featured #1 Capability)
 */
function AIAutomationVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#9ae64c]/30 shadow-2xl relative overflow-hidden bg-[#060e08]/90">
      {/* Corner Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#9ae64c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c]">
            <Workflow className="w-4 h-4 text-[#9ae64c]" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Automated Workflow Engine
            </div>
            <div className="text-[11px] text-[#9ae64c] font-mono">
              n8n • Make • Custom Python • OpenAI
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#9ae64c]/10 text-[#9ae64c] border border-[#9ae64c]/30">
          Zero Manual Friction
        </span>
      </div>

      {/* 3-Stage Pipeline */}
      <div className="space-y-3 relative">
        {/* Step 1 */}
        <div className="p-3.5 rounded-xl bg-[#030608]/90 border border-white/[0.08] hover:border-[#9ae64c]/30 transition-colors">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9ae64c] animate-pulse" />
              <span className="text-xs font-bold text-white">01 / Event Ingestion</span>
            </div>
            <span className="text-[10px] font-mono text-[#9ae64c]">Trigger: Instant</span>
          </div>
          <p className="text-[11px] text-[#8c9e94] leading-relaxed">
            Multi-channel lead capture, webhook triggers, CRM webhooks &amp; form submissions.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-3.5 rounded-xl bg-[#06120a] border border-[#9ae64c]/40 shadow-lg">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span className="text-xs font-bold text-[#9ae64c]">02 / Intelligent AI Orchestration</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#9ae64c]/15 text-[#9ae64c]">
              LLM + n8n Logic
            </span>
          </div>
          <p className="text-[11px] text-[#c4d6cb] leading-relaxed">
            Data enrichment, intent scoring, automated routing, and validation logic.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-3.5 rounded-xl bg-[#030608]/90 border border-white/[0.08] hover:border-[#9ae64c]/30 transition-colors">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span className="text-xs font-bold text-white">03 / Autonomous Execution</span>
            </div>
            <span className="text-[10px] font-mono text-[#8c9e94]">Multi-Platform Sync</span>
          </div>
          <p className="text-[11px] text-[#8c9e94] leading-relaxed">
            Syncs to HubSpot/Salesforce, dispatches Slack team alerts, and triggers follow-up sequences.
          </p>
        </div>
      </div>

      {/* Outcome Metrics Strip */}
      <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3.5 border-t border-white/[0.08]">
        <div className="p-2.5 rounded-lg bg-[#030608] border border-white/[0.06]">
          <div className="text-[10px] text-[#8c9e94] font-mono">Manual Time Saved</div>
          <div className="text-sm font-extrabold text-[#9ae64c] mt-0.5">14+ hrs / week</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#030608] border border-white/[0.06]">
          <div className="text-[10px] text-[#8c9e94] font-mono">Process Reliability</div>
          <div className="text-sm font-extrabold text-white mt-0.5">99.9% Uptime</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom Interactive Visual for Chatbot Development
 */
function ChatbotVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.1] shadow-2xl relative overflow-hidden bg-[#05080a]">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c]">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">Conversational Assistant</span>
        </div>
        <span className="text-[10px] font-mono text-[#9ae64c]">24/7 Live</span>
      </div>

      <div className="space-y-3">
        <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-white max-w-[85%]">
          &ldquo;Hello! Can you help me integrate a headless WordPress backend with a custom Next.js frontend?&rdquo;
        </div>

        <div className="p-3.5 rounded-2xl bg-[#060e08] border border-[#9ae64c]/30 text-xs text-[#f5f8f6] max-w-[90%] ml-auto shadow-md">
          <p className="font-semibold text-[#9ae64c] mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" /> DigitalWebStudio Bot
          </p>
          <p>
            &ldquo;Yes! We specialize in Headless WordPress + Next.js with WPGraphQL and incremental static regeneration for blazing fast page loads.&rdquo;
          </p>
        </div>

        <div className="p-2.5 rounded-xl bg-[#030608] border border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#9cb1a6]">
          <span>Lead Captured to CRM</span>
          <span className="text-[#9ae64c]">Response Time: 0.4s</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom Interactive Visual for API Integration
 */
function APIIntegrationVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.1] shadow-2xl relative overflow-hidden bg-[#05080a]">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c]">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">Unified API Gateway</span>
        </div>
        <span className="text-[10px] font-mono text-[#9ae64c]">REST • GraphQL</span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
        <div className="p-3 rounded-xl bg-[#030608] border border-white/[0.08]">
          <div className="text-xs font-bold text-white">Stripe / Razorpay</div>
          <div className="text-[10px] text-[#8c9e94] mt-0.5">Payments</div>
        </div>
        <div className="p-3 rounded-xl bg-[#060e08] border border-[#9ae64c]/40 shadow-lg">
          <div className="text-xs font-bold text-[#9ae64c]">Core Gateway</div>
          <div className="text-[10px] text-white mt-0.5">Central Hub</div>
        </div>
        <div className="p-3 rounded-xl bg-[#030608] border border-white/[0.08]">
          <div className="text-xs font-bold text-white">CRMs & ERPs</div>
          <div className="text-[10px] text-[#8c9e94] mt-0.5">HubSpot / Zoho</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#030608] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <span className="text-[#9cb1a6]">Data Integrity & Webhooks</span>
        <span className="text-[#9ae64c]">99.99% Uptime</span>
      </div>
    </div>
  );
}

export function ServicesDetailedList({
  services,
  onOpenConsultation,
}: ServicesDetailedListProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-24 sm:space-y-32 py-16 sm:py-24 bg-[#030608]">
      {services.map((service, idx) => {
        const IconComp = iconMap[service.icon] || Code2;
        const isEven = idx % 2 === 1; // Alternating layout
        const serviceAnchor = `service-${service.slug || idx + 1}`;
        const aliasAnchor = service.slug === "vibe-code-development" ? "service-vibe-code" : undefined;

        return (
          <section
            key={service.slug || idx}
            id={serviceAnchor}
            className="relative overflow-hidden scroll-mt-28"
          >
            {aliasAnchor && <div id={aliasAnchor} className="absolute -top-28 pointer-events-none" />}
            {/* Background Radial Ambience */}
            <div
              className={`absolute top-1/2 ${
                isEven ? "right-10" : "left-10"
              } -translate-y-1/2 w-[500px] h-[500px] bg-[#9ae64c]/[0.03] rounded-full blur-[160px] pointer-events-none`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Content Column */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Eyebrow with Number */}
                  <div className="flex items-center gap-2.5 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
                    <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
                    <span>
                      {service.number || sprintfNumber(idx + 1)} • {service.title}
                    </span>
                  </div>

                  {/* Main H2 */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-5">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Capability Chips */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-3 mb-8 w-full">
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                        Core Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-[#f5f8f6]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Actions with Direct Internal Service Page Link */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{service.ctaText || `Explore ${service.title} Solutions`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {onOpenConsultation && (
                      <button
                        type="button"
                        onClick={() => onOpenConsultation(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs text-[#9ae64c] bg-[#9ae64c]/10 border border-[#9ae64c]/30 hover:bg-[#9ae64c]/20 hover:border-[#9ae64c]/50 transition-all duration-200 cursor-pointer"
                      >
                        <span>Book Strategy Call</span>
                      </button>
                    )}
                  </div>
                </motion.div>

                {/* Visual / Media Column */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 relative w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Specialized Visual Routing */}
                  {service.slug === "vibe-code-development" ? (
                    <VibeCodePipelineVisual />
                  ) : service.slug === "seo" ? (
                    <SEODiagramVisual />
                  ) : service.slug === "ai-automation" ? (
                    <AIAutomationVisual />
                  ) : service.slug === "chatbot-development" ? (
                    <ChatbotVisual />
                  ) : service.slug === "api-integration" ? (
                    <APIIntegrationVisual />
                  ) : service.imageUrl ? (
                    /* Photographic Card for Web Development / Digital Marketing */
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-card border border-white/[0.12] shadow-2xl group">
                      <Image
                        src={service.imageUrl}
                        alt={
                          service.imageAlt ||
                          `${service.title} engineering services by DigitalWebStudio`
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030608]/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#060e08]/90 border border-[#9ae64c]/30 backdrop-blur-md flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-white">
                            {service.title} Excellence
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#9ae64c]">
                          Senior Delivery
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 rounded-3xl glass-card border border-white/[0.1] shadow-2xl">
                      <div className="w-12 h-12 rounded-2xl bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#9cb1a6] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function sprintfNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
