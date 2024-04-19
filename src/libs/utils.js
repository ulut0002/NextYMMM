/**
 * Creates an array of React meta tag elements based on the provided metadata.
 * This function dynamically generates standard meta tags and Open Graph (og) meta tags.
 *
 * @param {Object} payload - The metadata object with optional properties.
 * @param {string} payload.title - The content for the title tag.
 * @param {string} payload.description - The content for the meta description tag.
 * @param {string} payload.keywords - The content for the meta keywords tag.
 * @param {string} payload.author - The content for the meta author tag.
 * @param {Object} payload.og - An object containing Open Graph metadata where each key is the og property name and the value is the content for that property.
 * @param {string} [payload.robots="index, follow"] - The content for the meta robots tag, defaults to "index, follow".
 * @param {string} [payload.themeColor="#ffffff"] - The content for the meta theme-color tag, defaults to "#ffffff".
 * @returns {Array} An array of JSX elements representing meta tags for use in a React head component.
 */
const createMetadata = (payload = {}) => {
  const {
    title,
    description,
    keywords,
    author,
    og = {},
    robots = "index, follow",
    themeColor = "#ffffff",
  } = payload;

  const metaTags = [
    <title key='title'>{title}</title>,
    <meta key='charset' charSet='UTF-8' />,
    <meta key='description' name='description' content={description} />,
    <meta key='keywords' name='keywords' content={keywords} />,
    <meta key='author' name='author' content={author} />,
    <meta key='robots' name='robots' content={robots} />,
    <meta key='theme-color' name='theme-color' content={themeColor} />,
    ...Object.entries(og).map(([key, value]) => (
      <meta key={`og:${key}`} property={`og:${key}`} content={value} />
    )),
  ];

  return metaTags;
};

const removeItemFromArray = (arr, which) => {
  if (!Array.isArray(arr)) return;
  if (typeof which !== "string") return;

  return arr.filter((item) => item === which);
};

const removeItemFromObject = (obj, which) => {
  if (typeof obj !== "object") return;
  if (typeof which !== "string") return;
  delete obj[which];
};

export { createMetadata, removeItemFromArray, removeItemFromObject };
