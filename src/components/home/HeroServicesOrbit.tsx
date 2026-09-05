"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ============================================================================
// 1. OFFICIAL PLATFORM & TECHNOLOGY VECTOR LOGOS
// ============================================================================

/** React Atomic Orbit Logo */
function ReactLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

/** Next.js Stylized N Logo */
function NextjsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" fill="#000000" r="90" />
      </mask>
      <g mask="url(#mask-next)">
        <circle cx="90" cy="90" fill="#05080a" r="90" stroke="#ffffff" strokeWidth="6" strokeOpacity="0.2" />
        <path
          d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
          fill="url(#paint0_linear_next)"
        />
        <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_next" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_next" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Node.js Hexagonal Logo */
function NodejsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <path
        d="M16 3L4.5 9.5V22.5L16 29L27.5 22.5V9.5L16 3Z"
        fill="#539e43"
        fillOpacity="0.15"
        stroke="#539e43"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 8L22.5 11.8V19.8L16 23.6L9.5 19.8V11.8L16 8Z"
        stroke="#9ae64c"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13 14V18L16 20L19 18V14L16 12L13 14Z" fill="#ffffff" />
    </svg>
  );
}

/** Make (Integromat) Logo */
function MakeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path
        d="M8 12L20 5L32 12V28L20 35L8 28V12Z"
        fill="#6d28d9"
        fillOpacity="0.2"
        stroke="#8b5cf6"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 24L20 14L26 24" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="14" r="2.5" fill="#a78bfa" />
      <circle cx="14" cy="24" r="2.2" fill="#8b5cf6" />
      <circle cx="26" cy="24" r="2.2" fill="#8b5cf6" />
    </svg>
  );
}

/** n8n Workflow Automation Logo */
function N8nLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="15" cy="24" r="7" fill="#ea4b71" fillOpacity="0.25" stroke="#ea4b71" strokeWidth="2" />
      <circle cx="15" cy="24" r="2.5" fill="#ffffff" />
      <circle cx="33" cy="24" r="7" fill="#ff6d5a" fillOpacity="0.25" stroke="#ff6d5a" strokeWidth="2" />
      <circle cx="33" cy="24" r="2.5" fill="#ffffff" />
      <path d="M22 24H26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="14" r="2" fill="#ea4b71" />
      <circle cx="24" cy="34" r="2" fill="#ff6d5a" />
      <path d="M19 19L24 14L29 19" stroke="#ea4b71" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M19 29L24 34L29 29" stroke="#ff6d5a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Google Analytics Logo */
function GoogleAnalyticsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none">
      <rect x="7" y="21" width="5" height="9" rx="2.5" fill="#f9ab00" />
      <rect x="15.5" y="13" width="5" height="17" rx="2.5" fill="#e37400" />
      <rect x="24" y="6" width="5" height="24" rx="2.5" fill="#f9ab00" />
      <circle cx="26.5" cy="6" r="2.5" fill="#ffffff" />
    </svg>
  );
}

/** Google Tag Manager Logo */
function GoogleTagManagerLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none">
      <path
        d="M18 5L29 16L18 27L7 16L18 5Z"
        fill="#4285f4"
        fillOpacity="0.2"
        stroke="#4285f4"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="16" r="4.5" fill="#ffffff" stroke="#2460c4" strokeWidth="1.5" />
      <path d="M18 10V13.5M18 18.5V22M12 16H14.5M21.5 16H24" stroke="#4285f4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================================
// 2. PROFESSIONAL SERVICE VECTOR ICONS
// ============================================================================

/** SEO Service Icon */
function SeoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" className="stroke-[#9ae64c]" />
      <path d="M21 21L16.65 16.65" className="stroke-white" />
      <path d="M8 13V11" className="stroke-[#9ae64c]" strokeWidth="1.8" />
      <path d="M11 13V9" className="stroke-white" strokeWidth="1.8" />
      <path d="M14 13V7" className="stroke-[#9ae64c]" strokeWidth="1.8" />
    </svg>
  );
}

/** Web Development Service Icon */
function WebDevIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" className="stroke-[#9ae64c]" />
      <polyline points="8 6 2 12 8 18" className="stroke-[#9ae64c]" />
      <line x1="14" y1="4" x2="10" y2="20" className="stroke-white" />
    </svg>
  );
}

