"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink, ShieldCheck, Zap } from "lucide-react";

interface ProjectItem {
  id: string;
  slug?: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  gradient: string;
}

export function SelectedWork({
  onOpenConsultation,
}: {
  onOpenConsultation?: () => void;
}) {
  const projects: ProjectItem[] = [
    {
      id: "01",
      slug: "rapid-mvp-vibe-code-development",
      tag: "Enterprise Web App",
      title: "FinTech Real-Time Analytics Platform",
      category: "Full-Stack Next.js Architecture",
      description:
        "Engineered a sub-second financial reporting suite with headless API integrations and real-time visualization widgets.",
      impact: "+340% Data Rendering Speed",
      stack: ["Next.js", "TypeScript", "Tailwind", "GraphQL APIs"],
      gradient: "from-[#9ae64c]/10 via-[#0d151a] to-[#080d11]",
    },
    {
      id: "02",
      slug: "lead-processing-automation-system",
      tag: "AI & Workflow Automation",
      title: "Apex Operations Agent & CRM Sync",
      category: "Autonomous LLM Pipelines",
      description:
        "Automated multi-department lead qualification and support routing using custom n8n pipelines and contextual AI assistants.",
      impact: "28+ Hours Saved Weekly",
      stack: ["AI LLM Stack", "n8n Workflows", "Zoho / CRM Sync", "Node.js"],
      gradient: "from-[#38bdf8]/10 via-[#0d151a] to-[#080d11]",
    },
    {
      id: "03",
      slug: "technical-seo-headless-migration",
      tag: "Conversion Engine",
      title: "Velan Logistics Digital Ecosystem",
      category: "Digital Transformation & Ads",
      description:
        "Redesigned the entire digital footprint, technical SEO, and conversion funnel to attract high-value commercial accounts.",
      impact: "+140% Inbound Qualified Leads",
      stack: ["Next.js App Router", "Yoast SEO Engine", "Google Ads Funnel"],
      gradient: "from-[#9ae64c]/10 via-[#0d151a] to-[#080d11]",
    },
    {
      id: "04",
      slug: "rapid-mvp-vibe-code-development",
      tag: "Headless E-Commerce",
      title: "OmniScale Direct-to-Consumer Engine",
      category: "High-Throughput Storefront",
      description:
        "Ultra-fast headless commerce platform with dynamic inventory synchronization and instant checkout workflows.",
      impact: "99.99% Edge Uptime",
      stack: ["Headless CMS", "Stripe API", "Vercel Edge", "Microservices"],
      gradient: "from-[#a855f7]/10 via-[#0d151a] to-[#080d11]",
    },
  ];

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-[#05080a] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
              <span>Selected Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architected for <span className="text-gradient-green">Measurable Impact</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
              Explore how we engineer web applications, automate mission-critical operations, and drive growth for market leaders.
            </p>
          </div>

          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#9ae64c] hover:text-[#b4fa6c] transition-colors group"
            >
              <span>View All Case Studies &amp; Results</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 sm:p-9 rounded-3xl bg-gradient-to-br ${proj.gradient} border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden`}
            >
              {/* Top Row: Tag & Index */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-white/90 border border-white/[0.1]">
                    {proj.tag}
                  </span>
                  <span className="text-xs font-mono text-[#9cb1a6]/60">
                    CASE // {proj.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#9ae64c] transition-colors mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs font-medium text-[#9ae64c] uppercase tracking-wider mb-4">
                  {proj.category}
                </p>

                <p className="text-sm text-[#9cb1a6] leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Row: Impact Badge & Tech Stack */}
              <div className="pt-6 border-t border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#b4fa6c]">
                    <Zap className="w-4 h-4 text-[#9ae64c]" />
                    <span>{proj.impact}</span>
                  </div>

                  <Link
                    href={proj.slug ? `/case-studies/${proj.slug}` : "/case-studies"}
                    className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-[#9ae64c] group-hover:text-[#05080a] text-white flex items-center justify-center transition-all duration-200"
                    aria-label={`View full case study for ${proj.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/40 text-[#9cb1a6] border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
