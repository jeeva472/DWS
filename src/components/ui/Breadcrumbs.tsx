"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in"
  ).replace(/\/+$/, "");

  // Build JSON-LD BreadcrumbList structured schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4 relative z-20"
    >
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#7d9287]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1 || item.current;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {idx === 0 ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-[#9cb1a6] hover:text-[#9ae64c] transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              ) : isLast ? (
                <span className="text-[#9ae64c] font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#9cb1a6] hover:text-[#9ae64c] transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ChevronRight className="w-3 h-3 text-[#556960] shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
