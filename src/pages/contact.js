import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

export default function Contact({}) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: Config.apiUrl });

  return {
    props: {},
  };
}
