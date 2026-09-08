"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Home,
  ArrowRight,
  Search,
  Workflow,
  Code2,
  Layers,
  Sparkles,
  Compass,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";
import { FullHomepageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

interface NotFoundClientViewProps {
  data: FullHomepageData;
}

const QUICK_LINKS = [
  {
    title: "AI Automation",
    description: "Custom LLM workflows, autonomous agents & process pipelines.",
    href: "/services/ai-automation",
    icon: Workflow,
    badge: "Capabilities",
  },
  {
    title: "Technical SEO",
    description: "Core Web Vitals, organic search architecture & rankings.",
    href: "/services/seo",
    icon: Search,
    badge: "Growth",
  },
  {
    title: "Modern Web Development",
    description: "Ultra-fast headless Next.js platforms & custom applications.",
    href: "/services/web-development",
    icon: Code2,
    badge: "Engineering",
  },
  {
    title: "Case Studies & Work",
    description: "Proven delivery metrics, architecture breakdowns & outcomes.",
    href: "/case-studies",
    icon: Layers,
    badge: "Portfolio",
  },
];

export function NotFoundClientView({ data }: NotFoundClientViewProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative flex flex-col justify-between overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={() => setIsModalOpen(true)}
      />

      {/* Main 404 Experience */}
      <main className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex-1 flex items-center">
        {/* Subtle Background Glows & Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#9ae64c]/10 via-[#27d980]/5 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9ae64c]/20 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #9ae64c 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          {/* Status Chip */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#9ae64c] bg-[#9ae64c]/10 border border-[#9ae64c]/30 mb-6 shadow-[0_0_20px_-3px_rgba(154,230,76,0.3)]"
          >
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            <span>ERROR 404 // DESTINATION NOT LOCATED</span>
          </motion.div>

          {/* Large Hero 404 Graphic */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6"
          >
            <div className="text-[100px] sm:text-[140px] md:text-[180px] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white via-[#f5f8f6] to-white/20 bg-clip-text text-transparent select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] font-mono">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[100px] sm:text-[140px] md:text-[180px] font-extrabold tracking-tighter leading-none text-[#9ae64c]/10 blur-2xl font-mono select-none">
                404
              </span>
            </div>
          </motion.div>

          {/* Headline & Explanation */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Lost in Digital Space?
            </h1>
            <p className="text-sm sm:text-base text-[#9cb1a6] leading-relaxed">
              The page or resource you requested could not be found. It may have been migrated,
              renamed, or decommissioned in our recent infrastructure upgrades.
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_-3px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-[#9ae64c]/40 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#9ae64c]" />
              <span>Contact Engineering</span>
            </button>
          </motion.div>

          {/* Quick Links Navigation Grid */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-left"
          >
            <div className="flex items-center justify-between mb-5 px-1 border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9ae64c] font-semibold">
                <Compass className="w-4 h-4" />
                <span>Recommended Destinations</span>
              </div>
              <span className="text-[11px] text-[#7d9287] hidden sm:inline-block font-mono">
                DigitalWebStudio Directory
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {QUICK_LINKS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#9ae64c]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-[#7d9287] uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-[#9ae64c] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#9cb1a6] mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1 text-xs font-mono text-[#9ae64c] group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer Navigation */}
      <Footer
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
      />

      {/* Consultation Inquiry Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Web Development"
      />
    </div>
  );
}
