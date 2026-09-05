import { Metadata } from "next";
import { getCaseStudiesPageData } from "@/lib/graphql/client";
import { CaseStudiesListClient } from "@/components/case-studies/CaseStudiesListClient";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

function normalizeToFrontendUrl(url?: string, fallbackPath = "/case-studies"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl).replace(/\/+$/, "");
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCaseStudiesPageData();
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title = `Case Studies & Verified Client Results | ${siteTitle}`;
  const description =
    "Explore how we use AI automation, SEO architecture, custom development, and digital strategy to solve practical business challenges and deliver measurable ROI.";

  const ogImage = `${siteUrl}/images/software-development-team.webp`;
  const canonical = normalizeToFrontendUrl(undefined, "/case-studies");

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

export default async function CaseStudiesArchivePage() {
  const data = await getCaseStudiesPageData();
  return <CaseStudiesListClient data={data} />;
}
