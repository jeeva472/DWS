"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  ChevronDown,
  Workflow,
  Search,
  Megaphone,
  Zap,
  Bot,
  Database,
  Code2,
} from "lucide-react";
import { SiteLogo, GlobalSettings, MenuNode } from "@/lib/types/wordpress";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

interface NavbarProps {
  siteLogo?: SiteLogo;
  globalSettings?: GlobalSettings;
  menus?: { nodes: MenuNode[] };
  onOpenConsultation?: () => void;
}

const PRIMARY_SERVICES = [
  {
    name: "AI Automation",
    href: "/services/ai-automation",
    desc: "Workflow automation, LLM logic & pipelines",
    icon: Workflow,
  },
  {
    name: "SEO",
    href: "/services/seo",
    desc: "Technical SEO, Core Web Vitals & organic growth",
    icon: Search,
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "Performance campaigns & GA4 attribution",
    icon: Megaphone,
  },
];

const SUPPORTING_SERVICES = [
  {
    name: "Vibe Code Development",
    href: "/services/vibe-code-development",
    desc: "AI velocity with senior engineering oversight",
    icon: Zap,
  },
  {
    name: "Chatbot Development",
    href: "/services/chatbot-development",
    desc: "24/7 grounded conversational AI assistants",
    icon: Bot,
  },
  {
    name: "API Integration",
    href: "/services/api-integration",
    desc: "CRM, payment & system connectivity",
    icon: Database,
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    desc: "Modern Next.js web platforms & apps",
    icon: Code2,
  },
];

