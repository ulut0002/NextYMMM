// Import various constants and utility functions
import { Constants } from "@/constants/constants";
import { languages } from "../appConfig"; // Supported languages configuration
import {
  ANNOUNCEMENTS_DEFAULT_MENU,
  CONTACT_US_DEFAULT_MENU,
  CORP_DEFAULT_MENU,
  INDUSTRIES_DEFAULT_MENU,
  MENU_ITEMS,
  NAV_MENU_TYPES,
  SERVICES_DEFAULT_MENU,
  TOP_MENU_ITEMS,
} from "./nav-menu-constants"; // Navigation menu constants

import { removeItemFromObject } from "@/libs/utils"; // Utility for removing items from objects

const routeSetup = [];
const navigationSetup = [];
const selfUrl = Constants.SELF_URL;

const m = (routeName) => {
  return `/[locale]/${routeName}`;
};

const buildRouteSetup = () => {
  // turkish
  let corpParent = "",
    servicesParent = "",
    announcementsParent = "",
    contactUsParent = "",
    practicalInformationParent = "",
    industriesParent = "";

  corpParent = "kurumsal";
  servicesParent = "hizmetler";
  announcementsParent = "duyurular";
  contactUsParent = "iletisim";
  practicalInformationParent = "pratik-bilgiler";
  industriesParent = "sektorler";

  const tr = {
    // top nav routes
    lang: languages.tr,
    [TOP_MENU_ITEMS.CORPORATE]: m(corpParent),
    [TOP_MENU_ITEMS.SERVICES]: m(servicesParent),
    [TOP_MENU_ITEMS.ANNOUNCEMENTS]: m(announcementsParent),
    [TOP_MENU_ITEMS.CONTACT_US]: m(contactUsParent),
    [TOP_MENU_ITEMS.INDUSTRIES]: m(industriesParent),
    [TOP_MENU_ITEMS.PRACTICAL_INFORMATION]: m(practicalInformationParent),
    // corporate routes
    [MENU_ITEMS.CORP_ABOUT_US]: m(`${corpParent}/next`),
    [MENU_ITEMS.CORP_AUTHORIZATION_DOCUMENTS]: m(`${corpParent}/yetki-belgesi`),
    [MENU_ITEMS.CORP_CAREERS]: m(`${corpParent}/kariyer`),
    [MENU_ITEMS.CORP_FOUNDING_DOCUMENTS]: m(`${corpParent}/kurulus-bildirgesi`),
    [MENU_ITEMS.CORP_GET_QUOTE]: m(`${corpParent}/fiyat-alin`),
    [MENU_ITEMS.CORP_LEADERSHIP]: m(`${corpParent}/yoneticilerimiz`),
    [MENU_ITEMS.CORP_OUR_TEAM]: m(`${corpParent}/ekibimiz`),
    [MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY]: m(
      `${corpParent}/sosyal-sorumluluk`
    ),
    // services
    [MENU_ITEMS.SERVICES_TAX]: m(`${servicesParent}/vergi`),
    [MENU_ITEMS.SERVICES_ADVISORY]: m(`${servicesParent}/danismanlik`),
    [MENU_ITEMS.SERVICES_AUDIT]: m(`${servicesParent}/denetim`),
    // industries
    [MENU_ITEMS.INDUSTRIES_ENERGY]: m(`${industriesParent}/enerji`),
    [MENU_ITEMS.INDUSTRIES_FARMS]: m(`${industriesParent}/tarim`),
    [MENU_ITEMS.INDUSTRIES_HEALTHCARE]: m(`${industriesParent}/saglik`),
    [MENU_ITEMS.INDUSTRIES_PHARMACEUTICAL]: m(`${industriesParent}/ilac`),
    // announcements
    [MENU_ITEMS.ANNOUNCEMENTS_NEWS]: m(`${announcementsParent}/haberler`),
    [MENU_ITEMS.ANNOUNCEMENTS_PUBLICATIONS]: m(
      `${announcementsParent}/yayinlar`
    ),
    //contact us
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(`${contactUsParent}/adresimiz`),
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(`${contactUsParent}/email-uyelik`),
  };

  // english
  corpParent = "corporate";
  servicesParent = "services";
  announcementsParent = "announcements";
  contactUsParent = "contact-us";
  practicalInformationParent = "practical-information";
  industriesParent = "industries";

  const en = {
    // top nav routes
    lang: languages.en,
    [TOP_MENU_ITEMS.CORPORATE]: m(corpParent),
    [TOP_MENU_ITEMS.SERVICES]: m(servicesParent),
    [TOP_MENU_ITEMS.ANNOUNCEMENTS]: m(announcementsParent),
    [TOP_MENU_ITEMS.CONTACT_US]: m(contactUsParent),
    [TOP_MENU_ITEMS.INDUSTRIES]: m(industriesParent),
    [TOP_MENU_ITEMS.PRACTICAL_INFORMATION]: m(practicalInformationParent),
    // corporate routes
    [MENU_ITEMS.CORP_ABOUT_US]: m(`${corpParent}/next`),
    [MENU_ITEMS.CORP_AUTHORIZATION_DOCUMENTS]: m(
      `${corpParent}/authorization-documents`
    ),
    [MENU_ITEMS.CORP_CAREERS]: m(`${corpParent}/careers`),
    [MENU_ITEMS.CORP_FOUNDING_DOCUMENTS]: m(
      `${corpParent}/founding-declaration`
    ),
    [MENU_ITEMS.CORP_GET_QUOTE]: m(`${corpParent}/get-quote`),
    [MENU_ITEMS.CORP_LEADERSHIP]: m(`${corpParent}/our-directors`),
    [MENU_ITEMS.CORP_OUR_TEAM]: m(`${corpParent}/our-team`),
    [MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY]: m(
      `${corpParent}/social-responsibility`
    ),
    // services
    [MENU_ITEMS.SERVICES_TAX]: m(`${servicesParent}/tax`),
    [MENU_ITEMS.SERVICES_ADVISORY]: m(`${servicesParent}/advisory`),
    [MENU_ITEMS.SERVICES_AUDIT]: m(`${servicesParent}/audit`),
    // industries
    [MENU_ITEMS.INDUSTRIES_ENERGY]: m(`${industriesParent}/energy`),
    [MENU_ITEMS.INDUSTRIES_FARMS]: m(`${industriesParent}/agriculture`),
    [MENU_ITEMS.INDUSTRIES_HEALTHCARE]: m(`${industriesParent}/healthcare`),
    [MENU_ITEMS.INDUSTRIES_PHARMACEUTICAL]: m(
      `${industriesParent}/pharmaceutical`
    ),
    // announcements
    [MENU_ITEMS.ANNOUNCEMENTS_NEWS]: m(`${announcementsParent}/news`),
    [MENU_ITEMS.ANNOUNCEMENTS_PUBLICATIONS]: m(
      `${announcementsParent}/publications`
    ),
    //contact us
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(`${contactUsParent}/our-location`),
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(
      `${contactUsParent}/newsletter-subscription`
    ),
  };

  // arabic
  corpParent = "الشركات";
  servicesParent = "الخدمات";
  announcementsParent = "الإعلانات";
  contactUsParent = "اتصل-بنا";
  practicalInformationParent = "معلومات-عملية";
  industriesParent = "الصناعات";

  const ar = {
    lang: languages.ar,
    [TOP_MENU_ITEMS.CORPORATE]: m(corpParent),
    [TOP_MENU_ITEMS.SERVICES]: m(servicesParent),
    [TOP_MENU_ITEMS.ANNOUNCEMENTS]: m(announcementsParent),
    [TOP_MENU_ITEMS.CONTACT_US]: m(contactUsParent),
    [TOP_MENU_ITEMS.INDUSTRIES]: m(industriesParent),
    [TOP_MENU_ITEMS.PRACTICAL_INFORMATION]: m(practicalInformationParent),
    // corporate routes
    [MENU_ITEMS.CORP_ABOUT_US]: m(`${corpParent}/حول`),
    [MENU_ITEMS.CORP_AUTHORIZATION_DOCUMENTS]: m(`${corpParent}/وثائق-التفويض`),
    [MENU_ITEMS.CORP_CAREERS]: m(`${corpParent}/المهن`),
    [MENU_ITEMS.CORP_FOUNDING_DOCUMENTS]: m(`${corpParent}/وثائق-التأسيس`),
    [MENU_ITEMS.CORP_GET_QUOTE]: m(`${corpParent}/احصل-على-عرض`),
    [MENU_ITEMS.CORP_LEADERSHIP]: m(`${corpParent}/القيادة`),
    [MENU_ITEMS.CORP_OUR_TEAM]: m(`${corpParent}/فريقنا`),
    [MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY]: m(
      `${corpParent}/المسؤولية-الاجتماعية`
    ),
    // services
    [MENU_ITEMS.SERVICES_TAX]: m(`${servicesParent}/ضريبة`),
    [MENU_ITEMS.SERVICES_ADVISORY]: m(`${servicesParent}/استشارات`),
    [MENU_ITEMS.SERVICES_AUDIT]: m(`${servicesParent}/تدقيق`),
    // industries
    [MENU_ITEMS.INDUSTRIES_ENERGY]: m(`${industriesParent}/الطاقة`),
    [MENU_ITEMS.INDUSTRIES_FARMS]: m(`${industriesParent}/الزراعة`),
    [MENU_ITEMS.INDUSTRIES_HEALTHCARE]: m(`${industriesParent}/الرعاية-الصحية`),
    [MENU_ITEMS.INDUSTRIES_PHARMACEUTICAL]: m(`${industriesParent}/الأدوية`),
    // announcements
    [MENU_ITEMS.ANNOUNCEMENTS_NEWS]: m(`${announcementsParent}/أخبار`),
    [MENU_ITEMS.ANNOUNCEMENTS_PUBLICATIONS]: m(
      `${announcementsParent}/منشورات`
    ),
    //contact us
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(`${contactUsParent}/موقعنا`),
    [MENU_ITEMS.CONTACT_US_OUR_LOCATION]: m(
      `${contactUsParent}/الاشتراك-في-النشرة-الإخبارية`
    ),
  };

  routeSetup.push(en);
  routeSetup.push(tr);
  routeSetup.push(ar);
};

