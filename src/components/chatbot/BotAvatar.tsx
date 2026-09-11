"use client";

import React from "react";

interface BotAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function BotAvatar({
  className = "",
  size = "md",
  animated = true,
}: BotAvatarProps) {
  const sizeMap = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
    xl: "w-11 h-11",
  };

  const finalClass = `${sizeMap[size]} ${className} relative shrink-0`;

  return (
    <div className={finalClass}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(154,230,76,0.35)] overflow-visible select-none"
      >
        <defs>
          {/* Main Chassis Gradient - Sleek Cyber Obsidian */}
          <linearGradient id="botChassis" x1="6" y1="10" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a2e26" />
            <stop offset="50%" stopColor="#0c1613" />
            <stop offset="100%" stopColor="#060c0a" />
          </linearGradient>

          {/* Border Highlight Gradient */}
          <linearGradient id="botChassisStroke" x1="8" y1="12" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b4fa6c" />
            <stop offset="45%" stopColor="#9ae64c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#254d19" stopOpacity="0.4" />
          </linearGradient>

          {/* OLED Screen Visor Gradient */}
          <linearGradient id="botVisor" x1="12" y1="17" x2="36" y2="37" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#030706" />
            <stop offset="100%" stopColor="#07130f" />
          </linearGradient>

          {/* Neon Lime Glow Gradient */}
          <linearGradient id="neonLime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d2ff80" />
            <stop offset="50%" stopColor="#9ae64c" />
            <stop offset="100%" stopColor="#5aa018" />
          </linearGradient>

          {/* Cyan/Green Antenna Pulse */}
          <radialGradient id="antennaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#9ae64c" />
            <stop offset="100%" stopColor="#9ae64c" stopOpacity="0" />
          </radialGradient>

          {/* Visor Glass Reflection */}
          <linearGradient id="visorReflection" x1="14" y1="18" x2="34" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#9ae64c" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Eye Glow Filter */}
          <filter id="eyeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- 1. Antenna Beacon & Signal Rings --- */}
        {animated && (
          <circle
            cx="24"
            cy="5"
            r="4.5"
            className="animate-ping opacity-30 origin-[24px_5px]"
            fill="#9ae64c"
          />
        )}
        {/* Antenna Stem */}
        <path
          d="M24 12V6"
          stroke="url(#neonLime)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Antenna Orb */}
        <circle cx="24" cy="5" r="2.8" fill="url(#neonLime)" />
        <circle cx="23" cy="4" r="1" fill="#ffffff" opacity="0.9" />

        {/* --- 2. Cyber Ear Pods / Audio Nodes --- */}
        {/* Left Ear */}
        <rect
          x="3.5"
          y="21"
          width="4.5"
          height="12"
          rx="2.25"
          fill="#0c1613"
          stroke="url(#botChassisStroke)"
          strokeWidth="1.2"
        />
        <circle cx="5.75" cy="27" r="1.2" fill="#9ae64c" />

        {/* Right Ear */}
        <rect
          x="40"
          y="21"
          width="4.5"
          height="12"
          rx="2.25"
          fill="#0c1613"
          stroke="url(#botChassisStroke)"
          strokeWidth="1.2"
        />
        <circle cx="42.25" cy="27" r="1.2" fill="#9ae64c" />

        {/* --- 3. Main Head Chassis --- */}
        <rect
          x="7"
          y="12"
          width="34"
          height="30"
          rx="9"
          fill="url(#botChassis)"
          stroke="url(#botChassisStroke)"
          strokeWidth="1.6"
        />

        {/* Chassis Top Highlight */}
        <path
          d="M14 13.5H34"
          stroke="#b4fa6c"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />

        {/* --- 4. OLED Dark Visor Screen --- */}
        <rect
          x="11"
          y="17"
          width="26"
          height="20"
          rx="6"
          fill="url(#botVisor)"
          stroke="#9ae64c"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />

        {/* Visor Diagonal Glass Sheen Reflection */}
        <path
          d="M12 21C12 18.7909 13.7909 17 16 17H32C34.2091 17 36 18.7909 36 21V23L12 28V21Z"
          fill="url(#visorReflection)"
        />

        {/* --- 5. Expressive Glowing Eyes --- */}
        <g filter="url(#eyeGlow)">
          {/* Left Eye */}
          <rect
            x="16"
            y="22.5"
            width="4.5"
            height="7"
            rx="2.25"
            fill="url(#neonLime)"
            className={animated ? "animate-[pulse_2.5s_ease-in-out_infinite]" : ""}
          />
          {/* Left Eye Pupil / Glint */}
          <circle cx="17.2" cy="24" r="0.85" fill="#ffffff" />

          {/* Right Eye */}
          <rect
            x="27.5"
            y="22.5"
            width="4.5"
            height="7"
            rx="2.25"
            fill="url(#neonLime)"
            className={animated ? "animate-[pulse_2.5s_ease-in-out_infinite]" : ""}
          />
          {/* Right Eye Pupil / Glint */}
          <circle cx="28.7" cy="24" r="0.85" fill="#ffffff" />
        </g>

        {/* --- 6. Friendly AI Smile / Wave Line --- */}
        <path
          d="M21 32.5C22 33.8 26 33.8 27 32.5"
          stroke="url(#neonLime)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />

        {/* Cute Cheek Glow Dots */}
        <circle cx="14" cy="30" r="1" fill="#9ae64c" opacity="0.35" />
        <circle cx="34" cy="30" r="1" fill="#9ae64c" opacity="0.35" />
      </svg>
    </div>
  );
}
