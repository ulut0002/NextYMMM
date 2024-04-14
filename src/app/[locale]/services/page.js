import React from "react";

import { useTranslations } from "next-intl";
import { getPageMetadata } from "@/libs/server-utils";
import { metadataPages, metadataSetup } from "@/config/metadataSetup";
import ServicesPage from "@/containers/services-page";

export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getPageMetadata({ page: metadataPages.services });
  return metadata;
}

export default function OurServicesPage() {
  return <ServicesPage />;
}
