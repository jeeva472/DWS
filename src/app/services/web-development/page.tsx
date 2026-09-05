import { Metadata } from "next";
import { getHomepageData } from "@/lib/graphql/client";
import { WebDevelopmentClientView } from "@/components/services/web-development/WebDevelopmentClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

function normalizeToFrontendUrl(url?: string, fallbackPath = "/services/web-development"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl).replace(/\/+$/, "");
}

/**
 * Dynamic SEO metadata for Web Development Services
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title = `Web Development & Next.js Architecture | ${siteTitle}`;
  const description =
    "Custom Next.js web development, headless CMS architecture, Core Web Vitals optimization, and high-performance frontend engineering.";

  const ogImage = `${siteUrl}/images/web-development-team-engineering.webp`;
  const canonical = normalizeToFrontendUrl(undefined, "/services/web-development");

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WebDevelopmentPage() {
  const data = await getHomepageData();
  return <WebDevelopmentClientView data={data} />;
}
