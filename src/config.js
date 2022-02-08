<<<<<<< HEAD
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
=======
import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const Config = {
  apiUrl: "https://source.mn/wp/wp-json",
  menuUrl: "https://source.mn/wp/wp-json/menus/v1/menus",
>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
};

export default config;