export function Navbar({
  siteLogo,
  globalSettings,
  menus,
  onOpenConsultation,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#05080a]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="DigitalWebStudio Home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ae64c] rounded-lg"
            >
              <div className="relative h-11 sm:h-14 w-56 sm:w-[274px] flex items-center">
                <Image
                  src={
                    siteLogo?.url && !siteLogo.url.includes("localhost/digitalwebstudio")
                      ? siteLogo.url
                      : "/images/logo-icon.webp"
                  }
                  alt={siteLogo?.altText || "DigitalWebStudio Logo"}
                  width={siteLogo?.width ? siteLogo.width + 50 : 270}
                  height={siteLogo?.height ? siteLogo.height + 15 : 75}
                  className="object-contain h-full w-auto filter drop-shadow-md"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-inner relative">
              <Link
                href="/"
                className="px-3.5 py-1.5 text-sm font-medium text-[#9cb1a6] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="px-3.5 py-1.5 text-sm font-medium text-[#9cb1a6] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className="px-3 py-1.5 text-sm font-medium text-[#9cb1a6] hover:text-white transition-colors duration-200 rounded-l-full hover:bg-white/[0.06] flex items-center gap-1"
                  >
                    <span>Services</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    aria-expanded={servicesDropdownOpen}
                    aria-label="Toggle services menu"
                    className="pr-2.5 py-1.5 text-[#9cb1a6] hover:text-[#9ae64c] transition-colors rounded-r-full hover:bg-white/[0.06] cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-[#9ae64c]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] z-50">
                    <div className="p-5 rounded-2xl bg-[#080d11]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl shadow-black/80">
                      {/* Primary Services Group */}
                      <div className="mb-4">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#9ae64c] font-bold mb-2.5 px-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9ae64c]" />
                          Primary Capabilities
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {PRIMARY_SERVICES.map((srv) => {
                            const IconComp = srv.icon;
                            return (
                              <Link
                                key={srv.href}
                                href={srv.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group flex items-start gap-3"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-[#9ae64c]/40 group-hover:bg-[#9ae64c]/10 flex items-center justify-center text-[#9ae64c] shrink-0 transition-colors mt-0.5">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white group-hover:text-[#9ae64c] transition-colors">
                                    {srv.name}
                                  </div>
                                  <div className="text-[11px] text-[#7d9287]">
                                    {srv.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Supporting Services Group */}
                      <div className="pt-3 border-t border-white/[0.06]">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#7d9287] font-bold mb-2.5 px-2">
                          Supporting Capabilities
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {SUPPORTING_SERVICES.map((srv) => (
                            <Link
                              key={srv.href}
                              href={srv.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors group"
                            >
                              <div className="text-xs font-semibold text-white/90 group-hover:text-[#9ae64c] transition-colors">
                                {srv.name}
                              </div>
                              <div className="text-[10px] text-[#7d9287] truncate">
                                {srv.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Link to All Services */}
                      <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between px-2">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs font-mono font-bold text-[#9ae64c] hover:underline flex items-center gap-1.5"
                        >
                          <span>View All 7 Services Overview</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[10px] text-[#556960] font-mono">
                          DigitalWebStudio Stack
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className="px-3.5 py-1.5 text-sm font-medium text-[#9cb1a6] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
              >
                Case Studies
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-1.5 text-sm font-medium text-[#9cb1a6] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              {globalSettings?.phone && (
                <a
                  href={`tel:${globalSettings.phone.replace(/[^+\d]/g, "")}`}
                  onClick={() => trackPhoneClick(globalSettings.phone || "+916383088993")}
                  className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#9cb1a6] hover:text-[#9ae64c] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9ae64c]" />
                  <span>{globalSettings.phone}</span>
                </a>
              )}

              <button
                type="button"
                onClick={onOpenConsultation}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] hover:shadow-[0_0_25px_-3px_rgba(154,230,76,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{globalSettings?.ctaText || "Start a Project"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ae64c]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl md:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0a0f13] border-l border-white/[0.08] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#9ae64c] flex items-center justify-center font-bold text-[#05080a]">
                    <Sparkles className="w-4 h-4 text-[#05080a]" />
                  </div>
                  <span className="font-bold text-white tracking-tight">Navigation</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg bg-white/[0.05] text-[#9cb1a6] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/[0.06] hover:text-[#9ae64c] transition-all flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                </Link>

                <Link
                  href="/about-us"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/[0.06] hover:text-[#9ae64c] transition-all flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-white hover:text-[#9ae64c]"
                    >
                      Services Overview
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1 text-[#9ae64c]"
                      aria-label="Toggle service links"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-[#060a0d] border-t border-white/[0.04]">
                      {[...PRIMARY_SERVICES, ...SUPPORTING_SERVICES].map((srv) => (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs text-[#9cb1a6] hover:text-white hover:bg-white/[0.04]"
                        >
                          {srv.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/[0.06] hover:text-[#9ae64c] transition-all flex items-center justify-between"
                >
                  <span>Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/[0.06] hover:text-[#9ae64c] transition-all flex items-center justify-between"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                </Link>
              </nav>
            </div>

            {/* Bottom Contacts in drawer */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              {globalSettings?.phone && (
                <a
                  href={`tel:${globalSettings.phone.replace(/[^+\d]/g, "")}`}
                  onClick={() => trackPhoneClick(globalSettings.phone || "+916383088993")}
                  className="flex items-center gap-3 text-sm text-[#9cb1a6] hover:text-[#9ae64c]"
                >
                  <Phone className="w-4 h-4 text-[#9ae64c]" />
                  <span>{globalSettings.phone}</span>
                </a>
              )}
              {globalSettings?.email && (
                <a
                  href={`mailto:${globalSettings.email}`}
                  onClick={() => trackEmailClick(globalSettings.email || "contact@digitalwebstudio.in")}
                  className="flex items-center gap-3 text-sm text-[#9cb1a6] hover:text-[#9ae64c]"
                >
                  <Mail className="w-4 h-4 text-[#9ae64c]" />
                  <span>{globalSettings.email}</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-[#05080a] bg-gradient-to-r from-[#b4fa6c] via-[#9ae64c] to-[#78be32] flex items-center justify-center gap-2 shadow-lg shadow-[#9ae64c]/20"
              >
                <span>{globalSettings?.ctaText || "Start a Project"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
