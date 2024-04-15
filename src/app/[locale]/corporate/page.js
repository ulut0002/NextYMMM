import { metadataPages } from "@/config/metadataSetup";
import CorporatePage from "@/containers/corporate-page";
import { getPageMetadata } from "@/libs/server-utils";

export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getPageMetadata({ page: metadataPages.corporate });
  return metadata;
}
export default function Page() {
  return <CorporatePage />;
}
