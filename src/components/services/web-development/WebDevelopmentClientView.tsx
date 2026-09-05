"use client";

import React, { useState } from "react";
import { FullHomepageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WebDevelopmentHero } from "./WebDevelopmentHero";
import { WebDevelopmentCapabilities } from "./WebDevelopmentCapabilities";
import { WebDevelopmentProcess } from "./WebDevelopmentProcess";
import { ArrowRight, Sparkles } from "lucide-react";

interface WebDevelopmentClientViewProps {
  data: FullHomepageData;
}

const WEB_DEV_FAQS = [
  {
    question: "Why should we choose Next.js over traditional WordPress or monolithic themes?",
    answer:
      "Next.js provides sub-second page loads, server-side rendering for optimal SEO, superior security because your backend isn't exposed to the public internet, and incredible flexibility to build custom interactive user interfaces that drive conversions.",
  },
  {
    question: "Can we still use WordPress to manage our blog and pages?",
    answer:
      "Yes! We specialize in headless WordPress setups where you manage content in WordPress ACF and the Gutenberg editor while our Next.js frontend renders the pages with maximum speed and zero bloated plugin overhead.",
  },
  {
    question: "How do you ensure our website achieves green Core Web Vitals scores?",
    answer:
      "We implement automated image optimization (Next.js Image with WebP/AVIF), strict tree shaking, code splitting, edge caching, minimal render-blocking JavaScript, and font optimization to guarantee LCP under 1.2s and 0 CLS.",
  },
  {
    question: "Do you integrate custom APIs, CRMs, and payment gateways?",
    answer:
      "Absolutely. We build type-safe API routes and webhook receivers connecting your website with HubSpot, Zoho, Stripe, Razorpay, Google Analytics 4, and automated email sequences.",
  },
  {
    question: "What is your typical delivery timeline for a custom web build?",
    answer:
      "A high-performance custom marketing website typically takes 2 to 4 weeks, while complex full-stack web applications or custom dashboards take 4 to 8 weeks depending on scope.",
  },
];

export function WebDevelopmentClientView({ data }: WebDevelopmentClientViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Accessible Breadcrumbs with JSON-LD BreadcrumbList schema */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Web Development", href: "/services/web-development", current: true },
        ]}
      />

      <main>
        {/* 1. Hero Section */}
        <WebDevelopmentHero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Core Capabilities */}
        <WebDevelopmentCapabilities />

        {/* 3. Delivery Process */}
        <WebDevelopmentProcess />

        {/* 4. Connected Related Services */}
        <RelatedServices
          currentSlug="web-development"
          customHeading="Connected Capabilities for Web Excellence"
          customDescription="Pair web engineering with SEO, AI automation, and API integrations for compounding growth."
        />

        {/* 5. FAQs with JSON-LD Schema */}
        <FAQAccordion
          eyebrow="WEB DEVELOPMENT FAQ"
          title="Common Questions About Our Web Engineering Services"
          items={WEB_DEV_FAQS}
        />

        {/* 6. Action Consultation CTA */}
        <section className="py-20 sm:py-24 bg-[#05080a] relative border-t border-white/[0.06] overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S BUILD SOMETHING EXCEPTIONAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Ready to Upgrade Your Web Architecture?
            </h2>
            <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-2xl mx-auto">
              Schedule a technical strategy call with our senior engineering team to discuss your project scope, timeline, and architectural requirements.
            </p>
            <button
              type="button"
              onClick={handleOpenConsultation}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer siteLogo={data.siteLogo} globalSettings={data.globalSettings} />

      {/* Consultation Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Web Development"
      />
    </div>
  );
}
