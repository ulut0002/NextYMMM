import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function layout({ children }) {
  // const t = useTranslations(""); // never remove this
  const t = await getTranslations("");
  return children;
}
