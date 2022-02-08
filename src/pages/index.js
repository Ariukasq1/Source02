import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Index({}) {
  return <div className="page"></div>;
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
