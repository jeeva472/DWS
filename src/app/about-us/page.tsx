import { Metadata } from "next";
import { getAboutPageData } from "@/lib/graphql/client";
import { AboutClientView } from "@/components/about/AboutClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or immediately on webhook

function normalizeToFrontendUrl(url?: string, fallbackPath = "/about-us"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl).replace(/\/+$/, "");
}

/**
 * Dynamic SEO metadata powered directly by Yoast SEO from WordPress via GraphQL.
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPageData();
  const seo = data.page?.seo;
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title =
    seo?.title ||
    `About Us | ${siteTitle} — AI Automation, SEO & Digital Systems`;
  const description =
    seo?.metaDesc ||
    data.generalSettings?.description ||
    "Learn about DigitalWebStudio's engineering philosophy, team expertise, and commitment to building scalable AI automations, technical SEO systems, and modern web applications.";

  const ogImage =
    seo?.opengraphImage && !seo.opengraphImage.includes("localhost")
      ? seo.opengraphImage
      : `${siteUrl}/images/digitalwebstudio-development-team.webp`;

  const canonical = normalizeToFrontendUrl(seo?.canonical, "/about-us");
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
      url: normalizeToFrontendUrl(seo?.opengraphUrl, "/about-us"),
      siteName: seo?.opengraphSiteName || siteTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
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

export default async function AboutUsPage() {
  const data = await getAboutPageData();
  return <AboutClientView data={data} />;
}
