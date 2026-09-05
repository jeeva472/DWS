"use client";

import React, { useState } from "react";
import { FullDigitalMarketingPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { DigitalMarketingHero } from "./DigitalMarketingHero";
import { DigitalMarketingServices } from "./DigitalMarketingServices";
import { DigitalMarketingFramework } from "./DigitalMarketingFramework";
import { DigitalMarketingSEOConnection } from "./DigitalMarketingSEOConnection";
import { DigitalMarketingAnalytics } from "./DigitalMarketingAnalytics";
import { DigitalMarketingConsultationCTA } from "./DigitalMarketingConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function DigitalMarketingClientView({
  data,
}: {
  data: FullDigitalMarketingPageData;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const marketingData = data.page?.digitalMarketingPageData;

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
          { label: "Digital Marketing", href: "/services/digital-marketing", current: true },
        ]}
      />

      <main>
        {/* 1. Hero Section with Growth Funnel Visual */}
        {marketingData?.hero && (
          <DigitalMarketingHero
            hero={marketingData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Core Growth Capabilities (6 items) */}
        {marketingData?.services && (
          <DigitalMarketingServices services={marketingData.services} />
        )}

        {/* 3. 5-Stage Continuous Growth Framework */}
        {marketingData?.growthFramework && (
          <DigitalMarketingFramework
            growthFramework={marketingData.growthFramework}
          />
        )}

        {/* 4. SEO, Content & Paid Synergy Connection */}
        {marketingData?.seoConnection && (
          <DigitalMarketingSEOConnection
            seoConnection={marketingData.seoConnection}
          />
        )}

        {/* 5. Measurement & Attribution with GA4 */}
        {marketingData?.analytics && (
          <DigitalMarketingAnalytics analytics={marketingData.analytics} />
        )}

        {/* 6. Connected Related Services */}
        <RelatedServices
          currentSlug="digital-marketing"
          customHeading="Connected Capabilities for Acquisition & Scale"
          customDescription="Align paid growth funnels with organic SEO discovery and automated lead qualification pipelines."
        />

        {/* 7. FAQ Accordion with JSON-LD Schema */}
        {marketingData?.faq?.items && (
          <FAQAccordion
            eyebrow={marketingData.faq.eyebrow}
            title={marketingData.faq.title}
            items={marketingData.faq.items}
          />
        )}

        {/* 8. Bottom Growth Strategy Consultation CTA */}
        {marketingData?.cta && (
          <DigitalMarketingConsultationCTA
            cta={marketingData.cta}
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
        initialService="Digital Marketing"
      />
    </div>
  );
}
