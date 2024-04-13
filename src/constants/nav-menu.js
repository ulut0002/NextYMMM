// Services - Hizmetlerimiz - STARTS
const service_advisory = {
  id: "advisoryServices",
  text: "SERVICE_ADVISORY",
  url: "../app/[locale]/hizmetler/danismanlik",
  icon: "",
  tooltip: "SERVICE_ADVISORY_TOOLTIP",
  role: "menuitem",
  ariaLabel: "SERVICE_ADVISORY_ARIA",
  submenu: [],
};

const service_audit = {
  id: "auditServices",
  text: "SERVICE_AUDIT",
  url: "../app/[locale]/hizmetler/denetim",
  icon: "",
  tooltip: "SERVICE_AUDIT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "SERVICE_AUDIT_ARIA",
  submenu: [],
};

const service_tax = {
  id: "taxServices",
  text: "SERVICE_TAX",
  url: "../app/[locale]/hizmetler/vergi",
  icon: "",
  tooltip: "SERVICE_TAX_TOOLTIP",
  role: "menuitem",
  ariaLabel: "SERVICE_TAX_ARIA",
  submenu: [],
};
// Services - Hizmetlerimiz - ENDS

const corporate_next = {
  id: "corporateNext",
  text: "CORPORATE_NEXT",
  url: "../app/[locale]/kurumsal/next",
  icon: "",
  tooltip: "CORPORATE_NEXT_TOOLTIP",
  role: "menuitem",
  ariaLabel: "CORPORATE_NEXT_ARIA",
  submenu: [],
};

const corporate_vision_mission = {
  id: "corporateMissionVision",
  text: "CORPORATE_MISSION_VISION",
  url: "../app/[locale]/kurumsal/vizyon-misyon",
  icon: "",
  tooltip: "CORPORATE_MISSION_VISION_TOOLTIP",
  role: "menuitem",
  ariaLabel: "CORPORATE_MISSION_VISION_ARIA",
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

const services = [service_advisory, service_audit, service_tax];

const corporate = [
  corporate_next,
  corporate_vision_mission,
  corporate_founding_documents,
];
const menu = {
  items: [services, corporate],
};
