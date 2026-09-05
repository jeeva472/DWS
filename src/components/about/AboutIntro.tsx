"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Target, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { AboutIntroData } from "@/lib/types/wordpress";

interface AboutIntroProps {
  intro: AboutIntroData;
}

export function AboutIntro({ intro }: AboutIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = intro.eyebrow || "WHO WE ARE";
  const title = intro.title || "Technology should solve real problems.";

  const highlights = [
    {
      icon: Target,
      title: "Outcome-Driven Engineering",
      desc: "Every line of code and user interface is built around clear business metrics, not vanity features.",
    },
    {
      icon: Layers,
      title: "Full-Stack Strategy & Execution",
      desc: "Strategy, web development, automated workflows, and digital marketing unified under one team.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Technical Viability",
      desc: "Clean, maintainable architectures that can smoothly evolve as your company scales.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#05080a] border-y border-white/[0.06]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#9ae64c]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================================================================= */}
          {/* Left Column: Image with Glass Frame & Stat Tag                     */}
          {/* ================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card border border-white/[0.12] shadow-2xl">
              <Image
                src={intro.imageUrl || "/images/web-development-team-engineering.webp"}
                alt={intro.imageAlt || "Software developer working on practical digital systems"}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080a]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Quote / Philosophy Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#030608]/90 border border-white/[0.1] backdrop-blur-md">
                <p className="text-xs text-white/90 font-medium italic">
                  &ldquo;Useful, scalable, and focused on outcomes from day one.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* Right Column: Editorial Copy & 3 Highlights                        */}
          {/* ================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
              <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
              <span>{eyebrow}</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              {title}
            </h2>

            {/* Narrative Content with contextual links */}
            <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
              We work with businesses to design, build and improve digital experiences that are useful, scalable and focused on outcomes. From custom{" "}
              <Link href="/services/web-development" className="text-white hover:text-[#9ae64c] underline underline-offset-4 decoration-[#9ae64c]/40 font-medium transition-colors">
                Next.js web development
              </Link>{" "}
              and{" "}
              <Link href="/services/seo" className="text-white hover:text-[#9ae64c] underline underline-offset-4 decoration-[#9ae64c]/40 font-medium transition-colors">
                technical SEO
              </Link>{" "}
              to{" "}
              <Link href="/services/ai-automation" className="text-white hover:text-[#9ae64c] underline underline-offset-4 decoration-[#9ae64c]/40 font-medium transition-colors">
                intelligent AI automation
              </Link>{" "}
              and{" "}
              <Link href="/services/api-integration" className="text-white hover:text-[#9ae64c] underline underline-offset-4 decoration-[#9ae64c]/40 font-medium transition-colors">
                API integrations
              </Link>
              , we bring strategy and implementation together under one roof.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#030608]/60 border border-white/[0.08] hover:border-[#9ae64c]/40 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-3">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-[#8c9e94] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
