const NAV_MENU_TYPES = {
  LIST: "LIST",
  GRID: "GRID",
};

const TOP_MENU_ITEMS = {
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
  CORP_SOCIAL_RESPONSIBILITY: "CORP_SOCIAL_RESPONSIBILITY",

  // Services menu items
  SERVICES_TAX: "SERVICES_TAX",
  SERVICES_AUDIT: "SERVICES_AUDIT",
  SERVICES_ADVISORY: "SERVICES_ADVISORY",

  //Industries menu items
  INDUSTRIES_FARMS: "INDUSTRIES_FARMS",
  INDUSTRIES_PHARMACEUTICAL: "INDUSTRIES_PHARMACEUTICAL",
  INDUSTRIES_ENERGY: "INDUSTRIES_ENERGY",
  INDUSTRIES_HEALTHCARE: "INDUSTRIES_HEALTHCARE",
  INDUSTRIES_INSURANCE: "INDUSTRIES_INSURANCE",

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

const CORP_DEFAULT_MENU = [
  MENU_ITEMS.CORP_ABOUT_US,
  MENU_ITEMS.CORP_MISSION_VISION,
  MENU_ITEMS.CORP_AUTHORIZATION_DOCUMENTS,
  MENU_ITEMS.CORP_FOUNDING_DOCUMENTS,
  MENU_ITEMS.CORP_LEADERSHIP,
  MENU_ITEMS.CORP_OUR_TEAM,
  MENU_ITEMS.CORP_CAREERS,
  MENU_ITEMS.CORP_GET_QUOTE,
  MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY,
];

const SERVICES_DEFAULT_MENU = [
  MENU_ITEMS.SERVICES_TAX,
  MENU_ITEMS.SERVICES_AUDIT,
  MENU_ITEMS.SERVICES_ADVISORY,
];

const INDUSTRIES_DEFAULT_MENU = [
  MENU_ITEMS.INDUSTRIES_ENERGY,
  MENU_ITEMS.INDUSTRIES_FARMS,
  MENU_ITEMS.INDUSTRIES_HEALTHCARE,
  MENU_ITEMS.INDUSTRIES_INSURANCE,
  MENU_ITEMS.INDUSTRIES_PHARMACEUTICAL,
];

export {
  TOP_MENU_ITEMS,
  NAV_MENU_TYPES,
  MENU_ITEMS,
  CORP_DEFAULT_MENU,
  SERVICES_DEFAULT_MENU,
  INDUSTRIES_DEFAULT_MENU,
};
