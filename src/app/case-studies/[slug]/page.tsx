import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudiesPageData, getSingleCaseStudyData } from "@/lib/graphql/client";
import { CaseStudyDetailView } from "@/components/case-studies/CaseStudyDetailView";

export const revalidate = 60; // Next.js ISR: Revalidate every 60s or on-demand

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const data = await getCaseStudiesPageData();
  return data.items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getSingleCaseStudyData(resolvedParams.slug);

  if (!data) {
    return {
      title: "Case Study Not Found | DigitalWebStudio",
    };
  }

  const study = data.caseStudy;
  const siteTitle = data.generalSettings?.title || "DigitalWebStudio";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");

  const title = `${study.title} | Case Study | ${siteTitle}`;
  const description = study.summary;
  const canonical = `${siteUrl}/case-studies/${study.slug}`;
  const ogImage = study.imageUrl
    ? `${siteUrl}${study.imageUrl}`
    : `${siteUrl}/images/software-development-team.webp`;

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
          alt: study.title,
        },
      ],
      type: "article",
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

export default async function SingleCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = await getSingleCaseStudyData(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return <CaseStudyDetailView data={data} />;
}
