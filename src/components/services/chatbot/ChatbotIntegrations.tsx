"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Database, MessageSquare, Send, Globe, Zap, Sparkles } from "lucide-react";

interface ChatbotIntegrationsProps {
  integrations?: {
    eyebrow?: string;
    title: string;
    description: string;
  };
}

const ECOSYSTEM_TOOLS = [
  { name: "HubSpot / Salesforce", desc: "Instant CRM contact creation & deal tagging", icon: Database },
  { name: "WhatsApp Business API", desc: "Automated customer support & inquiries", icon: Send },
  { name: "Slack & Microsoft Teams", desc: "Internal team notifications & live handover", icon: MessageSquare },
  { name: "Next.js & WordPress Embeds", desc: "Lightweight, responsive floating web chat", icon: Globe },
];

export function ChatbotIntegrations({ integrations }: ChatbotIntegrationsProps) {
  const shouldReduceMotion = useReducedMotion();
  const eyebrow = integrations?.eyebrow || "CONNECTED ECOSYSTEM";
  const title =
    integrations?.title || "Connected to your existing business tools.";
  const description =
    integrations?.description ||
    "Our chatbots do not live in a vacuum. They sync data directly with your CRM, databases, and notifications.";

  return (
    <section className="py-24 sm:py-32 bg-[#030608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-semibold tracking-wider text-[#9ae64c] uppercase mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-[#9ae64c]" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9cb1a6] leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_TOOLS.map((tool, index) => {
            const IconComponent = tool.icon;

            return (
              <motion.div
                key={tool.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-7 rounded-2xl bg-[#060a0d] border border-white/[0.08] hover:border-[#9ae64c]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] mb-6 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#9ae64c] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9cb1a6] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-[#556960] font-mono flex items-center justify-between">
                  <span>Integration</span>
                  <span className="text-[#9ae64c]">Native API</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
