"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Users2, HeartHandshake, Sparkles } from "lucide-react";
import { AboutCollaborationData } from "@/lib/types/wordpress";

interface AboutCollaborationProps {
  collaboration: AboutCollaborationData;
}

export function AboutCollaboration({ collaboration }: AboutCollaborationProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = collaboration.eyebrow || "OUR PEOPLE";
  const title =
    collaboration.title ||
    "Behind every digital solution are people who understand the problem.";
  const text =
    collaboration.text ||
    "We believe the best digital work is built on direct communication, deep empathy for end users, and craftsman-level care in execution. When you work with us, you partner with engineers and strategists who genuinely care about your outcomes.";

  return (
    <section className="py-24 relative overflow-hidden bg-[#030608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-card border border-white/[0.1] p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-2xl">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#9ae64c]/[0.04] rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Human Narrative */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
                <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed mb-8">
                {text}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-white/[0.08] w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Dedicated Senior Talent
                    </span>
                    <span className="text-xs text-[#8c9e94]">
                      No outsourced layers
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9ae64c]/10 border border-[#9ae64c]/20 flex items-center justify-center text-[#9ae64c] shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Direct Collaboration
                    </span>
                    <span className="text-xs text-[#8c9e94]">
                      Transparent communication
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Realistic Workspace Collaboration Photograph */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-white/[0.12] shadow-2xl">
                <Image
                  src={
                    collaboration.imageUrl ||
                    "/images/digitalwebstudio-workspace-collaboration.webp"
                  }
                  alt={
                    collaboration.imageAlt ||
                    "DigitalWebStudio team collaborating on digital system architecture"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030608]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