const getRoute = (locale, which) => {
  if (typeof locale !== "string") return selfUrl;
  if (typeof which !== "string") return selfUrl;
  const routes = routeSetup.find(
    (r) => r.lang.code.toLowerCase() === locale.toLowerCase()
  );

  return routes ? routes[which] || selfUrl : selfUrl;
};

const buildMenuSetup = () => {
  let trCorpMenu, enCorpMenu, arCorpMenu;
  let trServicesMenu, enServicesMenu, arServicesMenu;
  let trIndustriesMenu, enIndustriesMenu, arIndustriesMenu;
  let trAnnouncementsMenu, enAnnouncementsMenu, arAnnouncementsMenu;
  let trContactUsMenu, enContactUsMenu, arContactUsMenu;
  let currentLanguage, currentLanguageCode;
  trCorpMenu = CORP_DEFAULT_MENU;
  enCorpMenu = CORP_DEFAULT_MENU;
  arCorpMenu = CORP_DEFAULT_MENU;
  enCorpMenu = removeItemFromObject(enCorpMenu, MENU_ITEMS.CORP_CAREERS);
  enCorpMenu = removeItemFromObject(
    enCorpMenu,
    MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY
  );
  arCorpMenu = removeItemFromObject(arCorpMenu, MENU_ITEMS.CORP_CAREERS);
  arCorpMenu = removeItemFromObject(
    enCorpMenu,
    MENU_ITEMS.CORP_SOCIAL_RESPONSIBILITY
  );
  trServicesMenu = SERVICES_DEFAULT_MENU;
  enServicesMenu = SERVICES_DEFAULT_MENU;
  arServicesMenu = SERVICES_DEFAULT_MENU;
  trIndustriesMenu = INDUSTRIES_DEFAULT_MENU;
  enIndustriesMenu = INDUSTRIES_DEFAULT_MENU;
  arIndustriesMenu = INDUSTRIES_DEFAULT_MENU;
  trAnnouncementsMenu = ANNOUNCEMENTS_DEFAULT_MENU;
  enAnnouncementsMenu = ANNOUNCEMENTS_DEFAULT_MENU;
  arAnnouncementsMenu = ANNOUNCEMENTS_DEFAULT_MENU;
  trContactUsMenu = CONTACT_US_DEFAULT_MENU;
  enContactUsMenu = CONTACT_US_DEFAULT_MENU;
  arContactUsMenu = CONTACT_US_DEFAULT_MENU;
  enContactUsMenu = removeItemFromObject(
    enContactUsMenu,
    MENU_ITEMS.CONTACT_US_SUBSCRIBE
  );
  arContactUsMenu = removeItemFromObject(
    arContactUsMenu,
    MENU_ITEMS.CONTACT_US_SUBSCRIBE
  );
  currentLanguage = languages.tr;
  currentLanguageCode = languages.tr.code;
  const turkishMenu = {
    lang: currentLanguage,
    nav: [
      // corp-menu
      {
        code: TOP_MENU_ITEMS.CORPORATE,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.CORPORATE),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trCorpMenu,
        },
      },
      //services menu
      {
        code: MENU_ITEMS.SERVICES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.SERVICES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trServicesMenu,
        },
      },
      {
        code: MENU_ITEMS.INDUSTRIES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.INDUSTRIES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trIndustriesMenu,
        },
      },
      {
        code: MENU_ITEMS.ANNOUNCEMENTS,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trAnnouncementsMenu,
        },
      },
      {
        code: MENU_ITEMS.CONTACT_US,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trContactUsMenu,
        },
      },
    ],
  };
  currentLanguage = languages.en;
  currentLanguageCode = languages.en.code;
  const englishMenu = {
    lang: currentLanguage,
    nav: [
      // corp-menu
      {
        code: TOP_MENU_ITEMS.CORPORATE,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.CORPORATE),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trCorpMenu,
        },
      },
      //services menu
      {
        code: MENU_ITEMS.SERVICES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.SERVICES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trServicesMenu,
        },
      },
      {
        code: MENU_ITEMS.INDUSTRIES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.INDUSTRIES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trIndustriesMenu,
        },
      },
      {
        code: MENU_ITEMS.ANNOUNCEMENTS,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trAnnouncementsMenu,
        },
      },
      {
        code: MENU_ITEMS.CONTACT_US,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trContactUsMenu,
        },
      },
    ],
  };
  currentLanguage = languages.ar;
  currentLanguageCode = languages.ar.code;
  const arabicMenu = {
    lang: currentLanguage,
    nav: [
      // corp-menu
      {
        code: TOP_MENU_ITEMS.CORPORATE,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.CORPORATE),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trCorpMenu,
        },
      },
      //services menu
      {
        code: MENU_ITEMS.SERVICES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.SERVICES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trServicesMenu,
        },
      },
      {
        code: MENU_ITEMS.INDUSTRIES,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.INDUSTRIES),
        type: NAV_MENU_TYPES.GRID,
        content: {
          image: {},
          items: trIndustriesMenu,
        },
      },
      {
        code: MENU_ITEMS.ANNOUNCEMENTS,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trAnnouncementsMenu,
        },
      },
      {
        code: MENU_ITEMS.CONTACT_US,
        route: getRoute(currentLanguageCode, TOP_MENU_ITEMS.ANNOUNCEMENTS),
        type: NAV_MENU_TYPES.LIST,
        content: {
          image: {},
          items: trContactUsMenu,
        },
      },
    ],
  };
  const allLanguages = [];
  allLanguages.push(turkishMenu);
  allLanguages.push(englishMenu);
  allLanguages.push(arabicMenu);
  // Add other new languages if necessary
  navigationSetup.push(turkishMenu);
  navigationSetup.push(englishMenu);
  navigationSetup.push(arabicMenu);
  Object.keys(languages).forEach((key) => {
    allLanguages.forEach((item) => {
      if (item.lang === key) {
        if (item.lang.enabled) {
          navigationSetup.push(item);
        }
      }
    });
  });
};

buildRouteSetup();
buildMenuSetup();

export { navigationSetup, routeSetup };
