import { Inter, IBM_Plex_Sans, Open_Sans } from "next/font/google";

import Header from "@/components/header/Header";

import "../../styles/globals.css";
import React from "react";
import { getFormatter, getTranslations } from "next-intl/server";
import { createMetadata } from "@/libs/utils";
import {
  defaultBasicMetadata,
  defaultMetadataKeys,
} from "@/constants/constants";
import { useFormatter } from "next-intl";
import { getAuthorNames, getPageMetadata } from "@/libs/server-utils";
import { metadataPages } from "@/config/metadataSetup";

//main font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["variable"],
});

export async function generateMetadata({ params: { locale } }) {
  const metadata = await getPageMetadata({ page: metadataPages.home });

  return metadata;
}

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html
      lang={locale}
      className={`h-full ${ibmPlexSans.className} ${inter.className} ${openSans.className} font-sans`}
    >
      <body
        className={`${inter.className} antialiased bg-no-repeat text-black container mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

// <head>{meta}</head>
