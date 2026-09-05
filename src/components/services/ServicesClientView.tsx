"use client";

import React, { useState } from "react";
import { FullServicesPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ServicesHero } from "./ServicesHero";
import { ServicesOverview } from "./ServicesOverview";
import { ServicesDetailedList } from "./ServicesDetailedList";
import { ServicesProcess } from "./ServicesProcess";
import { ServicesTech } from "./ServicesTech";
import { ServicesCTA } from "./ServicesCTA";

export function ServicesClientView({ data }: { data: FullServicesPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>("Web Development");

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setIsModalOpen(true);
  };

  const servicesData = data.page?.servicesPageData;

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main>
        {/* 1. Services Hero Section */}
        {servicesData?.hero && (
          <ServicesHero
            hero={servicesData.hero}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* 2. Services Overview Grid (01..07) */}
        {servicesData?.intro && servicesData?.services && (
          <ServicesOverview
            intro={servicesData.intro}
            services={servicesData.services}
          />
        )}

        {/* 3. Detailed Service Breakdown with Custom Interactive Visuals */}
        {servicesData?.services && (
          <ServicesDetailedList
            services={servicesData.services}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* 4. Our 6-Step Delivery Process */}
        {servicesData?.process && (
          <ServicesProcess process={servicesData.process} />
        )}

        {/* 5. Technology & Platform Stack Matrix */}
        {servicesData?.technology && (
          <ServicesTech technology={servicesData.technology} />
        )}

        {/* 6. Bottom Action CTA */}
        {servicesData?.cta && (
          <ServicesCTA
            cta={servicesData.cta}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
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
        initialService={modalService}
      />
    </div>
  );
}
