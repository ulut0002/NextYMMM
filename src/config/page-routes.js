// m for "make"
const m = (routeName) => {
  return `/[locale]/${routeName}`;
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

  corporate_authorization_documents: {
    paths: {
      en: m("corporate/authorization-documents"),
      tr: m("kurumsal/yetki-belgesi"),
    },
  },

  corporate_careers: {
    paths: {
      en: m("corporate/careers"),
      tr: m("kurumsal/kariyer"),
    },
  },

  corporate_founding_declaration: {
    paths: {
      en: m("corporate/founding-declaration"),
      tr: m("kurumsal/kurulus-bildirgesi"),
    },
  },

  corporate_get_quote: {
    paths: {
      en: m("corporate/get-quote"),
      tr: m("kurumsal/fiyat-alin"),
    },
  },

  corporate_next: {
    paths: {
      en: m("corporate/next"),
      tr: m("kurumsal/next"),
    },
  },

  corporate_our_directors: {
    paths: {
      en: m("corporate/our-directors"),
      tr: m("kurumsal/yonetecilerimiz"),
    },
  },

  corporate_our_team: {
    paths: {
      en: m("corporate/our-team"),
      tr: m("kurumsal/ekibimiz"),
    },
  },

  corporate_social_responsibility: {
    paths: {
      en: m("corporate/social-responsibility"),
      tr: m("kurumsal/sosyal-sorumluluk"),
    },
  },

  corporate_vision_mission: {
    paths: {
      en: m("corporate/vision-mission"),
      tr: m("kurumsal/vizyon-misyon"),
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
