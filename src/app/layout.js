import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
// import { ThemeProvider } from "@material-tailwind/react";
import { PrimeReactProvider } from "primereact/api";

export default async function layout({ children }) {
  // const t = useTranslations(""); // never remove this
  const t = await getTranslations("");
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
