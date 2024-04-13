"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Header2 from "@/components/header/Header2";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Tailwind Mega Menu",
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 antialiased bg-no-repeat text-white`}
      >
        {/*  <Header /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
