import { Metadata } from "next";
import { getHomepageData } from "@/lib/graphql/client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DigitalGrowthSystemSection } from "@/components/home/DigitalGrowthSystemSection";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ContactCTA } from "@/components/home/ContactCTA";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://digitalwebstudio.in").replace(/\/+$/, "");
  const title = "Digital Growth System — From Traffic to Leads to Customers | DigitalWebStudio";
  const description =
    "Explore the DigitalWebStudio Digital Growth System: A connected 10-stage ecosystem uniting SEO, websites, AI lead qualification, CRM synchronization, workflow automation, and analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/digital-growth-system`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/digital-growth-system`,
      siteName: "DigitalWebStudio",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
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
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
}

export default async function DigitalGrowthSystemPage() {
  const data = await getHomepageData();

  return (
    <div className="min-h-screen bg-[#030608] text-[#f5f8f6] selection:bg-[#9ae64c]/30 selection:text-white relative">
      <Navbar
        siteLogo={data.siteLogo}
        globalSettings={data.globalSettings}
        menus={data.menus}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Digital Growth System", href: "/digital-growth-system", current: true },
        ]}
      />

      <main>
        <DigitalGrowthSystemSection isStandalonePage={true} />

        <RelatedServices
          currentSlug="digital-growth-system"
          customHeading="Connected Capabilities of the Growth System"
          customDescription="Implement individual components today or connect the complete end-to-end digital growth pipeline."
        />

        {data.page?.homepageData?.contactCta && (
          <ContactCTA
            contactCta={data.page.homepageData.contactCta}
            globalSettings={data.globalSettings}
          />
        )}
      </main>

      <Footer siteLogo={data.siteLogo} globalSettings={data.globalSettings} />
    </div>
  );
}
