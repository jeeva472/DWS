import { Metadata } from "next";
import { getContactPageData } from "@/lib/graphql/client";
import { ContactClientView } from "@/components/contact/ContactClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

function normalizeToFrontendUrl(url?: string, fallbackPath = "/contact"): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  if (!url || url === "/" || url.includes("localhost/digitalwebstudio")) {
    return `${siteUrl}${fallbackPath}`;
  }
  return url.replace(/^https?:\/\/[^\/]+(\/digitalwebstudio)?/i, siteUrl).replace(/\/+$/, "");
}

/**
 * Dynamic SEO metadata for Contact Page
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactPageData();
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  const seo = data.page?.seo;

  const title = seo?.title || `Contact Us | Technical Strategy Consultation | ${siteTitle}`;
  const description =
    seo?.metaDesc ||
    "Get in touch with DigitalWebStudio for AI automation, SEO strategy, custom Next.js web development, and digital growth consulting.";

  const canonical = seo?.canonical ? normalizeToFrontendUrl(seo.canonical, "/contact") : normalizeToFrontendUrl(undefined, "/contact");
  const ogImage = seo?.opengraphImage || `${siteUrl}/images/software-development-team.webp`;

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

export default async function ContactPage() {
  const data = await getContactPageData();
  return <ContactClientView data={data} />;
}
