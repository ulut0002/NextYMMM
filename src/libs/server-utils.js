import { defaultMetadataKeys } from "@/constants/constants";

const { getTranslations, getLocale } = require("next-intl/server");

const getAuthorNames = async () => {
  const locale = await getLocale();
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const t = await getTranslations("Common");

  const keys = defaultMetadataKeys.authors || [];
  const authors = [];
  try {
    keys.forEach((keyValue) => {
      const author = tCommon(`${keyValue}`);
      if (!author.startsWith("Common")) {
        authors.push({ name: author });
      }
    });
  } catch (error) {
    console.warn(error);
  }

  return authors;
};

export { getAuthorNames };
