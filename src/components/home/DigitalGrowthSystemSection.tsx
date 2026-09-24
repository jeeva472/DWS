"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Search,
  Layout,
  MessageSquare,
  Bot,
  Database,
  Workflow,
  MailCheck,
  TrendingUp,
  BarChart3,
  RefreshCw,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldCheck,
} from "lucide-react";

interface SystemStage {
  id: string;
  step: string;
  title: string;
  category: string;
  heading: string;
  description: string;
  capabilities: string[];
  serviceLink: string;
  serviceName: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
}

const SYSTEM_STAGES: SystemStage[] = [
  {
    id: "attract",
    step: "01",
    title: "Attract",
    category: "Traffic Generation",
    heading: "Attract High-Intent Visitors Through Search & Targeted Reach",
    description:
      "Growth starts by being discoverable where your highest-value customers are already looking. We engineer technical SEO foundations and targeted acquisition funnels that capture genuine search intent rather than empty vanity traffic.",
    capabilities: [
      "Technical SEO Architecture & Site Crawlability",
      "High-Intent Keyword & Topic Cluster Strategy",
      "Performance Multi-Channel Ad Campaigns",
      "Core Web Vitals & Search Engine Authority",
    ],
    serviceLink: "/services/seo",
    serviceName: "Explore SEO & Marketing",
    icon: Search,
    accentColor: "#9ae64c",
    badge: "SEO + Marketing",
  },
  {
    id: "build",
    step: "02",
    title: "Build",
    category: "Digital Infrastructure",
    heading: "High-Performance Websites Engineered as Business Infrastructure",
    description:
      "Your website is the foundation of your digital growth engine. We build ultra-fast, conversion-focused websites and web applications with modular Next.js architecture, headless CMS setups, and clean responsive interfaces.",
    capabilities: [
      "Next.js, React & Modern Headless WordPress",
      "Sub-second Load Times & Zero Layout Shifts",
      "Conversion-Engineered Landing Pages",
      "Scalable API-Ready Component Systems",
    ],
    serviceLink: "/services/web-development",
    serviceName: "Explore Web Development",
    icon: Layout,
    accentColor: "#38bdf8",
    badge: "Web Platform",
  },
  {
    id: "capture",
    step: "03",
    title: "Capture",
    category: "Lead Ingestion",
    heading: "Capture Incoming Interest 24/7 Across Forms & Interactive Chat",
    description:
      "Convert passive visitors into active conversations. We implement frictionless multi-channel capture points—from smart web forms to 24/7 intelligent conversational chatbots—ensuring zero prospective leads slip away.",
    capabilities: [
      "High-Conversion Dynamic Web Forms",
      "24/7 Grounded AI Chat Assistants",
      "WhatsApp & Direct Web Messaging Gateways",
      "Instant Ingestion with Webhook Validation",
    ],
    serviceLink: "/services/chatbot-development",
    serviceName: "Explore Chatbot Solutions",
    icon: MessageSquare,
    accentColor: "#a855f7",
    badge: "Forms + Chatbots",
  },
  {
    id: "qualify",
    step: "04",
    title: "Qualify",
    category: "AI Processing",
    heading: "AI-Powered Intent Classification & Lead Scoring",
    description:
      "Not every lead requires the same response. Custom AI models instantly analyze inquiry details, extract commercial intent, score priority levels, and filter spam before human team members spend valuable time.",
    capabilities: [
      "Automated Intent Extraction via LLMs",
      "Dynamic Lead Scoring & Value Categorization",
      "Entity & Requirement Extraction",
      "Spam Filtering & Verification Logic",
    ],
    serviceLink: "/services/ai-automation",
    serviceName: "Explore AI Qualification",
    icon: Bot,
    accentColor: "#f59e0b",
    badge: "AI Qualification",
  },
  {
    id: "manage",
    step: "05",
    title: "Manage",
    category: "CRM & Central Data",
    heading: "Centralized CRM Synchronization & Single Source of Truth",
    description:
      "Keep your customer data organized and synchronized. Qualified lead data, conversation summaries, and deal stages automatically update in your CRM (HubSpot, Salesforce, Zoho) without manual copying.",
    capabilities: [
      "Bi-Directional CRM Synchronization",
      "Contact & Deal Pipeline Auto-Creation",
      "Enriched Conversation History & Summaries",
      "Clean Data Hygiene with Zero Duplication",
    ],
    serviceLink: "/services/api-integration",
    serviceName: "Explore CRM Integration",
    icon: Database,
    accentColor: "#10b981",
    badge: "CRM Architecture",
  },
  {
    id: "automate",
    step: "06",
    title: "Automate",
    category: "Workflow Routing",
    heading: "Automated Routing & Instant Team Notifications",
    description:
      "Route leads to the right specialists instantly based on service interest, deal size, or geography. Real-time notifications alert your sales team in Slack, WhatsApp, or email with one-click direct response links.",
    capabilities: [
      "Conditional Lead Routing via n8n & Make",
      "Real-Time Slack, Teams & WhatsApp Alerts",
      "Automated Task Dispatch & Ownership Assignment",
      "Executive Notification Feeds",
    ],
    serviceLink: "/services/ai-automation",
    serviceName: "Explore Automation Workflows",
    icon: Workflow,
    accentColor: "#ec4899",
    badge: "Workflow Routing",
  },
  {
    id: "follow-up",
    step: "07",
    title: "Follow Up",
    category: "Lead Nurturing",
    heading: "Automated Follow-Up Sequences & Instant Scheduling",
    description:
      "Speed to lead dictates conversion rates. Automated email sequences, WhatsApp follow-ups, and calendar booking links engage prospects within minutes of inquiry submission.",
    capabilities: [
      "Contextual Email & WhatsApp Follow-Ups",
      "Automated Calendar Scheduling Links",
      "Multi-Touch Re-engagement Sequences",
      "Client Onboarding Kick-off Automations",
    ],
    serviceLink: "/services/ai-automation",
    serviceName: "Explore Automated Follow-Up",
    icon: MailCheck,
    accentColor: "#9ae64c",
    badge: "Automated Nurture",
  },
  {
    id: "convert",
    step: "08",
    title: "Convert",
    category: "Sales Execution",
    heading: "Turn Qualified Inquiries into Measurable Revenue",
    description:
      "By connecting visibility directly to fast response times and organized CRM pipelines, sales teams close deals faster with full context on every prospect's requirements and history.",
    capabilities: [
      "Shorter Sales Cycles with Pre-Qualified Data",
      "Complete Prospect Context for Discovery Calls",
      "Automated Proposal & Contract Triggers",
      "Frictionless Payment & Checkout Gateways",
    ],
    serviceLink: "/services/web-development",
    serviceName: "Explore Conversion Solutions",
    icon: TrendingUp,
    accentColor: "#38bdf8",
    badge: "Sales Conversion",
  },
  {
    id: "measure",
    step: "09",
    title: "Measure",
    category: "Analytics & Telemetry",
    heading: "End-to-End Attribution & Performance Analytics",
    description:
      "Gain complete clarity on which marketing channels, keywords, and automation workflows drive real business value with Google Analytics 4, custom Tag Manager events, and pipeline attribution.",
    capabilities: [
      "GA4 & Google Tag Manager Event Tracking",
      "Multi-Touch Lead Channel Attribution",
      "Cost-Per-Acquisition & Funnel Drop-off Metrics",
      "Transparent Executive Performance Dashboards",
    ],
    serviceLink: "/services/digital-marketing",
    serviceName: "Explore Growth Analytics",
    icon: BarChart3,
    accentColor: "#a855f7",
    badge: "Analytics Telemetry",
  },
  {
    id: "optimize",
    step: "10",
    title: "Optimize",
    category: "Continuous Improvement",
    heading: "Continuous Optimization Across SEO, CRO & Automations",
    description:
      "Digital growth is a compounding system. We continuously audit search visibility, test landing page conversion rates, and refine automation workflows to maximize commercial returns.",
    capabilities: [
      "Ongoing Technical SEO & Content Iteration",
      "A/B Testing & Landing Page CRO Audits",
      "Automation Workflow Refinement & Scaling",
      "Continuous Core Web Vitals Monitoring",
    ],
    serviceLink: "/services",
    serviceName: "Explore All Solutions",
    icon: RefreshCw,
    accentColor: "#9ae64c",
    badge: "System Optimization",
  },
];

