import { pageRoutes } from "../page-routes";

const service_advisory = {
  id: "advisoryServices",
  text: "services.advisory.text",
  subtext: "services.advisory.subtext",
  ariaLabel: "services.advisory.aria-label",
  paths: pageRoutes.services_advisory.paths,
};

const service_audit = {
  id: "auditServices",
  text: "services.audit.text",
  subtext: "services.audit.subtext",
  ariaLabel: "services.audit.aria-label",
  paths: pageRoutes.services_audit.paths,
};

const service_tax = {
  id: "taxServices",
  text: "services.tax.text",
  subtext: "services.tax.subtext",
  ariaLabel: "services.tax.aria-label",
  paths: pageRoutes.services_tax.paths,
};

const services = {
  id: "servicesMenu",
  text: "services.menuText",
  header: "services.headerText",
  ariaLabel: "services.text.aria-label",
  sideImage: {
    url: "",
    alt: "",
    text: "",
    link: "",
  },
  breadcrumb: [],
  paths: pageRoutes.services.paths,
  content: [[service_advisory, service_audit, service_tax]],
};

const servicesMenu = [services];

export { servicesMenu };
