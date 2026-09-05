"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Cpu, ShieldCheck, Sparkles, Terminal, Users } from "lucide-react";
import { HeroSectionData, IconItemData } from "@/lib/types/wordpress";
import { IconRenderer } from "../ui/IconRenderer";

interface CompanyIntroProps {
  about: HeroSectionData;
  features?: IconItemData[];
  onOpenConsultation?: () => void;
}

export function CompanyIntro({ about, features, onOpenConsultation }: CompanyIntroProps) {
  const defaultFeatures: IconItemData[] = [
    {
      icon: "code",
      title: "Engineered by Senior Specialists",
      text: "Every architecture is planned, written, and maintained directly by senior full-stack engineers with zero junior delegation.",
    },
    {
      icon: "cpu",
      title: "Real Business Automation",
      text: "We design custom AI pipelines and workflow integrations that remove repetitive operational overhead and save hundreds of manual hours.",
    },
    {
      icon: "chart-up",
      title: "Measurable Commercial Growth",
      text: "Fast page speeds, high-intent technical SEO, and conversion-optimized user flows built specifically to generate qualified leads and revenue.",
    },
  ];

  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#05080a] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#9ae64c]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Editorial Layout: Left Narrative, Right Authentic Studio Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column: Human + Technical Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span>{about.eyebrow || "Real People • Real Engineering"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
              Technology built around your{" "}
              <span className="text-gradient-green">business reality.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed pt-1">
              {about.description ||
                "We are a dedicated digital studio of senior developers, system architects, and growth marketers. We do not sell generic templates or empty AI promises — we partner directly with ambitious companies to engineer robust web platforms, automate critical business workflows, and scale measurable revenue."}
            </p>

            {/* Quick Value Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#f5f8f6]">
                <div className="w-5 h-5 rounded-full bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Direct communication with your lead developer & architect</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#f5f8f6]">
                <div className="w-5 h-5 rounded-full bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Full source code ownership with modern Next.js & TypeScript stack</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#f5f8f6]">
                <div className="w-5 h-5 rounded-full bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Agile sprints with transparent staging deployments</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] to-[#9ae64c] hover:shadow-[0_0_25px_rgba(154,230,76,0.5)] transition-all duration-200 cursor-pointer"
              >
                <span>{about.btnPrimaryText || "Schedule Technical Consultation"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Human Photography with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#09120c] group"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9ae64c]/10 rounded-full blur-3xl pointer-events-none z-10" />

              {/* Main Editorial Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/web-development-team-engineering.webp"
                  alt="Senior software engineer building high-performance web applications and digital systems"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080a]/90 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Floating Bottom Card: Real-World Studio Standard */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-[#060e08]/90 border border-[#9ae64c]/30 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4 z-20">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/15 border border-[#9ae64c]/30 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#9ae64c] uppercase tracking-wider">
                      Hands-On Engineering
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Built by Senior Developers • Zero Outsourcing
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-[11px] font-mono text-[#9cb1a6]">
                  <span className="w-2 h-2 rounded-full bg-[#9ae64c] animate-pulse" />
                  <span>Live Studio</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Strategic Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {displayFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl glass-card glass-card-hover border border-white/[0.08] relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] group-hover:bg-[#9ae64c]/20 transition-colors">
                    <IconRenderer name={feat.icon} className="w-5 h-5 text-[#9ae64c]" />
                  </div>
                  <span className="text-xs font-mono text-[#9cb1a6]/40">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#9ae64c] transition-colors mb-2">
                  {feat.title}
                </h3>

                {feat.text && (
                  <p className="text-sm text-[#9cb1a6] leading-relaxed">
                    {feat.text}
                  </p>
                )}
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-medium text-[#9ae64c]/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9ae64c]" />
                <span>Verified Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
