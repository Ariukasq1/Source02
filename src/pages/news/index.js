import React from "react";
import WPAPI from "wpapi";
import Config from "../../config";

export default function News({ data, childCats }) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: Config.apiUrl });

  const catId = await wp
    .categories()
    .slug(`news`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  return {
    props: { data, childCats },
  };
}
