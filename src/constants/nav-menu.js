import { pageRoutes } from "@/config/page-routes";

const NavigationMenuTypes = {
  GRID: "grid",
  LIST: "list",
};

const DefaultMenuType = {
  type: NavigationMenuTypes.LIST,
};

// Services - Hizmetlerimiz - STARTS
const service_advisory = {
  id: "advisoryServices",
  text: "services.advisory.text",
  subtext: "services.advisory.subtext",
  ariaLabel: "services.advisory.aria-label",
  paths: pageRoutes.services_advisory.paths,
  role: "menuitem",
};

const service_audit = {
  id: "auditServices",
  text: "services.audit.text",
  subtext: "services.audit.subtext",
  ariaLabel: "services.audit.aria-label",
  paths: pageRoutes.services_audit.paths,
  role: "menuitem",
};

const service_tax = {
  id: "taxServices",
  text: "services.tax.text",
  subtext: "services.tax.subtext",
  ariaLabel: "services.tax.aria-label",
  paths: pageRoutes.services_tax.paths,
  role: "menuitem",
};
// Services - Hizmetlerimiz - ENDS

// Hakkimizda - STARTS

const corporate_authorization_documents = {
  id: "corporateAuthorizationDocuments",
  text: "corporate.authorization-documents.text",
  ariaLabel: "corporate.authorization-documents.aria-label",
  paths: pageRoutes.corporate_authorization_documents,
  role: "menuitem",
};

const corporate_careers = {
  id: "corporateCareers",
  text: "corporate.careers.text",
  ariaLabel: "corporate.careers.aria-label",
  paths: pageRoutes.corporate_careers,
  role: "menuitem",
};

const corporate_founding_declaration = {
  id: "corporateFoundingDeclaration",
  text: "corporate.founding-declaration.text",
  ariaLabel: "corporate.founding-declaration.aria-label",
  paths: pageRoutes.corporate_founding_declaration,
  role: "menuitem",
};

const corporate_get_quote = {
  id: "corporateGetQuote",
  text: "corporate.get-quote.text",
  ariaLabel: "corporate.get-quote.aria-label",
  paths: pageRoutes.corporate_get_quote,
  role: "menuitem",
};

const corporate_next = {
  id: "corporateNext",
  text: "corporate.next.text",
  ariaLabel: "corporate.next.aria-label",
  paths: pageRoutes.corporate_next,
  role: "menuitem",
};

const corporate_our_directors = {
  id: "corporateOurDirectors",
  text: "corporate.our-directors.text",
  ariaLabel: "corporate.our-directors.aria-label",
  paths: pageRoutes.corporate_our_directors,
  role: "menuitem",
};

const corporate_our_team = {
  id: "corporateOurTeam",
  text: "corporate.our-team.text",
  ariaLabel: "corporate.our-team.aria-label",
  paths: pageRoutes.corporate_our_team,
  role: "menuitem",
};

const corporate_vision_mission = {
  id: "corporateVisionMission",
  text: "corporate.vision-mission.text",
  ariaLabel: "corporate.vision-mission.aria-label",
  paths: pageRoutes.corporate_vision_mission,
  role: "menuitem",
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
  text: "services.menuText",
  header: "services.headerText",
  ariaLabel: "services.text.aria-label",
  paths: pageRoutes.services.paths,
  role: "menuitem",
  display: {
    type: NavigationMenuTypes.GRID,
    column: 2,
  },
  content: [service_advisory, service_audit, service_tax],
};

const corporate = {
  id: "corporateMenu",
  text: "corporate.menuText",
  header: "corporate.headerText",
  paths: pageRoutes.corporate.paths,
  role: "menuitem",
  display: {
    type: NavigationMenuTypes.LIST,
  },
  content: [
    corporate_next,
    corporate_vision_mission,
    corporate_authorization_documents,
    corporate_founding_declaration,
    corporate_our_directors,
    corporate_our_team,
    corporate_get_quote,
    corporate_careers,
  ],
};

const navMenuItems = {
  items: [services, corporate],
};

export { DefaultMenuType, NavigationMenuTypes };
export default navMenuItems;
