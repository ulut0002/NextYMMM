import { languages } from "../appConfig";

const TOP_MENU = {
  CORPORATE: "CORPORATE",
  SERVICES: "SERVICES",
  INDUSTRIES: "INDUSTRIES",
  ANNOUNCEMENTS: "ANNOUNCEMENTS",
  PRACTICAL_INFORMATION: "PRACTICAL_INFORMATION",
  CONTACT_US: "CONTACT_US",
};

const MENU_ITEMS = {
  // Corp menu items
  CORP_ABOUT_US: "CORP_ABOUT_US",
  CORP_MISSION_VISION: "CORP_MISSION_VISION",
  CORP_LEADERSHIP: "CORP_LEADERSHIP",
  CORP_OUR_TEAM: "CORP_OUR_TEAM",
  CORP_AUTHORIZATION_DOCUMENTS: "CORP_AUTHORIZATION_DOCUMENTS",
  CORP_FOUNDING_DOCUMENTS: "CORP_FOUNDING_DOCUMENTS",
  CORP_CAREERS: "CORP_CAREERS",
  CORP_GET_QUOTE: "CORP_GET_QUOTE",

  // Services menu items
  SERVICES_TAX: "SERVICES_TAX",
  SERVICES_AUDIT: "SERVICES_AUDIT",
  SERVICES_ADVISORY: "SERVICES_ADVISORY",

  //Industries menu items
  INDUSTRIES_NUM1: "INDUSTRIES_NUM1",
  INDUSTRIES_NUM2: "INDUSTRIES_NUM2",
  INDUSTRIES_NUM3: "INDUSTRIES_NUM3",

  //Announcements
  ANNOUNCEMENTS_NEWS: "ANNOUNCEMENTS_NEWS",
  ANNOUNCEMENTS_PUBLICATIONS: "ANNOUNCEMENTS_PUBLICATIONS",
  ANNOUNCEMENTS_PRACTICAL_INFORMATION: "ANNOUNCEMENTS_PRACTICAL_INFORMATION",

  //Practical info
  PRACTICAL_INFORMATION_CALCULATORS: "PRACTICAL_INFORMATION_CALCULATORS",

  //Contact us
  CONTACT_US_SUBSCRIBE: "CONTACT_US_SUBSCRIBE",
  CONTACT_US_OUR_LOCATION: "CONTACT_US_OUR_LOCATION",
};

const NAV_MENU_TYPES = {
  LIST: "LIST",
  GRID: "GRID",
  GRID_2: "GRID_2",
};

const turkishMenu = {
  lang: languages.tr,
  nav: [
    {
      code: CORPORATE,
      type: NAV_MENU_TYPES.GRID,
      content: [
        {
          items: [
            CORP_ABOUT_US,
            CORP_MISSION_VISION,
            CORP_AUTHORIZATION_DOCUMENTS,
            CORP_FOUNDING_DOCUMENTS,
            CORP_LEADERSHIP,
            CORP_OUR_TEAM,
            CORP_CAREERS,
            CORP_GET_QUOTE,
          ],
        },
      ],
    },
    //services menu
    {
      code: SERVICES,
      type: NAV_MENU_TYPES.GRID,
      content: [
        {
          items: [SERVICES_TAX, SERVICES_AUDIT, SERVICES_ADVISORY],
        },
      ],
    },
  ],
};
const englishMenu = {
  lang: languages.en,
};

const arabicMenu = {
  lang: languages.ar,
};

const navMenuSetup = [];
const allLanguages = [];
allLanguages.push(turkishMenu);
allLanguages.push(englishMenu);
allLanguages.push(arabicMenu);

Object.keys(languages).forEach((key) => {
  allLanguages.forEach((item) => {
    if (item.lang === key) {
      if (item.lang.enabled) {
        navMenuSetup.push(item);
      }
    }
  });
});

export { NAV_MENU_TYPES, navMenuSetup };
