"use client";

import React, { useState } from "react";
import { FullAboutPageData } from "@/lib/types/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AboutHero } from "./AboutHero";
import { AboutIntro } from "./AboutIntro";
import { AboutApproach } from "./AboutApproach";
import { AboutValues } from "./AboutValues";
import { AboutTechnology } from "./AboutTechnology";
import { AboutWhyUs } from "./AboutWhyUs";
import { AboutCollaboration } from "./AboutCollaboration";
import { AboutCTA } from "./AboutCTA";

export function AboutClientView({ data }: { data: FullAboutPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>("Web Development");

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setIsModalOpen(true);
  };

  const about = data.page?.aboutPageData;

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      {/* Header Navigation */}
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Accessible Breadcrumbs with JSON-LD schema */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us", current: true },
        ]}
      />

      <main>
        {/* 1. About Hero Section */}
        {about?.hero && (
          <AboutHero
            hero={about.hero}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* 2. Who We Are (Intro) */}
        {about?.intro && <AboutIntro intro={about.intro} />}

        {/* 3. Our Approach (Process Roadmap with Animated SVG Path) */}
        {about?.approach && <AboutApproach approach={about.approach} />}

        {/* 4. What We Believe (Our Core Values) */}
        {about?.values && <AboutValues values={about.values} />}

        {/* 5. Technology & Platform Expertise */}
        {about?.technology && <AboutTechnology technology={about.technology} />}

        {/* 6. Why DigitalWebStudio (Differentiators) */}
        {about?.whyUs && <AboutWhyUs whyUs={about.whyUs} />}

        {/* 7. Human Collaboration / Team Narrative */}
        {about?.collaboration && (
          <AboutCollaboration collaboration={about.collaboration} />
        )}

        {/* 8. Bottom Action CTA */}
        {about?.cta && (
          <AboutCTA
            cta={about.cta}
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
