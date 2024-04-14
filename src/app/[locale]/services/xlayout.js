import Head from "next/head";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <React.Fragment>
      <Head></Head>
      {children}
    </React.Fragment>
  );
}
