"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Workflow,
  Search,
  Megaphone,
  Zap,
  Bot,
  Database,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface ServiceSummary {
  slug: string;
  title: string;
  anchorText: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

export const ALL_SERVICES_CATALOG: Record<string, ServiceSummary> = {
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    anchorText: "AI Automation Solutions",
    category: "Primary Capability",
    description: "Automate repetitive workflows, connect business tools, and eliminate manual bottlenecks.",
    icon: Workflow,
  },
  seo: {
    slug: "seo",
    title: "SEO",
    anchorText: "Search Engine Optimization (SEO)",
    category: "Primary Capability",
    description: "Technical SEO, Core Web Vitals, and search strategy for compounding organic traffic.",
    icon: Search,
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    anchorText: "Digital Marketing & Growth",
    category: "Primary Capability",
    description: "Paid performance campaigns, GA4 attribution, and cross-channel conversion funnels.",
    icon: Megaphone,
  },
  "vibe-code-development": {
    slug: "vibe-code-development",
    title: "Vibe Code Development",
    anchorText: "Vibe Code Rapid Prototyping",
    category: "Supporting Capability",
    description: "AI-assisted coding velocity paired with senior engineering quality control.",
    icon: Zap,
  },
  "chatbot-development": {
    slug: "chatbot-development",
    title: "Chatbot Development",
    anchorText: "AI Chatbot Development",
    category: "Supporting Capability",
    description: "Grounded conversational AI assistants that capture leads and answer inquiries 24/7.",
    icon: Bot,
  },
  "api-integration": {
    slug: "api-integration",
    title: "API Integration",
    anchorText: "API Integration & Systems Architecture",
    category: "Supporting Capability",
    description: "Connect CRMs, payment gateways, and databases into a seamless unified data mesh.",
    icon: Database,
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    anchorText: "Modern Web & Application Development",
    category: "Supporting Capability",
    description: "High-performance Next.js web applications, headless architectures, and scalable UI systems.",
    icon: Code2,
  },
};

// Map of 2-3 genuinely related services per service page
const RELATED_SERVICES_MAP: Record<string, string[]> = {
  "ai-automation": ["chatbot-development", "api-integration", "vibe-code-development"],
  seo: ["digital-marketing", "web-development"],
  "vibe-code-development": ["ai-automation", "web-development", "api-integration"],
  "digital-marketing": ["seo", "ai-automation"],
  "chatbot-development": ["ai-automation", "api-integration"],
  "api-integration": ["ai-automation", "chatbot-development", "web-development"],
  "web-development": ["seo", "vibe-code-development", "api-integration"],
};

interface RelatedServicesProps {
  currentSlug: string;
  customHeading?: string;
  customDescription?: string;
}

export function RelatedServices({
  currentSlug,
  customHeading = "Explore Related Capabilities",
  customDescription = "Explore connected services designed to work together into a unified growth engine.",
}: RelatedServicesProps) {
  const shouldReduceMotion = useReducedMotion();
  const relatedSlugs = RELATED_SERVICES_MAP[currentSlug] || [];
  const relatedList = relatedSlugs
    .map((slug) => ALL_SERVICES_CATALOG[slug])
    .filter(Boolean);

  if (relatedList.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-[#04070a] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECTED SOLUTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {customHeading}
          </h2>

          <p className="text-sm sm:text-base text-[#9cb1a6] leading-relaxed">
            {customDescription}
          </p>
        </div>

        {/* 2-3 Related Cards Grid */}
        <div
          className={`grid grid-cols-1 ${
            relatedList.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"
          } gap-6`}
        >
          {relatedList.map((service, idx) => {
            const IconComp = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-7 rounded-2xl bg-[#070c10] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono text-[#7d9287] uppercase tracking-wider">
                      {service.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#9ae64c] transition-colors">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9cb1a6] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#9ae64c] uppercase tracking-wider group-hover:gap-2.5 transition-all"
                  >
                    <span>{service.anchorText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
