import React from "react";

import { getPageMetadata } from "@/libs/server-utils";
import { metadataPages } from "@/config/metadataSetup";
import ServicesPage from "@/containers/services-page";

export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getPageMetadata({ page: metadataPages.services });
  return metadata;
}

export default function OurServicesPage() {
  return <ServicesPage />;
}
