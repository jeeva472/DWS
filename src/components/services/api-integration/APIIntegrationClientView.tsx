"use client";

import React, { useState } from "react";
import { FullAPIIntegrationPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { APIIntegrationHero } from "./APIIntegrationHero";
import { APICapabilities } from "./APICapabilities";
import { APIBusinessValue } from "./APIBusinessValue";
import { APIConsultationCTA } from "./APIConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function APIIntegrationClientView({
  data,
}: {
  data: FullAPIIntegrationPageData;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const apiData = data.page?.apiIntegrationPageData;

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
          { label: "API Integration", href: "/services/api-integration", current: true },
        ]}
      />

      <main>
        {/* 1. API Hero Section with Live Gateway & Mesh Visual */}
        {apiData?.hero && (
          <APIIntegrationHero
            hero={apiData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Core Integration Capabilities (6 items) */}
        {apiData?.capabilities && (
          <APICapabilities capabilities={apiData.capabilities} />
        )}

        {/* 3. Business Value & System Efficiency (4 items) */}
        {apiData?.businessValue && (
          <APIBusinessValue businessValue={apiData.businessValue} />
        )}

        {/* 4. Connected Related Services */}
        <RelatedServices
          currentSlug="api-integration"
          customHeading="Connected Capabilities for Systems Architecture"
          customDescription="Build a cohesive tech ecosystem connecting custom web apps, intelligent automations, and live AI bots."
        />

        {/* 5. FAQ Accordion with JSON-LD Schema */}
        {apiData?.faq?.items && (
          <FAQAccordion
            eyebrow={apiData.faq.eyebrow}
            title={apiData.faq.title}
            items={apiData.faq.items}
          />
        )}

        {/* 6. Bottom System Integration CTA */}
        {apiData?.cta && (
          <APIConsultationCTA
            cta={apiData.cta}
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
        initialService="API Integration"
      />
    </div>
  );
}
