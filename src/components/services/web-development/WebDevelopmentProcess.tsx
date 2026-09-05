"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Compass, Code2, ShieldCheck, Rocket } from "lucide-react";

export function WebDevelopmentProcess() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Technical Discovery & Architecture",
      description:
        "We dissect your business requirements, define data schemas, select the optimal tech stack, and structure the frontend/backend component hierarchy.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Type-Safe Modular Development",
      description:
        "We build clean, maintainable Next.js components with TypeScript strict mode, responsive design systems, and robust API endpoints.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Performance & Security Audits",
      description:
        "Every page is benchmarked for Core Web Vitals, cross-browser compatibility, JSON-LD structured data validation, and OWASP security practices.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Edge Deployment & Continuous Scaling",
      description:
        "Automated CI/CD deployment to Vercel/AWS Edge networks with continuous monitoring, automated backups, and 99.9% uptime guarantees.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#030608] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            A Transparent, Engineering-First Delivery Process
          </h2>
          <p className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed">
            From initial wireframes to production deployment, we maintain rigorous quality standards at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-[#060b0e] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[#9ae64c]/40 group-hover:text-[#9ae64c] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9ae64c]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#9ae64c] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9cb1a6] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
