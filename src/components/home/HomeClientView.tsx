"use client";

import React, { useState } from "react";
import { FullHomepageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesMatrix } from "@/components/home/ServicesMatrix";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export function HomeClientView({ data }: { data: FullHomepageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>("Web Development");

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setIsModalOpen(true);
  };

  const home = data.page?.homepageData;

  return (
    <div className="min-h-screen bg-[#05080a] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main>
        {/* 1. Hero Section */}
        {home?.hero && (
          <Hero
            hero={home.hero}
            benefits={home.heroBenefits}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* 2. Company Positioning & Pillars */}
        {home?.about && (
          <CompanyIntro
            about={home.about}
            features={home.aboutFeatures}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* 3. Services & Capabilities Showcase Matrix */}
        {home?.services && home?.servicesSection && (
          <ServicesMatrix
            section={home.servicesSection}
            services={home.services}
            onOpenConsultation={(svc) => handleOpenConsultation(svc)}
          />
        )}

        {/* 4. Selected Work / Projects Case Studies */}
        <SelectedWork
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 5. Why Choose Us / Differentiators */}
        {home?.whyChoose && home?.whySection && (
          <WhyChooseUs
            section={home.whySection}
            items={home.whyChoose}
          />
        )}

        {/* 6. Strategic Process & Methodology */}
        <ProcessSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 7. Statistics & Measurable Results */}
        {home?.stats && <StatsSection stats={home.stats} />}

        {/* 8. Testimonials & Client Trust */}
        {home?.testimonials && home?.testiSection && (
          <Testimonials
            section={home.testiSection}
            testimonials={home.testimonials}
            autoplay={home.testiAutoplay}
          />
        )}

        {/* 9. Final Conversion CTA & Quick Inquiry */}
        {home?.contactCta && (
          <ContactCTA
            contactCta={home.contactCta}
            globalSettings={data.globalSettings}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
      />

      {/* Interactive Consultation Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
}
