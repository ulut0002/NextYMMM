import { useTranslations } from "next-intl";

export default function layout({ children }) {
  const t = useTranslations(""); // never remove this

  return children;
}
