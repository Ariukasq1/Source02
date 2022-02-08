import T from "i18n-react";

export const getData = (object, type) => {
  switch (type) {
    case "categories":
      return object && object["wp:term"] && object["wp:term"][0]
        ? object["wp:term"][0]
        : [];
    case "tags":
      return object && object["wp:term"] && object["wp:term"][1]
        ? object["wp:term"][1]
        : [];
    case "author":
      return object && object["author"] && object["author"][0]
        ? object["author"][0]
        : null;
    case "image":
      return object &&
        object["wp:featuredmedia"] &&
        object["wp:featuredmedia"][0] &&
        object["wp:featuredmedia"][0].source_url
        ? object["wp:featuredmedia"][0].source_url
        : null;
    default:
      break;
  }
};

export const prefixer = (url) => {
  if (process.env.NODE_ENV !== "production") {
    return url;
  }

  return `/${url}`;
};

<<<<<<< HEAD
export const getLangParam = () =>
  typeof window !== "undefined" && window.location.href.indexOf("=en") > -1
    ? "en"
    : "mn";

export const setUrl = (url) => {
  if (typeof window !== "undefined") {
    return (window.location.href = url);
  }

  return null;
=======
export const __ = (key, options) => {
  const translation = T.translate(key, options);

  if (!translation) {
    return "";
  }

  return translation.toString();
>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
};