/** Digital Marketing Service Icon */
function DigitalMarketingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" className="stroke-white" />
      <line x1="12" y1="20" x2="12" y2="4" className="stroke-[#9ae64c]" />
      <line x1="6" y1="20" x2="6" y2="14" className="stroke-white" />
      <polyline points="4 8 12 2 20 6" className="stroke-[#9ae64c]" strokeWidth="1.8" />
    </svg>
  );
}

/** AI Automation Service Icon */
function AiAutomationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="#9ae64c" fillOpacity="0.2" className="stroke-[#9ae64c]" />
      <circle cx="19" cy="19" r="2.5" className="stroke-white" fill="#9ae64c" />
      <path d="M14 20H16.5" className="stroke-white" />
      <path d="M19 14V16.5" className="stroke-white" />
    </svg>
  );
}

/** Chatbot Service Icon */
function ChatbotIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V15C20 16.1046 19.1046 17 18 17H8L4 20V6Z" className="stroke-white" fill="#08140c" />
      <circle cx="9" cy="10.5" r="1.5" fill="#9ae64c" />
      <circle cx="15" cy="10.5" r="1.5" fill="#9ae64c" />
      <path d="M10 14H14" className="stroke-[#9ae64c]" strokeWidth="1.5" />
      <line x1="12" y1="4" x2="12" y2="1.5" className="stroke-[#9ae64c]" />
      <circle cx="12" cy="1.5" r="1" fill="#9ae64c" />
    </svg>
  );
}

/** API Integration Service Icon */
function ApiIntegrationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="6" height="12" rx="2" className="stroke-[#9ae64c]" fill="#08140c" />
      <rect x="16" y="6" width="6" height="12" rx="2" className="stroke-[#9ae64c]" fill="#08140c" />
      <line x1="8" y1="12" x2="16" y2="12" className="stroke-white" strokeDasharray="2 2" />
      <circle cx="12" cy="12" r="2.5" fill="#ffffff" className="stroke-[#9ae64c]" strokeWidth="1.5" />
    </svg>
  );
}

// ============================================================================
// 3. MAIN COMPONENT: DUAL-LAYER ORBITAL SYSTEM
// ============================================================================

