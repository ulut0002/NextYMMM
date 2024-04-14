import React from "react";

import { createMetadata } from "@/libs/utils";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// export async function generateMetadata({ params }) {
//   return {
//     title: "...",
//   };
// }

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: "X",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

// export default function Page({ params, searchParams }) {}

export default function OurServicesPage() {
  const t = useTranslations("Index");
  // const t = await getTranslations("Index");

  // const metadata = createMetadata({ title: "Something" });

  return (
    <div>
      <div>OurServicesPage</div>
    </div>
  );
}

// <head>{metadata}</head>
