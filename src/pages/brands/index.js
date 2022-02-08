import React from "react";
import WPAPI from "wpapi";
import Config from "../../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Brands({ data, childCats }) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const catId = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(20)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  return {
    props: { data, childCats },
  };
}
