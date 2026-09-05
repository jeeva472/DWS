"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  Code2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { FullCaseStudiesArchiveData, CaseStudyItemData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface CaseStudiesListClientProps {
  data: FullCaseStudiesArchiveData;
}

export function CaseStudiesListClient({ data }: CaseStudiesListClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hero = data.hero || {
    eyebrow: "PORTFOLIO • VERIFIED CASE STUDIES",
    title: "Work That Solves Real Problems",
    description:
      "Explore how we use development, SEO, automation and digital strategy to solve practical business challenges.",
    ctaText: "Start a Project",
    ctaUrl: "#contact",
  };

  const items = data.items || [];

  const categories = [
    { label: "All Work", value: "all" },
    { label: "AI Automation", value: "ai-automation" },
    { label: "SEO", value: "seo" },
    { label: "Development", value: "development" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.categorySlug === activeCategory);

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
          { label: "Case Studies", href: "/case-studies", current: true },
        ]}
      />

      <main>
        {/* Archive Hero Section */}
        <section className="relative pt-8 sm:pt-14 pb-16 overflow-hidden bg-[#030608]">
          <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9ae64c]/[0.04] rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{hero.eyebrow}</span>
            </motion.div>

            {/* Single H1 for Case Studies Page */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight text-white leading-tight mb-6 max-w-3xl mx-auto"
            >
              Work That Solves <span className="text-[#9ae64c]">Real Problems</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {hero.description}
            </motion.p>

            {/* Category Filter Pills */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#9ae64c] text-[#05080a] shadow-[0_0_20px_rgba(154,230,76,0.4)]"
                        : "bg-white/[0.04] text-[#9cb1a6] border border-white/[0.08] hover:border-white/[0.2] hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 sm:py-24 bg-[#030608] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredItems.map((study, idx) => (
                <motion.article
                  key={study.slug}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative rounded-3xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                >
                  <div className="p-7 sm:p-8">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-[#9ae64c]/10 border border-[#9ae64c]/30 text-[11px] font-mono text-[#9ae64c] font-semibold">
                        {study.category}
                      </span>
                      <span className="text-xs font-mono text-[#7d9287]">
                        {study.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-4 group-hover:text-[#9ae64c] transition-colors">
                      <Link href={`/case-studies/${study.slug}`}>
                        {study.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    <p className="text-sm text-[#9cb1a6] leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Verified Outcomes List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#7d9287] block mb-2">
                        Key Results
                      </span>
                      {study.results.slice(0, 3).map((res, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#9ae64c] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#9cb1a6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-6 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between group-hover:bg-[#9ae64c]/[0.04] transition-colors">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#9ae64c] uppercase tracking-wider group-hover:gap-3 transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <ArrowUpRight className="w-4 h-4 text-[#7d9287] group-hover:text-[#9ae64c] transition-colors" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-[#05080a] relative border-t border-white/[0.06] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Have a Similar Challenge?
            </h2>
            <p className="text-base text-[#9cb1a6] max-w-xl mx-auto mb-8">
              Let&apos;s discuss how we can engineer an automation, SEO strategy, or custom web platform for your business.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Discuss Your Project</span>
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
        initialService="Case Studies Inquiry"
      />
    </div>
  );
}
