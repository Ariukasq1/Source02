import React from "react";
import WPAPI from "wpapi";
import Config from "../../config";

export default function Portfolio({ data }) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: Config.apiUrl });

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return {
    props: { data },
  };
}
