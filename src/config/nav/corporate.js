import { pageRoutes } from "../page-routes";

const corporate_authorization_documents = {
  id: "corporateAuthorizationDocuments",
  text: "corporate.authorization-documents.text",
  ariaLabel: "corporate.authorization-documents.aria-label",
  paths: pageRoutes.corporate_authorization_documents,
};

const corporate_careers = {
  id: "corporateCareers",
  text: "corporate.careers.text",
  ariaLabel: "corporate.careers.aria-label",
  paths: pageRoutes.corporate_careers,
};

const corporate_founding_declaration = {
  id: "corporateFoundingDeclaration",
  text: "corporate.founding-declaration.text",
  ariaLabel: "corporate.founding-declaration.aria-label",
  paths: pageRoutes.corporate_founding_declaration,
};

const corporate_get_quote = {
  id: "corporateGetQuote",
  text: "corporate.get-quote.text",
  ariaLabel: "corporate.get-quote.aria-label",
  paths: pageRoutes.corporate_get_quote,
};

const corporate_next = {
  id: "corporateNext",
  text: "corporate.next.text",
  ariaLabel: "corporate.next.aria-label",
  paths: pageRoutes.corporate_next,
};

const corporate_our_directors = {
  id: "corporateOurDirectors",
  text: "corporate.our-directors.text",
  ariaLabel: "corporate.our-directors.aria-label",
  paths: pageRoutes.corporate_our_directors,
};

const corporate_our_team = {
  id: "corporateOurTeam",
  text: "corporate.our-team.text",
  ariaLabel: "corporate.our-team.aria-label",
  paths: pageRoutes.corporate_our_team,
};

const corporate_vision_mission = {
  id: "corporateVisionMission",
  text: "corporate.vision-mission.text",
  ariaLabel: "corporate.vision-mission.aria-label",
  paths: pageRoutes.corporate_vision_mission,
};

const corporate = {
  id: "corporateMenu",
  text: "corporate.menuText",
  header: "corporate.headerText",
  paths: pageRoutes.corporate.paths,
  sideImage: {
    url: "",
    alt: "",
    text: "",
    link: "",
  },
  breadcrumb: [],
  content: [
    [
      corporate_next,
      corporate_vision_mission,
      corporate_authorization_documents,
      corporate_founding_declaration,
      corporate_our_directors,
      corporate_our_team,
      corporate_get_quote,
      corporate_careers,
    ],
  ],
};

export { corporate };
