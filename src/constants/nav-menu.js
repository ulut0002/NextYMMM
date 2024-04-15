import { pageRoutes } from "@/config/page-routes";

// Services - Hizmetlerimiz - STARTS
const service_advisory = {
  id: "advisoryServices",
  text: "services.advisory.text",
  subtext: "services.advisory.subtext",
  ariaLabel: "services.advisory.ariaLabel",
  paths: pageRoutes.services_advisory.paths,
  role: "menuitem",
};

const service_audit = {
  id: "auditServices",
  text: "services.audit.text",
  subtext: "services.audit.subtext",
  ariaLabel: "services.audit.ariaLabel",
  paths: pageRoutes.services_audit.paths,
  role: "menuitem",
};

const service_tax = {
  id: "taxServices",
  text: "services.tax.text",
  subtext: "services.tax.subtext",
  ariaLabel: "services.tax.ariaLabel",
  paths: pageRoutes.services_tax.paths,
  role: "menuitem",
};
// Services - Hizmetlerimiz - ENDS

const corporate_next = {
  id: "corporateNext",
  textId: "MENUITEM_CORPORATE_NEXT",
  url: "/[locale]/kurumsal/next",
  icon: "",
  tooltip: "MENUITEM_CORPORATE_NEXT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_CORPORATE_NEXT_ARIA",
  submenu: [],
};

const corporate_vision_mission = {
  id: "corporateMissionVision",
  textId: "MENUITEM_CORPORATE_MISSION_VISION",
  url: "../app/[locale]/kurumsal/vizyon-misyon",
  icon: "",
  tooltip: "MENUITEM_CORPORATE_MISSION_VISION_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_CORPORATE_MISSION_VISION_ARIA",
  submenu: [],
};

const corporate_founding_documents = {
  id: "corporateFoundingDocuments",
  textId: "CORPORATE_FOUNDING_DOCUMENTS",
  url: "../app/[locale]/kurumsal/kurulus-bildirgesi",
  icon: "",
  tooltip: "CORPORATE_FOUNDING_DOCUMENTS_TOOLTIP",
  role: "menuitem",
  ariaLabel: "CORPORATE_FOUNDING_DOCUMENTS_ARIA",
  submenu: [],
};

const services = {
  id: "servicesMenu",
  textId: "services",
  // url: "/[locale]/hizmetler",
  url: {
    en: "/[locale]/services",
    tr: "/[locale]/hizmetler",
  },
  icon: "",

  role: "menuitem",
  submenus: [service_advisory, service_audit, service_tax],
};

const corporate = {
  id: "corporateMenu",
  textId: "corporate",
  url: {
    en: "/[locale]/corporate",
    tr: "/[locale]/kurumsal",
  },
  icon: "",
  role: "menuitem",
  submenus: [
    corporate_next,
    corporate_vision_mission,
    corporate_founding_documents,
  ],
};

const navMenuItems = {
  ns: "Navigation",
  items: [services, corporate],
};

export default navMenuItems;
