// Enumeration for navigation menu display types
const NAV_MENU_TYPES = {
  LIST: "LIST", // Display the navigation menu as a list
  GRID: "GRID", // Display the navigation menu as a grid
};

// Top-level menu items for the website navigation
const TOP_MENU_ITEMS = {
  CORPORATE: "CORPORATE", // Corporate information and subpages
  SERVICES: "SERVICES", // Services offered by the company
  INDUSTRIES: "INDUSTRIES", // Industries served by the company
  ANNOUNCEMENTS: "ANNOUNCEMENTS", // News and updates related to the company
  PRACTICAL_INFORMATION: "PRACTICAL_INFORMATION", // Useful information and tools
  CONTACT_US: "CONTACT_US", // Contact information and forms
};

// Detailed menu items grouped by category
const MENU_ITEMS = {
  // Corporate submenu items
  CORP_ABOUT_US: "CORP_ABOUT_US", // About the company
  CORP_MISSION_VISION: "CORP_MISSION_VISION", // Mission and vision statements
  CORP_LEADERSHIP: "CORP_LEADERSHIP", // Information on company leadership
  CORP_OUR_TEAM: "CORP_OUR_TEAM", // Team details
  CORP_AUTHORIZATION_DOCUMENTS: "CORP_AUTHORIZATION_DOCUMENTS", // Legal authorization documents
  CORP_FOUNDING_DOCUMENTS: "CORP_FOUNDING_DOCUMENTS", // Foundational documents
  CORP_CAREERS: "CORP_CAREERS", // Career opportunities
  CORP_GET_QUOTE: "CORP_GET_QUOTE", // Quote request form
  CORP_SOCIAL_RESPONSIBILITY: "CORP_SOCIAL_RESPONSIBILITY", // Corporate social responsibility initiatives

  // Services submenu items
  SERVICES_TAX: "SERVICES_TAX", // Tax-related services
  SERVICES_AUDIT: "SERVICES_AUDIT", // Audit services
  SERVICES_ADVISORY: "SERVICES_ADVISORY", // Advisory services

  // Industries submenu items
  INDUSTRIES_FARMS: "INDUSTRIES_FARMS", // Agriculture sector
  INDUSTRIES_PHARMACEUTICAL: "INDUSTRIES_PHARMACEUTICAL", // Pharmaceutical sector
  INDUSTRIES_ENERGY: "INDUSTRIES_ENERGY", // Energy sector
  INDUSTRIES_HEALTHCARE: "INDUSTRIES_HEALTHCARE", // Healthcare sector
  INDUSTRIES_INSURANCE: "INDUSTRIES_INSURANCE", // Insurance sector

  // Announcements submenu items
  ANNOUNCEMENTS_NEWS: "ANNOUNCEMENTS_NEWS", // Latest news
  ANNOUNCEMENTS_PUBLICATIONS: "ANNOUNCEMENTS_PUBLICATIONS", // Publications and articles
  ANNOUNCEMENTS_PRACTICAL_INFORMATION: "ANNOUNCEMENTS_PRACTICAL_INFORMATION", // Practical info announcements

  // Practical information submenu
  PRACTICAL_INFORMATION_CALCULATORS: "PRACTICAL_INFORMATION_CALCULATORS", // Financial calculators

  // Contact us submenu items
  CONTACT_US_SUBSCRIBE: "CONTACT_US_SUBSCRIBE", // Subscription form
  CONTACT_US_OUR_LOCATION: "CONTACT_US_OUR_LOCATION", // Location details
};

// Default corporate menu setup
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

// Default services menu setup
const SERVICES_DEFAULT_MENU = [
  MENU_ITEMS.SERVICES_TAX,
  MENU_ITEMS.SERVICES_AUDIT,
  MENU_ITEMS.SERVICES_ADVISORY,
];

// Default industries menu setup
const INDUSTRIES_DEFAULT_MENU = [
  MENU_ITEMS.INDUSTRIES_ENERGY,
  MENU_ITEMS.INDUSTRIES_FARMS,
  MENU_ITEMS.INDUSTRIES_HEALTHCARE,
  MENU_ITEMS.INDUSTRIES_INSURANCE,
  MENU_ITEMS.INDUSTRIES_PHARMACEUTICAL,
];

// Default announcements menu setup
const ANNOUNCEMENTS_DEFAULT_MENU = [
  MENU_ITEMS.ANNOUNCEMENTS_NEWS,
  MENU_ITEMS.ANNOUNCEMENTS_PUBLICATIONS,
  MENU_ITEMS.ANNOUNCEMENTS_PRACTICAL_INFORMATION,
];

// Default contact us menu setup
const CONTACT_US_DEFAULT_MENU = [
  MENU_ITEMS.CONTACT_US_OUR_LOCATION,
  MENU_ITEMS.CONTACT_US_SUBSCRIBE,
];

// Exporting constants for use in other parts of the application
export {
  TOP_MENU_ITEMS,
  NAV_MENU_TYPES,
  MENU_ITEMS,
  CORP_DEFAULT_MENU,
  SERVICES_DEFAULT_MENU,
  INDUSTRIES_DEFAULT_MENU,
  ANNOUNCEMENTS_DEFAULT_MENU,
  CONTACT_US_DEFAULT_MENU,
};
