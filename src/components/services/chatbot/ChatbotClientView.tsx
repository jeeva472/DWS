"use client";

import React, { useState } from "react";
import { FullChatbotPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ChatbotHero } from "./ChatbotHero";
import { ChatbotUseCases } from "./ChatbotUseCases";
import { ChatbotIntegrations } from "./ChatbotIntegrations";
import { ChatbotConsultationCTA } from "./ChatbotConsultationCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function ChatbotClientView({ data }: { data: FullChatbotPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const chatbotData = data.page?.chatbotPageData;

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
          { label: "Chatbot Development", href: "/services/chatbot-development", current: true },
        ]}
      />

      <main>
        {/* 1. Chatbot Hero Section with Live Grounded Chat Simulation */}
        {chatbotData?.hero && (
          <ChatbotHero
            hero={chatbotData.hero}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 2. Chatbot Use Cases Grid (6 items) */}
        {chatbotData?.useCases && (
          <ChatbotUseCases useCases={chatbotData.useCases} />
        )}

        {/* 3. Connected Ecosystem & Integrations */}
        {chatbotData?.integrations && (
          <ChatbotIntegrations integrations={chatbotData.integrations} />
        )}

        {/* 4. Connected Related Services */}
        <RelatedServices
          currentSlug="chatbot-development"
          customHeading="Connected Capabilities for Conversational AI"
          customDescription="Power your chatbots with autonomous workflow automation and bi-directional CRM data sync."
        />

        {/* 5. FAQ Accordion with JSON-LD Schema */}
        {chatbotData?.faq?.items && (
          <FAQAccordion
            eyebrow={chatbotData.faq.eyebrow}
            title={chatbotData.faq.title}
            items={chatbotData.faq.items}
          />
        )}

        {/* 6. Bottom Conversational AI Consultation CTA */}
        {chatbotData?.cta && (
          <ChatbotConsultationCTA
            cta={chatbotData.cta}
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
        initialService="Chatbot Development"
      />
    </div>
  );
}
