"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from "lucide-react";
import { HeroSectionData, TestimonialItemData } from "@/lib/types/wordpress";

interface TestimonialsProps {
  section: HeroSectionData;
  testimonials: TestimonialItemData[];
  autoplay?: boolean;
}

export function Testimonials({
  section,
  testimonials,
  autoplay = true,
}: TestimonialsProps) {
  const activeItems = testimonials.filter((t) => t.active);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoplay || activeItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activeItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, activeItems.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % activeItems.length);
  };

  if (activeItems.length === 0) return null;

  const currentItem = activeItems[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-[#05080a] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9ae64c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#9ae64c] tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#9ae64c]" />
            <span>{section.eyebrow || "Testimonials"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {section.heading || "What Our Clients Say"}
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative">
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl glass-card border border-[#9ae64c]/20 shadow-2xl relative min-h-[320px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-[#9ae64c]/20">
              <Quote className="w-16 h-16 rotate-180" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {/* Star Ratings */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: currentItem.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#9ae64c] text-[#9ae64c]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl text-white font-medium leading-relaxed max-w-3xl">
                  &ldquo;{currentItem.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9ae64c] to-[#78be32] flex items-center justify-center font-bold text-[#05080a] text-lg">
                      {currentItem.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {currentItem.name}
                      </h4>
                      <p className="text-xs text-[#9cb1a6]">
                        {currentItem.role}
                        {currentItem.company ? ` • ${currentItem.company}` : ""}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#9ae64c]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Client</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          {activeItems.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {activeItems.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === idx ? "w-8 bg-[#9ae64c]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-white hover:border-[#9ae64c] hover:text-[#9ae64c] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-white hover:border-[#9ae64c] hover:text-[#9ae64c] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
