"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AboutHeroData } from "@/lib/types/wordpress";

interface AboutHeroProps {
  hero: AboutHeroData;
  onOpenConsultation?: () => void;
}

export function AboutHero({ hero, onOpenConsultation }: AboutHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = hero.eyebrow || "ABOUT DIGITALWEBSTUDIO";

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#030608]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#9ae64c]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#9ae64c]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================================================================= */}
          {/* Left Column: Editorial Headline & Copy                            */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-20">
            {/* Eyebrow Tag */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5 text-[11px] font-bold text-[#9ae64c] tracking-[0.22em] uppercase font-mono"
            >
              <span className="w-3.5 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Single Main H1 for SEO & Page Identity */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-2xl"
            >
              We Build Digital Experiences That{" "}
              <span className="text-[#9ae64c]">Move Businesses Forward</span>
            </motion.h1>

            {/* Human-Sounding Story Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8 max-w-xl font-normal"
            >
              {hero.description ||
                "DigitalWebStudio helps businesses turn ideas into reliable digital products, websites and growth systems. We combine thoughtful strategy, clean development and digital marketing to create solutions that are built for real business goals."}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_30px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{hero.ctaText || "Let's Work Together"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] border border-white/[0.14] hover:bg-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4 text-[#9ae64c]" />
              </a>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* Right Column: Authentic Engineering Workspace Photography Visual  */}
          {/* ================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] max-w-[500px] lg:max-w-none rounded-2xl overflow-hidden glass-card border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#9ae64c] rounded-tl-md z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#9ae64c] rounded-br-md z-10 pointer-events-none" />

              <Image
                src={hero.imageUrl || "/images/digitalwebstudio-development-team.webp"}
                alt={hero.imageAlt || "DigitalWebStudio engineering team building digital products"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030608]/90 via-[#030608]/20 to-transparent pointer-events-none" />

              {/* Floating Engineering Quality Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-auto sm:max-w-xs p-3 sm:p-3.5 rounded-xl bg-[#060e08]/95 border border-[#9ae64c]/40 backdrop-blur-md shadow-2xl flex items-center gap-3 z-10">
                <div className="w-8 h-8 rounded-lg bg-[#9ae64c]/15 flex items-center justify-center text-[#9ae64c] shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">
                    Production-Grade Quality
                  </p>
                  <p className="text-[11px] text-[#9cb1a6]">
                    Built for performance, scalability & real outcomes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
