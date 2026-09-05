"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { HeroSectionData, ServiceItemData } from "@/lib/types/wordpress";
import { IconRenderer } from "../ui/IconRenderer";

interface ServicesMatrixProps {
  section: HeroSectionData;
  services: ServiceItemData[];
  onOpenConsultation?: (serviceName?: string) => void;
}

function resolveServiceUrl(title: string, linkUrl?: string): string {
  if (linkUrl && linkUrl.startsWith("/services/")) return linkUrl;
  const lower = title.toLowerCase();
  if (lower.includes("ai") || lower.includes("automation")) return "/services/ai-automation";
  if (lower.includes("seo") || lower.includes("search")) return "/services/seo";
  if (lower.includes("marketing") || lower.includes("growth")) return "/services/digital-marketing";
  if (lower.includes("vibe") || lower.includes("mvp") || lower.includes("prototype")) return "/services/vibe-code-development";
  if (lower.includes("chatbot") || lower.includes("bot")) return "/services/chatbot-development";
  if (lower.includes("api") || lower.includes("integration") || lower.includes("system")) return "/services/api-integration";
  return "/services/web-development";
}

export function ServicesMatrix({
  section,
  services,
  onOpenConsultation,
}: ServicesMatrixProps) {
  const activeServices = services.filter((s) => s.active);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#080d11] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9ae64c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span>{section.eyebrow || "Services"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              {section.heading || "Our Solutions, Your Growth"}
            </h2>

            {section.description && (
              <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
                {section.description}
              </p>
            )}
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#05080a] bg-[#9ae64c] hover:bg-[#b4fa6c] hover:shadow-[0_0_20px_rgba(154,230,76,0.5)] transition-all duration-200"
            >
              <span>Explore All Capabilities &amp; Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Sophisticated Service Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {activeServices.map((service, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative group flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#0f181f] border-[#9ae64c]/40 shadow-xl shadow-[#9ae64c]/5"
                      : "bg-[#0a0f13]/60 border-white/[0.06] hover:bg-[#0d1419] hover:border-white/[0.12]"
                  }`}
                >
                  {/* Left Accent Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#9ae64c] rounded-r-full shadow-[0_0_10px_#9ae64c]" />
                  )}

                  <div className="flex items-center gap-4 pl-2">
                    <span
                      className={`text-sm font-mono font-bold transition-colors ${
                        isSelected ? "text-[#9ae64c]" : "text-[#9cb1a6]/40 group-hover:text-[#9cb1a6]"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#9ae64c]/20 text-[#9ae64c]"
                            : "bg-white/[0.05] text-[#9cb1a6] group-hover:text-white"
                        }`}
                      >
                        <IconRenderer name={service.icon} className="w-4 h-4" />
                      </div>

                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isSelected ? "text-white" : "text-[#9cb1a6] group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected
                        ? "text-[#9ae64c] translate-x-1"
                        : "text-white/20 group-hover:text-white/60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeServices[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 sm:p-10 rounded-3xl glass-card border border-[#9ae64c]/20 shadow-2xl relative overflow-hidden"
                >
                  {/* Watermark Number */}
                  <div className="absolute top-4 right-8 text-8xl font-mono font-extrabold text-white/[0.03] select-none pointer-events-none">
                    0{activeTab + 1}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#9ae64c]/15 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c]">
                      <IconRenderer
                        name={activeServices[activeTab].icon}
                        className="w-6 h-6 text-[#9ae64c]"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#9ae64c] uppercase tracking-wider">
                        Core Capability
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {activeServices[activeTab].title}
                      </h4>
                    </div>
                  </div>

                  {activeServices[activeTab].description && (
                    <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
                      {activeServices[activeTab].description}
                    </p>
                  )}

                  {/* Bullet tags */}
                  {activeServices[activeTab].bullets &&
                    activeServices[activeTab].bullets!.length > 0 && (
                      <div className="space-y-4 mb-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                          Included Deliverables & Frameworks
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeServices[activeTab].bullets!.map((bullet, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] shrink-0">
                                <Check className="w-3 h-3 text-[#9ae64c]" />
                              </div>
                              <span className="font-medium text-xs sm:text-sm">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={resolveServiceUrl(activeServices[activeTab].title, activeServices[activeTab].linkUrl)}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] to-[#9ae64c] hover:shadow-[0_0_25px_rgba(154,230,76,0.6)] transition-all cursor-pointer"
                      >
                        <span>
                          {activeServices[activeTab].linkText || `Explore ${activeServices[activeTab].title} Details`}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {onOpenConsultation && (
                        <button
                          type="button"
                          onClick={() => onOpenConsultation(activeServices[activeTab].title)}
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold text-[#9ae64c] bg-[#9ae64c]/10 border border-[#9ae64c]/30 hover:bg-[#9ae64c]/20 transition-all cursor-pointer"
                        >
                          <span>Get Quote</span>
                        </button>
                      )}
                    </div>

                    <span className="text-xs text-[#9cb1a6]">
                      Architecture review &amp; quote within 24h
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
