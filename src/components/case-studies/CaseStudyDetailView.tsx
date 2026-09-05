"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Target,
  Clock,
  BookOpen,
} from "lucide-react";
import { FullSingleCaseStudyData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";

const SERVICE_SLUG_MAP: Record<string, string> = {
  "AI Automation": "/services/ai-automation",
  "SEO": "/services/seo",
  "Digital Marketing": "/services/digital-marketing",
  "Vibe Code Development": "/services/vibe-code-development",
  "Chatbot Development": "/services/chatbot-development",
  "API Integration": "/services/api-integration",
  "Web Development": "/services/web-development",
  "CRM Sync": "/services/api-integration",
  "Analytics": "/services/digital-marketing",
};

export function CaseStudyDetailView({ data }: { data: FullSingleCaseStudyData }) {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const study = data.caseStudy;

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Navbar */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={() => setIsModalOpen(true)}
      />

      {/* Accessible Breadcrumbs with JSON-LD schema */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.title, href: `/case-studies/${study.slug}`, current: true },
        ]}
      />

      <main>
        {/* Article Hero */}
        <section className="relative pt-8 sm:pt-14 pb-16 overflow-hidden bg-[#030608]">
          <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9ae64c]/[0.04] rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back to Case Studies Breadcrumb */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#9cb1a6] hover:text-[#9ae64c] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Case Studies</span>
            </Link>

            {/* Category & Industry */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#9ae64c]/10 border border-[#9ae64c]/30 text-xs font-mono font-semibold text-[#9ae64c]">
                {study.category}
              </span>
              <span className="text-xs font-mono text-[#7d9287]">
                Industry: {study.industry}
              </span>
              <span className="text-xs font-mono text-[#7d9287]">
                Client: {study.clientName}
              </span>
            </div>

            {/* Single H1 Title */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-8"
            >
              {study.title}
            </motion.h1>

            {/* Executive Summary */}
            <p className="text-lg sm:text-xl text-[#9cb1a6] leading-relaxed mb-10 font-normal">
              {study.summary}
            </p>

            {/* Metadata Matrix Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#060a0d] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7d9287] block mb-2">
                  Services Rendered
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.servicesRendered.map((s) => {
                    const targetServiceUrl = SERVICE_SLUG_MAP[s] || "/services";
                    return (
                      <Link
                        key={s}
                        href={targetServiceUrl}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#9ae64c]/40 hover:text-[#9ae64c] text-xs font-mono text-white transition-colors"
                      >
                        {s}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7d9287] block mb-2">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#9ae64c]/10 border border-[#9ae64c]/20 text-xs font-mono text-[#9ae64c]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Case Study Content */}
        <section className="py-16 sm:py-20 bg-[#05080a] relative border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            {/* 1. The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Target className="w-4 h-4" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  The Challenge
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed whitespace-pre-line">
                {study.challenge}
              </p>
            </div>

            {/* 2. Strategic Approach */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c]">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Our Approach
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed whitespace-pre-line">
                {study.approach}
              </p>
            </div>

            {/* 3. Implementation Steps */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080d11] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c]">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Implementation
                </h2>
              </div>
              <div className="text-base text-[#9cb1a6] leading-relaxed space-y-3 whitespace-pre-line">
                {study.implementation}
              </div>
            </div>

            {/* 4. Verified Results */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#060a0d] border border-[#9ae64c]/30 shadow-[0_15px_50px_rgba(154,230,76,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#9ae64c] flex items-center justify-center text-[#05080a] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Verified Results & Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-white/95">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Lessons Callout */}
            {study.lessons && (
              <div className="p-8 rounded-2xl bg-[#070b0e] border border-white/[0.1] flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#9ae64c]/10 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0 mt-1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#9ae64c] mb-2">
                    Key Technical Takeaway
                  </h3>
                  <p className="text-sm sm:text-base text-[#9cb1a6] leading-relaxed">
                    {study.lessons}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Connected Capabilities for this Case Study */}
        <RelatedServices
          currentSlug={study.categorySlug === "development" ? "vibe-code-development" : study.categorySlug}
          customHeading="Explore Connected Services"
          customDescription="Discover the core technical capabilities used to build this solution."
        />

        {/* CTA Banner */}
        <section className="py-20 bg-[#030608] relative border-t border-white/[0.06] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Solve Your Operational Bottlenecks?
            </h2>
            <p className="text-base text-[#9cb1a6] max-w-xl mx-auto mb-8">
              Discuss your requirements with our engineering team and get a structured roadmap.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={study.category}
      />
    </div>
  );
}
