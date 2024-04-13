// "use client";

import { Inter, IBM_Plex_Sans, Open_Sans } from "next/font/google";

import Header from "@/components/header/Header";
import "../../styles/globals.css";
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

export const metadata = {
  title: "Create Next App",
  description: "Tailwind Mega Menu",
};

const i18nNamespaces = ["home", "common"];

export default async function RootLayout({ children, params: { locale } }) {
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