interface DigitalGrowthSystemProps {
  onOpenConsultation?: (serviceName?: string) => void;
  isStandalonePage?: boolean;
}

export function DigitalGrowthSystemSection({
  onOpenConsultation,
  isStandalonePage = false,
}: DigitalGrowthSystemProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = SYSTEM_STAGES[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <section
      id="growth-system"
      className={`relative py-24 sm:py-32 bg-[#04070a] border-t border-white/[0.07] overflow-hidden ${
        isStandalonePage ? "pt-32" : ""
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#9ae64c]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#38bdf8]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
            <span>The Digital Growth System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            From Traffic to Customers —{" "}
            <span className="text-gradient-green">One Connected System.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            Digital growth does not stop when someone visits a website. We build, connect, and optimize every stage required to move a business from online visibility to qualified leads and ongoing growth.
          </p>
        </div>

        {/* =================================================================== */}
        {/* INTERACTIVE STAGE STEPPER (Horizontal Scrollable Tabs on Desktop/Mobile) */}
        {/* =================================================================== */}
        <div className="mb-12">
          {/* Top Label */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-mono font-bold text-[#9cb1a6] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span>10 Connected Growth Stages (Click to Explore)</span>
            </span>
            <span className="text-xs font-mono text-[#9ae64c] font-semibold">
              Stage {activeStage.step} of 10
            </span>
          </div>

          {/* Stepper Strip */}
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10">
            <div className="flex items-center gap-2 min-w-max p-1.5 rounded-2xl bg-[#080e12]/90 border border-white/[0.08] backdrop-blur-xl">
              {SYSTEM_STAGES.map((stage, idx) => {
                const isSelected = activeStageIndex === idx;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 relative cursor-pointer ${
                      isSelected
                        ? "bg-[#9ae64c] text-[#05080a] shadow-[0_0_20px_rgba(154,230,76,0.4)] scale-[1.02]"
                        : "text-[#9cb1a6] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] ${
                        isSelected ? "text-[#05080a]/70 font-extrabold" : "text-[#9cb1a6]/40"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <StageIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{stage.title}</span>

                    {idx < SYSTEM_STAGES.length - 1 && (
                      <ChevronRight
                        className={`w-3 h-3 ml-1 ${
                          isSelected ? "text-[#05080a]/40" : "text-white/10"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* ACTIVE STAGE SHOWCASE: Split Detail Card & Visual Flow                */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-card border border-[#9ae64c]/20 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Watermark Step Number */}
              <div className="absolute top-4 right-8 text-8xl font-mono font-extrabold text-white/[0.03] select-none pointer-events-none">
                {activeStage.step}
              </div>

              <div>
                {/* Badge & Stage Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#9ae64c]/15 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c]">
                    <ActiveIcon className="w-6 h-6 text-[#9ae64c]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#9ae64c] uppercase tracking-wider font-bold">
                      STAGE {activeStage.step} // {activeStage.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {activeStage.heading}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
                  {activeStage.description}
                </p>

                {/* Capability Deliverables List */}
                <div className="space-y-4 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9ae64c]" />
                    <span>Engineered Capabilities in This Stage</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0 mt-0.5" />
                        <span className="font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={activeStage.serviceLink}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] to-[#9ae64c] hover:shadow-[0_0_25px_rgba(154,230,76,0.5)] transition-all duration-200"
                  >
                    <span>{activeStage.serviceName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(activeStage.badge)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold text-[#9ae64c] bg-[#9ae64c]/10 border border-[#9ae64c]/30 hover:bg-[#9ae64c]/20 transition-all cursor-pointer"
                    >
                      <span>Plan This Stage</span>
                    </button>
                  )}
                </div>

                <div className="text-xs text-[#9cb1a6] font-mono">
                  Part of DigitalWebStudio Unified Engine
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Visual Architecture Flow Diagram */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#060b0f] border border-white/[0.08] shadow-2xl relative flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9ae64c] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Full Ecosystem Flow
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#9cb1a6]">
                  10 Integrated Nodes
                </span>
              </div>

              {/* Vertical Compact Pipeline View */}
              <div className="space-y-2 relative">
                {/* Connecting track line */}
                <div className="absolute left-[17px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#9ae64c]/40 via-[#9ae64c]/20 to-transparent pointer-events-none" />

                {SYSTEM_STAGES.map((stg, sIdx) => {
                  const isCurrent = activeStageIndex === sIdx;
                  const StgIcon = stg.icon;

                  return (
                    <button
                      key={stg.id}
                      type="button"
                      onClick={() => setActiveStageIndex(sIdx)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 text-left relative z-10 cursor-pointer ${
                        isCurrent
                          ? "bg-[#0c1811] border-[#9ae64c]/50 shadow-md shadow-[#9ae64c]/10"
                          : "bg-[#030608]/80 border-white/[0.04] hover:bg-[#070e13] hover:border-white/[0.1]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[11px] font-bold shrink-0 transition-colors ${
                            isCurrent
                              ? "bg-[#9ae64c] text-[#05080a]"
                              : "bg-white/[0.05] text-[#9cb1a6]"
                          }`}
                        >
                          <StgIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div
                            className={`text-xs font-bold transition-colors ${
                              isCurrent ? "text-[#9ae64c]" : "text-white/90"
                            }`}
                          >
                            {stg.step}. {stg.title}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          isCurrent
                            ? "bg-[#9ae64c]/20 text-[#9ae64c] border border-[#9ae64c]/40"
                            : "text-[#7d9287]"
                        }`}
                      >
                        {stg.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Philosophy Callout */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <p className="text-xs text-[#9cb1a6] leading-relaxed">
                <span className="text-white font-semibold">Modular &amp; Scalable:</span> Build the parts you need today. Connect the entire automated pipeline when your business is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
