import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Contact({ contact }) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    props: { contact },
  };
}
