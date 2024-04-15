// m for "make"
const m = (routeName) => {
  return `./[locale]/${routeName}`;
};

const pageRoutes = {
  corporate: {
    paths: {
      en: m("corporate"),
      tr: m("kurumsal"),
    },
  },

  services: {
    paths: {
      en: m("services"),
      tr: m("hizmetlerimiz"),
    },
  },

  services_audit: {
    paths: {
      en: m("services/audit"),
      tr: m("hizmetlerimiz/denetim"),
    },
  },

  services_tax: {
    paths: {
      en: m("services/tax"),
      tr: m("hizmetlerimiz/vergi"),
    },
  },

  services_advisory: {
    paths: {
      en: m("services/advisory"),
      tr: m("hizmetlerimiz/danismanlik"),
    },
  },
};

export { pageRoutes };
