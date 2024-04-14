const metadataPages = {
  home: "home",
  services: "services",
  corporate: "corporate",
  industries: "industries",
  calculators: "calculators",
  publications: "publications",
};

const metadataSetup = {
  default: {
    ns: "Metadata.default",
    fields: {
      generator: "generator",
      applicationName: "applicationName",
      creator: "creator",
      publisher: "publisher",
      keywords: "keywords",
    },
  },
  fields: {
    title: "title",
    description: "description",
    keywords: "keywords",
  },
  pages: {
    home: {
      ns: "Metadata.home",
      includeAuthors: true,
    },
    services: {
      ns: "Metadata.services",
    },
    corporate: {
      ns: "Metadata.corporate",
    },
    industries: {},
    calculators: {},
    publications: {},
  },
};

export { metadataPages, metadataSetup };