export function HeroServicesOrbit({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  // Radii for clean geometry and spacious distribution
  const R1 = 142; // Inner Orbit Radius
  const R2 = 232; // Outer Orbit Radius

  // Layer 1 (Inner Orbit): 6 Icons (3 Platforms, 3 Services)
  const innerItems = useMemo(
    () => [
      { id: "react", component: ReactLogo, angle: 0 },
      { id: "webdev", component: WebDevIcon, angle: 60 },
      { id: "n8n", component: N8nLogo, angle: 120 },
      { id: "ai", component: AiAutomationIcon, angle: 180 },
      { id: "make", component: MakeLogo, angle: 240 },
      { id: "api", component: ApiIntegrationIcon, angle: 300 },
    ],
    []
  );

  // Layer 2 (Outer Orbit): 7 Icons (4 Platforms, 3 Services)
  const outerItems = useMemo(
    () => [
      { id: "nextjs", component: NextjsLogo, angle: 25 },
      { id: "seo", component: SeoIcon, angle: 75 },
      { id: "nodejs", component: NodejsLogo, angle: 125 },
      { id: "chatbots", component: ChatbotIcon, angle: 180 },
      { id: "analytics", component: GoogleAnalyticsLogo, angle: 230 },
      { id: "marketing", component: DigitalMarketingIcon, angle: 285 },
      { id: "gtm", component: GoogleTagManagerLogo, angle: 335 },
    ],
    []
  );

  return (
    <div
      className={`relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[640px] aspect-square flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft Ambient Brand Glow Behind Orbital System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] lg:w-[480px] h-[320px] sm:h-[400px] lg:h-[480px] bg-[radial-gradient(circle_at_50%_50%,rgba(154,230,76,0.12)_0%,rgba(20,45,25,0.03)_50%,transparent_75%)] rounded-full blur-[80px] pointer-events-none" />

      {/* SVG Container for Orbital Lines and Traveling Path Light (Zero random dots) */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        <defs>
          <filter id="orbitalCometGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Paths for Smooth Traveling Light */}
          <path id="innerOrbitTrack" d="M 300 158 A 142 142 0 1 1 299.9 158 Z" />
          <path id="outerOrbitTrack" d="M 300 68 A 232 232 0 1 1 299.9 68 Z" />
        </defs>

        {/* Orbit Line 1: Inner (1px clean track) */}
        <circle
          cx="300"
          cy="300"
          r={R1}
          stroke="#9ae64c"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          strokeOpacity="0.35"
        />

        {/* Orbit Line 2: Outer (1px clean track) */}
        <circle
          cx="300"
          cy="300"
          r={R2}
          stroke="#9ae64c"
          strokeWidth="1"
          strokeDasharray="3 10"
          strokeOpacity="0.25"
        />

        {/* Moving Subtle Green Light on Inner Orbit Track (No random dots) */}
        {!shouldReduceMotion && (
          <g filter="url(#orbitalCometGlow)">
            <circle r="2.2" fill="#9ae64c">
              <animateMotion
                dur="22s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#innerOrbitTrack" />
              </animateMotion>
            </circle>
          </g>
        )}

        {/* Moving Subtle Green Light on Outer Orbit Track (Opposite direction, No random dots) */}
        {!shouldReduceMotion && (
          <g filter="url(#orbitalCometGlow)">
            <circle r="2.5" fill="#b4fa6c">
              <animateMotion
                dur="34s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#outerOrbitTrack" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>

      {/* =================================================================== */}
      {/* LAYER 2: OUTER ORBIT LAYER (7 Icons, Counter-Clockwise, 34s)        */}
      {/* =================================================================== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {outerItems.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = Math.round(R2 * Math.cos(rad));
          const y = Math.round(R2 * Math.sin(rad));
          const IconComp = item.component;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Synchronized Counter-Rotation to keep icon 100% upright */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#060e08]/90 border border-white/[0.12] hover:border-[#9ae64c]/60 shadow-[0_4px_24px_rgba(0,0,0,0.7)] flex items-center justify-center text-white backdrop-blur-md relative group transition-colors duration-300"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <IconComp className="w-5 h-5 object-contain" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* =================================================================== */}
      {/* LAYER 1: INNER ORBIT LAYER (6 Icons, Clockwise, 22s)                */}
      {/* =================================================================== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {innerItems.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = Math.round(R1 * Math.cos(rad));
          const y = Math.round(R1 * Math.sin(rad));
          const IconComp = item.component;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Synchronized Counter-Rotation to keep icon 100% upright */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#08150c]/90 border border-[#9ae64c]/30 hover:border-[#9ae64c] shadow-[0_4px_24px_rgba(0,0,0,0.7)] flex items-center justify-center text-white backdrop-blur-md relative group transition-colors duration-300"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <IconComp className="w-5 h-5 object-contain" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* =================================================================== */}
      {/* CENTER: OFFICIAL LOGO ICON WITH GENTLE BREATHING PULSE              */}
      {/* =================================================================== */}
      <motion.div
        className="relative z-20 flex items-center justify-center"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Soft Green Halo Behind Center */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#9ae64c]/20 blur-xl pointer-events-none" />

        {/* Center Container */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#060f08]/95 border border-[#9ae64c]/50 shadow-[0_0_35px_rgba(154,230,76,0.3)] backdrop-blur-xl flex items-center justify-center p-3 sm:p-3.5 relative overflow-hidden">
          {/* Subtle Corner Accent Highlights */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9ae64c] rounded-tl-lg pointer-events-none opacity-80" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#9ae64c] rounded-br-lg pointer-events-none opacity-80" />

          {/* Existing Official DigitalWebStudio Logo Icon */}
          <picture className="w-full h-full flex items-center justify-center relative">
            <source srcSet="/images/logo-icon.webp" type="image/webp" />
            <img
              src="/images/logo-icon.png"
              alt=""
              width={80}
              height={80}
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(154,230,76,0.4)] pointer-events-none select-none"
            />
          </picture>
        </div>
      </motion.div>
    </div>
  );
}
