"use client";

import React, { useState } from "react";
import { FullVibeCodePageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { VibeCodeHero } from "./VibeCodeHero";
import { VibeCodeOverview } from "./VibeCodeOverview";
import { VibeCodeUseCases } from "./VibeCodeUseCases";
import { VibeCodeApproach } from "./VibeCodeApproach";
import { VibeCodeQuality } from "./VibeCodeQuality";
import { VibeCodeConsultationCTA } from "./VibeCodeConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function VibeCodeClientView({ data }: { data: FullVibeCodePageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const vibeData = data.page?.vibeCodePageData;

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
          { label: "Vibe Code Development", href: "/services/vibe-code-development", current: true },
        ]}
      />

      <main>
        {/* 1. Vibe Code Hero Section with AI Velocity & Oversight Visual */}
        {vibeData?.hero && (
          <VibeCodeHero
            hero={vibeData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Overview: What is Vibe Coding */}
        {vibeData?.overview && (
          <VibeCodeOverview overview={vibeData.overview} />
        )}

        {/* 3. Use Cases / What We Build (6 items) */}
        {vibeData?.useCases && (
          <VibeCodeUseCases useCases={vibeData.useCases} />
        )}

        {/* 4. Balanced Approach: AI Acceleration + Human Oversight */}
        {vibeData?.approach && (
          <VibeCodeApproach approach={vibeData.approach} />
        )}

        {/* 5. Engineering Rigor: Fast Does Not Mean Careless */}
        {vibeData?.quality && (
          <VibeCodeQuality quality={vibeData.quality} />
        )}

        {/* 6. Connected Related Services */}
        <RelatedServices
          currentSlug="vibe-code-development"
          customHeading="Connected Capabilities for Rapid Engineering"
          customDescription="Take your prototypes to production scale with intelligent automation, custom web systems, and unified APIs."
        />

        {/* 7. FAQ Accordion with JSON-LD Schema */}
        {vibeData?.faq?.items && (
          <FAQAccordion
            eyebrow={vibeData.faq.eyebrow}
            title={vibeData.faq.title}
            items={vibeData.faq.items}
          />
        )}

        {/* 8. Bottom Rapid Sprint CTA */}
        {vibeData?.cta && (
          <VibeCodeConsultationCTA
            cta={vibeData.cta}
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
        initialService="Vibe Code Development"
      />
    </div>
  );
}
