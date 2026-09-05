import { Metadata } from "next";
import { getHomepageData } from "@/lib/graphql/client";
import { HomeClientView } from "@/components/home/HomeClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or immediately on webhook

function normalizeToFrontendUrl(url?: string, fallbackPath = "/"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return fallbackPath === "/" ? siteUrl : `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl);
}

/**
 * Dynamic SEO generation powered directly by Yoast SEO from WordPress via GraphQL.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  const seo = data.page?.seo;
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title =
    seo?.title ||
    `AI Automation, SEO & Digital Growth Systems | ${siteTitle}`;
  const description =
    seo?.metaDesc ||
    data.generalSettings?.description ||
    "DigitalWebStudio helps businesses scale and operate smarter through custom AI automation workflows, technical SEO architecture, and modern digital systems.";

  const ogImage =
    seo?.opengraphImage && !seo.opengraphImage.includes("localhost")
      ? seo.opengraphImage
      : `${siteUrl}/og-image.jpg`;

  const canonical = normalizeToFrontendUrl(seo?.canonical, "/");
  const noindex = seo?.metaRobotsNoindex === "noindex";
  const nofollow = seo?.metaRobotsNofollow === "nofollow";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
      url: normalizeToFrontendUrl(seo?.opengraphUrl, "/"),
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

export default async function HomePage() {
  const data = await getHomepageData();
  return <HomeClientView data={data} />;
}
