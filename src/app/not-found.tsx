import { Metadata } from "next";
import { getHomepageData } from "@/lib/graphql/client";
import { NotFoundClientView } from "@/components/not-found/NotFoundClientView";

export const metadata: Metadata = {
  title: "404 - Page Not Found | DigitalWebStudio",
  description:
    "The page you are looking for does not exist or has been moved. Explore DigitalWebStudio services, case studies, or contact our team.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function NotFound() {
  const data = await getHomepageData();
  return <NotFoundClientView data={data} />;
}
