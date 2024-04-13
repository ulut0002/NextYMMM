import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["tr", "en"];

export default getRequestConfig(async ({ locale = {} }) => {
  // Validate that the incoming `locale` parameter is valid

  // if (!locale) notFound();

  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});