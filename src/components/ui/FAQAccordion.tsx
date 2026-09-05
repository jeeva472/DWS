"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItemData } from "@/lib/types/wordpress";

interface FAQAccordionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FAQItemData[];
}

export function FAQAccordion({
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  title = "Common Questions & Clear Answers",
  description,
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Generate structured FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#05080a] border-t border-white/[0.06]">
      {/* JSON-LD Structured Data for FAQ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9ae64c]/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
            <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-base text-[#9cb1a6] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#080d10] border-[#9ae64c]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "bg-[#030608]/80 border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ae64c] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-[#9ae64c] font-bold bg-[#9ae64c]/10 border border-[#9ae64c]/20 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#9ae64c] text-[#05080a] rotate-180"
                        : "bg-white/[0.05] text-[#9cb1a6] border border-white/[0.08]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#9cb1a6] leading-relaxed border-t border-white/[0.04]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
