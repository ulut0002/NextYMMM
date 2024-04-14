import { metadataPages, metadataSetup } from "@/config/metadataSetup";
import {
  defaultBasicMetadata,
  defaultMetadataKeys,
} from "@/constants/constants";

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

const getPageMetadata = async (payload) => {
  const { page } = payload;
  if (!page) {
    console.warn(`getPageMetadata failed. Invalid page id`);
    return undefined;
  }

  // must exist in the list of pages
  if (!metadataPages[page]) {
    console.warn(`getPageMetadata failed for ${page}`);
    return undefined;
  }

  const pageData = metadataSetup["pages"][page] || null;
  if (!pageData) {
    console.warn(
      `getPageMetadata failed. Relevant page setup not found for ${page}`
    );
    return undefined;
  }

  const nsDefault = metadataSetup.default.ns || null;
  const pageSetup = metadataSetup.pages[page] || null;
  if (!pageSetup) {
    console.warn(`pageSetup failed. Relevant page setup not found for ${page}`);
    return;
  }

  const nsPage = pageSetup.ns || null;

  let returnObj = { ...defaultBasicMetadata };

  if (nsDefault) {
    const tDefault = await getTranslations(nsDefault);
    returnObj = {
      ...returnObj,
      generator: tDefault("generator"),
      creator: tDefault("creator"),
      publisher: tDefault("publisher"),
      applicationName: tDefault("applicationName"),
      keywords: tDefault("keywords"),
    };
  }

  if (nsPage) {
    const tPage = await getTranslations(nsPage);
    returnObj = {
      ...returnObj,
      title: tPage(metadataSetup.fields.title),
      description: tPage(metadataSetup.fields.description),
      keywords: tPage(metadataSetup.fields.keywords),
    };
  }

  if (pageSetup.includeAuthors) {
    const authors = await getAuthorNames();
    returnObj = { ...returnObj, authors: authors };
  }

  return returnObj;
};

export { getAuthorNames, getPageMetadata };
