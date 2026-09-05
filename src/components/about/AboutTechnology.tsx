"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AboutTechnologyData } from "@/lib/types/wordpress";

interface AboutTechnologyProps {
  technology: AboutTechnologyData;
}

/** Official SVG brand vector marks */
function TechLogo({ name }: { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.includes("react")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes("next")) {
    return (
      <svg viewBox="0 0 180 180" className="w-6 h-6" fill="none">
        <circle cx="90" cy="90" fill="#05080a" r="86" stroke="#ffffff" strokeWidth="6" strokeOpacity="0.25" />
        <path
          d="M149.5 157.4L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.1 149.5 157.4Z"
          fill="#ffffff"
        />
        <rect fill="#ffffff" height="72" width="12" x="115" y="54" />
      </svg>
    );
  }

  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path d="M16 3L4.5 9.5V22.5L16 29L27.5 22.5V9.5L16 3Z" stroke="#539e43" strokeWidth="2" strokeLinejoin="round" fill="#539e43" fillOpacity="0.15" />
        <path d="M16 8L22.5 11.8V19.8L16 23.6L9.5 19.8V11.8L16 8Z" stroke="#9ae64c" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalized.includes("n8n")) {
    return (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <circle cx="15" cy="24" r="7" fill="#ea4b71" fillOpacity="0.25" stroke="#ea4b71" strokeWidth="2" />
        <circle cx="33" cy="24" r="7" fill="#ff6d5a" fillOpacity="0.25" stroke="#ff6d5a" strokeWidth="2" />
        <path d="M22 24H26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes("make")) {
    return (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M8 12L20 5L32 12V28L20 35L8 28V12Z" stroke="#8b5cf6" strokeWidth="2" fill="#6d28d9" fillOpacity="0.2" />
        <path d="M14 24L20 14L26 24" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normalized.includes("tagmanager") || normalized.includes("gtm")) {
    return (
      <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
        <path d="M18 5L29 16L18 27L7 16L18 5Z" stroke="#4285f4" strokeWidth="2" fill="#4285f4" fillOpacity="0.2" />
        <circle cx="18" cy="16" r="4.5" fill="#ffffff" stroke="#2460c4" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes("analytic")) {
    return (
      <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
        <rect x="7" y="21" width="5" height="9" rx="2" fill="#f9ab00" />
        <rect x="15.5" y="13" width="5" height="17" rx="2" fill="#e37400" />
        <rect x="24" y="6" width="5" height="24" rx="2" fill="#f9ab00" />
      </svg>
    );
  }

  if (normalized.includes("woo")) {
    return (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <rect x="3" y="6" width="26" height="20" rx="4" fill="#96588a" fillOpacity="0.2" stroke="#96588a" strokeWidth="1.8" />
        <path d="M8 12C9 17 10 19 12 19C14 19 15 15 16 12C17 15 18 19 20 19C22 19 23 17 24 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // WordPress default
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <circle cx="16" cy="16" r="13" stroke="#21759b" strokeWidth="1.8" fill="#21759b" fillOpacity="0.15" />
      <path d="M7 16C7 11 11 7 16 7C21 7 25 11 25 16" stroke="#21759b" strokeWidth="1.2" />
      <path d="M10 12L13.5 22L16 15L18.5 22L22 12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutTechnology({ technology }: AboutTechnologyProps) {
  const shouldReduceMotion = useReducedMotion();

  const eyebrow = technology.eyebrow || "OUR TECHNOLOGY";
  const title = technology.title || "The tools behind the work.";
  const description =
    technology.description ||
    "We use proven technologies and platforms to build flexible digital experiences, automate processes and help businesses grow.";

  const defaultItems = [
    { name: "WordPress", category: "CMS & Web Platform", iconKey: "wordpress" },
    { name: "WooCommerce", category: "E-Commerce Engines", iconKey: "woocommerce" },
    { name: "React", category: "Modern UI Architecture", iconKey: "react" },
    { name: "Next.js", category: "Production Web Applications", iconKey: "nextjs" },
    { name: "Node.js", category: "Backend Services & APIs", iconKey: "nodejs" },
    { name: "n8n", category: "Workflow Automation", iconKey: "n8n" },
    { name: "Make", category: "Integration Ecosystems", iconKey: "make" },
    { name: "Google Analytics", category: "Data & Conversion Insights", iconKey: "analytics" },
    { name: "Google Tag Manager", category: "Measurement & Event Tracking", iconKey: "gtm" },
  ];

  const items =
    technology.items && technology.items.length >= 9
      ? technology.items
      : defaultItems;

  return (
    <section className="py-24 relative overflow-hidden bg-[#030608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-4 text-[11px] font-bold text-[#9ae64c] tracking-[0.2em] uppercase font-mono">
            <span className="w-3 h-[2px] bg-[#9ae64c] inline-block rounded-full" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            {title}
          </h2>
          <p className="text-base text-[#9cb1a6] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Minimal, Balanced 3x3 Technology Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {items.map((tech, idx) => (
            <motion.div
              key={tech.name || idx}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-5 rounded-xl bg-[#05080a] border border-white/[0.08] hover:border-[#9ae64c]/40 hover:bg-[#060e08]/90 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-[#030608] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:border-[#9ae64c]/40 transition-colors duration-300 shadow-md">
                <TechLogo name={tech.name} />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#9ae64c] transition-colors duration-200 truncate">
                  {tech.name}
                </span>
                <span className="text-xs text-[#8c9e94] truncate">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
