import { Metadata } from "next";
import { getWebDevelopmentPageData } from "@/lib/graphql/client";
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
  const data = await getWebDevelopmentPageData();
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  const seo = data.page?.seo;

  const title = seo?.title || `Web Development & Next.js Architecture | ${siteTitle}`;
  const description =
    seo?.metaDesc ||
    "Custom Next.js web development, headless CMS architecture, Core Web Vitals optimization, and high-performance frontend engineering.";

  const ogImage = seo?.opengraphImage || `${siteUrl}/images/web-development-team-engineering.webp`;
  const canonical = seo?.canonical ? normalizeToFrontendUrl(seo.canonical, "/services/web-development") : normalizeToFrontendUrl(undefined, "/services/web-development");

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
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
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: [seo?.twitterImage || ogImage],
    },
    robots: {
      index: seo?.metaRobotsNoindex !== "noindex",
      follow: seo?.metaRobotsNofollow !== "nofollow",
    },
  };
}

export default async function WebDevelopmentPage() {
  const data = await getWebDevelopmentPageData();
  return <WebDevelopmentClientView data={data} />;
}
