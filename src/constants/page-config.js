const routeMap = {
  tr: {},
  en: {},
  zh: {},
};

/*

const routeMap = {
  tr: {
    '/corporate/our-team': '/kurumsal/ekibimiz',
    '/company/team': '/kurumsal/ekibimiz', // English to Turkish
    // '/中文/我们的团队': '/kurumsal/ekibimiz', // Chinese to Turkish (this would be the path in Chinese characters)
    // ...other routes
  },
  en: {
    '/kurumsal/ekibimiz': '/corporate/our-team',
    // '/中文/我们的团队': '/corporate/our-team', // Chinese to English
    // ...other routes
  },
  zh: {
    '/kurumsal/ekibimiz': '/中文/我们的团队',
    '/corporate/our-team': '/中文/我们的团队', // English to Chinese
    // ...other routes
  },
  // ...add more languages if needed
};

function findRouteForLocale(currentPath, currentLocale, nextLocale) {
  const defaultPath = '/'; // Fallback to home if no route is found
  // Normalize current path to remove the current locale part
  const normalizedCurrentPath = currentPath.replace(`/${currentLocale}`, '');

  // Look up the current normalized path in the next locale's route map
  const pathMapForNextLocale = routeMap[nextLocale];
  const nextPath = pathMapForNextLocale[normalizedCurrentPath] || defaultPath;

  return `/${nextLocale}${nextPath}`;
}


*/
