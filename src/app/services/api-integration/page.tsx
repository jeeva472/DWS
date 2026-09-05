import { Metadata } from "next";
import { getAPIIntegrationPageData } from "@/lib/graphql/client";
import { APIIntegrationClientView } from "@/components/services/api-integration/APIIntegrationClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

function normalizeToFrontendUrl(url?: string, fallbackPath = "/services/api-integration"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl).replace(/\/+$/, "");
}

/**
 * Dynamic SEO metadata powered by Yoast SEO from WordPress / fallbacks.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getAPIIntegrationPageData();
  const seo = data.page?.seo;
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title =
    seo?.title ||
    `API Integration & Systems Architecture | ${siteTitle}`;
  const description =
    seo?.metaDesc ||
    data.generalSettings?.description ||
    "We integrate the platforms, APIs, and tools your business relies on so data moves reliably and workflows run without manual bottlenecks.";

  const ogImage =
    seo?.opengraphImage && !seo.opengraphImage.includes("localhost")
      ? seo.opengraphImage
      : `${siteUrl}/images/software-development-team.webp`;

  const canonical = normalizeToFrontendUrl(seo?.canonical, "/services/api-integration");
  const noindex = seo?.metaRobotsNoindex === "noindex";
  const nofollow = seo?.metaRobotsNofollow === "nofollow";

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
      url: normalizeToFrontendUrl(seo?.opengraphUrl, "/services/api-integration"),
      siteName: seo?.opengraphSiteName || siteTitle,
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
      title: seo?.twitterTitle || seo?.opengraphTitle || title,
      description: seo?.twitterDescription || seo?.opengraphDescription || description,
      images: [seo?.twitterImage && !seo.twitterImage.includes("localhost") ? seo.twitterImage : ogImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
    },
  };
}

export default async function APIIntegrationPage() {
  const data = await getAPIIntegrationPageData();
  return <APIIntegrationClientView data={data} />;
}
