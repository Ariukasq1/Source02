import queryString from "query-string";

export const getLang = (context) => {
  let lang = getParam("lang") || "";

  if (typeof window === "undefined" && context) {
    lang = context.query.lang || "";
  }

  return lang;
};

export const getParam = (name) => {
  if (typeof window !== "undefined") {
    const parsed = queryString.parse(location.search);

    return parsed[name];
  }

  return null;
};

const config = (context) => {
  return {
    apiUrl: `https://test.nmma.co/${getLang(context)}/wp-json`,
  };
};

export const generateLink = (url) => {
  return `${url}?lang=${getLang()}`;
};

export default config;
