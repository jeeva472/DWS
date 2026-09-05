import { Metadata } from "next";
import { getChatbotPageData } from "@/lib/graphql/client";
import { ChatbotClientView } from "@/components/services/chatbot/ChatbotClientView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

function normalizeToFrontendUrl(url?: string, fallbackPath = "/services/chatbot-development"): string {
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
  const data = await getChatbotPageData();
  const seo = data.page?.seo;
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title =
    seo?.title ||
    `AI Chatbot Development & Conversational Systems | ${siteTitle}`;
  const description =
    seo?.metaDesc ||
    data.generalSettings?.description ||
    "We build intelligent chat experiences that help businesses answer questions, capture inquiries, and automate repetitive conversations 24/7.";

  const ogImage =
    seo?.opengraphImage && !seo.opengraphImage.includes("localhost")
      ? seo.opengraphImage
      : `${siteUrl}/images/software-development-team.webp`;

  const canonical = normalizeToFrontendUrl(seo?.canonical, "/services/chatbot-development");
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
      url: normalizeToFrontendUrl(seo?.opengraphUrl, "/services/chatbot-development"),
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

export default async function ChatbotPage() {
  const data = await getChatbotPageData();
  return <ChatbotClientView data={data} />;
}
