import { MetadataRoute } from "next";
import { getCaseStudiesPageData, FALLBACK_CASE_STUDIES_ARCHIVE_DATA } from "@/lib/graphql/client";

export const revalidate = 3600; // Revalidate sitemap every hour or on-demand

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/vibe-code-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/chatbot-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/api-integration`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  let caseStudies = FALLBACK_CASE_STUDIES_ARCHIVE_DATA.items;
  try {
    const data = await getCaseStudiesPageData();
    if (data?.items && data.items.length > 0) {
      caseStudies = data.items;
    }
  } catch {
    // Fallback to static items if backend is unreachable
  }

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}

