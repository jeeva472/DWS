"use client";

import React, { useState } from "react";
import { FullSEOPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { SEOHero } from "./SEOHero";
import { SEOCapabilities } from "./SEOCapabilities";
import { SEOProcess } from "./SEOProcess";
import { SEODevConnection } from "./SEODevConnection";
import { SEOModernSearch } from "./SEOModernSearch";
import { SEOConsultationCTA } from "./SEOConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function SEOClientView({ data }: { data: FullSEOPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const seoData = data.page?.seoPageData;

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Accessible Breadcrumbs with JSON-LD schema */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO", href: "/services/seo", current: true },
        ]}
      />

      <main>
        {/* 1. SEO Hero Section with Live Telemetry Dashboard */}
        {seoData?.hero && (
          <SEOHero
            hero={seoData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Core SEO Capabilities Grid (8 items) */}
        {seoData?.capabilities && (
          <SEOCapabilities capabilities={seoData.capabilities} />
        )}

        {/* 3. 6-Step Systematic SEO Process */}
        {seoData?.process && (
          <SEOProcess process={seoData.process} />
        )}

        {/* 4. SEO + Technical Development Connection */}
        {seoData?.devConnection && (
          <SEODevConnection devConnection={seoData.devConnection} />
        )}

        {/* 5. Modern Search Landscape & AI Discovery */}
        {seoData?.aiSearch && (
          <SEOModernSearch aiSearch={seoData.aiSearch} />
        )}

        {/* 6. Connected Related Services */}
        <RelatedServices
          currentSlug="seo"
          customHeading="Connected Capabilities for Search Growth"
          customDescription="Supercharge organic rankings with high-performance web development and multi-channel paid acquisition."
        />

        {/* 7. FAQ Accordion with JSON-LD Schema */}
        {seoData?.faq?.items && (
          <FAQAccordion
            eyebrow={seoData.faq.eyebrow}
            title={seoData.faq.title}
            items={seoData.faq.items}
          />
        )}

        {/* 8. Bottom Consultation & Audit CTA */}
        {seoData?.cta && (
          <SEOConsultationCTA
            cta={seoData.cta}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
      />

      {/* Consultation Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="SEO"
      />
    </div>
  );
}
