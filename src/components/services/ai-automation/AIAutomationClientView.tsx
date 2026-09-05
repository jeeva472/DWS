"use client";

import React, { useState } from "react";
import { FullAIAutomationPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { AIAutomationHero } from "./AIAutomationHero";
import { AIProblemSection } from "./AIProblemSection";
import { AIUseCases } from "./AIUseCases";
import { AITechnology } from "./AITechnology";
import { AIHowItWorks } from "./AIHowItWorks";
import { AIOutcomes } from "./AIOutcomes";
import { AICaseStudyCTA } from "./AICaseStudyCTA";
import { AIConsultationCTA } from "./AIConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function AIAutomationClientView({ data }: { data: FullAIAutomationPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const aiData = data.page?.aiAutomationPageData;

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
          { label: "AI Automation", href: "/services/ai-automation", current: true },
        ]}
      />

      <main>
        {/* 1. Hero Section with Live Animated Pipeline Visual */}
        {aiData?.hero && (
          <AIAutomationHero
            hero={aiData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Problem / Bottleneck Section (8 real friction points) */}
        {aiData?.problem && (
          <AIProblemSection problem={aiData.problem} />
        )}

        {/* 3. Use Cases / What We Automate */}
        {aiData?.useCases && (
          <AIUseCases useCases={aiData.useCases} />
        )}

        {/* 4. Automation Tech Stack */}
        {aiData?.technology && (
          <AITechnology technology={aiData.technology} />
        )}

        {/* 5. 5-Stage How It Works Framework */}
        {aiData?.process && (
          <AIHowItWorks process={aiData.process} />
        )}

        {/* 6. Real Business Outcomes */}
        {aiData?.outcomes && (
          <AIOutcomes outcomes={aiData.outcomes} />
        )}

        {/* 7. Case Study Callout linking to /case-studies */}
        {aiData?.caseStudyCTA && (
          <AICaseStudyCTA caseStudyCTA={aiData.caseStudyCTA} />
        )}

        {/* 8. Connected Related Services */}
        <RelatedServices
          currentSlug="ai-automation"
          customHeading="Connected Capabilities for Intelligent Automation"
          customDescription="Enhance automated workflows with custom AI chatbots, unified API integrations, and rapid prototyping."
        />

        {/* 9. Frequently Asked Questions with JSON-LD Schema */}
        {aiData?.faq?.items && (
          <FAQAccordion
            eyebrow={aiData.faq.eyebrow}
            title={aiData.faq.title}
            items={aiData.faq.items}
          />
        )}

        {/* 10. Final Action Consultation CTA */}
        {aiData?.cta && (
          <AIConsultationCTA
            cta={aiData.cta}
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
        initialService="AI Automation"
      />
    </div>
  );
}
