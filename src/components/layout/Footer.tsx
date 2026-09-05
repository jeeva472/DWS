"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteLogo, GlobalSettings } from "@/lib/types/wordpress";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

interface FooterProps {
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
}

export function Footer({ siteLogo, globalSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyright =
    globalSettings?.copyrightText?.replace("{year}", currentYear.toString()) ||
    `© ${currentYear} digitalwebstudio. All Rights Reserved.`;

  const social = globalSettings?.social;

  return (
    <footer className="relative bg-[#040608] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Column 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block" aria-label="DigitalWebStudio Home">
              <div className="relative h-12 w-[270px] flex items-center">
                <Image
                  src={
                    siteLogo?.url && !siteLogo.url.includes("localhost/digitalwebstudio")
                      ? siteLogo.url
                      : "/images/logo-icon.webp"
                  }
                  alt={siteLogo?.altText || "DigitalWebStudio Logo"}
                  width={siteLogo?.width ? siteLogo.width + 50 : 270}
                  height={siteLogo?.height ? siteLogo.height + 15 : 75}
                  className="object-contain h-full w-auto"
                  unoptimized
                />
              </div>
            </Link>

            <p className="text-sm text-[#9cb1a6] leading-relaxed max-w-sm">
              {globalSettings?.footerDescription ||
                "We help businesses grow and operate smarter through AI automation, SEO and modern digital systems."}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {social?.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {social?.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/40 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              )}
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/40 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {social?.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/40 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {social?.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9cb1a6] hover:text-[#9ae64c] hover:border-[#9ae64c]/40 transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Capabilities (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>AI Automation Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>Search Engine Optimization (SEO)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>Digital Marketing &amp; Growth</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vibe-code-development"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>Vibe Code Rapid Prototyping</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chatbot-development"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>AI Chatbot Development</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/api-integration"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>API Integration &amp; Architecture</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors flex items-center gap-1.5"
                >
                  <span>Modern Web Development</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Work (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about-us" className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#9cb1a6] hover:text-[#9ae64c] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-3">
              {globalSettings?.phone && (
                <a
                  href={`tel:${globalSettings.phone.replace(/[^+\d]/g, "")}`}
                  onClick={() => trackPhoneClick(globalSettings.phone || "+916383088993")}
                  className="flex items-start gap-2 text-xs text-[#9cb1a6] hover:text-[#9ae64c] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9ae64c] shrink-0 mt-0.5" />
                  <span>{globalSettings.phone}</span>
                </a>
              )}

              {globalSettings?.email && (
                <a
                  href={`mailto:${globalSettings.email}`}
                  onClick={() => trackEmailClick(globalSettings.email || "contact@digitalwebstudio.in")}
                  className="flex items-start gap-2 text-xs text-[#9cb1a6] hover:text-[#9ae64c] transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9ae64c] shrink-0 mt-0.5" />
                  <span className="truncate">{globalSettings.email}</span>
                </a>
              )}

              {globalSettings?.address && (
                <div className="flex items-start gap-2 text-xs text-[#9cb1a6]">
                  <MapPin className="w-3.5 h-3.5 text-[#9ae64c] shrink-0 mt-0.5" />
                  <span>{globalSettings.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9cb1a6]">
          <p>{copyright}</p>

          <div className="flex items-center gap-6">
            <Link
              href={(globalSettings?.privacyPolicyUrl || "/privacy-policy").replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, "") || "/privacy-policy"}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={(globalSettings?.termsServiceUrl || "/terms-of-service").replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, "") || "/terms-of-service"}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-[#9ae64c] flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c] animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
