// Services - Hizmetlerimiz - STARTS
const service_advisory = {
  id: "advisoryServices",
  text: "MENUITEM_SERVICES_ADVISORY",
  url: "../app/[locale]/hizmetler/danismanlik",
  icon: "",
  tooltip: "MENUITEM_SERVICES_ADVISORY_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_SERVICES_ADVISORY_ARIA",
  submenu: [],
};

const service_audit = {
  id: "auditServices",
  text: "MENUITEM_SERVICES_AUDIT",
  url: "../app/[locale]/hizmetler/denetim",
  icon: "",
  tooltip: "MENUITEM_SERVICES_AUDIT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_SERVICES_AUDIT_ARIA",
  submenu: [],
};

const service_tax = {
  id: "taxServices",
  text: "MENUITEM_SERVICES_TAX",
  url: "../app/[locale]/hizmetler/vergi",
  icon: "",
  tooltip: "MENUITEM_SERVICES_TAX_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_SERVICES_TAX_ARIA",
  submenu: [],
};
// Services - Hizmetlerimiz - ENDS

const corporate_next = {
  id: "corporateNext",
  text: "MENUITEM_CORPORATE_NEXT",
  url: "../app/[locale]/kurumsal/next",
  icon: "",
  tooltip: "MENUITEM_CORPORATE_NEXT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_CORPORATE_NEXT_ARIA",
  submenu: [],
};

const corporate_vision_mission = {
  id: "corporateMissionVision",
  text: "MENUITEM_CORPORATE_MISSION_VISION",
  url: "../app/[locale]/kurumsal/vizyon-misyon",
  icon: "",
  tooltip: "MENUITEM_CORPORATE_MISSION_VISION_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENUITEM_CORPORATE_MISSION_VISION_ARIA",
  submenu: [],
};

const corporate_founding_documents = {
  id: "corporateFoundingDocuments",
  text: "CORPORATE_FOUNDING_DOCUMENTS",
  url: "../app/[locale]/kurumsal/kurulus-bildirgesi",
  icon: "",
  tooltip: "CORPORATE_FOUNDING_DOCUMENTS_TOOLTIP",
  role: "menuitem",
  ariaLabel: "CORPORATE_FOUNDING_DOCUMENTS_ARIA",
  submenu: [],
};

const services = {
  id: "servicesMenu",
  text: "MENU_SERVICE_TEXT",
  url: "../app/[locale]/hizmetler",
  icon: "",
  tooltip: "MENU_SERVICE_TEXT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENU_SERVICE_TEXT_ARIA",
  submenus: [service_advisory, service_audit, service_tax],
};

const corporate = {
  id: "corporateMenu",
  text: "MENU_CORPORATE_TEXT",
  url: "../app/[locale]/kurumsal",
  icon: "",
  tooltip: "MENU_CORPORATE_TEXT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "MENU_CORPORATE_TEXT_ARIA",
  submenus: [
    corporate_next,
    corporate_vision_mission,
    corporate_founding_documents,
  ],
};

const navMenuItems = {
  items: [services, corporate],
};

export default navMenuItems;
