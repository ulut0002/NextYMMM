import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function ServicesPage() {
  const t = useTranslations("Common"); // never remove this
  return <div>{t("Yes")}</div>;
}
